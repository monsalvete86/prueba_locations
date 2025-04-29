import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Location } from '../types/location';

interface LocationCardProps {
  location: Location;
}

export const LocationCard = ({ location }: LocationCardProps) => {
  // Format the date to be more readable with error handling
  let formattedDate;
  try {
    formattedDate = new Date(location.creationDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch (e) {
    console.error('Error formatting date:', e);
    formattedDate = location.creationDate;
  }

  return (
    <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="140"
        image={location.image}
        alt={location.name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {location.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Code: {location.code}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Created: {formattedDate}
        </Typography>
      </CardContent>
    </Card>
  );
}; 