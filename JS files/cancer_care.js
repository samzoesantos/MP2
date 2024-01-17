$(document).ready(function () {
  $("#centersList").hide();

  $("#findCancerCenter").click(function () {
    var inputLocation = $("#locationInput").val().trim().toLowerCase();
    var foundCenters = getCentersByLocation(inputLocation);

    if (inputLocation === "") {
      alert("Please enter a location.");
    } else if (foundCenters.length > 0) {
      var resultHTML = "<ul>";
      foundCenters.forEach(function (center) {
        resultHTML += "<li>" + center + "</li>";
      });
      resultHTML += "</ul>";
      $("#centersList").html(resultHTML).show();
    } else {
      $("#centersList")
        .html("<div>No cancer centers found in this location.</div>")
        .show();
    }
  });
});

function getCentersByLocation(location) {
  var allCenters = [
    "Harmony Oncology Center - Manila ",
    "Beacon Cancer Care - Cebu",
    "Pinnacle Oncology Institute - Antipolo",
    "Solace Cancer Support Center- Davao",
    "Horizon Cancer Therapy Center- Zamboanga",
    "Tranquil Cancer Hospital-Tarlac",
    "Luminous Oncology Network-Cagayan de Oro",
    "Serene Cancer Treatment Facility- Quezon City",
    "Radiant Oncology Clinic- Pasig",
    "Hope Cancer Research Center- Taguig",
    "Summit Cancer Care Hospital- Calaoocan",
    "Oasis Cancer Treatment Center- Iligan",
    "Compass Cancer Support Services- Dumagete",
    "Haven Oncology Care Center- Legazpi City",
    "Zenith Cancer Management Clinic - Puerto Princessa",
  ];

  var filteredCenters = allCenters.filter(function (center) {
    return center.toLowerCase().includes(location);
  });

  return filteredCenters;
}
