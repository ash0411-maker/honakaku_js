


document.addEventListener("DOMContentLoaded", function() {
  // タイマーを設置
  let timer = window.setTimeout(
    function() {
      // 現在の時刻を<div id="result">要素に表示
      let date = new Date();
      document.getElementById("result").textContent = date.toLocaleTimeString();
    }, 5000);

  // ボタンクリック時にタイマー処理を中止
  document.getElementById("btn").addEventListener("click", function() {
    window.clearInterval(timer);
  }, false);
}, false);