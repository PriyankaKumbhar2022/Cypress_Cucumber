export class ScrollDropdown {

    navigate(){
        cy.visit("https://admirhodzic.github.io/multiselect-dropdown/demo.html");
        console.log("url launched successfully..")
    }

    VerifyHeader() {
        cy.get('h1').then(($header) => {
            const headerText = $header.text().trim();
    
            if (headerText === 'Multiselect-dropdown demo!') {
                console.log("Heading verified successfully!")
            } else {
                console.error("Heading does not match! Found:")
            }
            expect(headerText).to.eq('Multiselect-dropdown demo!');
        });
    }

        scrollDropdownSelect2(){
            cy.get('.col > :nth-child(7)', { timeout: 5000 }).should("be.visible").click();
            cy.get(':nth-child(7) > .multiselect-dropdown-list-wrapper > .multiselect-dropdown-list')
            .scrollIntoView().should("have.text", "Volvo")
         
        }
    }

 export default new ScrollDropdown();