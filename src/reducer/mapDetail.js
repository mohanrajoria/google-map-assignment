import {locationDetails} from '../data/locationDetail.js';
import {credentials} from '../data/credentials.js';

const GET_LOCATIONS = 'GET_LOCATIONS';
const GET_API_KEY = 'GET_API_KEY';

const initialState = {
  locationDetails : locationDetails,
  apiKey : credentials.API_KEY
}

export default function mapDetail(state = initialState, action = {}) {
    switch (action.type) {
        case GET_API_KEY :
            return {
                ...state,
                apiKey : action.apiKey
            }
        case GET_LOCATIONS :
            return {
                ...state,
                locationDetails : action.locationDetails
            }
        default :
            return state
    }
}

export function getAPIKey() {
  return {
    type : GET_API_KEY, 
    apiKey : credentials.API_KEY
  };
}

export function getLocations() {
  return {
    type: GET_LOCATIONS, 
    locationDetail: locationDetails
  };
}

