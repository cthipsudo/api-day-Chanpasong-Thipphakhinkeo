/* eslint-disable indent */
const BASE_URL = 'https://thinkful-list-api.herokuapp.com/oscar';

function getItems(){
    let error;
    return fetch(`${BASE_URL}/items`).then(function(myRequest){
        //console.log(myRequest);
        return myRequest;
    }).catch();
    //return Promise.resolve('A successful response!');
}
function updateItem(id, updateData){
    //console.log(`This is the ${id}`);
    updateData = JSON.stringify(updateData);
    return fetch(`${BASE_URL}/items/${id}`, {method: 'PATCH', headers:{'Content-Type': 'application/json'}, body:updateData});
}
function deleteItem(id){
    return fetch(`${BASE_URL}/items/${id}`, {method: 'DELETE'});
}
function createItem(name){
    let newItem = JSON.stringify({name:name});
    return fetch(`${BASE_URL}/items`,{method:'POST', headers:{'Content-Type': 'application/json'}, body:newItem});
}


export default {
    getItems,
    createItem,
    updateItem,
    deleteItem
};