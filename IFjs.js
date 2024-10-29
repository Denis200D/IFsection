function toggleText() {
  var text = document.getElementById("lyL");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    
    }
             
  }
  function showtext() {
    var ly = document.getElementById("lyG");
    if (ly.style.display === "none") {
      ly.style.display = "block";
    } else {
      ly.style.display = "none";
    }
  }

function showhide1() {
  var text = document.getElementById("lyL");
  var ly = document.getElementById("lyG");
  if (ly.style.display === "block" ){
    ly.style.display = "none";
  }
}
function showhide2() {
  var ly = document.getElementById("lyG");
  var text = document.getElementById("lyL");
  if (text.style.display === "block" ){
    text.style.display = "none";
  }
}
