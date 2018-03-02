const { test } = require('ava');
const { valid } = require('./_helpers');

test('Essentially the simplest possible melody program - a single note', t => {
  t.true(valid('c'));
});

test('A note can have an octave designation after it', t => {
  t.true(valid('a5'));
});

// WIP: Still not totally sure of the actual designation
test('A note can be flat', t => {
  t.true(valid('a,'));
});

// WIP: Still not totally sure of the actual designation
test('A note can be sharp', t => {
  t.true(valid('f\''));
});

test('A note can be natural', t => {
  t.true(valid('c-'));
});
