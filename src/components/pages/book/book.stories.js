import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';
import BookIndexTemplate from './book-index-template';
import BookTemplate from './book-template';
import { wrapperStyles } from '../../../scss/page/styles.module.scss';

storiesOf('Templates/Book', module).add('book index', bookIndex);
storiesOf('Templates/Book', module).add('book page', bookPage);

function bookIndex() {
    const props = {
        title: faker.company.catchPhrase(),
        summary: faker.hacker.phrase(),
    };

    return (
        <section className={wrapperStyles}>
            <BookIndexTemplate {...props} />
        </section>
    );
}

function bookPage() {
    const props = {
        title: faker.company.catchPhrase(),
        author: {
            name: faker.name.findName(),
            url: faker.random.boolean() ? faker.internet.url() : null,
        },
        image: `https://picsum.photos/id/600/900/${faker.random.number(100)}`,
        summary: faker.hacker.phrase(),
        content: faker.lorem
            .paragraphs(10)
            .split('\n')
            .map(p => <p>{p}</p>),
    };

    return (
        <section className={wrapperStyles}>
            <BookTemplate {...props} />
        </section>
    );
}
