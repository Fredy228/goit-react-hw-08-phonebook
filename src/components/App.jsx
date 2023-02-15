import React from 'react';
import { lazy, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import  PrivateRoute from './PrivateRoute';
import  RestrictedRoute  from './RestrictedRoute';
import { refreshUser } from '../redux/auth/operations';
import  Home  from 'pages/Home';
import  Layout  from './Layout/Layout';

const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="register"
              element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />}/>}
            />
            <Route
              path="login"
              element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />}/>}
            />
            <Route
              path="contacts"
              element={<PrivateRoute redirectTo="/login" component={<ContactsPage />}/>}
            />
          </Route>
      </Routes>
  );
}

export default App