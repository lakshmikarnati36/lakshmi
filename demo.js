$(document).ready(function() {
  readJson();
});
function readJson() {
  $.getJSON("data.json", function(obj) {
    $.each(obj, function(key, value) {
      var root = $("#userList");
      var li = $("<li/>");
      var span = $("<span/>", {
        text: value.name
      });
      var br = $("<br/>");
      var span1 = $("<span/>", {
        text: value.id
      });
      li.append(span)
        .append(br)
        .append(span1);
      root.append(li);
    });
  });
}
