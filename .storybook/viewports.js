import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const desktop = {
    name: 'Responsive',
    styles: {
        position: 'absolute',
        top: '10px',
        bottom: '10px',
        left: '10px',
        right: '10px',
    },
    type: 'desktop',
};

export default {
    viewport: {
        defaultViewport: 'iphonex',
        viewports: {
            ...INITIAL_VIEWPORTS,
        },
    },
};
