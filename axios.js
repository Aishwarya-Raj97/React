import axios from 'axios';
const instance=axios.create({
baseURL:'https://burger-project-30df4.firebaseio.com/'
});
export default instance;
