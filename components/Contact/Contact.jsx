import { useState } from 'react';
import { Phone, Envelope } from '@phosphor-icons/react';
import Link from 'next/link';
import Section from '../general/Section';
import Button from '../general/Button';
import FadeIn from '../Animations/FadeIn';

const Contact = () => {
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const response = await fetch('/api/sendgrid', {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    if (response.ok) {
      event.target.reset();
      setSuccess('Mesaj trimis cu succes!');
      setIsLoading(false);
    } else {
      setError('Eroare la trimiterea mesajului!');
      setIsLoading(false);
    }
  };

  return (
    <Section>
      <FadeIn className="grid gap-4 grid-cols-[2fr_4fr] min-h-[50vh] md:grid-cols-1">
        <div className="relative radius bg-dark-35 text-light-89 text-2xl p-10 flex flex-col gap-10">
          <p className="text-light">
            Dacă ești interesat de serviciile mele de traducere limba engleză
            sau ai întrebări suplimentare, nu ezita să mă contactezi. Sunt aici
            pentru a te ajuta să-ți atingi obiectivele lingvistice.
          </p>
          <div className="flex gap-4 items-center">
            <Envelope />
            <Link href="mailto:alex-arxlogicwave.ro">
              alex@arx-logicwave.ro
            </Link>
          </div>
          <div className="flex gap-4 items-center">
            <Phone /> <Link href="tel:+40749324651">0749324651</Link>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-light-89 px-20 radius flex gap-8 flex-col justify-center md:py-10"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="font-bold text-xl">
              Numele tău
            </label>
            <input className="p-4 radius text-2xl" name="name" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="font-bold text-xl">
              Adresa de e-mail
            </label>
            <input className="p-4 radius text-2xl" name="email" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="font-bold text-xl">
              Mesajul tău
            </label>
            <textarea rows="5" className="p-4 radius text-2xl" name="message" />
          </div>
          <div className="flex gap-4 items-center">
            <Button>{isLoading ? 'Se trimite...' : 'Trimite'}</Button>
            <p className={`${error && 'text-red-500'} paragraph-medium`}>
              {success || error}
            </p>
          </div>
        </form>
      </FadeIn>
    </Section>
  );
};

export default Contact;
