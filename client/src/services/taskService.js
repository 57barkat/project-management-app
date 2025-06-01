import axios from 'axios';

const API = 'http://localhost:4000/api/tasks';

// Helper to get token from localStorage
const getAuthConfig = () => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            Authorization: token ? `Bearer ${token}` : '',
        },
    };
};

const getTasks = async () => {
    const { data } = await axios.get(API, getAuthConfig());
    return data;
};

const getTaskById = async id => {
    const { data } = await axios.get(`${API}/${id}`, getAuthConfig());
    return data;
};

export default { getTasks, getTaskById };