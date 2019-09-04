

export default function manageBand(state = {
  name: [],
}, action) {
  debugger
  switch(action.type){
  case 'ADD_BAND':
    return [...state, action.payload]
 default:
   
  return state;
  }
};
