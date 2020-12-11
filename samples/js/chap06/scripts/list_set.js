document.addEventListener('DOMContentLoaded', function() {
  var setListValue = function(name, value) {
    var opts = document.getElementById(name);

    for(var i = 0, len = opts.length; i < len; i++) {
      var opt = opts.item(i);
      if (value.indexOf(opt.value) > -1) {
        opt.selected = true;
      }
    }
  };

  // 選択されている要素を取得
  var getSelectValue = function(name) {
    var result = [];
    var opts = document.getElementById(name).options;

    for(var i = 0, len = opts.length; i < len; i++) {
      var opt = opts.item(i);
      if (opt.selected) {
        result.push(opt.value);
      }
    }
    return result;
  };

  // 送信を押したらalertに出力
  document.getElementById('btn').addEventListener('click', function() {
    window.alert(getSelectValue('food'));
  }, false);


  // デフォルトの要素選択
  setListValue('food', ['餃子', '焼き肉']);
}, false);
