import styled from 'styled-components';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const TextField = forwardRef(
  (
    {
      label = null,
      error = null,
      helperText = null,
      forceHelperText = false,
      inputProps = {},
    },
    ref,
  ) => {
    return (
      <Container>
        {label && <Label>{label}</Label>}
        <Input error={error} ref={ref} {...inputProps} />
        {forceHelperText && (
          <>
            {helperText && <HelperText>{helperText}</HelperText>}
            {error && <HelperText error>{error}</HelperText>}
          </>
        )}
        {(error || helperText) && !forceHelperText && (
          <HelperText error={!!error}>{error || helperText}</HelperText>
        )}
      </Container>
    );
  },
);

TextField.displayName = 'TextField';

TextField.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  helperText: PropTypes.string,
  helperWithError: PropTypes.bool,
  inputProps: PropTypes.object,
};
export default TextField;

const Label = styled.label`
  font-size: 0.9rem;
`;

const Container = styled.div`
  display: grid;
  gap: 0.2em;
  margin-bottom: 1em;
`;

const HelperText = styled.span`
  font-size: 0.7rem;
  color: ${({ error }) => (error ? '#f55d42' : '#858585')};
`;

const Input = styled.input`
  height: 3em;
  border-radius: 0.3em;
  border: 1px solid ${({ error }) => (error ? '#f55d42' : '#dedede')};
  padding-left: 0.5em;
  color: #444;
`;
