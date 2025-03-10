import { Navigate, Route, Routes, Link } from 'react-router';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { AboutPage } from './AboutPage';
import { NavBar } from './NavBar';

export const MainApp = () => {
	return (
		<>
			<h1>MainApp</h1>
			<NavBar />
			<hr />

			<Routes>
				<Route
					path='/'
					element={<HomePage />}
				/>
				<Route
					path='about'
					element={<AboutPage />}
				/>
				<Route
					path='login'
					element={<LoginPage />}
				/>
				{/* <Route
					path='/*'
					element={<LoginPage />}
				/> */}
				<Route
					path='/*'
					element={<Navigate to={'/about'} />}
				/>
			</Routes>
		</>
	);
};
