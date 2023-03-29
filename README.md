
# Blog

To start, install nodejs, npm and yarn first.

Then, install gatsby-cli and gh-pages globally. Also, we need to update the dependencies.

```bash
pnpm add -g gatsby-cli gh-pages
```

If the major version of Gatsby changed, followed the guide on Gatsby's website. 
The simpliest way is to delete and re-generate all project by `gatsby new`.
But how about the old theme? I think we should update it by myself or find from the original author.

```bash


Then run the development server. It will open a browser window with the site.

```bash
gatsby develop
```

Remember to update dependencies!

## UI 

- Material UI
- Typography theme

## Dependencies
```
react
react-dom
react-helmet # seems deprecated...

rxjs
moment

gatsby
gatsby-source-filesystem
gatsby-plugin-image
gatsby-plugin-manifest
gatsby-plugin-sharp
gatsby-transformer-sharp
gatsby-remark-prismjs
gatsby-plugin-feed
gatsby-omni-font-loader # font

typography
typography-theme-github # maybe should be updated...

# css
@mui/styles
@mui/material

# code
prismjs

```
