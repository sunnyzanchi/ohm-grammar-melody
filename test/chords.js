const { test } = require('ava');
const { valid } = require('./_helpers');

test('Chords can be defined as a sequence of notes with no spaces', t => {
  t.true(valid('ced'));
});

test('A note in a chord can have an octave designation', t => {
  t.true(valid('d2gb'));
});

test(
  'Subsequent notes in a chord can have overriding octave designations',
  t => {
    // Without the 6 after c, this would be the same as f4a4c5
    // Since c is lower than and after f, it would implicitly go to the next octave
    t.true(valid('f4ac6'));
  });

test('A chord can have a flat note', t => {
  t.true(valid('e,gb,'));
});

test('A chord can have a sharp note', t => {
  t.true(valid('ac\'e'));
});

test('A sequence of chords (a nice 1 4 5)', t => {
  t.true(valid('ceg fac gbd'));
});
