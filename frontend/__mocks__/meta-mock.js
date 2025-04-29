// Mock implementation for Vite's import.meta.env
global.import = {
  meta: {
    env: {
      VITE_API_BASE_URL: 'http://localhost:8000/api',
      VITE_API_KEY: 'test-api-key',
      DEV: false
    }
  }
};

export default {}; 