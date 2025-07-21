class HomePage_access {

    visitHomepage(){
        cy.visit("https://www.laboratoriodetesting.com");
    }

    logIn_user(){
        cy.visit("https://www.laboratoriodetesting.com")
        cy.contains('a', 'Acceder').click();
        cy.get('input[name="email"]').type('huge2.test@gmail.com');
        cy.get('input[name="password"]').type('Monday12.');
        cy.get('[data-at="submit-login"]').click();
        cy.get('[href="/my-account"]').should('have.text', 'Mi Cuenta')
    }
}
export default HomePage_access;