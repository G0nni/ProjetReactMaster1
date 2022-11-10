const express = require("express");
const router = express.Router();
const Partie = require("../models/Parties.js");

router.get("/", (req, res) => {
  res.send("posts egegsrgdrgerg");
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const Parties = new Partie({
    nomPartie: req.body.nomPartie,
  });

  Parties.save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

module.exports = router;
