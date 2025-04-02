import {Given, When}  from "@badeball/cypress-cucumber-preprocessor";
import AlertPopup from "../page_objects/handleAlertsPage";

Given("User launch the website and verified Alert text", ()=> {
    AlertPopup.navigate();
    AlertPopup.VerifyHeader();
    });

When("User click on Alert popup ok button", ()=> {
    AlertPopup.HandleAlertPopup();
})