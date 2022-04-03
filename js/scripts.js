$(document).ready(function() {
    $("#formOne").submit(function(event) {
      event.preventDefault();
      const inputCaps = $("input#input-caps").val().toUpperCase();
  
     $(".input-caps").text(inputCaps);
  
      $("#output-caps").show();
    });
  });