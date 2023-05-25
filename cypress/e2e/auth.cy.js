import {SignInPage, ProfilePage} from '../pages'

describe('Auth', () => {
  beforeEach(() => {
    SignInPage.open()
    cy.intercept({resourceType: /xhr|fetch/}, {log: false})
  })
  it('Sign in with valid cred', () => {
    SignInPage.signIn(Cypress.env('email'), Cypress.env('password'))
    ProfilePage.imageAvatar.should('be.visible')
  })

  it('Sign in with invalid cred', () => {
    SignInPage.inputEmail.type(Cypress.env('email'))
    SignInPage.inputPassword.type('1234567')
    SignInPage.buttonSubmit.click()
    SignInPage.toast.should('have.text', 'Auth failed').should('be.visible')
  })
  it('Sign in without cred', () => {
    SignInPage.inputEmail.should('have.value', '')
    SignInPage.inputPassword.should('have.value', '')
    SignInPage.buttonSubmit.should('be.disabled')

    SignInPage.inputPassword.type('test')
    cy.get('#normal_login_password_help').should('not.exist')
    SignInPage.buttonSubmit.should('be.disabled')

    SignInPage.inputEmail.type('test')
    cy.get('#normal_login_email_help')
      .should('have.text', `'email' is not a valid email`)
      .should('be.visible')
  })
})
