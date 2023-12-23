import React from 'react';

import { Link, Typography } from '@mui/material';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';
import { LineAxis, CameraEnhance, Feedback } from '@mui/icons-material';
import { deepOrange, purple, teal } from '@mui/material/colors';

const roadmapContentFormatting = { py: '12px', px: 2, minimumHeight: 200 };

const HomePage: React.FC = () => {
  return (
    <>
      <Typography variant='h2'>Roadmap</Typography>
      <Timeline position='alternate'>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ bgcolor: teal[500] }}>
              <LineAxis />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={roadmapContentFormatting}>
            <Typography variant='h6' component='span'>
              Game recording and analysis
            </Typography>
            <Typography>{`Record your games by adding who's at the table, the buy ins and the winnings.`}</Typography>
            <br />
            <Typography>Get the rundown on your poker wins and losses with an in-depth analytics tool. See your trends and up your poker game.</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ bgcolor: purple[600] }}>
              <CameraEnhance />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={roadmapContentFormatting}>
            <Typography variant='h6' component='span'>
              Photographic chip stack counter
            </Typography>
            <Typography>Easily count your stacks by just taking a photo of your poker chips.</Typography>
            <br />
            <Typography>By employing machine learning algorithms these photographs will be analysed, delivering real-time chip counts in seconds.</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ bgcolor: deepOrange[600] }}>
              <Feedback />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={roadmapContentFormatting}>
            <Typography variant='h6' component='span'>
              The future
            </Typography>
            <Typography>
              Kindly reach out to <Link>scottjoe1996@yahoo.co.uk</Link> to share your ideas on potential additions to Summit.
            </Typography>
            <br />
            <Typography>
              If you find any bugs please raise an issue <Link href='https://github.com/scottjoe1996/summit-app/issues'>here</Link> with a description of the
              problem.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
};

export default HomePage;
