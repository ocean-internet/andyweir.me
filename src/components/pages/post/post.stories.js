import moment from 'moment';
import React from 'react';
import faker from 'faker';
import PostIndexTemplate from './post-index-template';
import PostTemplate from './post-template';
import { wrapperStyles } from '../../../scss/page/styles.module.scss';

export function postIndex() {
    const props = {
        title: faker.company.catchPhrase(),
        summary: faker.hacker.phrase(),
        group: generatePosts(),
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
        .map(() => ({ node: generatePostSummaryProps() }));
}

function generatePostSummaryProps() {
    return {
        id: faker.random.uuid(),
        fields: {
            slug: faker.lorem.slug(),
        },
        frontmatter: {
            title: faker.company.catchPhrase(),
            dateString: moment(faker.date.past()).fromNow(),
            image: `https://picsum.photos/id/${faker.random.number(100)}/900/600/`,
            summary: faker.hacker.phrase(),
        },
    };
}

function generatePostProps() {
    return {
        title: faker.company.catchPhrase(),
        dateString: moment(faker.date.past()).fromNow(),
        image: `https://picsum.photos/id/${faker.random.number(100)}/900/600/`,
        summary: faker.hacker.phrase(),
        content: faker.lorem
            .paragraphs(10)
            .split('\n')
            .map(p => <p>{p}</p>),
    };
}
