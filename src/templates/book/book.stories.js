import React         from 'react';
import { storiesOf } from '@storybook/react';
import faker         from 'faker';
import BookTemplate  from './book-template';

storiesOf('Templates/Book', module).add('default', bookTemplate);

function bookTemplate() {

    const props = {
        title: faker.company.catchPhrase(),
        author: {
            name: faker.name.findName(),
            url: faker.random.boolean() ? faker.internet.url() : null,
        },
        image: `https://picsum.photos/id/326/500/${faker.random.number(100)}`,
        summary: faker.hacker.phrase(),
        content: faker.lorem.paragraphs(10).split('\n').map(p => <p>{p}</p>)
    };

    return <BookTemplate {...props} />
}
