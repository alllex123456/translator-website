import Image from 'next/image';
import expertiseImage from '../../public/images/expertise.webp';

const Collaborations = () => {
  return (
    <div className="bg-dark-15 text-light-86 flex flex-col items-center my-[5rem] py-[10rem]">
      <div className="relative max-w-[80rem] bg-dark-25 py-20 radius px-[5rem]">
        <h2 className="text-light-92 mb-10">EXPERIENȚĂ</h2>
        <p className="paragraph-large text-light">
          Cu mai mult de 13 ani de experiență în domeniul traducerilor, m-am
          specializat într-o varietate de domenii, inclusiv afaceri, tehnologie,
          tehnică și multe altele. Indiferent de natura proiectului tău, am
          expertiza necesară pentru a-l gestiona cu succes.
        </p>
      </div>
      <div className="relative w-[100rem] h-[40rem] radius overflow-hidden lg:w-[100vw]">
        <Image
          src={expertiseImage}
          alt="dice reading: k-n-o-w"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Collaborations;
