async function getData(data) {
  let my_obj = await fetch(data);
  let my_text = await my_obj.text();
  let doctors = JSON.parse(my_text);

  for (let i = 0; i < doctors.length; i++) {
    let row =
      "<tr><th>Name</th><th>Specialization</th><th>Availability</th></tr><tr><td>" +
      doctors[i].name +
      "</td><td>" +
      doctors[i].specialization +
      "</td><td>" +
      doctors[i].availability +
      "</td></tr>";

    $("#doctor_list").append(row);
  }
}

getData("http://localhost:3005/api/doctors");
