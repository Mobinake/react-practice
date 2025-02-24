/* eslint-disable no-undef */
describe('Pruebas en DemoComponent', () => {
	test('Probando y no debe fallar', () => {
		const msg1 = 'hola hola';
		const msg2 = msg1.trim();
		expect(msg1).toBe(msg2);
	});
	test('Probando y puede fallar', () => {
		const msg1 = 'hola hola';
		const msg2 = msg1.trim();
		expect(msg1).toBe(msg2);
	});
});
