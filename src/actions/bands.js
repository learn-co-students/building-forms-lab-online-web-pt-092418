export const addBand = (name) =>{
     return {
            type: 'ADD_BAND',
            payload: name
        
        };
    
}
// use with thunk- async actions- talking to API
// export function addBand(band){
//     return dispatch => {
//         return {
//             type: 'ADD_BAND',
//             payload: band
//         }
//     };
    
// }