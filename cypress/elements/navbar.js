

export const Navbar = new (class {
    get dropdownUsername() {
        return cy.get('a > .ms-2')
    }

    get buttonLogOut() {
        return cy.get('[data-qa="logout"]')
    }
    get linkCourses(){
        return cy.get('[data-qa="topmenu-Курсы"]')
    }

    get linkChallenges(){
        return cy.get('[data-qa="topmenu-Задачи"]')
    }

    get linkInterviewQuestions(){
        return cy.get('[data-qa="topmenu-Интервью"]')
    }

    get linkDiary(){
        return cy.get('[data-qa="topmenu-Дневник"]')
    }

})()