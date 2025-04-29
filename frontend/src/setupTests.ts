import '@testing-library/jest-dom';

// Mock Vite's import.meta.env
Object.defineProperty(window, 'import', {
  value: {
    meta: {
      env: {
        VITE_API_BASE_URL: 'http://localhost:8000/api',
        VITE_API_KEY: 'test-api-key',
        DEV: false
      }
    }
  }
});

// Ensure global fetch is defined
global.fetch = jest.fn(); 