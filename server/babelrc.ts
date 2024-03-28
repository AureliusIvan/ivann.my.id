import path from 'path';
import tsConfig from './tsconfig.json';

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-typescript'],
  plugins: [
    'model-resolver',
    {
      'root': path.resolve(tsConfig.compilerOptions.baseUrl),
    },
  ],
};
