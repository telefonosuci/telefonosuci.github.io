// Site-wide entry, loaded on every page by _layouts/base.html. Each module wires one data-* attribute
// and does nothing when it is absent from the page.
import consent from './ui/consent.js';
import blogFilter from './ui/blog-filter.js';
import contactForm from './ui/contact-form.js';
import comments from './ui/comments.js';

consent();
blogFilter();
contactForm();
comments();
