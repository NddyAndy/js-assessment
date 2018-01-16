exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
       return function (str1) {
          return str + ", " + str1;
        }
  },

  makeClosures: function(arr, fn) {
    var newArr = [];

    var sfn = function(val) {
      return function () {
        return fn(val);
      }
    }

    for (let index = 0; index < arr.length; index++) {
      newArr.push(sfn(arr[index])); 
    }

    return newArr;
  },

  partial: function(fn, str1, str2) {
      return function (str3) {
        return fn(str1, str2, str3);
      }

  },

  useArguments: function() {
    var sumTotal = 0;
    for(var i = 0; i < arguments.length; i++) {
      sumTotal += arguments[i];
    }
    return sumTotal;
  },

  callIt: function(fn) {
    var args = Array.prototype.slice.call(arguments,1, arguments.length);
    fn.apply(null, args);

  },

  partialUsingArguments: function(fn) {
    var args = Array.prototype.slice.call(arguments,1, arguments.length);
    return function() {
      var args2 = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(null, args2);
    }
  },

  curryIt: function(fn) {
    function applyArguments(_fn, args){
      return _fn.apply(null, args);
    }

    function getArg(accArgs, expectedArgCnt) {
      return function(currArgument) {

        accArgs.push(currArgument);
        var allAgs = accArgs.length === expectedArgCnt;

        if(allAgs) {
          return applyArguments(fn, accArgs);
        }
    
        return getArg(accArgs, expectedArgCnt);
        
      }
    }
    return getArg([], fn.length);
  }
};
