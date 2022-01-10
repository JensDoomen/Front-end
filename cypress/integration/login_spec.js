describe('Login a user', ()=> {
    it('Signs in a user', ()=> {
        cy.visit('http://localhost:8081/');

        cy.contains('Login').click();
        cy.get('input').first().type("Otto@mail.com");
        cy.get('input').eq(1).type("Test22");
        
        cy.contains('Submit').click();
        cy.wait(9000)

       
    })
});

describe('Does not Login a user', ()=> {
    it('Does not Signs in a user', ()=> {
        cy.visit('http://localhost:8081/');

        cy.contains('Login').click();
        cy.get('input').first().type("Otto@mail.com");
        cy.get('input').eq(1).type("Test");
        
        cy.contains('Submit').click();

        cy.wait(9000)
    })
});
describe('Does not fill int the fields', ()=> {
    it('just clicks submit', ()=> {
        cy.visit('http://localhost:8081/');

        cy.contains('Login').click();
        
        
        cy.contains('Submit').click();
        cy.wait(6000)
    })
});