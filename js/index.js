$(document).ready(function() {
    console.log("JavaScripte file is loaded corrctly")
    // Attach the event listener to the button with id="myButton"
    $("#myButton").on("click", function() {
      // Code to be executed when the button is clicked
      $("#output").text("Download my Resume");
    });
  });
  