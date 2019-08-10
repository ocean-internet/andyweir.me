import React from 'react';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import faker from 'faker';
import { generateBookSummaryProps, generatePostSummaryProps, generateTalkSummaryProps } from '../../../lib/story-lib';
import { wrapperStyles } from '../../../scss/page/styles.module.scss';
import BookSummary from '../../pages/book/book-summary';
import PostSummary from '../../pages/post/post-summary';
import TalkSummary from '../../pages/talk/talk-summary';
import PostNavigation from './index';

storiesOf('Components/Navigation/Post Navigation', module)
    .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
    .add('with post links', withPostLinks)
    .add('with talk links', withTalkLinks)
    .add('with book links', withBookLinks);

function withPostLinks() {
    const props = {
        prev: () => <PostSummary isPrev {...generatePostSummaryProps()} />,
        next: () => <PostSummary isNext {...generatePostSummaryProps()} />,
    };

    return showWith(props);
}

function withBookLinks() {
    const props = {
        prev: () => <BookSummary isPrev {...generateBookSummaryProps()} />,
        next: () => <BookSummary isNext {...generateBookSummaryProps()} />,
    };

    return showWith(props);
}

function withTalkLinks() {
    const props = {
        prev: () => <TalkSummary isPrev {...generateTalkSummaryProps()} />,
        next: () => <TalkSummary isNext {...generateTalkSummaryProps()} />,
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
