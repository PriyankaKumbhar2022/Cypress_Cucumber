export class ScrollDropdown {

    navigate(){
        cy.visit("https://admirhodzic.github.io/multiselect-dropdown/demo.html");
        cy.log("url launched successfully..")
    }

    VerifyHeader() {
        cy.xpath("//h1[text()='Multiselect-dropdown demo!']").then(($heading) => {
            if($heading.is(':visible')){
                cy.log("Heading verified successfully!");
                cy.screenshot();
            } else {
                 console.log("Heading does not match! Found:", headingText);
                 cy.screenshot();
              }
          });
    }

    scrollDropdownSelect2() {
        cy.get('.col > :nth-child(7)').click();
        cy.log("Dropdown is selected successfully");
        
        cy.get(':nth-child(65)', { timeout: 5000 }).then(($element) => {
            if ($element.is(':visible')) {
                cy.wrap($element).click();
                cy.log("Dropdown item clicked successfully");
                cy.screenshot();
            } else {
                cy.log("Dropdown item is not visible");
                cy.screenshot();
            }
        });
        
      cy.xpath("//h1[text()='Multiselect-dropdown demo!']").click();
    }
    
 }
 export default new ScrollDropdown();