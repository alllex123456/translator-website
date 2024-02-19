import Section from '../general/Section';
import FadeIn from '../Animations/FadeIn';
import SlideUp from '../Animations/SlideUp';

const Pricing = () => {
  return (
    <div className="bg-dark-10">
      <Section>
        <div className="grid gap-[10rem] grid-cols-2 px-10 lg:gap-10 md:grid-cols-1">
          <SlideUp className="text-light-80 w-[80%] lg:w-[100%]">
            <h4 className="text-light-83 mb-10">
              Traduceri profesionale la prețuri competitive, adaptate nevoilor
              și bugetului fiecărui client. Fiecare proiect este unic, iar
              prețurile variază în funcție de complexitate, volum și termenul de
              livrare. Pentru a obține o ofertă de preț, îmi poți trimite
              detalii despre proiectul tău prin Whatsapp sau folosind formularul
              de contact de mai jos.
            </h4>
            <p className="paragraph-large mb-4 text-light">
              Deși prioritățile mele sunt calitatea și precizia, mă angajez să
              ofer servicii de traducere la prețuri accesibile, astfel încât să
              poți beneficia de cele mai bune soluții lingvistice fără a depăși
              bugetul stabilit.
            </p>
            <p className="paragraph-large text-light">
              Pentru orice întrebări legate de prețuri sau pentru a solicita o
              ofertă personalizată, nu ezita să mă contactezi. Sunt aici pentru
              a te ajuta să îți atingi obiectivele lingvistice în cel mai
              eficient și economic mod posibil.
            </p>
          </SlideUp>
          <FadeIn className="border border-dark-25 p-20 flex flex-col h-[30rem] justify-self-center self-center radius text-light-83 text-xl">
            <p className="text-light">începând de la</p>
            <h2 className="text-light-92">25 lei</h2>
            <h5 className="text-light-83">pagina standard*</h5>
            <p className="mt-auto text-light">*2000 caractere cu spații</p>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
};

export default Pricing;
