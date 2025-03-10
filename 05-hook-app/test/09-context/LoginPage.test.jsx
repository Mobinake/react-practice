/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { screen, render, fireEvent } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';

describe('Pruebas en Loading Page', () => {
	test('debe de mostrar el componente sin el usuario', () => {
		const user = {
			id: 2,
			name: '',
			email: '',
		};

		const user2 = {
			id: 233,
			name: 'juan',
			email: 'master@gmail.com',
		};

		render(
			<UserContext.Provider value={{ user: null }}>
				<LoginPage />
			</UserContext.Provider>
		);
		const preTag = screen.getByLabelText('pre');
		//limpia el html, luego dice que no contenga el texto de user
		expect(preTag.innerHTML).toContain('null');
		// screen.debug();
	});

	test('debe de llamar al setUser cuando se hace click en en el boton', () => {
		const user = {
			id: 233,
			name: 'juan',
			email: 'master@gmail.com',
		};

		//creamos la funcion para que sea usada por el test
		const setUserMock = jest.fn();
		//renderizamos el sitio web
		render(
			<UserContext.Provider value={{ user: user, setUser: setUserMock }}>
				<LoginPage />
			</UserContext.Provider>
		);
		//ubicamos el boton
		const btnSetUser = screen.getByRole('button');
		//hacemos click al boton
		fireEvent.click(btnSetUser);
		//esperamos que haya sido llamado con este objeto
		expect(setUserMock).toHaveBeenCalledWith({
			email: 'master@gmail.com',
			id: 233,
			name: 'juan',
		});
		// screen.debug();
	});
});
