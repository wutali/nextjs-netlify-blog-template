
# Next.js blogging template for Netlify

Next.js blogging template for Netlify is a boilerplate for building blogs with only Netlify stacks.

There are some boilerplate or tutorials for the combination of Next.js and Netlify on GitHub. These resources have documentation and good tutorial to get started Next.js and Netlify quickly, but they are too simple to build blogs with standard features like tagging.

Next.js blogging template for Netlify has already implemented these standard features for building blogs with only using Next.js and Netlify stacks.

## Demo

Deploy on your environment by clicking here:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/wutali/nextjs-netlify-blog-template)

Or access the following demo site:

[Next.js blog template for Netlify](https://wutali-nextjs-netlify-blog.netlify.app/)

## Features

- **Tagging**: organizes content by tags
- **Author**: displays author names who write a post
- **Pagination**: limits the number of posts per page
- **CMS**: built with CMS to allow editors modifying content with the quickest way
- **SEO optimized**: built-in metadata like JSON-LD
- **Shortcode**: extends content writing with React component like WordPress shortcodes

## Dependencies

- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [Netlify](https://www.netlify.com/)
- [MDX](https://mdxjs.com/)

## Getting started

To create your blog using the template, open your terminal, `cd` into the directory you'd like to create the app in,
and run the following command:

```
npx create-next-app your-blog --example "https://github.com/wutali/nextjs-netlify-blog-template/tree/master/learn-starter"
```

## Usage

### Modify content by Netlify CMS

### Enable Netlify Large Media to handle large files

### Preview content before it's released

## Customization

This template is just a template and a boilerplate in which users can customize anything after the project was cloned and started.
The following instructions introduce common customization points like adding new metadata or applying a new design theme.

### Styling pages by a customized theme

All source codes related to the blog are under [components](https://github.com/wutali/nextjs-netlify-blog-template/tree/master/src/components), [pages](https://github.com/wutali/nextjs-netlify-blog-template/tree/master/src/pages), and 
[layouts](https://github.com/wutali/nextjs-netlify-blog-template/tree/master/src/layouts) directory.
You can modify it freely if you want to apply your design theme.
All components use [styled-jsx](https://github.com/vercel/styled-jsx) and [css-modules](https://github.com/css-modules/css-modules) to define their styles, but you can choose any styling libraries for designing your theme.

The directory tree containing the blog source code are described below:

```
meta: yaml files defining metadata like authors or tags
public: images, favicons and other static assets
src
├── assets: other assets using inside of components
├── components: pieces of components consisting of pages
├── layouts: layout components for each post page
├── lib: project libraries like data fetching or pagination
└── pages: page components managing by Next.js
```

### Organizing content by categories

The category metadata that associates with content have the same relationship with the authors' one. 
Then reference these implementations for adding new metadata:

- [public/admin/config.yml](https://github.com/wutali/nextjs-netlify-blog-template/blob/master/public/admin/config.yml#L51): author metadata definition for Netlify CMS
- [src/lib/authors.tsx](https://github.com/wutali/nextjs-netlify-blog-template/blob/master/src/lib/authors.ts): fetches metadata and defines utility functions for components
- [meta/authors.yml](https://github.com/wutali/nextjs-netlify-blog-template/blob/master/src/meta/authors.yml): author content managed by Netlify CMS
- [layouts/index.tsx](https://github.com/wutali/nextjs-netlify-blog-template/blob/master/src/layouts/index.tsx): displays author content for each page

You understood they have four steps to add the category metadata on your project:

1. Define the category metadata on the above Netlify config file
2. Create an empty file named with `categories.yml` under [meta](https://github.com/wutali/nextjs-netlify-blog-template/blob/master/src/meta/) directory
3. Create a new module for fetching category metadata
4. Display the category metadata on [layouts](https://github.com/wutali/nextjs-netlify-blog-template/blob/master/src/layouts/index.tsx#L71) or other components you want

It is all you have to do. After that, you can access Netlify CMS and create new categories at any time.

### Locale settings for Netlify CMS

Modify [config.yml](https://github.com/wutali/nextjs-netlify-blog-template/blob/master/public/admin/config.yml) and 
[index.html](https://github.com/wutali/nextjs-netlify-blog-template/blob/master/public/admin/index.html) under [public/admin](https://github.com/wutali/nextjs-netlify-blog-template/blob/master/public/admin/) directory 
as following instructions:

[Netlify CMS - Configuration Options #Locale](https://www.netlifycms.org/docs/configuration-options/#locale)

## References

- [Netlify CMS Documentation](https://www.netlifycms.org/docs/intro/)
- [Building a Markdown blog with Next 9.4 and Netlify](https://www.netlify.com/blog/2020/05/04/building-a-markdown-blog-with-next-9.4-and-netlify/)
- [Hugo Theme - Codex](https://github.com/jakewies/hugo-theme-codex)
- [Next.js Starter Template for TypeScript](https://github.com/vercel/next-learn-starter/tree/master/typescript-final)
- [Building Blog with NextJS and Netlify CMS](https://dev.to/mefaba/building-blog-with-nextjs-and-netlify-cms-fom)

## License

MIT
