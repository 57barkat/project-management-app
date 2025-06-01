import axios from 'axios';

const API = '/api/comments';

const getComments = async taskId => {
    const { data } = await axios.get(`${API}/${taskId}`);
    return data;
};

export default { getComments };