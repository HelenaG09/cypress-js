describe('Покупка аватара', function () {                                
    it('e2e тест на покупку нового аватара для тренера', function () {   
         cy.visit('https://pokemonbattle.ru/');  // заходим сайт https://pokemonbattle.ru/
         cy.get('input[type="email"]').type('USER_LOGIN'); // вводим логин в поле логин
         cy.get('input[type="password"]').type('PUSER_PASSWORD'); // вводим пароль в поле пароль
         cy.get('button[type="submit"]').click(); // нажимаем кнопку Подтвердить
         cy.wait(5000);
         cy.get('.header__container > .header__id').click({ force: true }); // Клик в шапке на аватар тренера
         cy.get('[href="/shop"]').click(); // нажимаем кнопку Магазин
         cy.get('.available > button').first().click({ force: true });   // кликаем Купить у  доступного аватара
         cy.get('.credit').type('639002000000000003'); // вводим номер карты
         cy.get('.k_input_ccv').type('125'); // вводим CVV карты
         cy.get('.k_input_date').type('1127'); // вводим срок действия карты
         cy.get('.k_input_name').type('lena'); // вводим имя владельца действия карты
         cy.get('.pay-btn').click(); // нажимаем кнопку Оплатить
         cy.get('#cardnumber').type('56456'); // вводим код подтверждения СМС
         cy.get('.payment__submit-button').click(); // нажимаем кнопку Отправить
         cy.contains('Покупка прошла успешно').should('be.visible'); // проверяем наличие и видимость сообщения о успешной покупке
     });
 });