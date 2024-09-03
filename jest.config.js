/**
 * @type{import("@swc/core").Config}
 */
const jestSwcConfig = {
  sourceMaps: false,
  minify: false,
  module: {
    type: 'commonjs',
  },
  jsc: {
    baseUrl: '.',
    target: 'es2022',
    parser: {
      syntax: 'typescript',
      tsx: true,
      decorators: true,
    },
    transform: {
      react: {
        runtime: 'automatic',
      },
    },
    minify: {
      compress: false,
      mangle: false,
    },
    experimental: {
      plugins: [],
    },
  },
};

/**
 * @type {import('jest').Config}
 */
const jestConfig = {
  rootDir: '.',
  testEnvironment: 'jsdom',
  clearMocks: true,
  testPathIgnorePatterns: [`<rootDir>/node_modules/`],
  transformIgnorePatterns: [],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['@swc/jest', jestSwcConfig],
  },
};

module.exports = jestConfig;
