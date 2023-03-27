import Head from 'next/head';
import HeroSearch from '../components/hero-units/hero-search/HeroSearch';
import HeroSlider from '../components/hero-units/hero-slider/HeroSlider';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hero Unit Components</title>
        <meta
          name="description"
          content="Hero Unit Components built in next js app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <HeroSearch />
        <HeroSlider />
      </main>
    </>
  );
}
