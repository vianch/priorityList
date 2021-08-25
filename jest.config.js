const testPathIgnorePatterns = [
  "/node_modules/",
  "<rootDir>/dist",
  "<rootDir>/types",
  "<rootDir>/.docker",
  "<rootDir>/.github",
  "<rootDir>/.husky",
  "<rootDir>/.next",
].filter((path) => !!path);

module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.ts?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.ts$",
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "utils/*.ts",
    "utils/*.tsx",
    "!utils/index.ts",
    "utils/**/*.ts",
    "utils/**/*.tsx",
    "!utils/**/index.ts",
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
  modulePaths: ["/src/theme"],
  preset: "ts-jest",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns,
  testEnvironment: "jsdom",
  watchPathIgnorePatterns: [".js$", ".styles.js$", ".styles.ts"],
  coverageReporters: ["json", "lcov", "text", "clover"],
  verbose: true,
};
