import axios from 'axios';

export default axios.create({
  // Update this every 8 hours
  baseURL: 'http://07d5694e.ngrok.io/'
});
