import $ from 'jquery';

import 'normalize.css';
import './index.css';

import api from './api';
import store from './store';
import shoppingList from './shopping-list';

const main = function () {
  let errorYo;
  api.getItems()
    .then(myRequest => {
      if(!myRequest.ok){
        errorYo = {code: myRequest.status};
      }
      return myRequest.json();
    })
    .then((items) => {
      if(errorYo){
        //console.log("Found an Error");
        errorYo.message = items.message;
        return Promise.reject(errorYo);
      }
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    });

  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);