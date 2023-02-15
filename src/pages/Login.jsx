import  LoginForm  from 'components/AuthForms/LoginForm';
import { BoxLogin, TextLogin, TitleLogin, LinkRegister } from './StylePages/Login.styled';

const Login = () => {
  return (
    <BoxLogin>
      <TitleLogin>Log In</TitleLogin>
      <LoginForm />
      <TextLogin className="TextAuth">
        Don't you have an account? <LinkRegister to="/register">Sign up</LinkRegister>
      </TextLogin>
    </BoxLogin>
  );
};

export default Login;