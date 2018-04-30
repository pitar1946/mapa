import {URL} from '../config';

export const  fetchData = () => dispatch =>  {
  fetch (URL)
      .then(res => res.json())
      .then (jsondata => dispatch ({
          type: 'FETCH_JSON_DATA',
          payload: jsondata
      }))
};
