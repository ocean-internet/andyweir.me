import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import faker from 'faker';
import moment from 'moment';
import { wrapperStyles } from '../../../scss/page/styles.module.scss';
import PostNavigation from './index';

storiesOf('Components/Navigation/Post Navigation', module)
    .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
    .add('with Prev Post', withPrevPost)
    .add('with Next Post', withNextPost)
    .add('with Prev & Next Post', withPrevNextPost)
    .add('with date string', withDateString);

function withPrevPost() {
    const props = {
        prev: generateLink(),
    };

    return showWith(props);
}
function withNextPost() {
    const props = {
        next: generateLink(),
    };

    return showWith(props);
}
function withPrevNextPost() {
    const props = {
        prev: generateLink(),
        next: generateLink(),
    };

    return showWith(props);
}

function withDateString() {
    const props = {
        prev: generateLink(true),
        next: generateLink(true),
    };

    return showWith(props);
}

function showWith(props) {
    return (
        <section className={wrapperStyles}>
            <article>
                <h1>{faker.lorem.sentence()}</h1>
                {faker.lorem
                    .paragraphs()
                    .split('\n')
                    .map(paragraph => (
                        <p>{paragraph}</p>
                    ))}
            </article>
            <PostNavigation {...props} />
        </section>
    );
}

function generateLink(showDateString) {
    const date = faker.date.past();
    const dateString = moment(date).fromNow();

    const link = {
        title: faker.lorem.sentence(),
        slug: faker.lorem.slug(),
    };

    return showDateString ? { ...link, dateString } : { ...link, date };
}
