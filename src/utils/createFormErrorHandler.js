const createFormErrorHandler = (errors) => (field) =>
  errors && errors[field]?.message;

export default createFormErrorHandler;
