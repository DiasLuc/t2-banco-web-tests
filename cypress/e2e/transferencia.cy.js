describe('Transferencias', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fixture('credentials').then(credentials => {
            cy.get('#username').click().type(credentials.valid.username)
            cy.get('#senha').click().type(credentials.valid.senha)
        })
        cy.contains('button','Entrar').click()
    })

    it('Should create a transfer when we pass in valid data and value', () => {
        cy.get('label[for="conta-origem"]').parent().as('campo-conta-origem')
        cy.get('@campo-conta-origem').click()
        cy.get('@campo-conta-origem').contains('Maria Oliveira').click()

        cy.get('label[for="conta-destino"]').parent().as('campo-conta-destino')
        cy.get('@campo-conta-destino').click()
        cy.get('@campo-conta-destino').contains('João da Silva').click()

        cy.get('#valor').click().type('12.21')
        cy.contains('button', 'Transferir').click()

        cy.get('.toast').should('have.text', 'Transferência realizada!')
    })
})