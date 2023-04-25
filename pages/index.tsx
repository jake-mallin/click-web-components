// import HeroSearch from '@/components/hero-units/hero-search/HeroSearch';
import HeroSlider from '@/components/hero-units/hero-slider/HeroSlider';
import StepPromo from '@/components/promos/StepPromo/StepPromo';
import Head from 'next/head';

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
        {/* <HeroSearch /> */}
        <HeroSlider />
        <StepPromo
          promoTitle={`Looking to sell your vehicle?`}
          subtext={`Alternatively bring the car to us and we'll pay you to do so`}
        />
      </main>
    </>
  );
}
