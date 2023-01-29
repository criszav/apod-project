const axios = require('axios');

module.exports.getApod = async () => {
    try {
        const api_key = process.env.API_KEY;
        const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`);
        return response;
    } catch(e) {
        console.log(e);
    }
}