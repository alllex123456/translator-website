import Image from 'next/image';
import Section from '../general/Section';
import advantagesImage from '../../public/images/advantages.webp';

const advantages = [
  {
    title: 'COMUNICARE',
    description:
      'Rămân în contact cu clientul și îi ofer transparență în fiecare etapă a procesului de traducere. Înțeleg importanța unei comunicări eficiente pentru un proiect reușit. Astfel, clientul rămâne pe deplin informat în legătură cu serviciul cerut și procesul pe care îl urmăm.',
  },
  {
    title: 'CALITATE',
    description:
      'Având o experiență îndelungată și cunoștințe în multiple domenii de specialitate, sunt dedicat oferirii celor mai bune servicii de traducere în limba engleză. Calitatea este prioritatea mea numărul unu, iar rezultatele mele vor reflecta întotdeauna acest angajament.',
  },
];

const Advantages = () => {
  return (
    <Section>
      <h2 className="mb-4 md:mb-8">AVANTAJE?</h2>
      <div className="grid gap-[10rem] grid-cols-[2fr_1fr_1fr] lg:grid-cols-2 md:grid-cols-1 md:gap-[5rem]">
        <div className="relative w-[100%] h-[40rem] radius overflow-hidden">
          <Image
            src={advantagesImage}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
            className="object-cover"
          />
        </div>

        {advantages.map((item, index) => (
          <div key={index}>
            <h3 className="mb-4">{item.title}</h3>
            <p className="paragraph-large leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Advantages;
