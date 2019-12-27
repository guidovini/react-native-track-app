import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
  // Update this every 8 hours
  baseURL: 'http://14ff861e.ngrok.io'
});

// Automatic authentication. Grab the stored token...
instance.interceptors.request.use(
  async config => {
    // To automatically attach the token to every axios request.
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, // Config -> URl, methods and headers attached to the request
  err => {
    return Promise.reject(err);
  }
);

export default instance;
