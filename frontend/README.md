# Locations App

A React and TypeScript frontend application that displays a list of locations from a Laravel backend API.

## Project Overview

This frontend application consumes a Laravel REST API that provides a list of locations. The application is built with:

- React with TypeScript
- Vite as the build tool
- Material UI for the user interface
- Axios for API requests
- React Router for navigation

## Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- A running Laravel backend with the locations API endpoint

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd locations-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory with the following content:
```
VITE_API_BASE_URL=http://localhost:8000/api
VITE_API_KEY=your_secret_api_key_here
```

Replace `your_secret_api_key_here` with the actual API key configured in your Laravel backend.

## Running the Application

To start the development server:

```bash
npm run dev
```

This will start the application at `http://localhost:5173` (or another port if 5173 is in use).

## Building for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
src/
├── assets/          # Static assets like images
├── components/      # React components
│   ├── LocationCard.tsx     # Card component for each location
│   └── LocationsList.tsx    # Component that fetches and displays locations
├── services/        # API services
│   └── api.service.ts       # Service for API calls
├── types/           # TypeScript type definitions
│   └── location.ts          # Location interface
├── App.tsx          # Main application component
└── main.tsx         # Application entry point
```

## API Integration

The application uses Axios to communicate with the backend API. The API service is configured in `src/services/api.service.ts`. It uses the environment variables for the API base URL and API key.

The API key is included in the request headers as `X-API-Key`.

## Testing

To run tests:

```bash
npm test
```

The test suite includes:
- Unit tests for components
- Tests for API integration with mocked responses

## Code Quality

The project includes:
- ESLint for code linting
- Prettier for code formatting

To run linting:

```bash
npm run lint
```

## Troubleshooting

If you encounter issues with API connectivity:

1. Ensure your Laravel backend is running
2. Verify that the API key in your `.env.local` file matches the one configured in the backend
3. Check the browser console for error messages
4. Verify CORS is properly configured on the backend

## License

This project is licensed under the MIT License.
