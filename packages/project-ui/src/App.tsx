import {render} from 'react-dom';
import {simpleInertiaApp} from '@lifespikes/js-beam';
import React from 'react';

void simpleInertiaApp({
  pages: import.meta.glob('./pages/**/*.tsx'),
  setup ({ el, App, props: setupProps }) {
    render(<App {...setupProps} />, el);
  }
})
