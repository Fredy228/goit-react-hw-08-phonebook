import  RegisterForm  from 'components/AuthForms/RegisterForm';
import { BoxLogin, TextLogin, TitleLogin, LinkRegister } from './StylePages/Login.styled';

const Register = () => {
  return (
    <BoxLogin>
      <TitleLogin>Registration</TitleLogin>
      <RegisterForm />
      <TextLogin className="TextAuth">
        Already registered? <LinkRegister to={'/login'}>Sign in</LinkRegister>
      </TextLogin>
    </BoxLogin>
  );
};

export default Register;