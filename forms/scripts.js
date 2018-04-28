function greeting(){
  var userName = $('#username').val();
  alert("Hello " + userName + ",\nYou are awesome!");
  var header = $("h2");
  header.text(userName + " is awesome");
}

function setup(){
  $("#ok_button").click(greeting);
}

$(document).ready(setup);
