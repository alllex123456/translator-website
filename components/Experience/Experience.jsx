import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

import expertiseImage from '../../public/images/expertise.webp';

const Collaborations = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);

  return (
    <div
      ref={container}
      className="relative bg-dark-15 text-light-86 flex flex-col items-center my-[5rem] py-[10rem]"
    >
      <div className="relative max-w-[80rem] bg-dark-25 py-20 radius px-[5rem]">
        <h2 className="text-light-92 mb-10">EXPERIENȚĂ</h2>
        <p className="paragraph-large text-light">
          Cu mai mult de 14 ani de experiență în domeniul traducerilor, m-am
          specializat într-o varietate de domenii, inclusiv afaceri, tehnologie,
          tehnică și multe altele. Indiferent de natura proiectului tău, am
          expertiza necesară pentru a-l gestiona cu succes.
        </p>
      </div>

      <div className="relative h-[300vh] w-[100%] ||| md:hidden">
        <div className="sticky overflow-hidden top-0 w-[100%] h-[100vh]">
          <motion.div
            style={{ scale, transformOrigin: 'top' }}
            className="w-[100%] h-[100%] top-[5rem] absolute flex justify-center"
          >
            <div className="relative w-[25vw] h-[25vh]">
              <Image
                src={expertiseImage}
                fill
                alt="image"
                placeholder="blur"
                className="object-cover radius"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Collaborations;
