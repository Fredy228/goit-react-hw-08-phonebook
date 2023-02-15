import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Form, Label } from './From.styled';

const LoginForm = () => {
  const dispatch = useDispatch();
  const errorLogin = useSelector(state => state.error);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    console.log('formLogin = ', form);
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box>
      {errorLogin && <div>Error login</div>}
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Label>
          <TextField id="outlined-basic" label="Email" variant="outlined" type="email" name="email" required/>
        </Label>
        <Label>
          <TextField id="outlined-basic" label="Password" variant="outlined" type="password" name="password" required/>
        </Label>
        <Button variant="contained" type="submit">Log In</Button>
      </Form>
    </Box>
  );
};

export default LoginForm