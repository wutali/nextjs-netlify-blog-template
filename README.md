
# Next.js blog template for Netlify

This is a boilerplate for building blogs with only Netlify stacks.

There are some boilerplate or tutorials for the combination of Next.js and Netlify on GitHub.
These resources have good documentation and good tutorial to get started Next.js and Netlify easily
but they are too simple if you want to build blogs having common feature like tagging.

Next.js blog template for Netlify has already implemented these common features for building
blogs with only using Next.js and Netlify stacks.

## Demo

Deploy on your environment by clicking here:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/wutali/nextjs-netlify-blog-template)

Or access the following demo site:

[Next.js blog template for Netlify](https://wutali-nextjs-netlify-blog.netlify.app/)

## Features

- **Tagging**: organizes content by tags
- **Author**: displays author names who write a post
- **Pagination**: limits number of posts per page
- **CMS**: built with CMS to allow editors modifying content wth quickest way
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

All codes related to the blog are under [components](https://github.com/wutali/nextjs-netlify-blog-template/tree/master/src/components), [pages](https://github.com/wutali/nextjs-netlify-blog-template/tree/master/src/pages) and 
[layouts](https://github.com/wutali/nextjs-netlify-blog-template/tree/master/src/layouts) directory, 
you can modify it freely if you want to apply your design theme.
This template uses [styled-jsx](https://github.com/vercel/styled-jsx) and [css-modules](https://github.com/css-modules/css-modules) to define styles of pages but you can choose any styling libraries for designing your theme.

### Define category metadata

### Add new layout for each post page

### Localize CMS

## Sources

## License

MIT
