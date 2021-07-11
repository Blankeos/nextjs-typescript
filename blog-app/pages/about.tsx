import Head from "next/head";
import Image from "next/image";
import Container from "../components/Container";

export default function About() {
  return (
    <>
      <Head>
        <title>Carlo's NextJS Blog | About</title>
        <meta
          name="description"
          content="Carlo Taleon's simple NextJS blogsite with typescript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Container */}
      <Container className="px-8">
        <div className="flex justify-center items-center flex-col p-14 space-y-10 text-center">
          <h1 className="font-semibold text-4xl">About</h1>
          <p>👋 Hi there! Thanks for visiting this blog site.</p>
          <p>
            Nothing much to see here really... I just wanted to practice NextJS,
            Typescript, and generating static site content with{" "}
            <code className="bg-gray-200 rounded px-1 text-sm text-gray-800">
              .md
            </code>{" "}
            files as the source of truth for blog content using{" "}
            <code className="bg-gray-200 rounded px-1 text-sm text-gray-800">
              next-mdx-remote.
            </code>
          </p>
          <p>
            If you're curious about the source code, you can find it on:
            <br />
            <a
              className="text-blue-400 hover:text-blue-300"
              href="https://github.com/Blankeos/nextjs-typescript/tree/main/blog-app"
            >
              https://github.com/Blankeos/nextjs-typescript/tree/main/blog-app
            </a>
          </p>
        </div>
      </Container>
    </>
  );
}
