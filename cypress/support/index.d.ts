declare namespace Cypress{
    interface Chainable<Subject> {
        loginByCredentials(email: string, password: string): Chainable<any>

        loginByToken(): Chainable<any>
    }
}

