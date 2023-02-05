const option = document.getElementById("options")

const drop = document.getElementById("showdrop")

window.onload = ()=>{
    $(option).toggle(false);
}


$(document).ready(function(){
  $(drop).click(function(){
    $(option).toggle();
  });
});


