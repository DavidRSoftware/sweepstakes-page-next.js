import Head from 'next/head';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  )
}
