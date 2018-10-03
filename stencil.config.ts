import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  plugins: [
    sass({
      injectGlobalPaths: [
  './node_modules/materialize-css/sass/materialize.scss'
]})
  ]
};
