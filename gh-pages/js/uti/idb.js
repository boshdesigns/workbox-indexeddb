// Import Constants
import {IDB_DB_NAME, IDB_STORE_NAME, IDB_XP_NAME} from '../constants/appConstants.js';
import { count } from '../store.js';

// Import the idb keyval uti
import {Store, set, get, del} from 'idb-keyval';
// const idb = require('/idb-keyval/dist/idb-keyval-cjs-compact.min.js');

// Sidenote - All idb-keyval methods are promise based.

// idb setup
export const IDB_STORE = createStore();

// Promise to catch is the store is created
// idbStore._dbp
// .then(function(data) {
//   console.log('success', data);
// })
// .catch(function(err) {
//   console.log('fail', err);
//   // In which case we fallback to just local storage / cookies???
// });

// Create idb store method
export function createStore() {
  return new Store(IDB_DB_NAME, IDB_STORE_NAME);
}

export function setData(value) {
  set(IDB_XP_NAME, value, IDB_STORE);
}

function getData() {
  get(IDB_XP_NAME, IDB_STORE)
    .then(function(val) {
      let value = val;
      if(typeof value != 'undefined') {
        count.set(parseInt(value));

      } else {
        count.set(0);

      }
    });
}getData();
