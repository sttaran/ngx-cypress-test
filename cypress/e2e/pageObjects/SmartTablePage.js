import BasePage from "./BasePage";

export default class SmartTablePage extends BasePage{
  _filterContainerSelector = 'tr.ng2-smart-filters.ng-star-inserted'
  _addBtnSelector = 'th.ng2-smart-actions-title-add a'

  _inputContainerSelector = 'tr.ng-star-inserted:nth-of-type(3)'
  _idInputSelector = 'input[ng-reflect-name="id"]'
  _firstNameInputSelector = 'input[ng-reflect-name="firstName"]'
  _lastNameInputSelector = 'input[ng-reflect-name="lastName"]'
  _usernameInputSelector = 'input[ng-reflect-name="username"]'
  _emailInputSelector = 'input[ng-reflect-name="email"]'
  _ageInputSelector = 'input[ng-reflect-name="age"]'

  _confirmBtnSelector = 'a.ng2-smart-action-add-create'

  _addedUserContainerSelector = 'tbody tr.ng-star-inserted:first-child'

  _idAddedSelector = 'td.ng-star-inserted:nth-of-type(2) div.ng-star-inserted'
  _firstNameAddedSelector = 'td.ng-star-inserted:nth-of-type(3) div.ng-star-inserted'
  _lastNameAddedSelector = 'td.ng-star-inserted:nth-of-type(4) div.ng-star-inserted'
  _usernameAddedSelector = 'td.ng-star-inserted:nth-of-type(5) div.ng-star-inserted'
  _emailAddedSelector = 'td.ng-star-inserted:nth-of-type(6) div.ng-star-inserted'
  _ageAddedSelector = 'td.ng-star-inserted:nth-of-type(7) div.ng-star-inserted'

  _editBtnSelector = 'a.ng2-smart-action-edit-edit'
  _saveEditedBtnSelector = 'a.ng2-smart-action-edit-save'

  _idEditSelector = 'td.ng-star-inserted:nth-of-type(2) input'
  _firstNameEditSelector = 'td.ng-star-inserted:nth-of-type(3) input'
  _lastNameEditSelector = 'td.ng-star-inserted:nth-of-type(4) input'
  _usernameEditSelector = 'td.ng-star-inserted:nth-of-type(5) input'
  _emailEditSelector = 'td.ng-star-inserted:nth-of-type(6) input'
  _ageEditSelector = 'td.ng-star-inserted:nth-of-type(7) input'

  constructor() {
    super('pages/tables/smart-table');
  }


  addUserInTable(id,firstName,lastName,username,email,age){
    cy.get(`${this._filterContainerSelector} ${this._addBtnSelector}`).click()

    cy.get(`${this._inputContainerSelector} ${this._idInputSelector}`).type(id)
    cy.get(`${this._inputContainerSelector} ${this._firstNameInputSelector}`).type(firstName)
    cy.get(`${this._inputContainerSelector} ${this._lastNameInputSelector}`).type(lastName)
    cy.get(`${this._inputContainerSelector} ${this._usernameInputSelector}`).type(username)
    cy.get(`${this._inputContainerSelector} ${this._emailInputSelector}`).type(email)
    cy.get(`${this._inputContainerSelector} ${this._ageInputSelector}`).type(age)

    cy.get(`${this._inputContainerSelector} ${this._confirmBtnSelector}`).click()
  }

  get id(){
    return cy.get(`${this._addedUserContainerSelector} ${this._idAddedSelector}`)
  }
  get firstName(){
    return cy.get(`${this._addedUserContainerSelector} ${this._firstNameAddedSelector}`)
  }
  get lastName(){
    return cy.get(`${this._addedUserContainerSelector} ${this._lastNameAddedSelector}`)
  }
  get username(){
    return cy.get(`${this._addedUserContainerSelector} ${this._usernameAddedSelector}`)
  }
  get email(){
    return cy.get(`${this._addedUserContainerSelector} ${this._emailAddedSelector}`)
  }
  get age(){
    return cy.get(`${this._addedUserContainerSelector} ${this._ageAddedSelector}`)
  }

  editAddedUserInfo(idEd,firstNameEd,lastNameEd,usernameEd,emailEd,ageEd){
    cy.get(`${this._addedUserContainerSelector} ${this._editBtnSelector}`).click()

    cy.get(`${this._addedUserContainerSelector} ${this._idEditSelector}`).clear().type(idEd)
    cy.get(`${this._addedUserContainerSelector} ${this._firstNameEditSelector}`).clear().type(firstNameEd)
    cy.get(`${this._addedUserContainerSelector} ${this._lastNameEditSelector}`).clear().type(lastNameEd)
    cy.get(`${this._addedUserContainerSelector} ${this._usernameEditSelector}`).clear().type(usernameEd)
    cy.get(`${this._addedUserContainerSelector} ${this._emailEditSelector}`).clear().type(emailEd)
    cy.get(`${this._addedUserContainerSelector} ${this._ageEditSelector}`).clear().type(ageEd)

    cy.get(`${this._addedUserContainerSelector} ${this._saveEditedBtnSelector}`).click()
  }
}
