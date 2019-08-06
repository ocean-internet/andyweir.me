import { storiesOf } from '@storybook/react';
import { aboutTemplate } from './about/about-stories';
import { bookIndex, bookPage } from './book/book-stories';
import { postIndex, postPage } from './post/post.stories';
import { talkIndex, talkPage } from './talk/talk-stories';

storiesOf('Templates/Pages', module).add('about page', aboutTemplate);

storiesOf('Templates/Post', module).add('post index', postIndex);
storiesOf('Templates/Post', module).add('post page', postPage);

storiesOf('Templates/Talk', module).add('talk index', talkIndex);
storiesOf('Templates/Talk', module).add('talk page', talkPage);

storiesOf('Templates/Book', module).add('book index', bookIndex);
storiesOf('Templates/Book', module).add('book page', bookPage);
