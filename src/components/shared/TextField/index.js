import styled from 'styled-components';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const TextField = forwardRef(
  (
    {
      label = null,
      error = null,
      helperText = null,
      helperWithError = false,
      inputProps = {},
    },
    ref,
  ) => {
    return (
      <div>
        {label && <label>{label}</label>}
        <input ref={ref} {...inputProps} />
        {helperWithError && (
          <>
            {helperText && <HelperText>{helperText}</HelperText>}
            {error && <HelperText error>{error}</HelperText>}
          </>
        )}
        {(error || helperText) && (
          <HelperText error={!!error}>{error || helperText}</HelperText>
        )}
      </div>
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

const HelperText = styled.span``;
