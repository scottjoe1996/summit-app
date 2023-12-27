import React from 'react';

import { Avatar, Card, CardContent, CardHeader, Typography } from '@mui/material';

import { RoadmapItem } from './roadmap';

interface RoadmapCardProps {
  content: RoadmapItem;
}

const RoadmapCard: React.FC<RoadmapCardProps> = ({ content }) => {
  return (
    <Card sx={{ marginTop: 2, marginBottom: 2 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: content.icon.colour }}>{content.icon.element}</Avatar>}
        title={<Typography variant='h6'>{content.title}</Typography>}
      />
      <CardContent>
        {content.paragraph1}
        <br />
        {content.paragraph2}
      </CardContent>
    </Card>
  );
};

export default RoadmapCard;
