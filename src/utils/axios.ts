import axios from 'axios';


// import env from 'vue';


const intance = axios.create({
    baseURL: 'https://webdev.raidmen.ru'
});

intance.interceptors.request.use(
    (request) => request,
    (error) => Promise.reject(error)
);

intance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
);

export default intance;
