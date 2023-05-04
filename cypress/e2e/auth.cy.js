describe('Auth', () =>{
    beforeEach(()=>{
        cy.visit('https://localcoding.us/user/login')
    })
    it('Sign in with valid cred', () =>{

        cy.get('#normal_login_email').type("natallie79@gmail.com")
        cy.get('#normal_login_password').type("5Yb!B6ea8rSe9EU")
        cy.get('.login-form-button').click()
        cy.get('.ant-avatar-icon').should('be.visible')
    })

    it.skip('Sign in with invalid cred', () =>{

        cy.get('#normal_login_email').type("natallie79@gmail.com")
        cy.get('#normal_login_password').type("Yb!B6ea18rSe9EU")
        cy.get('.login-form-button').click()
        cy.get('.ant-notification-notice-message')
            .should('have.text', 'Auth failed')
            .should('be.visible')

    })
    it('Sign in without cred', () =>{

        cy.get('#normal_login_email').should('have.value', '')
        cy.get('#normal_login_password').should('have.value', '')
        cy.get('.login-form-button').should('be.disabled')

        cy.get('#normal_login_password').type('test')
        cy.get('#normal_login_password_help').should('not.exist')
        cy.get('.login-form-button').should('be.disabled')

        cy.get('#normal_login_email').type('test')
        cy.get('#normal_login_email_help')
            .should('have.text', `'email' is not a valid email`)
            .should('be.visible')


    })
})