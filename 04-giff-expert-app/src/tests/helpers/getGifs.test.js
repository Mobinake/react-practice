import { getGifs } from '../../helpers/getGifs';

describe('Prueba en getFigs', () => {
	test('Debe retornar un areglo de gifg', async () => {
		const gifs = await getGifs('One Punch');
		expect(gifs.length).toBeGreaterThan(0);
		expect(gifs[0]).toEqual({
			id: expect.any(String),
			title: expect.any(String),
			url: expect.any(String),
		});
	});
});
