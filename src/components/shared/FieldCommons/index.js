import styled from 'styled-components';
import { colors } from '@/styles/theme';

export const Container = styled.div`
  display: grid;
  gap: 0.2em;
  margin-bottom: 1em;
`;

export const Label = styled.label`
  font-size: 0.9rem;
`;

export const HelperTextResolver = ({ forceHelperText, helperText, error }) => {
  return (
    <>
      {forceHelperText && (
        <>
          {helperText && <HelperText>{helperText}</HelperText>}
          {error && <HelperText error>{error}</HelperText>}
        </>
      )}
      {(error || helperText) && !forceHelperText && (
        <HelperText error={!!error}>{error || helperText}</HelperText>
      )}
    </>
  );
};

const HelperText = styled.span`
  font-size: 0.7rem;
  color: ${({ error }) => (error ? colors.red : '#858585')};
`;
