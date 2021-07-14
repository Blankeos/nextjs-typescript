import React from "react";

// Components
import Container from "../../components/Container";

import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPosts } from "../../services/fetchData";

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import Head from "next/head";

const Post = (props: any) => {
  return (
    <>
      <Head>
        <title>Carlo's NextJS Blog | {props.title}</title>
        <meta name="description" content={props.shortDesc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-600 h-48">Feature Image</div>
      <Container>
        <div className="flex flex-col space-y-3 my-10">
          <h1 className="text-4xl font-semibold">{props.title}</h1>
          <p className="text-sm text-gray-500">
            <span className="bg-gray-200 p-1 rounded-md">
              {new Date(props.date).toLocaleString()}
            </span>
          </p>
        </div>
        <div
          className="whitespace-pre-wrap prose "
          style={{
            maxWidth: "80%",
          }}
        >
          <MDXRemote {...props.content} components={<h2>Hello!</h2>} />
        </div>
      </Container>
    </>
  );
};

export default Post;

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const allPosts = getAllPosts();

  const content = allPosts.find((post) => post.slug === params?.slug);

  const mdxSource = await serialize(
    content?.content ? content?.content : "# test"
  );

  return {
    props: {
      ...content?.data, // this adds all properties from data into their own separate props like: .title and .date
      date: content?.data.date,
      content: mdxSource,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = getAllPosts();
  return {
    paths: allPosts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};
