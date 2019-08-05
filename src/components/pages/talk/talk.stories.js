import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';
import TalkIndexTemplate from './talk-index-template';
import TalkTemplate from './talk-template';
import { wrapperStyles } from '../../../scss/page/styles.module.scss';

const youtubes = ['Ks-_Mh1QhMc', 'c0KYU2j0TM4', 'eIho2S0ZahI'];

storiesOf('Templates/Talk', module).add('talk index', talkIndex);
storiesOf('Templates/Talk', module).add('talk page', talkPage);

function talkIndex() {
    const props = {
        title: faker.company.catchPhrase(),
        summary: faker.hacker.phrase(),
    };

    return (
        <section className={wrapperStyles}>
            <TalkIndexTemplate {...props} />
        </section>
    );
}
function talkPage() {
    const props = {
        title: faker.company.catchPhrase(),
        summary: faker.hacker.phrase(),
        youtube: faker.random.arrayElement(youtubes),
        content: faker.lorem
            .paragraphs(10)
            .split('\n')
            .map(p => <p>{p}</p>),
    };

    return (
        <section className={wrapperStyles}>
            <TalkTemplate {...props} />
        </section>
    );
}
