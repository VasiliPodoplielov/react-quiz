import axios from 'axios';

export default axios.create({
  baseURL: 'https://react-quiz-a30eb.firebaseio.com/'
})