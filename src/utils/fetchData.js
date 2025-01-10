const axios = require('axios');

const fetchData = async () => {
    const url = 'http://universities.hipolabs.com/search?country=United+States';
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error;
    }
};

module.exports = fetchData;
