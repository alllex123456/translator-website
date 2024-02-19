import { motion } from 'framer-motion';
import { fadeInVariant } from '@/framer-variants/framer-variants';

const FadeIn = ({ children, className }) => {
  return (
    <motion.div
      variants={fadeInVariant}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
