(module.exports = {
	testEnvironment: 'jsdom',
	setupFiles: ['./jest.setup.js'],
}),
	(transform = {
		'^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
	});
