/* eslint-disable no-undef */

describe('Pruebas en <DemoComponent></DemoComponent>', () => {
	test('No debe fallar', () => {
		const msg1 = 'Hola, react.';
		const msg2 = msg1.trim();

		expect(msg1).toBe(msg2);
	});
});
