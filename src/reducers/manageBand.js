

export default function manageBand(state = {
  bands: [],
}, action) {
  debugger
  switch(action.type){
  case 'ADD_BAND':
    return [...state, action.payload]
 default:
   
  return state;
  }
};
