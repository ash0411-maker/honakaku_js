var data = ['JavaScript', 'Ajax', 'ASP.NET'];
console.log(data[0]);

let book = {
  title: "カンファレンス",
  publish: "講談社",
  price: 2490
};

let {price, title, memo = "なし"} = book;
