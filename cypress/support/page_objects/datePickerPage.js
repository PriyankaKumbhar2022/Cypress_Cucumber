export class Datepicker {

    navigate(){
        cy.visit("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");
        cy.log("DatePicker page launched successfully..")
    }

    VerifyHeader() {
        // Verify the heading of the page
        cy.xpath('//h1[text()="Student Registration Form"]').then(($heading) => {
            if($heading.is(':visible')){
                cy.log("Heading verified successfully!");
                cy.screenshot();
            } else {
                 console.log("Heading does not match! Found:", headingText);
                 cy.screenshot();
              }
          });
    }

    EnterDate() {
        const date = Cypress.env("currentDate");
        cy.xpath("//input[@id='dob']").then(($datepicker) => {
            if($datepicker.is(':visible')){
                cy.xpath("//input[@id='dob']").type(date);// Enter date textfield xpath
                cy.log("Current date is :" +date)
                cy.log("date entered successfully!");
                cy.screenshot();
            } else {
                 console.log("Failed to enetred date");
                 cy.screenshot();
              }
          });
    }
} export default new Datepicker();