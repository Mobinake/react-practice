import { Heart } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Jumbotron } from '@/components/custom/Jumbotron';
import { HeroStats } from '@/heroes/components/HeroStats';
import { HeroGrid } from '@/heroes/components/HeroGrid';
import { useState } from 'react';
import { Pagination } from '@/components/custom/Pagination';

export const HomePage = () => {
	const [activeTab, setActiveTab] = useState<
		'all' | 'favorites' | 'heroes' | 'villains'
	>('all');

	return (
		<div className="mx-8">
			<>
				<Jumbotron
					title="Universo de Heroes"
					description="Descubre a los heroes."
				/>
				{/* Stats Dashboard */}
				<HeroStats />

				{/* Tabs */}
				<Tabs
					value={activeTab}
					className="mb-8"
				>
					<TabsList className="grid w-full grid-cols-4">
						<TabsTrigger
							value="all"
							onClick={() => setActiveTab('all')}
						>
							All Characters
						</TabsTrigger>
						<TabsTrigger
							value="favorites"
							className="flex items-center gap-2"
							onClick={() => setActiveTab('favorites')}
						>
							<Heart className="h-4 w-4" />
							Favorites
						</TabsTrigger>
						<TabsTrigger
							value="heroes"
							onClick={() => setActiveTab('heroes')}
						>
							Heroes
						</TabsTrigger>
						<TabsTrigger
							value="villains"
							onClick={() => setActiveTab('villains')}
						>
							Villains
						</TabsTrigger>
					</TabsList>
					<TabsContent value={'all'}>
						<h1>Todos </h1>
						{/* Todos los personajes */}
						<HeroGrid />
					</TabsContent>
					<TabsContent value={'favorites'}>
						{/* Favoritos */}
						<h1>Favoritos</h1>
						<HeroGrid />
					</TabsContent>
					<TabsContent value={'heroes'}>
						{/* Heroes */}
						<h1>Heroes</h1>
						<HeroGrid />
					</TabsContent>
					<TabsContent value={'villains'}>
						{/* Villanos */}
						<h1>Villanos</h1>
						<HeroGrid />
					</TabsContent>
				</Tabs>

				<Pagination totalPages={9} />
			</>
		</div>
	);
};
