export class AlertPopup {

    navigate(){
        cy.visit("https://www.tutorialspoint.com/selenium/practice/alerts.php");
        cy.log("Alert popup url launched successfully..")
    }

    VerifyHeader() {
        cy.xpath("//label[text()='Click Button to see alert']").then(($heading) => {
            if($heading.is(':visible')){
                cy.log("Heading verified successfully!");
                cy.screenshot();
            } else {
                 console.log("Heading does not match! Found:", headingText);
                 cy.screenshot();
              }
          });
    }

    HandleAlertPopup() {
        try {
            cy.xpath('//button[text()="Alert"]').click();
            cy.on('window:alert', (text) => {
                expect(text).to.equal('Hello world!');
              });

            cy.log("Alert popup handle successfully");
            cy.screenshot();
            
        } catch (error) {
            cy.log("Error selecting checkbox: " + error.message);
            cy.screenshot();
        }
    }
    
 }
 export default new AlertPopup();