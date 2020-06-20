import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://create-my-burgerapp-84f54.firebaseio.com/'
});

export default instance;