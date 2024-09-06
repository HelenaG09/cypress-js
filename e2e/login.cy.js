describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цвета кнопки

         cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
         cy.get('#loginButton').click(); // нажать войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка текста после авторизации
         cy.get('#messageHeader').should('be.visible'); // виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка видимости крестика и его наличия
     })  
 
 

 it('Верный логин и неверный пароль', function () {
    cy.visit('https://login.qa.studio/'); // зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цвета кнопки

    cy.get('#mail').type('german@dolnikov.ru'); // ввели вернрый логин
    cy.get('#pass').type('iLoveqastudio7'); // ввели неверный пароль
    cy.get('#loginButton').click(); // нажать войти

    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка текста после авторизации
    cy.get('#messageHeader').should('be.visible'); // виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка видимости крестика и его наличия
})  

it('Неверный логин и верный пароль', function () {
    cy.visit('https://login.qa.studio/'); // зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цвета кнопки

    cy.get('#mail').type('geman@dolnikov.ru'); // ввели невернрый логин
    cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
    cy.get('#loginButton').click(); // нажать войти

    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка текста после авторизации
    cy.get('#messageHeader').should('be.visible'); // виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка видимости крестика и его наличия

})

it('Неверный логин без @ и верный пароль', function () {
    cy.visit('https://login.qa.studio/'); // зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цвета кнопки

    cy.get('#mail').type('gemandolnikov.ru'); // ввели невернрый логин
    cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
    cy.get('#loginButton').click(); // нажать войти

    cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверка текста после авторизации
    cy.get('#messageHeader').should('be.visible'); // виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка видимости крестика и его наличия

})
it(' Логин стсрочными буками и верный пароль', function () {
    cy.visit('https://login.qa.studio/'); // зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цвета кнопки

    cy.get('#mail').type('gemandolnikov.ru'); // ввели невернрый логин
    cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
    cy.get('#loginButton').click(); // нажать войти

    cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка текста после авторизации
    cy.get('#messageHeader').should('be.visible'); // виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка видимости крестика и его наличия

})
it(' Проверка логики восставновления пароля', function () {
    cy.visit('https://login.qa.studio/'); // зашли на сайт
    cy.get('#forgotEmailButton').click(); // нажали кнопку восстановит пароль
    cy.get('#mailForgot').type('german@dolnikov.ru'); // ввели верную почту
    cy.get('#restoreEmailButton').click(); // нажать отправить
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверка текста после авторизации
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка видимости крестика и его наличия
    })

})