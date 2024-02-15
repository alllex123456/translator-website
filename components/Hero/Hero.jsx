import Image from 'next/image';
import heroImage from '../../public/images/hero.webp';
import Button from '../general/Button';
import { WhatsappLogo } from '@phosphor-icons/react';
import Section from '../general/Section';

const Hero = () => {
  const handleClickWhatsapp = () =>
    (window.location.href = 'whatsapp://send?phone=40749324651');

  return (
    <Section>
      <header className="relative grid gap-4 grid-cols-[2fr_4fr] min-h-[60vh] -my-[8rem] md:grid-cols-1">
        <div className="relative radius overflow-hidden md:absolute md:w-[100%] md:h-[100%] md:opacity-5">
          <Image
            src={heroImage}
            alt="building"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
            className="object-cover"
          />
        </div>

        <div className="relative bg-light-89 px-20 radius flex gap-8 flex-col justify-center md:bg-transparent">
          <div>
            <p className="font-bold text-7xl">SENS TRANSPUS</p>
            <h1>Traduceri profesionale de limba engleză</h1>
          </div>
          <div className="text-3xl flex flex-col gap-4">
            <p>
              Ai nevoie de o traducere rapidă și de calitate pentru afacerea ta
              sau un proiect personal?
            </p>
            <p>
              Cu expertiza mea în traduceri, mă asigur că mesajul tău ajunge la
              audiența țintă în cel mai profesionist mod posibil.
            </p>
          </div>
          <Button onClick={handleClickWhatsapp}>
            Whatsapp <WhatsappLogo size={24} />
          </Button>
        </div>
      </header>
    </Section>
  );
};

export default Hero;
