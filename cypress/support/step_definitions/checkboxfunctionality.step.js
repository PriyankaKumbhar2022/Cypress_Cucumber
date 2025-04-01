import {Given, When}  from "@badeball/cypress-cucumber-preprocessor";
import CheckBox from "../page_objects/checkboxfunctionalityPage";

Given("User launch the website and verified checkBox text", ()=> {
    CheckBox.navigate();
    CheckBox.VerifyHeader();
    });

When("User click on checkbox1", ()=> {
    CheckBox.CheckBoxSelection();
})