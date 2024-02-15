import React from 'react';
import Section from '../general/Section';

const services = [
  {
    title: 'TRADUCERE',
    description:
      'Fie că ai nevoie de traduceri pentru documente comerciale, site-uri web sau materiale de marketing, ofer servicii de traducere de înaltă calitate în și din limba engleză, menite să te ajute să comunici eficient cu publicul tău țintă.',
  },
  {
    title: 'LOCALIZARE',
    description:
      'Asigur adaptarea precisă a conținutului tău în limba engleză, luând în considerare specificul cultural și lingvistic al audienței respective. Astfel, mesajul tău va fi înțeles în mod optim în orice context cultural.',
  },
  {
    title: 'REVIZUIRE',
    description:
      'Mă asigur că fiecare traducere este impecabilă din punct de vedere gramatical și stilistic. Cu serviciile mele de revizuire și corectură, vei obține un rezultat final perfect adaptat nevoilor tale.',
  },
];

const Services = () => {
  return (
    <Section>
      <div className="grid gap-10 grid-cols-3 md:grid-cols-1">
        {services.map((service, index) => (
          <div key={index} className="border border-light-86 radius p-12">
            <h4 className="mb-6">{service.title}</h4>
            <p className="paragraph-large">{service.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
