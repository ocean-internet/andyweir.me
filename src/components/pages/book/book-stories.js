import React from 'react';
import faker from 'faker';
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

function generateBookSummaryProps() {
    return {
        id: faker.random.uuid(),
        fields: {
            slug: faker.lorem.slug(),
        },
        frontmatter: {
            title: faker.company.catchPhrase(),
            author: {
                name: faker.name.findName(),
                url: faker.random.boolean() ? faker.internet.url() : null,
            },
            image: `https://picsum.photos/id/${faker.random.number(100)}/516/792/`,
        },
    };
}

function generateBookProps() {
    return {
        title: faker.company.catchPhrase(),
        author: {
            name: faker.name.findName(),
            url: faker.random.boolean() ? faker.internet.url() : null,
        },
        image: `https://picsum.photos/id/${faker.random.number(100)}/516/792/`,
        summary: faker.hacker.phrase(),
        content: faker.lorem
            .paragraphs(10)
            .split('\n')
            .map(p => <p>{p}</p>),
    };
}
