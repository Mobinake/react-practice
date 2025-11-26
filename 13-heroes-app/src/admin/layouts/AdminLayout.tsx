import { Outlet } from 'react-router';

export const AdminLayout = () => {
	return (
		<div className="bg-pink-400">
			<Outlet />
		</div>
	);
};
