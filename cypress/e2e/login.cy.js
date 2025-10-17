describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Login with valid credentials should allow system entry', () => {
    cy.loginWithValidCredentials()

    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login with invalid credentials should show error message', () => {
    cy.loginWithInvalidCredentials()

    cy.verifyToastMessage('Erro no login. Tente novamente.')
  })
})