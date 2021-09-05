import { FORMS_ERROR_MESSAGES } from '@/constants';
import * as yup from 'yup';

const email_messages = FORMS_ERROR_MESSAGES.email;

const schema = yup.object().shape({
  email: yup
    .string()
    .email(email_messages.valid)
    .required(email_messages.required),
});

export default schema;
