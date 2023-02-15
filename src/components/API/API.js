import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const fetchAllContacts = async () => {
  const response = await axios.get('/contacts');
  console.log(response.data);
  return response.data;
};

export const postContact = async contact => {
  const response = await axios.post('/contacts', contact);
  console.log(response.data);
  return response.data;
};

export const deleteContact = async contactId => {
  const response = await axios.delete(`/contacts/${contactId}`);
  console.log(response.data);
  return response.data;
};

export const registerUser = async (credentials) => {
  const response = await axios.post('/users/signup', credentials);
  setAuthHeader(response.data.token);
  return response.data;
}

export const logInUser = async (credentials) => {
  const response = await axios.post('/users/login', credentials);
  setAuthHeader(response.data.token);
  return response.data;
}

export const logOutUser = async () => {
  await axios.post('/users/logout');
  clearAuthHeader();
}

export const userRefresh = async () => {
  const response = await axios.get('/users/current');
  return response.data;
}

