import {ProfilePage} from '../pages'
import  * as color from '../fixtures/color.json'

describe('Profile', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '/course/coursesProgress/*',
      {
        statusCode: 200,
        body: {
          message: 'Get courses progress',
          success: true,
          fail: false,
          payload: [
            {
              _id: '6465b638cc28f14deeb4db0d',
              completedLessons: 0,
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

  it.only('Course progress', () => {
    cy.get('.ant-progress-text').should('have.text', '0%')

    cy.intercept(
        'GET',
        '/course/coursesProgress/*',
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
    cy.reload()
    cy.get('.anticon-check-circle').should('be.visible')
    cy.get('.ant-progress-bg')
        .should('be.visible')
        .should('have.css', 'background-color', color.green)




    cy.intercept(
        'GET',
        '/course/coursesProgress/*',
        {
          statusCode: 200,
          body: {
            message: 'Get courses progress',
            success: true,
            fail: false,
            payload: [
              {
                _id: '6465b638cc28f14deeb4db0d',
                completedLessons: 57,
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
    cy.reload()
    cy.get('.ant-progress-text').should('have.text', '50%')
    cy.get('.ant-progress-bg')
        .should('be.visible')
        .should('have.css', 'background-color', color.blue)

  })
})