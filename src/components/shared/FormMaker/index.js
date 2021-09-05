import TextField from '@/components/shared/TextField';
import Button from '@/components/shared/Button';
import Checkbox from '@/components/shared/Checkbox';

export default function FormMaker({
  onSubmit,
  isSubmitting,
  register,
  errorHandler,
  fields,
  config,
}) {
  const fieldResolver = (item, key) => {
    if (item.kind === 'checkbox') {
      return (
        <Checkbox
          key={key}
          {...item}
          error={item.inputProps?.name && errorHandler(item.inputProps.name)}
          inputProps={{
            ...item.inputProps,
            ...(item.inputProps?.name ? register(item.inputProps.name) : {}),
          }}
        />
      );
    }

    if (item.kind === 'radius') {
      return 'radius';
    }

    return (
      <TextField
        key={key}
        {...item}
        error={item.inputProps?.name && errorHandler(item.inputProps.name)}
        inputProps={{
          ...item.inputProps,
          ...(item.inputProps?.name ? register(item.inputProps.name) : {}),
        }}
      />
    );
  };

  return (
    <form onSubmit={onSubmit}>
      {fields.map(fieldResolver)}

      <Button type="submit" disabled={isSubmitting}>
        {config?.submit || 'Enviar'}
      </Button>
    </form>
  );
}
