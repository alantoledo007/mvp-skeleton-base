import { FORMS_ERROR_MESSAGES } from '@/constants';
import * as yup from 'yup';

const password_messages = FORMS_ERROR_MESSAGES.password;

const schema = yup.object().shape({
  current_password: yup.string().required(password_messages.required),
  new_password: yup
    .string()
    .required(password_messages.required)
    .min(6, password_messages.min)
    .max(16, password_messages.max)
    .test('new_password', password_messages.notEquals, (val, ctx) => {
      return val !== ctx.parent.current_password;
    }),
});

export default schema;
