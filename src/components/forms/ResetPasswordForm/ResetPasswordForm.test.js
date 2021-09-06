import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FORMS_ERROR_MESSAGES } from '@/constants';
import ResetPasswordForm from '.';

describe('<ResetPasswordForm />', () => {
  let onSubmit;

  beforeEach(() => {
    onSubmit = jest.fn(() => new Promise(() => {}));
    render(<ResetPasswordForm onSubmit={onSubmit} />);
  });

  test('Renderiza correctamente', () => {
    //labels
    screen.getByText(/Correo electrónico/i);

    //button
    const button = screen.getByText(/Enviar/i);
    expect(button).toHaveAttribute('type');
    expect(button.getAttribute('type')).toBe('submit');

    //inputs
    screen.getByPlaceholderText(/E-Mail/i);
  });

  test('Si el formulario se completa correctamente, se envía el formulario', async () => {
    await userEvent.type(
      screen.getByPlaceholderText('E-Mail'),
      'alantoledo.work@gmail.com',
    );
    await act(async () => userEvent.click(screen.getByText(/Enviar/i)));

    expect(onSubmit).toBeCalledTimes(1);
  });

  test('Si el formulario no tiene los campos requeridos, NO envía el formulario y renderiza los errores correspondientes', async () => {
    await act(async () => userEvent.click(screen.getByText(/Enviar/i)));
    expect(onSubmit).toBeCalledTimes(0);

    screen.getByText(FORMS_ERROR_MESSAGES.email.required);
  });

  test('Renderiza los mensajes de error correspondientes cuando los datos no són válidos', async () => {
    await userEvent.type(
      screen.getByPlaceholderText('E-Mail'),
      'alantoledo.mail.com',
    );

    await act(async () => userEvent.click(screen.getByText(/Enviar/i)));
    screen.getByText(FORMS_ERROR_MESSAGES.email.valid);

    expect(onSubmit).toBeCalledTimes(0);
  });
});

describe('<ResetPasswordForm /> Submit', () => {
  test('Si el formulario se está enviando, se desactiva el botón', async () => {
    const onSubmit = jest.fn();
    render(<ResetPasswordForm onSubmit={onSubmit} isSubmitting={true} />);

    const button = screen.getByText(/Enviar/i);
    await act(async () => {
      userEvent.click(button);
    });
    expect(button).toBeDisabled();
    expect(onSubmit).toBeCalledTimes(0);
  });
});
