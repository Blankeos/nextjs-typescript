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
      <Container>About Page yay</Container>
    </>
  );
}
