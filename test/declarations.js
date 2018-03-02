const { test } = require('ava');
const { valid } = require('./_helpers');

test('Block declarations can be made', t => {
  t.true(valid(`$chorus {
    ceg fac gbd
  }`));
});

test('Block declarations can be used in sequences', t => {
  t.true(valid(`$bridge {
    c g c g
  }

  ca ea $bridge
  `));
});

test('Block declarations can be used in other block declarations', t => {
  t.true(valid(`$hook {
    c e g e
  }

  $chorus {
    d3 $hook fac
  }

  $chorus
  `));
});
