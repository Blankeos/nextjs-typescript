# 📝 NextJS BlogSite

[![Netlify Status](https://api.netlify.com/api/v1/badges/c72ad397-8b01-4f6c-a8fd-0e6b68a00ef5/deploy-status)](https://app.netlify.com/sites/carlo-nextblog-practice/deploys)

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

<hr />

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
