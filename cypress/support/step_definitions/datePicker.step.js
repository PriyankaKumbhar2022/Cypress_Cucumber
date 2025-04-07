import {Given, When}  from "@badeball/cypress-cucumber-preprocessor";
import Datepicker from "../page_objects/datePickerPage";

Given("User launch the website for date and verified heading", ()=> {
    Datepicker.navigate();
    Datepicker.VerifyHeader();
    });

When("User set date in textfield", ()=> {
    Datepicker.EnterDate();
})