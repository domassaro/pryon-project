describe("Login page", () => {
  before(() => {
    cy.visit("localhost:3000");
  });
  it("Login with Discord", () => {
    const usernameField = Cypress.env("DISCORD_USER");
    const passwordField = Cypress.env("DISCORD_PW");
    const loginUrl = Cypress.env("SITE_NAME");
    const cookieName = Cypress.env("COOKIE_NAME");
    const socialLoginOptions = {
      usernameField,
      passwordField,
      username: usernameField,
      password: passwordField,

      loginUrl,
      headless: true,
      logs: false,
      isPopup: false,
      loginSelector: `a[href="${Cypress.env("SITE_NAME")}/api/auth/signin?"]`,
      postLoginSelector: ".unread-count",
    };

    return cy
      .task("CustomizedLogin", socialLoginOptions)
      .then(({ cookies }) => {
        cy.clearCookies();

        const cookie = cookies
          .filter((cookie) => cookie.name === cookieName)
          .pop();
        if (cookie) {
          cy.setCookie(cookie.name, cookie.value, {
            domain: cookie.domain,
            expiry: cookie.expires,
            httpOnly: cookie.httpOnly,
            path: cookie.path,
            secure: cookie.secure,
          });

          Cypress.Cookies.defaults({
            preserve: cookieName,
          });

          // remove the two lines below if you need to stay logged in
          // for your remaining tests
          cy.visit("/api/auth/signout");
          cy.get("form").submit();
        }
      });
  });
});
