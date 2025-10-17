describe('Transferencias', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.loginWithValidCredentials()
    })

    it('Should create a transfer when we pass in valid data and value', () => {
        cy.makeTransfer('Maria Oliveira', 'João da Silva', '12.21')
        cy.verifyToastMessage('Transferência realizada!')
    })

    it('Should present an error when trying to transfer more than R$5,000', () => {
        cy.makeTransfer('Maria Oliveira', 'João da Silva', '5001')
        cy.verifyToastMessage('Autenticação necessária para transferências acima de R$5.000,00.')
    })
})