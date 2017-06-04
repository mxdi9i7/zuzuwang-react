import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export {getFreeListingData, getProListingData}

function getFreeListingData() {
    const url = `${BASE_URL}/api/listings/free`;
    return  axios.get(url).then(response => response.data)
}

function getProListingData() {
    const url = `${BASE_URL}/api/listings/pro`;
    return  axios.get(url).then(response => response.data)
}