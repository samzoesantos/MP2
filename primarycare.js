$(document).ready(function () {
  // Initially hide all specialists
  $(".specialist").hide();

  $("#searchButton").click(function () {
    var inputLocation = $("#locationInput").val().toLowerCase();
    var found = false;

    $(".specialist").each(function () {
      var specialistLocation = $(this).data("location").toLowerCase();
      if (specialistLocation.includes(inputLocation)) {
        $(this).show(); // Show this specialist
        found = true;
      } else {
        $(this).hide(); // Hide this specialist
      }
    });

    if (!found || inputLocation === "") {
      $(".specialist").hide(); // Hide all specialists if none found or input is empty
    }
  });
});
