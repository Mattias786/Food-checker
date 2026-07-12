import { test } from 'node:test';
import assert from 'node:assert/strict';
import { computeVerdict } from './verdict.js';

const warburtonsWholemealMedium = {
  fibrePer100g: 6.4,
  isHighFodmap: true,
};

test('high-fibre profile: fibre >= 6g/100g gives a good verdict citing the claim threshold', () => {
  const result = computeVerdict(warburtonsWholemealMedium, 'high-fibre');
  assert.equal(result.verdict, 'good');
  assert.match(result.reasoning, /6g\/100g/);
});

test('high-fibre profile: fibre < 6g/100g gives an avoid/neutral verdict stating why', () => {
  const lowFibreProduct = { fibrePer100g: 5.9, isHighFodmap: false };
  const result = computeVerdict(lowFibreProduct, 'high-fibre');
  assert.equal(result.verdict, 'avoid');
  assert.match(result.reasoning, /below/);
});

test('high-fibre profile: fibre exactly at 6g/100g boundary is inclusive (matches documented threshold direction)', () => {
  const boundaryProduct = { fibrePer100g: 6, isHighFodmap: false };
  const result = computeVerdict(boundaryProduct, 'high-fibre');
  assert.equal(result.verdict, 'good');
});

test('low-FODMAP profile: product on Monash high-FODMAP list gives an avoid verdict with the dose caveat', () => {
  const result = computeVerdict(warburtonsWholemealMedium, 'low-fodmap');
  assert.equal(result.verdict, 'avoid');
  assert.match(result.reasoning, /typical servings/);
  assert.doesNotMatch(result.reasoning, /^avoid$/i);
});

test('low-FODMAP profile: product not on the high-FODMAP list gives a good verdict', () => {
  const lowFodmapProduct = { fibrePer100g: 3, isHighFodmap: false };
  const result = computeVerdict(lowFodmapProduct, 'low-fodmap');
  assert.equal(result.verdict, 'good');
});

test('unknown profile value throws a clear error', () => {
  assert.throws(
    () => computeVerdict(warburtonsWholemealMedium, 'longevity'),
    /Unknown profile/
  );
});
