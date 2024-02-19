import Link from 'next/link';
import Section from '../general/Section';

const Footer = () => {
  return (
    <div className="bg-dark-15 text-light px-4 text-center">
      <Section>
        <div className="flex flex-col gap-4 justify-center items-center paragraph-medium">
          <p className="text-light">
            &copy; {new Date().getFullYear()} Sens Transpus. Design și
            implementare aparținând S.C. ARX Logicwave S.R.L.
          </p>
          <Link href="https://arx-logicwave.ro" target="_blank">
            Realizare website și aplicații web
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default Footer;
