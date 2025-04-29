// Mock for Vite's import.meta.env
global.import = { 
  meta: { 
    env: { 
      VITE_API_BASE_URL: 'http://localhost:8000/api',
      VITE_API_KEY: 'test-api-key',
      DEV: false
    } 
  } 
};

// Mock localStorage
global.localStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  key: jest.fn(),
  length: 0
}; 