const mongoose = require("mongoose");

const logSchema = new mongoose.Schema(
  {
    title: String,
    entery: String,
    shipIsBroken: { type: Boolean, default: true }
  },
  { timestamps: true }
);

const Log = mongoose.model("Log", logSchema);
module.exports = Log;
