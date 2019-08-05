import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';
import PostIndexTemplate from './post-index-template';
import PostTemplate from './post-template';
import { wrapperStyles } from '../../../scss/page/styles.module.scss';

storiesOf('Templates/Post', module).add('post index', bookIndex);
storiesOf('Templates/Post', module).add('post page', postPage);

function bookIndex() {
    const props = {
        title: faker.company.catchPhrase(),
        summary: faker.hacker.phrase(),
    };

    return (
        <section className={wrapperStyles}>
            <PostIndexTemplate {...props} />
        </section>
    );
}
function postPage() {
    const props = {
        title: faker.company.catchPhrase(),
        image: `https://picsum.photos/id/900/600/${faker.random.number(100)}`,
        summary: faker.hacker.phrase(),
        content: faker.lorem
            .paragraphs(10)
            .split('\n')
            .map(p => <p>{p}</p>),
    };

    return (
        <section className={wrapperStyles}>
            <PostTemplate {...props} />
        </section>
    );
}
