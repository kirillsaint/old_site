/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
var inner = document.getElementById("inner");
var inputbash = document.getElementById("inputbash");
var namewidth = document.getElementById("terminal-width");
var nameheight = document.getElementById("terminal-height");
changeterminalsize();
$(window).resize(function() {
  changeterminalsize()
});
function outputsize() {
 namewidth.innerText = inner.offsetWidth
 nameheight.innerText = inner.offsetHeight
}
outputsize()

new ResizeObserver(outputsize).observe(inner)
function changeterminalsize(){
  if ($(window).width() < 420){
    inner.style.width = $(window).width() + "px";
  }
  else{
    inner.style.width = "420px";
  }
  if ($(window).height() < 510){
    inner.style.height = $(window).height() - 300  + "px";
  }else{
    inner.style.height = "300px";
    nameheight.innerText = inner.style.height.replace("px","");
  }
}

console.log("hi");


var inner = document.getElementById("inner");
var output = document.getElementById("out");
var inputbash = document.getElementById("inputbash");


document.getElementsByTagName("input")[0].onkeydown = e => {
  if (e.keyCode != 13) return;
  e.target.value = e.target.value.toLowerCase()
  var elem = document.createElement("span");
  elem.width = 'fit-content';
  var txt;

  switch (e.target.value) {
    case "help":
      txt =
        "Help\nvk, bot, resolution, size, clear";
      break;
    case "link":
      elem = document.createElement("a");
      elem.setAttribute("href", "whatever");
      txt = "whatever";
      elem.style.color = "white";
      break;
    case "skins":
      var elem = document.createElement("a")
      elem =`$ $`
      break;
    case "vk":
      elem = document.createElement("a");
      elem.style = 'width: fit-content';
      elem.setAttribute("href", "https://vk.com/kirillsaint");
      txt = "https://vk.com/kirillsaint";
      break;
    case "clear":
      output.innerHTML = "<a></a>";
      e.target.value = "";
      return;
    case "size":
      txt = 'Size of browser window = ' + $(window).width() + 'x' + $(window).height();
      break;
    case "resolution":
      txt = 'Resolution of screen = ' + screen.width + 'x' + screen.height;
      break;
    case "python kirillsaint.py":
      txt = "python kirillsaint.py\nHello, world!"
      break;
    case "node kirillsaint":
      txt = "node kirillsaint\nHello, world!"
      break;
    case null:
      txt = ""
      break;
    default:
      txt = e.target.value + " this is an unknown command.";
  }
  if (e.target.value.includes('rm')){
    txt = "No rm allowed here......"
  }
  if(txt){elem.innerText = "$ " + txt;}
  e.target.value = "";
  txt = undefined
  output.appendChild(elem);
};
$(document).ready(function() {
  function showImg() {
    var dataImg = $(this).attr("data-img");
    $("#showImgDiv img").attr("src", dataImg);
    varTop = $(this).offset().top - 20;
    varLeft = $(this).offset().left + 90;
    $("#showImgDiv")
      .css({ top: varTop, left: varLeft })
      .show();
  }
  function showImgOff() {
    $("#showImgDiv").hide();
  }
  $(".text_img").hover(showImg, showImgOff);
});