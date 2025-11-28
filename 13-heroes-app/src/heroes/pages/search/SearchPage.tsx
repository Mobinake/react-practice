import { Jumbotron } from '@/components/custom/Jumbotron';
import { HeroStats } from '@/heroes/components/HeroStats';
import { SearchControls } from './ui/SearchControls';

export const SearchPage = () => {
	return (
		<>
			<Jumbotron
				title="Buscando Heroes"
				description="Descubre a los heroes."
			/>
			{/* Stats */}
			<HeroStats />

			{/* Filters */}
			<SearchControls />
		</>
	);
};

export default SearchPage;
