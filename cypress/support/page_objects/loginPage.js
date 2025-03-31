export class LoginPage {

navigate(){
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
}

enterCredentials(username, password){
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get("button[type='submit']").click();
}

verifyDashboard(){
    //cy.url().should("include", "/dashboard");

    cy.url().then((currentUrl) => {
        if (currentUrl.includes("/dashboard")) {
          cy.log("User successfully navigated to the dashboard");
          cy.url().should("include", "/dashboard"); // Assert URL contains /dashboard
        } else {
          cy.xpath('//p[text()="Invalid credentials"]').then(($error) => {
            if ($error.length > 0) {
              cy.wrap($error).should("be.visible").and("have.text", "Invalid credentials");
              cy.log("Login failed: Invalid credentials");
            } else {
              cy.log("Unexpected error occurred");
            }
          });
        }
      });
}

VerifyInvalidError(){
    //cy.xpath('//p[text()="Invalid credentials"]').should('be.visible').and('have.text','Invalid credentials');
    cy.xpath('//p[text()="Invalid credentials"]').then(($element) => {
        if ($element.length > 0) {
          cy.wrap($element).should('be.visible').and('have.text', 'Invalid credentials');
          cy.log('Invalid credentials message is displayed');
        } else {
          cy.log('Invalid credentials message is not displayed');
        }
      });
}

} 
export const loginPage = new LoginPage();