/// <reference types="Cypress" />
describe( 'My First Suit' , function ()
{

it('My first test case', function()

{

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.get('.search-keyword').type('ca');
cy.wait(2000)
//cy.get('.product:visible').should('have.length',4); to get all elements also to get only visible elements

//chaining
cy.get('.products').as('productLocator')
cy.get('@productLocator').find('.product').should('have.length',4)
cy.get('@productLocator').find('.product').eq(0).contains('ADD TO CART').click()

cy.get('@productLocator').find('.product').each(($el, _index, _$list) => {

    
const texVeg=$el.find('h4.product-name').text()
if(texVeg.includes('Capsicum'))

{

   cy.wrap($el).find('button').click()
}
//print on log
cy.get('.brand').then(function(logoelement)
{

   cy.log(logoelement.text())
})
//assertion
cy.get('.brand').should('have.text','GREENKART')
})





})

}
)
