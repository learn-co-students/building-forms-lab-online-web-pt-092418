import { ADD_BAND } from '../actions/bands';

export default function manageBand(state = {
  bands: [],
}, action) {
  switch(action.type){
  case ADD_BAND:
    return [...state, action.input]
 default:
   
  return state;
  }
};
