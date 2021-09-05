import TextField from '@/components/shared/TextField';
import Button from '@/components/shared/Button';
import withReactHookForm from '@/hocs/withReactHookForm';

export default function formCreator(schema, fields) {
  const Component = ({ onSubmit, isSubmitting, register, errorHandler }) => {
    return (
      <form onSubmit={onSubmit}>
        {fields.map((item, key) => {
          return (
            <TextField
              key={key}
              {...item}
              error={errorHandler(item.inputProps?.name)}
              inputProps={{ ...item.inputProps, register }}
            />
          );
        })}
        <Button type="submit" disabled={isSubmitting}>
          Ingresar
        </Button>
      </form>
    );
  };
  return () => withReactHookForm(schema)(Component);
}
