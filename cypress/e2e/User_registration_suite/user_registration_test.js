
import HomePage_access from "../../support/pageObjects/Homepage_access";
import User_registration from "../../support/pageObjects/User_registration";
/// <reference types="cypress" />

describe("test the register a new user ", () => {
    const homepage_access = new HomePage_access();
    const user_regsitration = new User_registration;

    beforeEach(() => {
        homepage_access.visitHomepage();
        cy.get('[href="/auth/signup"]').click();


    });

    it("Succesfull user registration", () => {
     user_regsitration.user_succesfull_registration();
    })
    it("Unsuccesfull user registration wthout email, no meesage validation", () => {
     user_regsitration.user_unsuccesfull_registration_no_email();
    })
    it("Unsuccesfull user registration without name, allows regsitration", () => {
     user_regsitration.user_unsuccesfull_registration_No_Name();
    })
    it("Unsuccesfull user registration without Password", () => {
     user_regsitration.user_unsuccesfull_registration_No_Password();
    })
    it("Unsuccesfull user registration without Confirm Password", () => {
     user_regsitration.user_unsuccesfull_registration_N0_Confirm_Pass();
    })

});