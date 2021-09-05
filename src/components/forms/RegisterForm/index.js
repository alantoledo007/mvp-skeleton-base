import withReactHookForm from '@/hocs/withReactHookForm';
import FormMaker from '@/components/shared/FormMaker';
import schema from './schema';
import fields from './fields';

const config = { submit: 'Registrarse' };

const Form = (props) => {
  return <FormMaker {...props} fields={fields} config={config} />;
};

const RegisterForm = withReactHookForm(schema)(Form);

export default RegisterForm;
