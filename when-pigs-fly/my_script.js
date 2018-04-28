function showWhenClicked() {
    $("#pig").show();
}

function hideWhenClicked() {
    $("#pig").hide();
}
function flyWhenClicked(){
  $("#pig").animate(
    {"margin-left": "1000px"},
    1000
  );
}
function followPig1(){
  $("#pig2").animate(
    {"margin-left": "500px"},
    1500
  );
}
function setup() {
    $("#showPig").click(showWhenClicked);
    $("#hidePig").click(hideWhenClicked);
    $("#pig").click(flyWhenClicked);
    $("#pig").click(followPig1);
}
$(document).ready(setup);
