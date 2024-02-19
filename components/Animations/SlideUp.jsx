import { motion } from 'framer-motion';
import { fadeSlideUpVariant } from '@/framer-variants/framer-variants';

const SlideUp = ({ children, className, custom }) => {
  return (
    <motion.div
      variants={fadeSlideUpVariant}
      initial="initial"
      whileInView="animate"
      custom={custom}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;
