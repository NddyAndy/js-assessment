exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    var arrObj = [];
    for(var a in obj) {
      if(obj.hasOwnProperty(a)){
        arrObj.push(a + ': ' + obj[a]);
      } 
    }
    return arrObj;
  }
};
