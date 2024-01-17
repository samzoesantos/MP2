$(document).ready(function () {
  // Initially hide all specialists
  $(".specialist").hide();

  $("#searchButton").click(function () {
    var inputLocation = $("#locationInput").val().trim().toLowerCase();
    var found = false;

    if (inputLocation === "") {
      // Optional: Display a message to enter a location or return
      return;
    }

    $(".specialist").each(function () {
      var specialistLocation = $(this).data("location").toLowerCase();
      if (specialistLocation.includes(inputLocation)) {
        $(this).show(); // Show this specialist
        found = true;
      } else {
        $(this).hide(); // Hide this specialist
      }
    });

    if (!found) {
      // Optional: Display a message that no specialists were found
      $("#feedback")
        .show()
        .text("No specialists found for " + inputLocation);
    } else {
      $("#feedback").hide();
    }
  });
});
