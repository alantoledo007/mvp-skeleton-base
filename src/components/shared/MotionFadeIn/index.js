import { motion } from 'framer-motion';

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export default function MotionFadeIn(props) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      {...props}
    />
  );
}
