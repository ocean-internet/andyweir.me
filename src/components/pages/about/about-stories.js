import React from 'react';
import faker from 'faker';
import AboutTemplate from './about-template';
import { wrapperStyles } from '../../../scss/page/styles.module.scss';

export function aboutTemplate() {
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
