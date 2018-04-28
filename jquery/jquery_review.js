// function setup(){
//   $('body').append("<div></div>");
//   $('div').mouseenter(changeColorBlue);
//   $('div').mouseleave(changeColorRed);
// }
// function changeColorBlue(){
//   $(this).addClass("blue");
//   $(this).removeClass("red");
// }
// function changeColorRed(){
//   $(this).addClass("red");
//   $(this).removeClass("blue");
// }
// $(document).ready(setup);
function changeHeader(){
  var name = $('#username').val();
  $('h1').text(name);
}
function appendHobbyList(){
  var hobby = $('#hobby').val();
  $('body').append('<li>' + hobby + '</li>')
}
function changeBackground(){
  $('body').addClass("blue")
}
function setup(){
  $("#ok_button").click(changeHeader);
  $("#makeList").click(appendHobbyList);
  $("#blue").click(changeColorBlue);
}
$(document).ready(setup);
