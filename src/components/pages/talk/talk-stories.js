import React from 'react';
import faker from 'faker';
import TalkIndexTemplate from './talk-index-template';
import TalkTemplate from './talk-template';
import { wrapperStyles } from '../../../scss/page/styles.module.scss';

const youtubes = ['Ks-_Mh1QhMc', 'c0KYU2j0TM4', 'eIho2S0ZahI'];

export function talkIndex() {
    const props = {
        title: faker.company.catchPhrase(),
        summary: faker.hacker.phrase(),
        group: generateTalks(),
    };

    return (
        <section className={wrapperStyles}>
            <TalkIndexTemplate {...props} />
        </section>
    );
}
export function talkPage() {
    const props = generateTalkProps();

    return (
        <section className={wrapperStyles}>
            <TalkTemplate {...props} />
        </section>
    );
}

function generateTalks() {
    const number = faker.random.number({ min: 2, max: 10 });

    return Array(number)
        .fill(null)
        .map(() => ({ node: generateTalkSummaryProps() }));
}

function generateTalkSummaryProps() {
    return {
        id: faker.random.uuid(),
        fields: {
            slug: faker.lorem.slug(),
        },
        frontmatter: {
            title: faker.company.catchPhrase(),
            summary: faker.hacker.phrase(),
            youtube: faker.random.arrayElement(youtubes),
        },
    };
}

function generateTalkProps() {
    return {
        title: faker.company.catchPhrase(),
        summary: faker.hacker.phrase(),
        youtube: faker.random.arrayElement(youtubes),
        content: faker.lorem
            .paragraphs(10)
            .split('\n')
            .map(p => <p>{p}</p>),
    };
}
