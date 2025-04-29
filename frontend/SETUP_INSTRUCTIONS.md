# Setup Instructions for Locations App

## Completed Setup
1. Created React TypeScript application structure
2. Added Material UI components for displaying locations
3. Created API service for communicating with the backend
4. Set up proper TypeScript interfaces for the data
5. Created responsive layout with Material UI components
6. Added environment variable configuration

## Required Steps to Complete Setup

### 1. Rename Environment Files
Rename the following files:
- `envlocal` to `.env.local`

### 2. Install Dependencies
There were issues with the dependency installation due to version conflicts. Please run the following command:

```bash
npm install @mui/material @emotion/react @emotion/styled axios react-router-dom --legacy-peer-deps
```

### 3. Testing Setup
To set up testing, install the following packages:

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jest jest-environment-jsdom ts-jest @types/jest
```

### 4. Start the Development Server
Once dependencies are installed, start the development server:

```bash
npm run dev
```

## Project Structure
The project follows this structure:
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

## Backend Integration
The application expects the backend to expose an API endpoint at `/api/locations` that returns an array of location objects with the following structure:

```json
[
  {
    "code": "LOC001",
    "name": "Headquarters",
    "image": "https://via.placeholder.com/150?text=Headquarters",
    "creationDate": "2023-06-15T00:00:00+00:00"
  },
  ...
]
```

Ensure your Laravel backend is running and properly configured to accept the API Key provided in the `.env.local` file. 