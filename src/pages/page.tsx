import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Drawer } from '@mui/material';
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
      <Drawer anchor='left' open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <DrawerLinks links={links} onLinkClick={handleLinkClick} />
      </Drawer>
      <SummitAppBar links={links} title={title} onLinkClick={handleLinkClick} onOpenDrawerClick={() => setOpenDrawer(true)} />
      <Container sx={{ paddingTop: 2 }}>{content}</Container>
    </>
  );
};

export default Page;
