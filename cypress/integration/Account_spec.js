describe('send message', ()=> {
    it('sends the message', ()=> {
        cy.visit('http://localhost:8081/')
        cy.contains('Login').click();
        cy.get('input').first().type("Otto@mail.com");
        cy.get('input').eq(1).type("Test22");
        cy.contains('Submit').click();

        //cy.visit('http://localhost:8081/autherized')

        cy.contains('Account')

        cy.visit('http://localhost:8081/settings')
    })
})

