const { CustomizedLogin } = require("cypress-social-logins").plugins;

module.exports = (on, config) => {
  on("task", {
    CustomizedLogin: CustomizedLogin,
  });
};
