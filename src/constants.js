export const PATH_ROUTES = {
  index: '/',
  login: '/login',
  register: '/register',
  reset_password: '/reset-password',
  home: '/home',
  profile: '/profile',

  account: {
    index: '/account',
    setting: '/account/setting',
    update_password: '/account/update-password',
    update_email: '/account/update-email',
  },
};

export const USER_STATES = {
  NOT_KNOW: undefined,
  NOT_LOGGED: null,
};

export const RECORD_STATES = {
  LOADING: null,
};

export const FORMS_ERROR_MESSAGES = {
  fullname: {
    required: 'Por favor, ingrese su nombre completo.',
    valid: 'El nombre ingresado no es válido.',
  },
  email: {
    required: 'El correo electrónico es requerido.',
    valid: 'Se requiere un correo electrónico válido.',
  },
  password: {
    required: 'Se requiere una contraseña.',
    min: 'Se requiere como mínimo 6 caracteres.',
    max: 'La contraseña no puede tener más de 16 caracteres.',
    notEquals: 'Las contraseñas no deben ser iguales.',
  },
  description: {
    required: 'Por favor ingrese una descripción.',
    min: 'Se requieren 10 caractéres como mínimo.',
  },
  tyc: {
    oneOf: 'Debe aceptar los términos y condiciones para continuar.',
  },
};
