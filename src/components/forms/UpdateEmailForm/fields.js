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
    helperText:
      'Por motivos de seguridad, necesitamos que ingrese nuevamente su clave de acceso.',
    inputProps: {
      type: 'password',
      name: 'password',
      id: 'password',
      placeholder: 'Contraseña',
    },
  },
];

export default fields;
