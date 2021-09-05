import withReactHookForm from '@/hocs/withReactHookForm';
import FormMaker from '@/components/shared/FormMaker';
import schema from './schema';

const Form = (props) => {
  const fields = [
    {
      label: 'Correo electrónico',
      inputProps: {
        type: 'email',
        name: 'email',
        id: 'email',
        placeholder: 'E-Mail',
      },
    },
    {
      label: 'Contraseña',
      inputProps: {
        type: 'password',
        name: 'password',
        id: 'password',
        placeholder: 'Contraseña',
      },
    },
  ];

  const config = {
    submit: 'Ingresar',
  };

  return <FormMaker {...props} fields={fields} config={config} />;
};

const LoginForm = withReactHookForm(schema)(Form);

export default LoginForm;
