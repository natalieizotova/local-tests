
import {Navbar} from "../elements";

describe('Navigation', () => {
    beforeEach(() => {
        cy.loginByCredentials(Cypress.env('email'), Cypress.env('password'))

    })

    it('Links', () => {
        Navbar.linkCourses.click()
        cy.contains('Курсы программирования и тестирования').should('be.visible')
        cy.location('pathname').should('eq', '/course')

        Navbar.linkChallenges.click()
        cy.contains('Кодинг задачи').should('be.visible')
        cy.location('pathname').should('eq', '/challenge')

        Navbar.linkInterviewQuestions.click()
        cy.contains('Interview practice cards').should('be.visible')
        cy.location('pathname').should('eq', '/flash')

        Navbar.linkDiary.click()
        cy.contains('Daily reports').should('be.visible')
        cy.location('pathname').should('eq', '/diary')


    })
})