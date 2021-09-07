export default function getErrorMessage(code, exact = false) {
  const messages = {
    //firebase
    'permission-denied': 'No tienes permisos suficientes.',
    'resource-exhausted':
      'Accesos denegado temporalmente por comportamientos sospechosos.',
    'auth/user-not-found':
      'El correo electrónico y/o la contraseña son incorrectos.',
    'auth/wrong-password': exact
      ? 'La contraseña ingresada es incorrecta'
      : 'El correo electrónico y/o la contraseña son incorrectos.',

    //others
  };

  return (
    messages[code] || 'Ocurrió un error y estamos trabajando en su solución.'
  );
}
