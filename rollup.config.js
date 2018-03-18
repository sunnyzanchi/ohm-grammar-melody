import inlinejs from 'rollup-plugin-inline-js';

export default {
  external: ['ohm-js'],
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
  plugins: [inlinejs()],
};
