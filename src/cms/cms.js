import CMS from 'netlify-cms-app';

import AboutPagePreview      from './preview-templates/AboutPagePreview';
import BlogPostPreview       from './preview-templates/BlogPostPreview';
import ProfilePartialPreview from './preview-templates/ProfilePartialPreview';
import TalkPreview           from './preview-templates/TalkPreview';

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('profile', ProfilePartialPreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('blog', TalkPreview);
// CMS.registerPreviewTemplate('blog', BookPreview);
