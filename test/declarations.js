const { test } = require('ava');
const { valid } = require('./_helpers');

test('Block declarations can be made', t => {
  t.true(valid(`chorus {
    ceg fac gbd
  }`));
});
