# 📝 NextJS BlogSite

[![Netlify Status](https://api.netlify.com/api/v1/badges/c72ad397-8b01-4f6c-a8fd-0e6b68a00ef5/deploy-status)](https://app.netlify.com/sites/carlo-nextblog-practice/deploys)

[carlo-nextblog-practice.netlify-app &rarr;](https://carlo-nextblog-practice.netlify.app/)

> Netlify status is sometimes "Build Failed" because of a monorepo bug at Netlify. Link still works though.

## 📑 About

A really simple blogsite with NextJS and Typescript. I also installed TailwindCSS.
Doing this just to try out the basic concepts in NextJS and show that I can use them like page routes, data-fetching, head component, image, link, routers, etc.

More importantly, I'm doing this to understand how to parse markdown content into blog content. Making `.md` files as the source of truth for the content for my blog.

## 📔 My Notes

NextJS has two forms of [pre-rendering](https://nextjs.org/docs/basic-features/data-fetching):

- Static-Site Generation (SSG)

  - getStaticProps()
  - getStaticPaths()

- Server-Side Rendering (SSR)
  - getServerSideProps()
