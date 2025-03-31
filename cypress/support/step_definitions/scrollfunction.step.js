import {Given, When}  from "@badeball/cypress-cucumber-preprocessor";
import ScrollDropdown from "../page_objects/scrollfunctionPage";

Given("User launch the website and verified header of page", ()=> {
    ScrollDropdown.navigate();
    ScrollDropdown.VerifyHeader();
    });

When("User click on dropdowp to select2 option", ()=> {
    ScrollDropdown.scrollDropdownSelect2();
})