import { render } from '@testing-library/react';
import { GifItem } from '../../components/GifItem';

describe('Este modulo hace testing de <GifItem/>', () => {
	const title = 'Título de prueba';
	const url = 'https://media.giphy.com/media/example/giphy.gif';

	test('debe hacer match con el snapshot', () => {
		const { container } = render(
			<GifItem
				title={title}
				url={url}
			/>
		);
		expect(container).toMatchSnapshot();
	});
});
