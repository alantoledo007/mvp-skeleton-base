import styled from 'styled-components';
import { forwardRef } from 'react';
import {
  Container,
  Label,
  HelperTextResolver,
} from '@/components/shared/FieldCommons';

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
        {label && <Label htmlFor={inputProps.id}>{label}</Label>}
        <Input error={error} ref={ref} {...inputProps} />
        <HelperTextResolver
          helperText={helperText}
          error={error}
          forceHelperText={forceHelperText}
        />
      </Container>
    );
  },
);

TextField.displayName = 'TextField';

export default TextField;

const Input = styled.input`
  height: 3em;
  border-radius: 0.3em;
  border: 1px solid ${({ error }) => (error ? '#f55d42' : '#dedede')};
  padding-left: 0.5em;
  color: #444;
`;
