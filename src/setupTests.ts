import '@testing-library/jest-dom';

beforeEach(() => {
  localStorage.clear();
});

const originalConsoleError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (args[0]?.toString().includes('React')) {
      throw new Error(...args);
    }
    originalConsoleError(...args);
  };
});

afterAll(() => {
  console.error = originalConsoleError;
});