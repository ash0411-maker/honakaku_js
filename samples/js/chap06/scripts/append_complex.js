document.addEventListener("DOMContentLoaded", function() {
  var books = [
    { title: '独習PHP 第3版', price: 3200 },
    { title: 'Javaポケットリファレンス', price: 2680 },
    { title: 'アプリを作ろう！Android入門', price: 2000 }
  ];

  let list = document.getElementById("list");

  for(let i = 0; i < books.length; i++) {
    let book = books[i]
    let li = document.createElement("li");
    let text = document.createTextNode(book.title + "：" + book.price)
    li.appendChild(text);
    list.appendChild(li);
  }
}, false)
