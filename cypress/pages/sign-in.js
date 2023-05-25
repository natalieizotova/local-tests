import BasePage from "./base";

export const SignInPage = new class extends BasePage{
    get inputEmail(){return cy.get('#normal_login_email')}
    get inputPassword(){return cy.get('#normal_login_password')}

    get buttonSubmit(){return cy.get('.login-form-button')}



    open(){
        return cy.visit('/user/login')
    }

    signIn(email, password){
        this.inputEmail.type(email)
        this.inputPassword.type(password)
        this.buttonSubmit.click()
    }
}

