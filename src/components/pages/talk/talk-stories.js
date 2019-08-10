import React from 'react';
import faker from 'faker';
import TalkIndexTemplate from './talk-index-template';
import TalkTemplate from './talk-template';
import { wrapperStyles } from '../../../scss/page/styles.module.scss';
import { generateTalkProps, generateTalkSummaryProps } from '../../../lib/story-lib';

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
