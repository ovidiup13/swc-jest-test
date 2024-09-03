/**
 * @type {import('jest').Config}
 */
const jestConfig = {
  rootDir: '.',
  testEnvironment: 'jsdom',
  clearMocks: true,
  testPathIgnorePatterns: [`<rootDir>/node_modules/`],
  transformIgnorePatterns: ['node_modules'],
  setupFilesAfterEnv: ['./jest-setup.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
};

module.exports = jestConfig;
