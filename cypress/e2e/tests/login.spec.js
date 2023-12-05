import LoginPage from "../pageObjects/LoginPage";

describe('Login page',()=>{
    it('Task2. Should fill email, password, checkbox and go to main page',()=>{
      const loginPage = new LoginPage()
      loginPage.visit()
      loginPage.logIn('test@test.ua','123456')
      cy.url().should('include','/pages')
    })
})
