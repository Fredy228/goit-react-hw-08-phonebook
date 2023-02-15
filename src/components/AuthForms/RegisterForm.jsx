import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Form, Label } from './From.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    console.log('formRegister = ', form);

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <Label>
        <TextField 
        id="outlined-basic" 
        label="Name" 
        variant="outlined"
        type="text"
        name="name"
        placeholder="Name"
        required
        minLength={3} />
      </Label>
      <Label>
        <TextField 
        id="outlined-basic" 
        label="Email" 
        variant="outlined"
        type="email"
        name="email"
        required
        placeholder="user@gmail.com" />
      </Label>
      <Label> 
        <TextField 
        id="outlined-basic" 
        label="Password" 
        variant="outlined" 
        type="password"
        name="password"
        minLength={7}
        required/>
      </Label>
      <Button variant="contained" type="submit">Register</Button>
    </Form>
  );
};

export default RegisterForm