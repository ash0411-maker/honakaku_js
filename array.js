// function getMaxMin(...nums) {
// 	return [Math.min(...nums), Math.max(...nums) ]
// }

// let result = getMaxMin(10, 35, -5, 78, 0);
// console.log(result); //結果：[78, -5]


// let [max, min] = getMaxMin(10, 35, -5, 78, 0);
// // 先に実行される関数から値が順番に格納されていく？？？？

// console.log(max);
// console.log(min);



// ===============================================


// function arrayWalk(data, f) {
//   for (var key in data) {
//     f(data[key], key);
//   }
// }

// function showElement(value, key) {
//   console.log(key + '：' + value);
// }

// var ary = [1, 2, 4, 8, 16];
// arrayWalk(ary, showElement);



// function arrayWalk(data, f) {
//   for (var key in data) {
//     f(data[key], key);
//   }
// }

// var ary = [1, 2, 4, 8, 16];
// arrayWalk(ary, function (value, key) {
//     console.log(key + '：' + value);
//   }
// );


// function closure(init) {
//   let counter = init;

//   return function() {
//     return ++counter;
//   }
// }

// let myClosure = closure(1);
// console.log(myClosure());
// console.log(myClosure());
// console.log(myClosure());


let Member = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

Member.prototype.getName = function() {
  return this.lastName + " " + this.firstName;
};

let mem = new Member("たかし", "涼宮");
console.log(mem.getName());
