const fields = [
  {
    label: 'Contraseña actual',
    helperText:
      'Por motivos de seguridad, necesitamos que ingrese nuevamente su clave de acceso.',
    inputProps: {
      type: 'password',
      name: 'current_password',
      id: 'current_password',
      placeholder: 'Contraseña actual',
    },
  },
  {
    label: 'Nueva contraseña',
    helperText: 'Esta será su nueva clave de acceso, no repita la actual.',
    inputProps: {
      type: 'password',
      name: 'new_password',
      id: 'new_password',
      placeholder: 'Nueva contraseña',
    },
  },
];

export default fields;
