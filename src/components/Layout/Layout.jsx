

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import { Container, Header, Main } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header>
        <Navigation />
      </Header>
      <Main>
        <Suspense fallback={null}>
          
          <Outlet />
        </Suspense>
      </Main>
      

    </Container>
  );
};

export default Layout