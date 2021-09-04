const createFormErrorHandler = (errors) => (field) =>
  errors && errors[field]?.message && <span>{errors[field]?.message}</span>;

export default createFormErrorHandler;
