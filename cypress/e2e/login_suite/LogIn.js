/// <reference types="cypress" />

describe("test the Login Page for Laboratorio0del testing page ", () => {

    beforeEach(() => {
        cy.visit("https://www.laboratoriodetesting.com/")
        cy.contains('a', 'Acceder').click();

    });

    it("Login successfully", () => {
        cy.get('input[name="email"]').type('huge2.test@gmail.com');
        cy.get('input[name="password"]').type('Monday12.');
        cy.get('[data-at="submit-login"]').click();
        cy.get('[href="/my-account"]').should('have.text', 'Mi Cuenta')
    })

    it("Login unsuccessfully with wrong email", () => {
        cy.get('input[name="email"]').type('whuge2.test@gmail.com');
        cy.get('input[name="password"]').type('Monday12.');
        cy.get('[data-at="submit-login"]').click();
        cy.get('#swal2-html-container').should('have.text', 'No pudimos iniciar sesión con estas credenciales. Intenta de nuevo.')
    })

    it("Login unsuccessfully with wrong password", () => {

        cy.get('input[name="email"]').type('huge2.test@gmail.com');
        cy.get('input[name="password"]').type('Monday12.1');
        cy.get('[data-at="submit-login"]').click();
        cy.get('#swal2-html-container').should('have.text', 'No pudimos iniciar sesión con estas credenciales. Intenta de nuevo.')
    })

    it("Login unsuccessfully by bug with unable button", () => {
        cy.get('input[name="email"]').type('huge2.test@gmail.com');
        cy.get('input[name="password"]').type('Monday12.');
        cy.get('input[name="email"]').clear().type('whuge2.test@gmail.com');
        cy.get('[data-at="submit-login"]').click();
        cy.get('[href="/my-account"]').should('have.text', 'Mi Cuenta')
    })

});
