/// <reference types="Cypress" />
describe( 'My Second Suit' , function ()
{

it('My first test case', function()

{

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.get('.search-keyword').type('ca');
cy.wait(2000)
//cy.get('.product:visible').should('have.length',4); to get all elements also to get only visible elements

//chaining
cy.get('.products').as('productLocator')
cy.get('@productLocator').find('.product').each(($el, _index, _$list) => {

    
const texVeg=$el.find('h4.product-name').text()
if(texVeg.includes('Capsicum'))

{

   cy.wrap($el).find('button').click()
}
})
cy.get('.cart-icon > img').click()
cy.contains('PROCEED TO CHECKOUT').click()
cy.contains('Place Order').click()




})

}
)
