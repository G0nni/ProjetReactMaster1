const mongoose = require("mongoose");

const schema = mongoose.Schema;

PartiesSchema = new schema({
  nomPartie: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Partie", PartiesSchema);
