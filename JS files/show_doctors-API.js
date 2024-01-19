$(document).ready(function () {
  $("#seeDoctors").click(function () {
    async function getData(data) {
      $("#doctor_list").empty();
      let my_obj = await fetch(data);
      let my_text = await my_obj.text();
      let doctors = JSON.parse(my_text);

      let head =
        "<tr><th>Name</th><th>Specialization</th><th>Availability</th></tr>";
      $("#doctor_list").append(head);

      for (let i = 0; i < doctors.length; i++) {
        let row =
          "<tr><td>" +
          doctors[i].name +
          "</td><td>" +
          doctors[i].specialization +
          "</td><td>" +
          doctors[i].availability +
          "</td></tr>";

        $("#doctor_list").append(row);
      }
    }

    getData("https://api-render-xvn7.onrender.com/api/doctors");
  });
});

$(document).ready(function () {
  $("#spec").change(function () {
    async function getData(data) {
      $("#doctor_list").empty();
      let my_obj = await fetch(data);
      let my_text = await my_obj.text();
      let doctors = JSON.parse(my_text);

      let selected = $("#spec").val();
      let filtered_docs = [];
      let head =
        "<tr><th>Name</th><th>Specialization</th><th>Availability</th></tr>";
      $("#doctor_list").append(head);

      for (let i = 0; i < doctors.length; i++) {
        if (doctors[i].specialization == selected) {
          filtered_docs.push(doctors[i]);

          let row =
            "<tr><td>" +
            doctors[i].name +
            "</td><td>" +
            doctors[i].specialization +
            "</td><td>" +
            doctors[i].availability +
            "</td></tr>";

          $("#doctor_list").append(row);
        }
      }
    }

    getData(
      "https://api-render-xvn7.onrender.com/api/doctors/" + $("#spec").val()
    );
  });
});
