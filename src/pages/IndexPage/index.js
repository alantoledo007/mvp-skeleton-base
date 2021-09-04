import TextField from '@/components/shared/TextField';

export default function IndexPage() {
  return (
    <div>
      <TextField
        label="Input"
        helperText="Texto de ayuda"
        inputProps={{ placeholder: 'placeholder' }}
      />
      <TextField
        label="Input"
        error="Mensaje de error"
        inputProps={{ placeholder: 'placeholder' }}
      />
      <TextField
        label="Input"
        forceHelperText
        error="Mensaje de error"
        helperText="Texto de ayuda"
        inputProps={{ placeholder: 'placeholder' }}
      />
    </div>
  );
}
