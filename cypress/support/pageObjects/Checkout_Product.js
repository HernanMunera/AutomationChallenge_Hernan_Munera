class Checkout_Product {

    addingfProductToShoppingCar(){
        cy.get(':nth-child(3) > .pt-0 > .align-middle').click();
        cy.get('[data-at="cart-opener"]').click({force:true});
        cy.get('.overflow-auto > .cart-grid > :nth-child(2)').should('have.text','Mancuernas Recubiertas de Neopreno');
    }
    CheckOutProcess() {
        cy.get(':nth-child(3) > .pt-0 > .align-middle').click();
        cy.get('[data-at="cart-opener"]').click({ force: true });
        cy.get('.overflow-auto > .cart-grid > :nth-child(2)').should('have.text', 'Mancuernas Recubiertas de Neopreno');
        cy.get('.flex > .bg-primaryColor').click();
        cy.get('input[placeholder="John"]').type('Jim');
        cy.get('input[placeholder="Doe"]').type('Bob');
        cy.get('input[placeholder="mail@domain.com"]').type('jimbob123@gmail.com');
        cy.get(':nth-child(4) > .bg-gray-50').type('Calle de la Vega 123');
        cy.get('#country').select('Colombia').should('have.value', 'Colombia');
        cy.get('.rounded > :nth-child(2) > :nth-child(1) > .bg-gray-50').type('Jim Bob')
        cy.get('.flex > .relative > .bg-gray-50').type('5840254353870254')
        cy.get('input[name="expiryDate"]').type('2028-11')
        cy.get('input[name="securityCode"]').type('637')
        cy.get('.my-5 > .bg-primaryColor').should('have.text', 'Completar Pago').click();
        cy.get('#swal2-title').contains('Orden creada');
        cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
    }


}
export default Checkout_Product;