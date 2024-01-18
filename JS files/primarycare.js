$(document).ready(function () {
  // Specialists data
  var specialists = [
    { name: "Dr. Jose Dela Cruz", location: "Boracay" },
    { name: "Dr. Maria Santos", location: "Palawan" },
    { name: "Dr. Juan Luna", location: "Cebu" },
    { name: "Dr. Ana Reyez", location: "Baguio" },
    { name: "Dr.Isabella Rizal ", location: "Palawan" },
    { name: "Dr. Carlos Pascual", location: "Bohol" },
    { name: "Dr. Sofia Mendoza", location: "Siargao" },
    { name: "Dr. Antonio Rosario", location: "Vigan" },
    { name: "Dr. Luz Bautista", location: "Davao" },
    { name: "Dr. Fernando Garcia", location: "Batanes" },
    { name: "Dr. Juan Luna", location: "Coron" },
    { name: "Dr. Miguel Lopez", location: "Manila" },
    { name: "Dr. Manuel Rodriguez", location: "Sagada" },
    { name: "Dr. Teresa Villanueva", location: "Camiguin" },
    { name: "Dr. Ricardo Ocampo", location: "Tagaytay" },
    { name: "Dr. Ernesto Navarro", location: "Batangas" },
    { name: "Dr. Gabriela Silang", location: "Baybay" },
    { name: "Dr. Maricel Soriano", location: "Cadiz" },
    { name: "Dr. Lourdes Medina", location: "Cotabato" },
    { name: "Dr. Ramon Aquino", location: "Dagupan" },
    { name: "Dr. Dante Gutierrez", location: "Escalante" },
    { name: "Dr. Patricia Santos", location: "General Santos" },
  ];

  // Dynamically create specialist elements
  specialists.forEach(function (specialist) {
    var specialistDiv = $("<div>", {
      class: "specialist",
      "data-location": specialist.location,
      style: "display: none",
    })
      .text(specialist.name + " - ")
      .append(
        $("<span>", {
          class: "location",
        }).text(specialist.location)
      );

    $("#specialistList").append(specialistDiv);
  });

  $("#searchButton").click(function () {
    var inputLocation = $("#locationInput").val().trim().toLowerCase();
    var found = false;

    if (inputLocation === "") {
      return;
    }

    $(".specialist").each(function () {
      var specialistLocation = $(this).data("location").toLowerCase();
      if (specialistLocation.includes(inputLocation)) {
        $(this).show();
        found = true;
      } else {
        $(this).hide();
      }
    });

    if (!found) {
      $("#feedback")
        .show()
        .text("No specialists found for " + inputLocation);
    } else {
      $("#feedback").hide();
    }
  });
});
