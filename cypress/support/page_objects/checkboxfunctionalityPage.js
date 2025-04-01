export class CheckBox {

    navigate(){
        cy.visit("https://www.tutorialspoint.com/selenium/practice/check-box.php");
        cy.log("CheckBox url launched successfully..")
    }

    VerifyHeader() {
        cy.xpath("//h1[text()='Check Box']").then(($heading) => {
            if($heading.is(':visible')){
                cy.log("Heading verified successfully!");
                cy.screenshot();
            } else {
                 console.log("Heading does not match! Found:", headingText);
                 cy.screenshot();
              }
          });
    }

    CheckBoxSelection() {
        try {
            cy.xpath('//*[@id="c_bs_1"]').click();
            cy.xpath('//*[@id="c_bs_2"]').click();
            cy.log("CheckBox selected successfully");
            cy.screenshot();
        } catch (error) {
            cy.log("Error selecting checkbox: " + error.message);
            cy.screenshot();
        }
    }
    
 }
 export default new CheckBox();