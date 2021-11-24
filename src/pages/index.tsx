/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
// import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jump Admin Panel- Landing</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'crossorigin'} />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap"
          rel="preload"
          
        />
      </Head>

      <main>
        <p className="">Landing Page Content</p>
        <div className="m-8">
          <Link href={"/dashboard"}>
            <a className="bg-blue-300 px-3 py-2 rounded-md">
              Jump to Dashboard
            </a>
          </Link>
        </div>
      </main>

      <footer>Footer Content</footer>
    </div>
  );
};

export default Home;
