exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    
      var cnt = {};
    var dub = [];
    var arr = str.split('');
    for (let index = 0; index < arr.length; index++) {
        if(!cnt[arr[index]]){
          cnt[arr[index]] = 1;
        }else {
          cnt[arr[index]] = cnt[arr[index]] + 1;
        }
    }
      
    for (var key in cnt) {

      if(cnt[key] == 1) {
        dub.push(key);
      }else if(cnt[key] > 1 && cnt[key] < amount) {
        for(var i = 0; i < cnt[key];  i++) {
          dub.push(key);
        }
      } else if(cnt[key] >= amount ) {
        for(var i = 0; i < amount;  i++) {
          dub.push(key);
        }
        
      }
      
    }

   return dub.join('');

  },

  wordWrap: function(str, cols) {
      
  },

  reverseString: function(str) {

    return str.split('').reverse().join('');
  }
};
