const { test } = require('ava');
const { valid } = require('./_helpers');

test('Concurrent sequences can be expressed', t => {
  t.true(valid('[c; e; g]'));
});

test('Concurrent sequences can have different durations', t => {
  t.true(valid(`[
    c;
    e, g b,;
    g,
  ]`));
});

test('Concurrent sequences can contain chords', t => {
  t.true(valid('[ ceg fac; g c g b ]'));
});
