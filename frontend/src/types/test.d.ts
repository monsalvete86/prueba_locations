import '@testing-library/jest-dom/extend-expect';

declare namespace NodeJS {
  interface Global {
    fetch: typeof fetch;
  }
} 