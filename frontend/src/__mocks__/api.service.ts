import { Location } from '../types/location';

// Mock implementation of fetchLocations
export const fetchLocations = jest.fn().mockImplementation(async (): Promise<Location[]> => {
  return [
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
}); 