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

  duplicates : function(arr) {
    var i,
      len=arr.length,
      out=[],
      obj={};
 
    for (i=0;i<len;i++) {
      obj[arr[i]]=0;
    }
    for (i in obj) {
      out.push(i);
    }
    return out;
  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
