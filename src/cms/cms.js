import CMS from 'netlify-cms-app';

import AboutPagePreview      from './preview-templates/AboutPagePreview';
import BlogPostPreview       from './preview-templates/BlogPostPreview';
import ProfilePartialPreview from './preview-templates/ProfilePartialPreview';

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('profile', ProfilePartialPreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
