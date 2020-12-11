// document.addEventListener('DOMContentLoaded', function() {
//   var setRadioValue = function(name, value) {
//     var elems = document.getElementsByName(name);

//     for(var i = 0, len = elems.length; i < len; i++) {
//       var elem = elems.item(i);
//       if (elem.value === value) {
//         elem.checked = true;
//         break;
//       }
//     }
//   };

//   setRadioValue('food', '焼き肉');
// }, false);


document.addEventListener("DOMContentLoaded", function() {
  let setRadioValue = function(name, value) {
    let elems = document.getElementsByName(name);

    for(let i = 0, len = elems.length; i < len; i++) {
      let elem = elems.item(i);
      if(elem.value === value) {
        elem.checked = true;
        break;
      }
    }
  }

  setRadioValue("food", "ラーメン")
}, false);
