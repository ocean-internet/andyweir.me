import { configure } from '@storybook/react';
import { addParameters } from '@storybook/react';
import viewports from './viewports';
import '../src/scss/app.scss';

addParameters(viewports);

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
