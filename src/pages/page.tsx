import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Drawer, Grid, Hidden } from '@mui/material';
import { Groups3 } from '@mui/icons-material';

import SummitAppBar from '../components/app-bar/app-bar';
import { UserSession, useAuthContext } from '../providers/auth-provider/auth-context';
import DrawerLinks, { DrawerLink } from '../components/app-bar/navigation/drawer-links';

const getAvailableLinks = (userSession: UserSession): DrawerLink[] => {
  const links: DrawerLink[] = [];

  if (userSession.isAuthenticated) {
    links.push({ icon: <Groups3 />, label: 'Schools', path: '/schools' });
  }

  return links;
};

interface PageProps {
  title: string;
  content: React.ReactElement;
}

const drawerWidth = 240;

const Page: React.FC<PageProps> = ({ title, content }) => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const { userSession } = useAuthContext();
  const navigate = useNavigate();

  const handleLinkClick = React.useCallback(
    (link: string) => {
      navigate(link);
    },
    [navigate]
  );

  const links = getAvailableLinks(userSession);

  return (
    <>
      <Hidden mdUp>
        <Drawer anchor='left' open={openDrawer} onClose={() => setOpenDrawer(false)}>
          <DrawerLinks width={drawerWidth} links={links} onLinkClick={handleLinkClick} />
        </Drawer>
      </Hidden>
      <Grid container>
        <Hidden mdDown>
          <Grid item>
            <div style={{ width: drawerWidth }}>
              <Drawer variant='permanent'>
                <DrawerLinks width={drawerWidth} links={links} onLinkClick={handleLinkClick} />
              </Drawer>
            </div>
          </Grid>
        </Hidden>
        <Grid item xs>
          <SummitAppBar links={links} title={title} onLinkClick={handleLinkClick} onOpenDrawerClick={() => setOpenDrawer(true)} />
          <Container sx={{ paddingTop: 2 }}>{content}</Container>
        </Grid>
      </Grid>
    </>
  );
};

export default Page;
