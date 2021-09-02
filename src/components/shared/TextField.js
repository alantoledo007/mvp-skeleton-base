import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function TextField({
  label = null,
  error = null,
  helperText = null,
  helperWithError = false,
  inputProps = {},
}) {
  return (
    <div>
      {label && <label>{label}</label>}
      <input {...inputProps} />
      {helperWithError && (
        <>
          {error && <HelperText error>{error}</HelperText>}
          {helperText && <HelperText>{helperText}</HelperText>}
        </>
      )}
      {(error || helperText) && (
        <HelperText error={!!error}>{error || helperText}</HelperText>
      )}
    </div>
  );
}

TextField.displayName = 'TextField';

TextField.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  helperText: PropTypes.string,
  helperWithError: PropTypes.bool,
  inputProps: PropTypes.object,
};

export const HelperText = styled.span``;
