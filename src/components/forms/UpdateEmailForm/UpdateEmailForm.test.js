import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FORMS_ERROR_MESSAGES } from '@/constants';
import UpdateEmailForm from '.';

describe('<UpdateEmailForm />', () => {
  let onSubmit;

  beforeEach(() => {
    onSubmit = jest.fn(() => new Promise(() => {}));
    render(<UpdateEmailForm onSubmit={onSubmit} />);
  });

  test('Renderiza correctamente', () => {
    //labels
    screen.getByText(/Correo electrónico/i);
    screen.getByText(/Contraseña/i);

    //button
    const button = screen.getByText(/Actualizar/i);
    expect(button).toHaveAttribute('type');
    expect(button.getAttribute('type')).toBe('submit');

    //inputs
    screen.getByPlaceholderText(/E-Mail/i);
    screen.getByPlaceholderText(/Contraseña/i);

    //helperText
    screen.getByText(
      /Por motivos de seguridad, necesitamos que ingrese nuevamente su clave de acceso./i,
    );
  });

  test('Si el formulario se completa correctamente, se envía el formulario', async () => {
    await userEvent.type(
      screen.getByPlaceholderText('E-Mail'),
      'alantoledo.work@gmail.com',
    );
    await userEvent.type(screen.getByPlaceholderText('Contraseña'), '12345678');
    await act(async () => userEvent.click(screen.getByText(/Actualizar/i)));

    expect(onSubmit).toBeCalledTimes(1);
  });

  test('Si el formulario no tiene los campos requeridos, NO envía el formulario y renderiza los errores correspondientes', async () => {
    await act(async () => userEvent.click(screen.getByText(/Actualizar/i)));
    expect(onSubmit).toBeCalledTimes(0);

    screen.getByText(FORMS_ERROR_MESSAGES.email.required);
    screen.getByText(FORMS_ERROR_MESSAGES.password.required);
  });

  test('Renderiza los mensajes de error correspondientes cuando los datos no són válidos', async () => {
    await userEvent.type(
      screen.getByPlaceholderText('E-Mail'),
      'alantoledo.mail.com',
    );

    await act(async () => userEvent.click(screen.getByText(/Actualizar/i)));
    screen.getByText(FORMS_ERROR_MESSAGES.email.valid);

    expect(onSubmit).toBeCalledTimes(0);
  });
});

describe('<UpdateEmailForm /> Submit', () => {
  test('Si el formulario se está enviando, se desactiva el botón', async () => {
    const onSubmit = jest.fn();
    render(<UpdateEmailForm onSubmit={onSubmit} isSubmitting={true} />);

    const button = screen.getByText(/Actualizar/i);
    await act(async () => {
      userEvent.click(button);
    });
    expect(button).toBeDisabled();
    expect(onSubmit).toBeCalledTimes(0);
  });
});
