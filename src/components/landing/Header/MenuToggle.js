import { motion } from 'framer-motion';
import { ButtonToggle } from './styled';

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    {...props}
  />
);

export default function MenuToggle({ toggle }) {
  return (
    <ButtonToggle onClick={toggle}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: 'M 2 4 L 21 4' },
            open: { d: 'M 5 18 L 18 5' },
          }}
        />
        <Path
          d="M 2 11.5 L 21 11.5"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 19 L 21 19' },
            open: { d: 'M 5 5 L 18 18' },
          }}
        />
      </svg>
    </ButtonToggle>
  );
}
