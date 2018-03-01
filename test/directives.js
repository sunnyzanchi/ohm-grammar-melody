const { test } = require('ava');
const { valid } = require('./_helpers');

test('Directives can be given', t => {
  t.true(valid('# key = e'));
});

test('Multiple directives can be given', t => {
  t.true(valid(`
    # key = a'
    # some = thing
    # bpm = 140
  `));
});

// Directives are block-scoped
test('Directives can be given inside of blocks', t => {
  t.true(valid(`
    bridge {
      # key = d,

      d e g e
    }
  `));
});
