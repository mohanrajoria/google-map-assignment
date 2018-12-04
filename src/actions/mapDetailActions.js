import * as types from './actionTypes';

import {locationDetails} from '../data/locationDetail.js';
import {credentials} from '../data/credentials.js';

export function getAPIKey() {
    console.log(" Credentials : ::::::::", credentials)
    return {type : types.GET_API_KEY, apiKey : credentials.API_KEY};
}

export function getLocations() {
    // console.log(" Location Detail : ::::::::", locationDetails)
    return {type: types.GET_LOCATIONS, locationDetail: locationDetails};
}