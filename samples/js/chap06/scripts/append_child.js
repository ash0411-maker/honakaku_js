document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("btn").addEventListener("click", function() {
    // テキストボックスの取得
    let name = document.getElementById("name");
    let url = document.getElementById("url");

    // aタグの作成
    let anchor = document.createElement("a");
    // aタグのurlにテキストボックスの要素を入れる
    anchor.href = url.value;

    // テキストノードを生成
    let text = document.createTextNode(name.value);
    // aタグの下にテキストノードを追加
    anchor.appendChild(text);

    let br = document.createElement("br");
    let list = document.getElementById("list");
    list.appendChild(anchor);
    list.appendChild(br);
  }, false)
}, false)
