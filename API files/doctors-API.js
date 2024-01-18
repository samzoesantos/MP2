const ex = require("express");
const ds = require("./doctors-JSON");
const cors = require("cors");

const app = ex();
const d = ds.doctors;
app.use(cors());
app.use(ex.json());

// GET ALL DOCTORS LIST
app.get("/api/doctors", (req, res) => {
  res.send(d);
});

// GET DOCTORS BY SPECIALTY
app.get("/api/doctors/:spec", (req, res) => {
  let specialty = [];
  for (let i = 0; i < d.length; i++) {
    if (d[i].specialization == req.params.spec) {
      specialty.push(d[i]);
    }
  }
  res.send(specialty);
});
app.listen(3005);
console.log("Starting server...");
