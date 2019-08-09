import moment from 'moment';
import React from 'react';
import faker from 'faker';
import TalkIndexTemplate from './talk-index-template';
import TalkTemplate from './talk-template';
import { wrapperStyles } from '../../../scss/page/styles.module.scss';

const youtubes = getYoutubes();

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
            dateString: moment(faker.date.past()).fromNow(),
            youtube: faker.random.arrayElement(youtubes),
        },
    };
}

function generateTalkProps() {
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

function getYoutubes() {
    return [
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/W6qanNmtTFblinTvFgl_-tsvmao',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLlV1c2tLZnYyenhJ',
            contentDetails: {
                videoId: 'UuskKfv2zxI',
                videoPublishedAt: '2019-08-02T22:33:35.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/zzy_pE46sMP3culxMlZx0CXGwOU',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLlBVVzg5TnBEWUp3',
            contentDetails: {
                videoId: 'PUW89NpDYJw',
                videoPublishedAt: '2019-07-20T09:52:14.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/aRznA9qEwIDOAoi8MXZO0mq_6vw',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLlJwX0hFbk9XRXNv',
            contentDetails: {
                videoId: 'Rp_HEnOWEso',
                videoPublishedAt: '2019-08-01T16:10:02.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/r6TKR8EsKaybxZvyqiC_WQhTiqo',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLnhKTV9DUU44LW5z',
            contentDetails: {
                videoId: 'xJM_CQN8-ns',
                videoPublishedAt: '2019-07-31T17:52:21.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/eTAyCKCtIsWvZZfZDv1SJYir0eA',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLlRhOEtCSjRCVE5n',
            contentDetails: {
                videoId: 'Ta8KBJ4BTNg',
                videoPublishedAt: '2019-08-06T15:13:39.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/tOjAtEg7_7qnG9N5yHAIev_nJP0',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLk9SVzVNTkN2X0xV',
            contentDetails: {
                videoId: 'ORW5MNCv_LU',
                videoPublishedAt: '2019-08-02T18:15:22.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/6Y9jkoKqHdTpB3PwO3m0HQQwvDs',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLjVjV2tLd0dVdDNn',
            contentDetails: {
                videoId: '5cWkKwGUt3g',
                videoPublishedAt: '2019-07-30T20:05:59.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/yPylR4CVA6wqUCDOh6BTzakKJW0',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLmdpNnJNWHVfdmVF',
            contentDetails: {
                videoId: 'gi6rMXu_veE',
                videoPublishedAt: '2019-07-26T13:20:59.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/DduIPmRS4US7xfnBRlZuVwVtk7A',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLlI5WEtSUjdhS0hJ',
            contentDetails: {
                videoId: 'R9XKRR7aKHI',
                videoPublishedAt: '2019-07-29T12:52:08.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/YJMkSDYBEq1kh_MPGvVmGnrq248',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLmgtVElSSXhocTZF',
            contentDetails: {
                videoId: 'h-TIRIxhq6E',
                videoPublishedAt: '2019-07-25T11:49:06.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/iUgaDUkDLeMfuRw8_VA_5FDOMGA',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLnpFTEpNSVFhd3lz',
            contentDetails: {
                videoId: 'zELJMIQawys',
                videoPublishedAt: '2019-07-24T17:06:41.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/_nLkCfD-Jap6sCFiw_2-ql9UK9s',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLk9RdXd6NjRxc0JN',
            contentDetails: {
                videoId: 'OQuwz64qsBM',
                videoPublishedAt: '2019-08-05T18:21:58.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/jLAEsUke3OiuOtsZrDucDOGxgm8',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLjU0U1Q4YndPVnlj',
            contentDetails: {
                videoId: '54ST8bwOVyc',
                videoPublishedAt: '2019-07-23T12:59:57.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/bpHCthCr9tjTEhx970ysvJ20Mgo',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLlN0dDRpR01pSGlJ',
            contentDetails: {
                videoId: 'Stt4iGMiHiI',
                videoPublishedAt: '2019-07-19T13:56:15.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/XgF5NK3V_Hin4yzSgBvfmmVrr0I',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLm9CZHpPSXp3dG5n',
            contentDetails: {
                videoId: 'oBdzOIzwtng',
                videoPublishedAt: '2019-07-22T15:43:03.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/uVofZx5C_GO3DE-SigCW4CEP2Pk',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLm01SFFhbXJYbFNZ',
            contentDetails: {
                videoId: 'm5HQamrXlSY',
                videoPublishedAt: '2019-07-18T15:45:26.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/veF7No88By_byCr1f10T4NfdapM',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLjhERGdIcTlld09v',
            contentDetails: {
                videoId: '8DDgHq9ewOo',
                videoPublishedAt: '2019-07-17T15:51:30.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/XGU9Kt97DErpSp3gRy1RYuGaEKM',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLlBKTFQwY0FQTmZz',
            contentDetails: {
                videoId: 'PJLT0cAPNfs',
                videoPublishedAt: '2019-07-16T18:37:24.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/rKs_9_1h88t6biXdsBDgnXSJB6o',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLnNyaENuUFVtSkRJ',
            contentDetails: {
                videoId: 'srhCnPUmJDI',
                videoPublishedAt: '2019-07-16T15:14:12.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/U7m-PmdB8z28Fv5awEv4qn_VCCQ',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLjhxN0Q0RW1iU0N3',
            contentDetails: {
                videoId: '8q7D4EmbSCw',
                videoPublishedAt: '2019-06-13T16:32:15.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/D5vI8nAAMylN0VDKrnY6DXi5GXk',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLjByQW5naWlYQkFj',
            contentDetails: {
                videoId: '0rAngiiXBAc',
                videoPublishedAt: '2019-07-11T13:28:46.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/yyjHY7ihlsSiZ7PjddOsE7IzpKI',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLnBwZk9OZHNPa1dJ',
            contentDetails: {
                videoId: 'ppfONdsOkWI',
                videoPublishedAt: '2019-07-15T14:46:01.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/0HDlodCIXiQ0PWH1Lf0a1Dcxkag',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLkEyRHpzZ0pTd2Nj',
            contentDetails: {
                videoId: 'A2DzsgJSwcc',
                videoPublishedAt: '2019-07-12T15:34:21.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/nS278IRl9HJH1F2bnORsNfP5jwk',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLnR0Y0pNTmxLaWY0',
            contentDetails: {
                videoId: 'ttcJMNlKif4',
                videoPublishedAt: '2019-06-07T20:51:42.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/_Lgy9d97JKOsrhQ3vrXX03qO0Zg',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLjg4ZC01OHRXaEdz',
            contentDetails: {
                videoId: '88d-58tWhGs',
                videoPublishedAt: '2019-07-10T12:58:06.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/lP8kmANNbSKOcygNNtdJFv9ciTs',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLlVDS2Z2eG5sallZ',
            contentDetails: {
                videoId: 'UCKfvxnljYY',
                videoPublishedAt: '2019-07-09T14:13:15.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/B8sUU2L2KZkBIabLZ5Ne31iNET0',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLmlCNE1TMWhzV1hV',
            contentDetails: {
                videoId: 'iB4MS1hsWXU',
                videoPublishedAt: '2019-07-03T15:57:32.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/F4t3eueEFi3sqUfbJndzrL5fhtI',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLkRUY0ptSWJuNW53',
            contentDetails: {
                videoId: 'DTcJmIbn5nw',
                videoPublishedAt: '2019-07-02T16:23:13.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/GEu8tIuKWr8Gm1pCzFaGqB_uNYU',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLmllU1Y4LWlzeTNN',
            contentDetails: {
                videoId: 'ieSV8-isy3M',
                videoPublishedAt: '2019-07-01T16:23:28.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/Zd1Coqw7nKjriar4LtiC0dz-spQ',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLm9nQ0lxYUNlMnpJ',
            contentDetails: {
                videoId: 'ogCIqaCe2zI',
                videoPublishedAt: '2019-06-28T15:32:39.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/bcvifTpiV5SITRhF2rZkAFW61TA',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLmFWT0pBOHFJN29v',
            contentDetails: {
                videoId: 'aVOJA8qI7oo',
                videoPublishedAt: '2019-06-27T16:23:43.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/ikvIUGY3GjbD5RGV03p_4DGRguA',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLlJaZ2tqRWRNYlN3',
            contentDetails: {
                videoId: 'RZgkjEdMbSw',
                videoPublishedAt: '2019-06-26T17:25:33.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/wel9mNOmoH23_PO-39RK7KJlmnk',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLm5iVzRYV2tKQzZ3',
            contentDetails: {
                videoId: 'nbW4XWkJC6w',
                videoPublishedAt: '2019-06-24T22:50:24.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/f4kN2S2tjuRTEJsKyfWMUgE46FM',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLmpBVENyLWdRdlBB',
            contentDetails: {
                videoId: 'jATCr-gQvPA',
                videoPublishedAt: '2019-06-25T14:36:07.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/Jcykl445p7CUmTICjC4jGQZJwEE',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLlJqcXVIVGo0SGxZ',
            contentDetails: {
                videoId: 'RjquHTj4HlY',
                videoPublishedAt: '2019-06-21T13:29:06.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/sQ3SyKWRmq0aWsi0yKoEVkNvAx8',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLlNHVE1TVjhRVXJz',
            contentDetails: {
                videoId: 'SGTMSV8QUrs',
                videoPublishedAt: '2019-06-20T15:21:29.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/mbPhW8PajB0nD9nGsDIIjThacJw',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLnZaQ0dTUDNBMEZv',
            contentDetails: {
                videoId: 'vZCGSP3A0Fo',
                videoPublishedAt: '2019-06-19T17:04:44.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/CsKdYgN2lE8tr8o2gIGipy59d9A',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLm0xOWppdDE5djl3',
            contentDetails: {
                videoId: 'm19jit19v9w',
                videoPublishedAt: '2019-06-18T12:29:05.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/noIZbZLQuuCy1Of_XyGBCmP1xME',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLmI1WkVTcE9Bb2xV',
            contentDetails: {
                videoId: 'b5ZESpOAolU',
                videoPublishedAt: '2019-06-17T12:45:38.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/FBLHv0xVBgk3gexgVn984scJ0J8',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLk9ONGl5OGhxMmhN',
            contentDetails: {
                videoId: 'ON4iy8hq2hM',
                videoPublishedAt: '2019-06-11T22:30:59.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/BacUgQbe6mgyJs_w6sLKYpXEOWY',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLlRyb2ZqRUFldFZz',
            contentDetails: {
                videoId: 'TrofjEAetVs',
                videoPublishedAt: '2019-06-06T15:36:48.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/GxTdVCAMSj6pv-YKySkUuPstIHM',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLmE2M3Q4cjcwUU4w',
            contentDetails: {
                videoId: 'a63t8r70QN0',
                videoPublishedAt: '2019-06-05T14:32:00.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/L_EA9Qz95m8dAwDe7Kbq0N5nZ_U',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLjRDR0ZQYkZxZEo0',
            contentDetails: {
                videoId: '4CGFPbFqdJ4',
                videoPublishedAt: '2019-06-04T21:52:16.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/nIYPrKO9Q6e6t_kEbxQvWNeJREM',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLm5KZF8ybUo0dS1J',
            contentDetails: {
                videoId: 'nJd_2mJ4u-I',
                videoPublishedAt: '2019-05-28T15:12:46.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/GacQ672-wBEficnOQkmaQFx_Xos',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLjVNdUlNcWhUOERN',
            contentDetails: {
                videoId: '5MuIMqhT8DM',
                videoPublishedAt: '2019-06-03T15:27:56.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/-R7KYepTHrkOs-LEE7SOYf9tFX0',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLnFBQy01aFRLLTRj',
            contentDetails: {
                videoId: 'qAC-5hTK-4c',
                videoPublishedAt: '2019-05-30T18:44:32.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/M-iPTdgpUIWL1fMq-mhv5_610sk',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLkNtMUlqLWpSaHBR',
            contentDetails: {
                videoId: 'Cm1Ij-jRhpQ',
                videoPublishedAt: '2019-05-31T14:07:51.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/D0iUXHdUWOg2DpF7n7OWwpdcxIA',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLmdtRzVBRHZQTjk4',
            contentDetails: {
                videoId: 'gmG5ADvPN98',
                videoPublishedAt: '2019-05-29T15:46:22.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/6d5HoUOqnqvf28OPujLnP1vGFmA',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLmlxS1l0QTNwSzFj',
            contentDetails: {
                videoId: 'iqKYtA3pK1c',
                videoPublishedAt: '2019-05-24T21:50:25.000Z',
            },
        },
        {
            kind: 'youtube#playlistItem',
            etag: 'nlUZBA6NbTS7q9G8D1GljyfTIWI/fucfbvmKgpvumcnHw0xliR65ijg',
            id: 'VVVBdVVVblQ2b0RlS3dFNnYxTkdReHVnLnZqWEo0Zi1PVzBV',
            contentDetails: {
                videoId: 'vjXJ4f-OW0U',
                videoPublishedAt: '2019-05-08T16:26:15.000Z',
            },
        },
    ].map(({ contentDetails }) => contentDetails.videoId);
}
