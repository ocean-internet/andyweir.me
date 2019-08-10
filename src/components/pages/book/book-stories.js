import React from 'react';
import faker from 'faker';
import { generateBookProps, generateBookSummaryProps } from '../../../lib/story-lib';
import BookIndexTemplate from './book-index-template';
import BookTemplate from './book-template';
import { wrapperStyles } from '../../../scss/page/styles.module.scss';

export function bookIndex() {
    const props = {
        title: faker.company.catchPhrase(),
        summary: faker.hacker.phrase(),
        group: generateBooks(),
    };

    return (
        <section className={wrapperStyles}>
            <BookIndexTemplate {...props} />
        </section>
    );
}

export function bookPage() {
    const props = generateBookProps();

    return (
        <section className={wrapperStyles}>
            <BookTemplate {...props} />
        </section>
    );
}

function generateBooks() {
    const number = faker.random.number({ min: 2, max: 10 });

    return Array(number)
        .fill(null)
        .map(() => ({ node: generateBookSummaryProps() }));
}
