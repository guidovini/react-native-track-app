import axios from 'axios';

export default axios.create({
  // Update this every 8 hours
  baseURL: 'http://14ff861e.ngrok.io'
});
