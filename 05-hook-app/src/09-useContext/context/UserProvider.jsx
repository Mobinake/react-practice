/* eslint-disable react/prop-types */
import { useState } from 'react';
import { UserContext } from './UserContext';

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState();

	return (
		<>
			{/* provee la informacion que requiere del usuario. usualmente se 
				devuelve un objeto con todos los datos relacionados al usuario */}
			<UserContext.Provider value={{ user, setUser }}>
				{children}
			</UserContext.Provider>
		</>
	);
};
