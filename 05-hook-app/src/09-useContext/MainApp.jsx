import { Navigate, Route, Routes } from 'react-router';
import { AboutPage, HomePage, LoginPage, NavBar } from './__index__';
import { UserProvider } from './context/__index__';

export const MainApp = () => {
	return (
		<UserProvider>
			<h1>MainApp</h1>
			<NavBar />
			<hr />

			<Routes>
				<Route
					path="/"
					element={<HomePage />}
				/>
				<Route
					path="about"
					element={<AboutPage />}
				/>
				<Route
					path="login"
					element={<LoginPage />}
				/>
				<Route
					path="/*"
					element={<Navigate to={'/about'} />}
				/>
			</Routes>
		</UserProvider>
	);
};
