import PropTypes from 'prop-types';
import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';
import AboutTemplate from './about-template';
import { wrapperStyles } from '../../scss/page/styles.module.scss';

storiesOf('Templates/Pages', module).add('about page', aboutTemplate);

function aboutTemplate() {
    const props = {
        title: faker.company.catchPhrase(),
        summary: faker.hacker.phrase(),
        content: faker.lorem
            .paragraphs(10)
            .split('\n')
            .map(p => <p>{p}</p>),
    };

    return (
        <section className={wrapperStyles}>
            <AboutTemplate {...props} />
        </section>
    );
}
