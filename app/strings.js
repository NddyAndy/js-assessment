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
      var result = [], line = [];
      var length = 0;
      str.split(" ").forEach(function(word) {
            line.push(word);
          if ((length + word.length) >= cols) {
              result.push(line.join(" "));
              line = []; length = 0;
          }
          length += word.length + 1;
      });
      if (line.length > 0) {
          result.push(line.join(" "));
      }
      return result.join('\n');

  },

  reverseString: function(str) {

    return str.split('').reverse().join('');
  }
};
