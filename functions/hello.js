const axios = require('axios');
exports.handler = async function(event, context, callback) {
    try{
        const { data } = await axios.get('https://api.genius.com/search?q=' + event.queryStringParameters.param + '&access_token=ZgYwtB7yjBMJz9Kaz2A7By7QBS59Ekeu_30QPjOBHgcZ1TcyDGGsFFzOIPLCw7mA');
        let response = [];
        // Grab the items and re-format to the fields we want
        if (data) {
            response = data
        }
        callback(null, {
            statusCode: 200,
            body: JSON.stringify(response),
        });
    } catch (err) {
        callback(err);
    }
}