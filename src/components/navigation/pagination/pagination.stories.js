import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import faker from 'faker';
import PaginationNavigation from './index';

storiesOf('Components/Navigation/Pagination', module)
    .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
    .add('is first page', isFirstPage)
    .add('is last page', isLastPage)
    .add('is middle page', isMiddlePage);

function isFirstPage() {
    const index = 1;
    const pageCount = faker.random.number();

    const props = {
        first: true,
        last: false,
        prevLink: faker.lorem.slug(),
        nextLink: faker.lorem.slug(),
        index,
        pageCount,
    };

    return showWith(props);
}

function isLastPage() {
    const pageCount = faker.random.number();
    const index = pageCount;

    const props = {
        first: false,
        last: true,
        prevLink: faker.lorem.slug(),
        nextLink: faker.lorem.slug(),
        index,
        pageCount,
    };

    return showWith(props);
}

function isMiddlePage() {
    const index = faker.random.number();
    const pageCount = index + faker.random.number();

    const props = {
        first: false,
        last: false,
        prevLink: faker.lorem.slug(),
        nextLink: faker.lorem.slug(),
        index,
        pageCount,
    };

    return showWith(props);
}

function showWith(props) {
    return (
        <Fragment>
            <article>
                <h1>{faker.lorem.sentence()}</h1>
                <PaginationNavigation {...props} />
                <ul>
                    {faker.lorem
                        .paragraphs()
                        .split('\n')
                        .map(paragraph => (
                            <li>
                                <p>{paragraph}</p>
                            </li>
                        ))}
                </ul>
            </article>
            <PaginationNavigation {...props} />
        </Fragment>
    );
}
