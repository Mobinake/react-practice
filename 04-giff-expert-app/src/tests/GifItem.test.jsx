import { GifItem } from '../components/GifItem';
import { render, screen } from '@testing-library/react';
describe('Este modulo hace testing de GifItem', () => {
	const title = test('Debe enviarse la prop de titulo', () => {
		const { container } = render(<GifItem title={title} />);
		expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
			title
		);
	});
	test('Debe enviarse la prop de url', () => {
		return;
	});
	test('Debe funcionar el snapshot', () => {
		return;
	});
});
