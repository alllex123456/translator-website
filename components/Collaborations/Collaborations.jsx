import Section from '../general/Section';
import collaborationsImage from '../../public/images/collaborations.webp';
import Image from 'next/image';

const offer = [
  'Preț unitar mult redus și negociabil',
  'Termene de plată negociabile',
  'Prioritate la preluarea comenzilor',
  'Generare situații de plată/lucrări realizate',
  'Garantarea unui volum acoperit lunar',
];

const Collaborations = () => {
  return (
    <Section>
      <div className="grid gap-[10rem] grid-cols-3 lg:grid-cols-1 md:gap-[5rem]">
        <div className="w-[30rem] lg:w-[100%]">
          <h3 className="mb-4">
            Pentru colaborări, asigur disponibilitate constantă și preț
            preferențial.
          </h3>
          <h4 className="text-dark-35">
            Prin depășirea unui volum lunar minim de comenzi, putem începe o
            relație de colaborare.
          </h4>
        </div>
        <div>
          <h6 className="text-dark-30 uppercase mb-6 lg:text-center">
            Oferta mea de colaborare include:
          </h6>
          <ul className="lg:text-center">
            {offer.map((item, index) => (
              <li className="paragraph-large text-dark-35 mb-4" key={index}>
                &rarr; {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative w-[60%] radius overflow-hidden lg:w-[100%] h-[40rem]">
          <Image
            src={collaborationsImage}
            alt="magnifier"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  );
};

export default Collaborations;
