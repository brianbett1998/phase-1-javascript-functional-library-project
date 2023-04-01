//Define a callback funtion
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (let key in collection) {
        callback(collection[key]);
      }
    }
    return collection;
  }

//myMap
function myMap(collection, callback) {
    let result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i]));
      }
    } else {
      for (let key in collection) {
        result.push(callback(collection[key]));
      }
    }
    return result;
  }
  
//myReducetem) 
function myReduce(collection, callback, initialValue) {
    let accumulator = initialValue === undefined ? collection[0] : initialValue;
    let startIndex = initialValue === undefined ? 1 : 0;
  
    for (let i = startIndex; i < collection.length; i++) {
      accumulator = callback(accumulator, collection[i]);
    }
  
    return accumulator;
  }
  
  function myFind(collection, callback) {
    for (let i = 0; i < collection.length; i++) {
      if (callback(collection[i], i, collection)) {
        return collection[i];
      }
    }
  
    return undefined;
  }
  function myFilter(collection, callback) {
    const filtered = [];
  
    for (let i = 0; i < collection.length; i++) {
      if (callback(collection[i], i, collection)) {
        filtered.push(collection[i]);
      }
    }
  
    return filtered;
  }
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else if (typeof collection === 'object' && collection !== null) {
      return Object.keys(collection).length;
    } else {
      return 0;
    }
  }
  function myFirst(collection, n = 1) {
    if (Array.isArray(collection)) {
      return collection.slice(0, n);
    } else if (typeof collection === 'object' && collection !== null) {
      const keys = Object.keys(collection);
      return keys.slice(0, n).map(key => collection[key]);
    } else {
      return undefined;
    }
  }
  function myLast(collection, n) {
    if (!Array.isArray(collection)) {
      throw new TypeError('First argument must be an array.');
    }
  
    if (n === undefined) {
      return collection[collection.length - 1];
    } else if (n < 0) {
      return [];
    } else {
      return collection.slice(-n);
    }
  }
  function myKeys(obj) {
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
      throw new TypeError('Argument must be an object.');
    }
  
    let keys = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
  
    return keys;
  }