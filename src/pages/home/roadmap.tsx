import React from 'react';

import { Typography } from '@mui/material';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';

export interface RoadmapItem {
  title: string;
  icon: {
    colour: string;
    element: React.ReactElement;
  };
  paragraph1: React.ReactElement;
  paragraph2: React.ReactElement;
}

const roadmapContentFormatting = { py: '12px', px: 2, minimumHeight: 200 };

interface RoadmapProps {
  items: RoadmapItem[];
}

const Roadmap: React.FC<RoadmapProps> = ({ items }) => {
  return (
    <Timeline position='alternate'>
      {items.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ bgcolor: item.icon.colour }}>{item.icon.element}</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={roadmapContentFormatting}>
            <Typography variant='h6' component='span'>
              {item.title}
            </Typography>
            {item.paragraph1}
            <br />
            {item.paragraph2}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default Roadmap;
