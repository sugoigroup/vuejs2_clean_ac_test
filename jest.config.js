module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transformIgnorePatterns: [
      '/node_modules/(?!@babel\/runtime)'
  ],
  moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
  }
}
