class User_registration {

    user_succesfull_registration() {
        const randomEmail = `user_${Date.now()}_${Math.floor(Math.random() * 1000)}@testmail.com`;
        // cy.get('[href="/auth/signup"]').click();
        cy.get('[name="email"]').should('have.attr', 'name')
        cy.get('[name="email"]').type(randomEmail)
        cy.get('[type="text"]').should('have.attr', 'placeholder')
        cy.get('[type="text"]').type("Jim Bob Razor")
        cy.get('[name="password"]').type("Jimbob01")
        cy.get('[placeholder="Repite tu contraseña"]').type("Jimbob01")
        cy.get('[data-at="submit-signup"]').click();
        cy.get('#swal2-title').should('have.text', 'Operación Exitosa')
        cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').should('have.text', 'Ir al login').click();
    }

    user_unsuccesfull_registration_no_email() {
        // cy.get('[href="/auth/signup"]').click();
        cy.get('[name="email"]').should('have.attr', 'name')
        cy.get('[name="email"]').type(" ")
        cy.get('[type="text"]').should('have.attr', 'placeholder')
        cy.get('[type="text"]').type("Jim Bob Razor")
        cy.get('[name="password"]').type("Jimbob01")
        cy.get('[placeholder="Repite tu contraseña"]').type("Jimbob01")
        cy.get('[data-at="submit-signup"]').click();
        cy.get('#swal2-title').should('have.text', 'name should not be empty')
        cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
    }

    user_unsuccesfull_registration_No_Name() {
        const randomEmail = `user_${Date.now()}_${Math.floor(Math.random() * 1000)}@testmail.com`;
        // cy.get('[href="/auth/signup"]').click();
        cy.get('[name="email"]').should('have.attr', 'name')
        cy.get('[name="email"]').type(randomEmail)
        cy.get('[type="text"]').should('have.attr', 'placeholder')
        cy.get('[type="text"]').type(" ")
        cy.get('[name="password"]').type("Jimbob01")
        cy.get('[placeholder="Repite tu contraseña"]').type("Jimbob01")
        cy.get('[data-at="submit-signup"]').click();
        cy.get('#swal2-html-container').should('have.text', 'name should not be empty')
        cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').should('have.text', 'Volver').click();
    }
    user_unsuccesfull_registration_No_Password() {
        const randomEmail = `user_${Date.now()}_${Math.floor(Math.random() * 1000)}@testmail.com`;
        // cy.get('[href="/auth/signup"]').click();
        cy.get('[name="email"]').should('have.attr', 'name')
        cy.get('[name="email"]').type(randomEmail)
        cy.get('[type="text"]').should('have.attr', 'placeholder')
        cy.get('[type="text"]').type("Jim Bob Razor")
        cy.get('[name="password"]').type(" ")
        cy.get('[placeholder="Repite tu contraseña"]').type("Jimbob01")
        cy.get('[data-at="submit-signup"]').should('be.disabled')
        cy.get('#swal2-title').should('have.text', 'password should not be empty')
        // cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').should('be.disabled');
    }

    user_unsuccesfull_registration_N0_Confirm_Pass() {
        const randomEmail = `user_${Date.now()}_${Math.floor(Math.random() * 1000)}@testmail.com`;
        // cy.get('[href="/auth/signup"]').click();
       cy.get('[name="email"]').should('have.attr', 'name')
        cy.get('[name="email"]').type(randomEmail)
        cy.get('[type="text"]').should('have.attr', 'placeholder')
        cy.get('[type="text"]').type("Jim Bob Razor")
        cy.get('[name="password"]').type("QATest")
        cy.get('[placeholder="Repite tu contraseña"]').type(" ")
        cy.get('[data-at="submit-signup"]').should('be.disabled')
        cy.get('#swal2-title').should('have.text', 'Confirm password should not be empty')
    }
}
export default User_registration;