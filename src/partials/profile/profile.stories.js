import React from 'react';
import { storiesOf } from '@storybook/react';
import Profile from './index';

storiesOf('Components/Layout/Profile', module).add('default', profileDefault);

function profileDefault() {
    return <Profile />;
}
