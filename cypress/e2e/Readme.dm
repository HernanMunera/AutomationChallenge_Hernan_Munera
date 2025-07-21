# Cypress Tests for Laboratorio de Testing
 page

This project contains automated tests for validating the Successful User Registration, Product Purchase (Checkout Flow) and Login with Valid Credentials and Access to Order History of
(https://www.laboratoriodetesting.com/).

## Tests Included:
- Login Suite
    * Login successfully
    * Login unsuccessfully with wrong email
    * Login unsuccessfully with wrong password
    * Login unsuccessfully by bug with unable button

- Product_purchase_suite
    * Adding Product to the Shopping car
    * Checkout process after adding itme to the shopping car

- User_registration_suite
    * Succesfull user registration
    * Unsuccesfull user registration wthout email, no meesage validation (This test failed)
    * Unsuccesfull user registration without name, allows regsitration (This test failed, allows message registration without name).
    * Unsuccesfull user registration without Password (This test failed, the button is able to click without password).
    * Unsuccesfull user registration without Confirm Password (This test failed, the button is able to click without password)

## How to run

npm run cypress-execution-test

# Report on
mochasewome-report/mochawesome.html

