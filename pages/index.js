import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

import Head from 'next/head';
import Advantages from '@/components/Advantages/Advantages';
import Collaborations from '@/components/Collaborations/Collaborations';
import Contact from '@/components/Contact/Contact';
import Experience from '@/components/Experience/Experience';
import Hero from '@/components/Hero/Hero';
import Pricing from '@/components/Pricing/Pricing';
import Services from '@/components/Services/Services';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sens Transpus | Traduceri autorizate de limba engleză</title>
      </Head>
      <Hero />
      <main className="">
        <Services />
        <Experience />
        <Collaborations />
        <Advantages />
        <Pricing />
        <Contact />
      </main>
    </>
  );
}
