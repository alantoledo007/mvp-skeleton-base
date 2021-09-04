import { string } from 'prop-types';

export default function ErrorMessage({ message }) {
  return <span>{message}</span>;
}

ErrorMessage.propTypes = {
  message: string.isRequired,
};
