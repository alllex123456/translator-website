import '@/styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Lenis from '@studio-freight/lenis';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return <Component {...pageProps} />;
}
