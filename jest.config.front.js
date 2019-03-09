const jest = require('jest');

module.exports = {
  collectCoverageFrom: [
    // 'packages/strapi-admin/admin/src/**/**/*.{js,jsx}',
    'packages/strapi-plugin-content-type-builder/admin/src/**/**/*.js',
    'packages/strapi-plugin-content-type-builder/admin/src/InjectedComponents/*.js',
    'packages/strapi-plugin-content-type-builder/admin/src/InjectedComponents/tests/*.js',
    '!packages/strapi-plugin-content-type-builder/admin/src/containers/AppOld/*.js',
    '!packages/strapi-plugin-content-type-builder/admin/src/containers/HomePageOld/*.js',
    '!packages/strapi-plugin-content-type-builder/admin/src/containers/ModelPageOld/*.js',
    '!packages/strapi-plugin-content-type-builder/admin/src/containers/Form/*.js',
    '!packages/strapi-plugin-content-type-builder/admin/src/containers/Form/utils/*.js',
    '!packages/strapi-plugin-content-type-builder/admin/src/utils/*.js',
    // 'packages/strapi-plugin-**/**/admin/src/**/**/*.{js,jsx}',
    '!packages/strapi-admin/admin/src/*.{js,jsx}',
    '!packages/strapi-plugin-**/**/admin/src/*.{js,jsx}',
    '!packages/strapi-admin/admin/src/**/**/tests/*.test.{js,jsx}',
    '!packages/strapi-plugin-*/admin/src/**/**/tests/*.test.{js,jsx}',
  ],
  coverageThreshold: {
    global: {
      // NOTE: This should be increased at some point
      statements: 20,
      branches: 20,
      functions: 20,
      lines: 20,
    },
  },
  globals: {
    __webpack_public_path__: 'http://localhost:4000',
    strapi: {},
  },
  // NOTE: Should be dynamic
  moduleDirectories: [
    'node_modules',
    // '<rootDir>/packages/strapi-admin/admin/src',
    '<rootDir>/packages/strapi-helper-plugin/node_modules',
    '<rootDir>/packages/strapi-helper-plugin',
    '<rootDir>/packages/strapi-helper-plugin/lib/src',
  ],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/packages/strapi-helper-plugin/lib/internals/mocks/cssModule.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/packages/strapi-helper-plugin/lib/internals/mocks/image.js',
  },
  rootDir: process.cwd(),
  setupTestFrameworkScriptFile: '<rootDir>/packages/strapi-helper-plugin/lib/internals/testing/test-bundler.js',
  setupFiles: [
    '<rootDir>/packages/strapi-helper-plugin/node_modules/raf/polyfill',
    '<rootDir>/packages/strapi-helper-plugin/lib/internals/testing/enzyme-setup.js',
    '<rootDir>/packages/strapi-helper-plugin/lib/internals/testing/strapi.js'
  ],
  testRegex: 'tests/.*\\.test\\.js$',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/fileTransformer.js',

  },
  testURL: 'http://localhost:4000/admin',
};

