exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return eval(arr.join('+'));
  },

  remove : function(arr, item) {
    for(var i = 0; i<arr.length; i++) {
      if(arr[i] == item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    for(var i = arr.length-1; i>0; i--){
       var v = arr[i];
       for(var j = 1; j <arguments.length; j++){
          if(v == arguments[j]){
             arr.splice(i,1);
          }
       }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var newArr = arr1.concat(arr2);
    return newArr;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    return arr.filter(function(arrItem){
      return arrItem === item;
    }).length;
  },
  // return an array that contains one of each duplicate of the original array
  // var arr = [ 1, 2, 4, 4, 3, 3, 1, 5, 3 ] should return
  // [1, 3, 4]
  duplicates : function(arr) {
    var sorted_arr = arr.sort(); 
    var results = [];

    for (var i = 0; i < arr.length; i++) {
        if (sorted_arr[i+1] == sorted_arr[i]) {
          if(results.indexOf(sorted_arr[i]) === -1) {
            results.push(sorted_arr[i]);
          }
        }
    }

    return results;
  },

  square : function(arr) {
    ret= [];

    for (var i = 0, len = arr.length; i < len; i++) {
        ret.push(arr[i] * arr[i]);
    }

    return ret;
  },

  findAllOccurrences : function(arr, target) {
    var indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === target) {
          indexes.push(i);
        }
            
    return indexes;
  }
};
