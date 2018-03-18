import inlinejs from 'rollup-plugin-inline-js';
import babel from 'rollup-plugin-babel';

export default {
  external: ['ohm-js'],
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
  plugins: [
    inlinejs(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
