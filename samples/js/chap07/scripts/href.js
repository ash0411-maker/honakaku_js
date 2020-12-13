
//  選択ボックスで選択すると移動先のページへ自動的に遷移する
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("isbn").addEventListener("change", function() {
    location.href = 'http://www.wings.msn.to/index.php/-/A-03/' + this.value;
  }, false)
}, false)

console.error("aaaaa")