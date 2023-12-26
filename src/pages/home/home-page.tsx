import React from 'react';

import { Link, Typography } from '@mui/material';
import { LineAxis, CameraEnhance, Feedback } from '@mui/icons-material';
import { deepOrange, purple, teal } from '@mui/material/colors';

import Roadmap, { RoadmapItem } from './roadmap';

const roadmapItems: RoadmapItem[] = [
  {
    title: 'Game recording and analysis',
    icon: { colour: teal[500], element: <LineAxis /> },
    paragraph1: <Typography>{`Record your games by adding who's at the table, the buy ins and the winnings.`}</Typography>,
    paragraph2: <Typography>Get the rundown on your poker wins and losses with an in-depth analytics tool. See your trends and up your poker game.</Typography>
  },
  {
    title: 'Photographic chip stack counter',
    icon: { colour: purple[600], element: <CameraEnhance /> },
    paragraph1: <Typography>Easily count your stacks by just taking a photo of your poker chips.</Typography>,
    paragraph2: (
      <Typography>By employing machine learning algorithms these photographs will be analysed, delivering real-time chip counts in seconds.</Typography>
    )
  },
  {
    title: 'The future',
    icon: { colour: deepOrange[600], element: <Feedback /> },
    paragraph1: (
      <Typography>
        Kindly reach out to <Link>scottjoe1996@yahoo.co.uk</Link> to share your ideas on potential additions to Summit.
      </Typography>
    ),
    paragraph2: (
      <Typography>
        If you find any bugs please raise an issue <Link href='https://github.com/scottjoe1996/summit-app/issues'>here</Link> with a description of the problem.
      </Typography>
    )
  }
];

const HomePage: React.FC = () => {
  return (
    <>
      <Typography variant='h2'>What is Summit?</Typography>
      <Typography
        paddingTop={1}
      >{`Summit's mission is to revolutionise the poker experience by offering an all-encompassing platform that simplifies game tracking and fosters a collaborative community-driven approach to continually enhance and tailor features according to user preferences.`}</Typography>
      <br />
      <Typography paddingBottom={2}>
        Our goal is to elevate the poker playing experience to new heights, making Summit the go-to application for poker enthusiasts seeking innovation and
        convenience.
      </Typography>
      <Typography variant='h3'>Roadmap</Typography>
      <Roadmap items={roadmapItems} />
    </>
  );
};

export default HomePage;
