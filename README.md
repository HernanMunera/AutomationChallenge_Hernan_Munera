# AutomationChallenge_Hernan_Munera

Automation Challenge Hernan Munera

Scenarios in the Scope
Here are three key automated scenarios, along with the reasoning for their selection:

Successful User Registration
The "Registration" feature "currently has client-reported bugs". Automating a successful registration flow is critical to provide immediate regression coverage for a known problematic area and ensure that new users can successfully create accounts on the platform. This validates a fundamental entry point for users.

Scenario Details: This scenario would involve navigating to the registration page, filling in all required fields with new, unique test data (not explicitly provided for new registration, but implied for creation), and then verifying that the user is successfully registered and potentially redirected to a confirmation page or their profile.

End-to-End Product Purchase (Checkout Flow)
The "Checkout" feature explicitly has "reported bugs". Furthermore, the development team is actively "working in progress to expand payment methods and checkout features in the next 3 sprints". Automating the existing successful end-to-end checkout flow now is paramount. It will not only help catch existing bugs but also establish a crucial regression baseline for future changes as new payment methods are integrated. This is a high-impact business flow that directly affects revenue.

Scenario Details: This scenario would involve:

Logging in with an existing user (e.g., huge.test@gmail.com with password Huge2025 or huge2.test@gmail.com with password Monday12).

Navigating to a product page and adding a product to the shopping cart.

Proceeding through the shopping cart to the checkout process.

Entering necessary shipping and billing information utilizing the provided valid credit card details (e.g., 4301822375925071 with Exp Date: 2029-09 and CVV: 668 or 5840254353870254 with Exp Date: 2028-11 and CVV: 637) to complete the payment.

Finally, verifying the order confirmation and successful completion of the purchase.

Login with Valid Credentials and Access to Order History
"Login" is a core feature of the e-commerce site and is a prerequisite for accessing several other key features like the shopping cart, checkout, and order history. While not specifically noted as having bugs, its stability is foundational. Automating a successful login ensures that existing users can reliably access their accounts, and it also sets up a logged-in state for subsequent tests like the checkout flow. Verifying access to "Order history" provides further confirmation of a successful login and correct user context.

Scenario Details: This scenario would involve navigating to the login page, entering valid user credentials (e.g., huge.test@gmail.com with password Huge2025 or huge2.test@gmail.com with password Monday12), submitting the form, and then verifying successful authentication by checking for the presence of elements on the user's dashboard or directly navigating to and asserting content on the "Order history" page.


The script created to run all the tests is the following:
npm run triggerAllTests-headless

The script created to run all the tests and the Mocha report is the following:
npm run cypress-execution-test

This report will be stored on mochawesome-report folder as mochawesome.html


To see the Automation Test Strategy in this link: https://docs.google.com/document/d/1PO0oG3VGLFNoA_6ZdhhatsY32TkyTVB9nKIvAXMUQyc/edit?tab=t.0

