import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import createFormErrorHandler from '@/utils/createFormErrorHandler';

const withReactHookForm = (schema) => (Component) => (props) => {
  if (!schema) throw new Error('The yup schema is required');
  if (typeof props.onSubmit !== 'function')
    throw new Error('The onSubmit prop from component must be a function');

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const errorHandler = createFormErrorHandler(errors);

  return (
    <Component
      register={register}
      isSubmitting={isSubmitting}
      errorHandler={errorHandler}
      handleSubmit={handleSubmit}
      {...props}
      onSubmitDefault={props.onSubmit}
      onSubmit={handleSubmit(props.onSubmit)}
    />
  );
};

export default withReactHookForm;
