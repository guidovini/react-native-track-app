import axios from 'axios';

export default axios.create({
  // Update this every 8 hours
  baseURL: ' http://f9d5c449.ngrok.io'
});
