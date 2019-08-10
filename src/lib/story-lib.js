import faker from 'faker';
import moment from 'moment';
import React from 'react';
import youtubeData from './youtubes';

const youtubes = getYoutubes();

export function generatePostSummaryProps() {
    return {
        slug: faker.lorem.slug(),
        title: faker.company.catchPhrase(),
        dateString: moment(faker.date.past()).fromNow(),
        image: `https://picsum.photos/id/${faker.random.number(100)}/900/600/`,
        summary: faker.hacker.phrase(),
    };
}

export function generatePostProps() {
    return {
        title: faker.company.catchPhrase(),
        dateString: moment(faker.date.past()).fromNow(),
        image: `https://picsum.photos/id/${faker.random.number(100)}/900/600/`,
        summary: faker.hacker.phrase(),
        content: faker.lorem
            .paragraphs(10)
            .split('\n')
            .map(p => <p>{p}</p>),
    };
}
export function generateTalkSummaryProps() {
    return {
        slug: faker.lorem.slug(),
        title: faker.company.catchPhrase(),
        dateString: moment(faker.date.past()).fromNow(),
        youtube: faker.random.arrayElement(youtubes),
    };
}
export function generateTalkProps() {
    return {
        title: faker.company.catchPhrase(),
        dateString: moment(faker.date.past()).fromNow(),
        summary: faker.hacker.phrase(),
        youtube: faker.random.arrayElement(youtubes),
        content: faker.lorem
            .paragraphs(10)
            .split('\n')
            .map(p => <p>{p}</p>),
    };
}
export function generateBookSummaryProps() {
    return {
        id: faker.random.uuid(),
        slug: faker.lorem.slug(),
        title: faker.company.catchPhrase(),
        author: {
            name: faker.name.findName(),
            url: faker.random.boolean() ? faker.internet.url() : null,
        },
        image: `https://picsum.photos/id/${faker.random.number(100)}/516/792/`,
    };
}

export function generateBookProps() {
    return {
        title: faker.company.catchPhrase(),
        author: {
            name: faker.name.findName(),
            url: faker.random.boolean() ? faker.internet.url() : null,
        },
        image: `https://picsum.photos/id/${faker.random.number(100)}/516/792/`,
        summary: faker.hacker.phrase(),
        content: faker.lorem
            .paragraphs(10)
            .split('\n')
            .map(p => <p>{p}</p>),
    };
}

export function getYoutubes() {
    return youtubeData.map(({ contentDetails }) => contentDetails.videoId);
}
