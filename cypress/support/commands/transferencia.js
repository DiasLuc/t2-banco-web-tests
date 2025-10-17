Cypress.Commands.add('makeTransfer', (originAccount,destinationAccount,transferAmount) => {
    cy.selectComboboxOption('conta-origem', originAccount)
    cy.selectComboboxOption('conta-destino', destinationAccount)
    cy.get('#valor').click().type(transferAmount)
    cy.contains('button', 'Transferir').click()
})