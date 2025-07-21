import Checkout_Product from "../../support/pageObjects/Checkout_Product";
import HomePage_access from "../../support/pageObjects/Homepage_access";
/// <reference types="cypress" />

describe("test the E2E test for the checkout process ", () => {
const homepage_access = new HomePage_access();
const checkout_proces = new Checkout_Product();

    beforeEach(() => {
    homepage_access.logIn_user();

    // addItem_Cart.addingItem_To_Shopping_Car();
    });

    it("Adding Product to the Shopping car", () => {
        checkout_proces.addingfProductToShoppingCar();
      
    })

        it("Checkout process after adding itme to the shopping car", () => {
            checkout_proces.CheckOutProcess();

    })
});