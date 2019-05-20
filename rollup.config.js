import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/lib/index.js',
  output: {
    file: 'build/index.js',
    format: 'cjs'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    resolve(),
    commonjs()
  ],
  external: ['react', 'react-dom', 'prop-types']
};
