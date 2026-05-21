const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const schema = new mongoose.Schema({
  name: String,

  email: {
    type: String,
    unique: true,
  },

  password: {
    type: String,
    select: false,
  },
});

schema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return next();

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

    next();
  } catch (err) {
    next(err);  
  }
});

module.exports = mongoose.model("User", schema);
