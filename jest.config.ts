/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  roots: [
    "<rootDir>"
  ],
  testRegex: 'test/(.+)\\.test\\.(jsx?|tsx?)$',
  transform: {
    "^.+\\.tsx?$": 'ts-jest'
  },
  // preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};