import { forwardRef } from 'react';
import {
  Container,
  HelperTextResolver,
  Label as LabelCommon,
} from '@/components/shared/FieldCommons';
import styled from 'styled-components';

const Checkbox = forwardRef(
  ({ label, inputProps, helperText, error, forceHelperText }, ref) => {
    return (
      <Container>
        <InputLabelContainer>
          <Input ref={ref} {...inputProps} type="checkbox" />
          <Label htmlFor={inputProps.id}>{label}</Label>
        </InputLabelContainer>
        <HelperTextResolver
          helperText={helperText}
          error={error}
          forceHelperText={forceHelperText}
        />
      </Container>
    );
  },
);

export default Checkbox;

const Input = styled.input`
  margin-top: 0.15em;
`;

const Label = styled(LabelCommon)`
  line-height: 1.2;
  font-size: 0.8rem;
`;

const InputLabelContainer = styled(Container)`
  grid-template-columns: auto 1fr;
  gap: 0.5em;
  align-items: flex-start;
  margin-bottom: 0;
`;
