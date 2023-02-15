

import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import  UserMenu  from 'components/UserMenu/UserMenu';
import { LinkNav, Nav } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Nav>
        <LinkNav to="/">Home</LinkNav>
        {isLoggedIn ? (
          <LinkNav to="/contacts">Contacts</LinkNav>
        ) : (
          <div>
            {!isLoggedIn && <LinkNav to="/register">Register</LinkNav>}
            {!isLoggedIn && <LinkNav to="/login">Log In</LinkNav>}
          </div>
        )}
      </Nav>

      {isLoggedIn && <UserMenu />}
    </>
  );
};

export default Navigation