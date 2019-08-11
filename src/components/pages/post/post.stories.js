import React from 'react';
import faker from 'faker';
import { generatePostProps, generatePostSummaryProps } from '../../../lib/story-lib';
import PostIndexTemplate from './post-index-template';
import PostTemplate from './post-template';
import { wrapperStyles } from '../../../scss/layout/styles.module.scss';

export function postIndex() {
    const props = {
        title: faker.company.catchPhrase(),
        summary: faker.hacker.phrase(),
        posts: generatePosts(),
    };

    return (
        <section className={wrapperStyles}>
            <PostIndexTemplate {...props} />
        </section>
    );
}

export function postPage() {
    const props = generatePostProps();

    return (
        <section className={wrapperStyles}>
            <PostTemplate {...props} />
        </section>
    );
}

function generatePosts() {
    const number = faker.random.number({ min: 2, max: 10 });

    return Array(number)
        .fill(null)
        .map(() => generatePostSummaryProps());
}
