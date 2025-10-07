describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4000')
    cy.screenshot('after-visiting-page')
  })

  it('Login with valid credentials should allow system entry', () => {
    
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.screenshot('after-filling-valid-credentials')
    // Initial way of getting button
    cy.get('#login-section > .btn').click()
    cy.screenshot('after-clicking-enter-button')

    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login with invalid credentials should show error message', () => {
    
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('invalidPass')

    // Better way of getting button
    cy.contains('button','Entrar').click()

    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})