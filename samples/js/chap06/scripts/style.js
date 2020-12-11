document.addEventListener("DOMContentLoaded", function() {
  let elem = document.getElementById("elem");

  elem.addEventListener("mouseover", function() {
    this.style.backgroundColor = "red";
    this.style.color = "white"
  }, false)

  elem.addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
    this.style.color = "black"
  })
})
