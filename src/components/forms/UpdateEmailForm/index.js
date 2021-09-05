import withReactHookForm from '@/hocs/withReactHookForm';
import FormMaker from '@/components/shared/FormMaker';
import schema from './schema';
import fields from './fields';

const config = {
  submit: 'Actualizar',
};

const Form = (props) => {
  return <FormMaker {...props} fields={fields} config={config} />;
};

const UpdateEmailForm = withReactHookForm(schema)(Form);

export default UpdateEmailForm;
