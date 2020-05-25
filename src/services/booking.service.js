import appConfig from './AppConfig';
import {handleResponse} from './response.util';

export const bookingService = {
    getAll,
    
};

function getAll(token) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type':  'application/json',
        'Accept': 'application/json',
        'adminemail': appConfig.ADMINEMAIL,
        'token': token,
        'app': appConfig.APP_CODE },
        body: null
    };

    return fetch(appConfig.API_ENDPOINT+appConfig.EMAILCONTACT+"/bookings?current=true", requestOptions)
    .then(handleResponse);
}
