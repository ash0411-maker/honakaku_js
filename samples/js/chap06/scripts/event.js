document.addEventListener("DOMContentLoaded", function() {
  // イベントオブジェクトを受け取るために、イベントリスナーに引数を渡すだけ
  // 引数は慣例的にeventを表す「e」や「ev」とするのが一般的
  document.getElementById("btn").addEventListener("click", function(e) {
    let target = e.target;
    console.log("発生元： " + target.nodeName + "/" + target.id);
    console.log("種類： " + e.type);
  }, false)
}, false)
