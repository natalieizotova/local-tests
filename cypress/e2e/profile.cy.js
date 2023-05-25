import {ProfilePage} from '../pages'

describe('Profile', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      `${Cypress.env('apiBaseUrl')}/course/coursesProgress/${Cypress.env('userId')}`,
      {
        statusCode: 200,
        body: {
          message: 'Get courses progress',
          success: true,
          fail: false,
          payload: [
            {
              _id: '6465b638cc28f14deeb4db0d',
              completedLessons: 114,
              totalLessons: 114,
              course: {
                _id: '635c05ba659f6d77abf1f4e7',
                name: 'Python syntax',
              },
            },
          ],
        },
      }
    )
    cy.loginByToken()
    ProfilePage.open()
  })

  it('Sign out', () => {
    ProfilePage.navbar.dropdownUsername.click()
    ProfilePage.navbar.buttonLogOut.click()

    cy.location('pathname').should('eq', '/')
  })

  it('Course progress', () => {

  })
})