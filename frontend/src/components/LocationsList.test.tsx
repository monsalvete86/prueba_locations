import { render, screen, waitFor } from '@testing-library/react';
import { LocationsList } from './LocationsList';
import '@testing-library/jest-dom';

// Direct mock implementation
jest.mock('../services/api.service', () => ({
  fetchLocations: jest.fn()
}));

// Import the mocked function AFTER mocking
import { fetchLocations } from '../services/api.service';

describe('LocationsList', () => {
  const mockLocations = [
    {
      code: 'LOC001',
      name: 'Headquarters',
      image: 'https://via.placeholder.com/150?text=Headquarters',
      creationDate: '2023-06-15T00:00:00+00:00'
    },
    {
      code: 'LOC002',
      name: 'Branch Office',
      image: 'https://via.placeholder.com/150?text=Branch',
      creationDate: '2023-07-20T00:00:00+00:00'
    }
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('shows loading state initially', () => {
    (fetchLocations as jest.Mock).mockImplementation(() => new Promise(() => {})); // Never resolves
    render(<LocationsList />);
    
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  test('displays locations when loaded successfully', async () => {
    (fetchLocations as jest.Mock).mockResolvedValue(mockLocations);
    render(<LocationsList />);
    
    // Wait for loading to finish
    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    });
    
    // Check if locations are displayed
    expect(screen.getByText('Headquarters')).toBeInTheDocument();
    expect(screen.getByText('Branch Office')).toBeInTheDocument();
    expect(screen.getByText('Code: LOC001')).toBeInTheDocument();
    expect(screen.getByText('Code: LOC002')).toBeInTheDocument();
  });

  test('displays error message when loading fails', async () => {
    (fetchLocations as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));
    render(<LocationsList />);
    
    // Wait for error to be displayed
    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    });
    
    expect(screen.getByText('Failed to load locations. Please try again later.')).toBeInTheDocument();
  });
}); 