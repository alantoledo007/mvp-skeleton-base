import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FORMS_ERROR_MESSAGES } from '@/constants';
import UpdatePasswordForm from '.';

describe('<UpdatePasswordForm />', () => {
  let onSubmit;

  beforeEach(() => {
    onSubmit = jest.fn(() => new Promise(() => {}));
    render(<UpdatePasswordForm onSubmit={onSubmit} />);
  });

  test('Renderiza correctamente', () => {
    //labels
    screen.getByText(/Contraseña actual/i);
    screen.getByText(/Nueva contraseña/i);

    //button
    const button = screen.getByText(/Actualizar contraseña/i);
    expect(button).toHaveAttribute('type');
    expect(button.getAttribute('type')).toBe('submit');

    //inputs
    screen.getByPlaceholderText(/Contraseña actual/i);
    screen.getByPlaceholderText(/Nueva contraseña/i);

    //helperText
    screen.getByText(
      /Por motivos de seguridad, necesitamos que ingrese nuevamente su clave de acceso./i,
    );
    screen.getByText(
      /Esta será su nueva clave de acceso, no repita la actual./i,
    );
  });

  test('Si el formulario se completa correctamente, se envía el formulario', async () => {
    await userEvent.type(
      screen.getByPlaceholderText(/Contraseña actual/i),
      '1234',
    );
    await userEvent.type(
      screen.getByPlaceholderText(/Nueva contraseña/i),
      '12345678',
    );
    await act(async () =>
      userEvent.click(screen.getByText(/Actualizar contraseña/i)),
    );

    expect(onSubmit).toBeCalledTimes(1);
  });

  test('Si el formulario no tiene los campos requeridos, NO envía el formulario y renderiza los errores correspondientes', async () => {
    await act(async () =>
      userEvent.click(screen.getByText(/Actualizar contraseña/i)),
    );
    expect(onSubmit).toBeCalledTimes(0);

    const passwordsField = screen.queryAllByText(
      FORMS_ERROR_MESSAGES.password.required,
    );
    expect(passwordsField.length).toBe(2);
  });

  test('Renderiza los mensajes de error correspondientes cuando los datos no són válidos', async () => {
    await userEvent.type(
      screen.getByPlaceholderText(/Nueva contraseña/i),
      '1234',
    );

    await act(async () =>
      userEvent.click(screen.getByText(/Actualizar contraseña/i)),
    );
    screen.getByText(FORMS_ERROR_MESSAGES.password.min);

    expect(onSubmit).toBeCalledTimes(0);
  });

  test('Si las contraseñas son iguales, restorna un mensaje de error y no envía el formulario', async () => {
    await userEvent.type(
      screen.getByPlaceholderText(/Contraseña actual/i),
      '12345678',
    );

    await userEvent.type(
      screen.getByPlaceholderText(/Nueva contraseña/i),
      '12345678',
    );

    await act(async () =>
      userEvent.click(screen.getByText(/Actualizar contraseña/i)),
    );
    screen.getByText(FORMS_ERROR_MESSAGES.password.notEquals);

    expect(onSubmit).toBeCalledTimes(0);
  });
});

describe('<UpdatePasswordForm /> Submit', () => {
  test('Si el formulario se está enviando, se desactiva el botón', async () => {
    const onSubmit = jest.fn();
    render(<UpdatePasswordForm onSubmit={onSubmit} isSubmitting={true} />);

    const button = screen.getByText(/Actualizar contraseña/i);
    await act(async () => {
      userEvent.click(button);
    });
    expect(button).toBeDisabled();
    expect(onSubmit).toBeCalledTimes(0);
  });
});
