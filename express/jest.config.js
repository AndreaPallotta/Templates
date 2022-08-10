module.exports = {
    rootDir: '.',
    moduleNameMapper: {
        '@auth/(.*)': '<rootDir>/auth/$1',
        '@errors/(.*)': '<rootDir>/errorHandling/$1',
        '@log/(.*)': '<rootDir>/logging/$1',
        '@root/(.*)': '<rootDir>/$1',
        '@routes/(.*)': '<rootDir>/endpoints/$1',
        '@utils/(.*)': '<rootDir>/utils/$1',
    },
};
