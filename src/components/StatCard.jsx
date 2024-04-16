import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// mostly stripped down basic card from mui for home page statistics
export default function BasicCard ({value, description}) {
  return (
    <Card sx={{ maxWidth: 200, minWidth: 200, margin: 1 }}>
      <CardContent>
        <Typography sx={{ fontSize: 32, color: '#F76902' }} >
          {value}
        </Typography>
        <Typography sx={{ fontSize: 16 }}>
            {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
