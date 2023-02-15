import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import { BoxUserMenu, TextUser } from './UserMenu.styled';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <BoxUserMenu>
      <Avatar>{user.name.slice(0,1)}</Avatar>
      <TextUser>{user.name}</TextUser>
      <Button variant="outlined" type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </BoxUserMenu>
  );
};

export default UserMenu