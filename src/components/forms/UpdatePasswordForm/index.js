import withReactHookForm from '@/hocs/withReactHookForm';
import FormMaker from '@/components/shared/FormMaker';
import schema from './schema';
import fields from './fields';

const config = {
  submit: 'Actualizar contraseña',
};

const Form = (props) => {
  return <FormMaker {...props} fields={fields} config={config} />;
};

const UpdatePasswordForm = withReactHookForm(schema)(Form);

export default UpdatePasswordForm;
