const { DiscordSocialLogin } = require("cypress-social-logins").plugins;

module.exports = (on, config) => {
  on("task", {
    DiscordSocialLogin: DiscordSocialLogin,
  });
};
