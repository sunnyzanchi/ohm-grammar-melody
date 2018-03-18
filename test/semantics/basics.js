const { test } = require('ava');
const { melody, semantics } = require('../_helpers');

test('note no octave', async t => {
  const res = melody.match(`
    c
  `);

  const result = semantics(res).eval();
  console.log('RESULT=====', result);

  t.pass();
});

test('note', async t => {
  const res = melody.match(`
    a11
  `);

  const result = semantics(res).eval();
  console.log('RESULT=====', result);

  t.pass();
});

test('note sequence', async t => {
  const res = melody.match(`
    a4 b6 c11
  `);

  const result = semantics(res).eval();
  console.log('RESULT=====', result);

  t.pass();
});

test('chord', async t => {
  const res = melody.match(`
    a4ba
  `);

  const result = semantics(res).eval();
  console.log('RESULT=====', result);

  t.pass();
});
