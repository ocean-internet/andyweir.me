import React from 'react';
import { storiesOf } from '@storybook/react';
import Profile from './index';
import faker from 'faker';

storiesOf('Components/Layout/Page', module).add('default', page);
storiesOf('Components/Partials/Profile', module).add('default', profileDefault);

function profileDefault() {
    return <Profile />;
}

function page() {
    return (
        <section>
            <Profile />
            <section>
                <header>{faker.lorem.words()}</header>
                <main>
                    {faker.lorem
                        .paragraphs(100)
                        .split('\n')
                        .map(p => (
                            <p>{p}</p>
                        ))}
                </main>
                <footer>{faker.lorem.words()}</footer>
            </section>
        </section>
    );
}
