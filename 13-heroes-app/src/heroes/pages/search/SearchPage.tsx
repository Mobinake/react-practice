import { Jumbotron } from '@/components/custom/Jumbotron';
import { HeroStats } from '@/heroes/components/HeroStats';

export const SearchPage = () => {
	return (
		<>
			<Jumbotron
				title="Buscando Heroes"
				description="Descubre a los heroes."
			/>
			<HeroStats />
		</>
	);
};

export default SearchPage;
