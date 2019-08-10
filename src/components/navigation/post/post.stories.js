import React from 'react';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import faker from 'faker';
import { wrapperStyles } from '../../../scss/page/styles.module.scss';
import BookSummary from '../../pages/book/book-summary';
import PostNavigation from './index';

storiesOf('Components/Navigation/Post Navigation', module)
    .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
    .add('with Prev Post', withPrevPost)
    .add('with Next Post', withNextPost)
    .add('with Prev & Next Post', withPrevNextPost)
    .add('with book links', withBookLinks);

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

function withBookLinks() {
    const props = {
        prev: () => <BookSummary isPrev {...generateBookSummaryProps()} />,
        next: () => <BookSummary isNext {...generateBookSummaryProps()} />,
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

function generateLink() {
    const title = faker.lorem.sentence();
    const slug = faker.lorem.slug();

    return <a href={slug}>{title}</a>;
}

function generateBookSummaryProps() {
    return {
        slug: faker.lorem.slug(),
        title: faker.company.catchPhrase(),
        author: { name: faker.name.findName() },
        image: `https://picsum.photos/id/${faker.random.number(100)}/198/129/`,
    };
}
