import { useContext } from 'react';
import { UserContext } from './context/__index__';

export const LoginPage = () => {
	const { user, setUser } = useContext(UserContext);
	console.log(user);
	return (
		<>
			<h1>LoginPage</h1>
			<hr />

			<pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>

			<button
				aria-label="btn-setUser"
				onClick={() =>
					setUser({
						id: 233,
						name: 'juan',
						email: 'master@gmail.com',
					})
				}
				className="btn btn-primary"
			>
				Set User
			</button>
		</>
	);
};
