describe('Change Account', ()=> {
    it('Changes the account', ()=> {
        cy.visit('http://localhost:8081/')
        cy.contains('Login').click();
        cy.get('input').first().type("Otto@mail.com");
        cy.get('input').eq(1).type("Test22");
        cy.contains('Submit').click();

        cy.wait(6000)

        //cy.visit('http://localhost:8081/autherized')

        cy.contains('Account')

        cy.visit('http://localhost:8081/settings')
        cy.wait(2000)

        cy.get('input').first().type("Otto");
        cy.get('input').eq(1).type("Otto@mail.com");
        cy.get('input').eq(2).type("Test22");

        cy.contains('Update').click()
    })
})

describe('Delete Account', ()=> {
    it('Deletes the account', ()=> {
        cy.visit('http://localhost:8081/')
        cy.contains('Login').click();
        cy.get('input').first().type("Otto@mail.com");
        cy.get('input').eq(1).type("Test22");
        cy.contains('Submit').click();

        cy.wait(6000)

        //cy.visit('http://localhost:8081/autherized')

        cy.contains('Account')

        cy.visit('http://localhost:8081/settings')
        cy.wait(2000)

        cy.contains('Delete').click()
    })
})

