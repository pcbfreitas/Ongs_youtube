Cypress.Commands.add("createOng", (name, email, whatsapp, city, uf) => {    
    cy.request({
        method: 'POST',
        url: 'http://localhost:3333/ongs',
        body: {                
                name: name,    
                email: email,
                whatsapp: whatsapp,
                city: city,
                uf: uf 
        }
    }).then(response => {
        expect(response.body.id).is.not.null;
        cy.log(response.body.id);
        Cypress.env('createdOngId', response.body.id);
    });
});