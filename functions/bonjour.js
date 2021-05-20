const axios = require('axios');
exports.handler = async function(event, context, callback) {
    try{
        const { data } = await axios.get('https://api.genius.com/songs/' + event.queryStringParameters.param + '?access_token=ZgYwtB7yjBMJz9Kaz2A7By7QBS59Ekeu_30QPjOBHgcZ1TcyDGGsFFzOIPLCw7mA', {
            headers: {
                'mode': 'no-cors',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': '*'
            }
        });
        let response = [];
        // Grab the items and re-format to the fields we want
        if (data) {
            response = data
        }
        callback(null, {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
            },
            body: JSON.stringify(response),
        });
    } catch (err) {
        callback(err);
    }
}
