Cypress.Commands.add('verifyToastMessage', message => {
    cy.get('.toast').should('have.text', message)
})

Cypress.Commands.add('selectComboboxOption', (labelName, option) => {
    cy.get(`label[for="${labelName}"]`).parent().as(`campo-${labelName}`)
    cy.get(`@campo-${labelName}`).click()
    cy.get(`@campo-${labelName}`).contains(option).click()
})