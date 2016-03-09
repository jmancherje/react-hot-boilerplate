import axios from 'axios';
import { FOURSQUARE_CLIENT_ID, FOURSQUARE_CLIENT_SECRET } from '../config/config.js';
export const FETCH_POPULAR = 'FETCH_POPULAR';

const ROOT_URL = 'https://api.foursquare.com/v2/venues/explore?';
const CITY_STATE = 'san%20francisco,ca'

const SEARCH_URL = `${ROOT_URL}client_id=${FOURSQUARE_CLIENT_ID}&client_secret=${FOURSQUARE_CLIENT_SECRET}&v=20130815&near=${CITY_STATE}&venuePhotos=1`;

export function fetchFourSquareVenues() {
  const request = axios.get(SEARCH_URL);

  return {
    type: FETCH_POPULAR,
    payload: request
  };
}