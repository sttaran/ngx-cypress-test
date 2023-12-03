Cypress.Commands.add('addUser', (id, name, firstName, email, age) => {
    cy.get('input[placeholder="ID"]').type(id);
    cy.get('input[placeholder="First Name"]').type(firstName);
    cy.get('input[placeholder="Last Name"]').type(name);
    cy.get('input[placeholder="Username"]').type(name);
    cy.get('input[placeholder="E-mail"]').type(email);
    cy.get('input[placeholder="Age"]').type(age);
    cy.get('.ng2-smart-actions-title-add').click(); // Натискаємо на кнопку додавання користувача // // чомусь не знаходить
});

Cypress.Commands.add('editUser', (newId, newFirstName, newUsername, newEmail, newAge) => {
    cy.get('input[placeholder="ID"]').clear().type(newId);
    cy.get('input[placeholder="First Name"]').clear().type(newFirstName);
    cy.get('input[placeholder="Username"]').clear().type(newUsername);
    cy.get('input[placeholder="E-mail"]').clear().type(newEmail);
    cy.get('input[placeholder="Age"]').clear().type(newAge);
    cy.get('button.save').click(); // Натискання на кнопку збереження
});

describe('User Table Tests', () => {
    beforeEach(() => {
        cy.visit('/pages/tables/smart-table');
    });

    it('should add and edit a user', () => {
        // Додавання користувача
        cy.addUser('0', 'Olena Zh', 'Olena', 'olena@gmail.com', '32');

        // Редагування користувача
        cy.editUser('1', 'Viki Zh', 'Viki', 'viki@gmail.com', '2');
    });
});


describe('Login Page Tests', () => {
    beforeEach(() => {
        cy.visit('/auth/login');
    });

    it('should login and redirect to the main page', () => {
        // Заповнення форми авторизації
        cy.get('input[name="email"]').type('new_email@gmail.com');
        cy.get('input[name="password"]').type('new_password');
        // cy.get('input[type="checkbox"]').check();
        cy.get('span.custom-checkbox').click();
        cy.get('nb-auth-block nb-login button').should('be.visible').click();


        // Перевірка перенаправлення на головну сторінку
        cy.url().should('include', '/pages'); // Замініть '/pages' на шлях вашої головної сторінки
    });
});

