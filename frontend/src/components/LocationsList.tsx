import { useEffect, useState } from 'react';
import { Box, CircularProgress, Container, Grid, Typography } from '@mui/material';
import { fetchLocations } from '../services/api.service';
import { Location } from '../types/location';
import { LocationCard } from './LocationCard';

export const LocationsList = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getLocations = async () => {
      try {
        setLoading(true);
        const data = await fetchLocations();
        // Ensure we have an array, even if the API returns something unexpected
        setLocations(Array.isArray(data) ? data : []);
        setError(null);
      } catch (err) {
        setError('Failed to load locations. Please try again later.');
        console.error('Error loading locations:', err);
      } finally {
        setLoading(false);
      }
    };

    getLocations();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <Typography color="error" variant="h6">{error}</Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Locations
      </Typography>
      
      {locations.length === 0 ? (
        <Typography>No locations found.</Typography>
      ) : (
        <Grid container spacing={3}>
          {locations.map((location) => (
            <Grid item key={location.code} xs={12} sm={6} md={4}>
              <LocationCard location={location} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}; 