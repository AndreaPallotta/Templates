module.exports = {
    rootDir: '.',
    moduleNameMapper: {
        '@root/(.*)': '<rootDir>/$1',
        '@utils/(.*)': '<rootDir>/utils/$1',
        '@log/(.*)': '<rootDir>/logging/$1',
        '@mid/(.*)': '<rootDir>/middleware/$1',
        '@events/(.*)': '<rootDir>/events/$1',
        '@stores/(.*)': '<rootDir>/stores/$1',
    },
};
