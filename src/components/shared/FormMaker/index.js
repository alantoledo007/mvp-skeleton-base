import TextField from '@/components/shared/TextField';
import Button from '@/components/shared/Button';

export default function FormMaker({
  onSubmit,
  isSubmitting,
  register,
  errorHandler,
  fields,
  config,
}) {
  return (
    <form onSubmit={onSubmit}>
      {fields.map((item, key) => (
        <TextField
          key={key}
          {...item}
          error={item.inputProps?.name && errorHandler(item.inputProps.name)}
          inputProps={{
            ...item.inputProps,
            ...(item.inputProps?.name ? register(item.inputProps.name) : {}),
          }}
        />
      ))}

      <Button type="submit" disabled={isSubmitting}>
        {config?.submit || 'Enviar'}
      </Button>
    </form>
  );
}
