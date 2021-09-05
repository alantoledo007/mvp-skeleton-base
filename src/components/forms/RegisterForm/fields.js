const fields = [
  {
    label: 'Nombre completo',
    inputProps: {
      type: 'text',
      name: 'fullname',
      id: 'fullname',
      placeholder: 'Nombre completo',
    },
  },
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

export default fields;
