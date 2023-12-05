import SmartTablePage from "../pageObjects/SmartTablePage";
const userData = [{id: 111, firstName: 'Yuji', lastName: 'Itadori', username: 'itaYu', email: 'test@test.ua', age: 17}
  ,{id: 222, firstName: 'Megumi', lastName: 'Fushigura', username: 'MegFuuuuu', email: 'test22@test.ua', age: 18}
]

describe('Smart table',()=>{
  userData.forEach(user=>{
    it('Task1. Should create new user, check correct info. Than edit created user and check changes',()=>{
      const smartTablePage = new SmartTablePage()
      smartTablePage.visit()
      smartTablePage.addUserInTable(user.id, user.firstName, user.lastName, user.username, user.email, user.age)

      smartTablePage.id.should('have.text',user.id)
      smartTablePage.firstName.should('have.text',user.firstName)
      smartTablePage.lastName.should('have.text',user.lastName)
      smartTablePage.username.should('have.text',user.username)
      smartTablePage.email.should('have.text',user.email)
      smartTablePage.age.should('have.text',user.age)

      smartTablePage.editAddedUserInfo(user.id+1,user.firstName+'TEST',user.lastName+'EDITED',
        user.username+'#',user.email+'@@@',user.age+10)
      smartTablePage.id.should('have.text',user.id+1)
      smartTablePage.firstName.should('have.text',user.firstName+'TEST')
      smartTablePage.lastName.should('have.text',user.lastName+'EDITED')
      smartTablePage.username.should('have.text',user.username+'#')
      smartTablePage.email.should('have.text',user.email+'@@@')
      smartTablePage.age.should('have.text',user.age+10)
    })
  })
})
