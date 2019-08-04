import React         from 'react';
import { storiesOf } from '@storybook/react';
import faker         from 'faker';
import TalkTemplate  from './index';

const youtubes = ["Ks-_Mh1QhMc","c0KYU2j0TM4","eIho2S0ZahI"];

storiesOf('Templates/Talk', module).add('default', talkTemplate);

function talkTemplate() {

    const props = {
        title: faker.company.catchPhrase(),
        summary: faker.hacker.phrase(),
        youtube: faker.random.arrayElement(youtubes),
        content: faker.lorem.paragraphs(10).split('\n').map(p => <p>{p}</p>)
    };

    return <TalkTemplate {...props} />
}
