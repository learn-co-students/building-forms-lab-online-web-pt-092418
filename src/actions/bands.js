export const addBand = (band) =>{
     return {
            type: 'ADD_BAND',
            payload: band
        
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