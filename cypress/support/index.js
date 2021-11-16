import './commands'

before(() => {
    // cy.server() - para route e request
    cy.server();
    //variaveis env
    var name =     Cypress.env('name', 'Gatos queridos');
    var email =    Cypress.env('email', 'teste@email.com');
    var whatsapp = Cypress.env('whatsapp', '1999999999');
    var city =     Cypress.env('city', 'Campinas');
    var uf =       Cypress.env('uf', 'SP'); 
    cy.createOng(name, email, whatsapp, city, uf);
});