exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    var sumTotal = 0;
    for(var i = 0; i < arr.length; i++) {
      sumTotal += arr[i];
    }
    return sumTotal;
  },

  remove: function(arr, item) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] !== item) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  },

  removeWithoutCopy: function(arr, item) {
    var i,
      arrLength = arr.length;
  
    for (i = 0; i < arrLength; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);

    return arr;
  
  },

  truncate: function(arr) {
    arr.pop();

    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);

    return arr;
  },

  curtail: function(arr) {
    arr.shift();

    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);

    return arr;
  },

  count: function(arr, item) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        newArr.push(item);
      }
    }
    return newArr.length;
  },

  duplicates: function(arr) {
    var cnt = {};
    var dub = [];
    for (let index = 0; index < arr.length; index++) {
        if(!cnt[arr[index]]){
          cnt[arr[index]] = 1;
        }else {
          cnt[arr[index]] = cnt[arr[index]] + 1;
        }
    }
    console.log(cnt);
      
    for (var key in cnt) {
      if(cnt[key] > 1) {
        dub.push(Number(key));
      }
    }
    console.log(dub);

    return dub;

  },

  square: function(arr) {
    for (let index = 0; index < arr.length; index++) {
       arr[index] =  arr[index] *  arr[index];
    }

    return arr;
  },

  findAllOccurrences: function(arr, target) {
      var newArr = [];

      for (var i = 0; i <arr.length; i++){
          if(arr[i] === target) {
            newArr.push(i);
          }
      }

      return newArr;
   }
};
