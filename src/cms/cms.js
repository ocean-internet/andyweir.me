import CMS from 'netlify-cms-app';

import AboutPagePreview      from './preview-templates/AboutPagePreview';
import BlogPostPreview       from './preview-templates/BlogPostPreview';
import ProfilePartialPreview from './preview-templates/ProfilePartialPreview';
import TalkPreview           from './preview-templates/TalkPreview';
import BookPreview           from './preview-templates/BookPreview';

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('profile', ProfilePartialPreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('talks', TalkPreview);
CMS.registerPreviewTemplate('books', BookPreview);
