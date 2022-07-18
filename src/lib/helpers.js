const bcrypt = require("bcryptjs");

const helpers = {};

helpers.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = bcrypt.hash(password, salt);
  return hash;
};

helpers.matchPassword = async (password, savePassword) => {
  try {
    await bcrypt.compare(password, savePassword)
  } catch (error) { 
    console.log(error);
  }
}

module.exports = helpers;