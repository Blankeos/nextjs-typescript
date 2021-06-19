import Head from "next/head";
import Link from "next/link";

const Layout = ({ children, title = "Carlo's Crypto Tracker" }: any) => {
  return (
    <div className="app_container">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <Link href="/" passHref>
          <a></a>
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
