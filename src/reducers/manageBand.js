export default function manageBand(state = {
  bands: []
}, action) {

  switch (action.type) {

    case 'ADD_BAND':

    const band = {
      name: action.name
    }
    return  {
      ...state, bands:
      [ ...state.bands, band]
    }

    default:
    return state;
  }
};
