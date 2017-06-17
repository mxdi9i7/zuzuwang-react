import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export {getUserInfoData, getAllUsersData}

function getAllUsersData() {
    const url = `${BASE_URL}/api/users`;
    
    return  axios.get(url).then(response => response.data)
    
}

function getUserInfoData() {
    const url = `${BASE_URL}/api/user/`;
    return  axios.get(url).then(response => response.data)
}
