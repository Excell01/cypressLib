/// <reference types="Cypress" />
describe( 'My First Suit' , function ()
{

it('My first framework', function()

{

   //cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
   cy.visit("https://www.rahulshettyacademy.com/angularpractice/")
   cy.get('.mouse-hover-content').invoke('show')
   cy.contains('Top').click() //{force:true} argument can click hiden element without invoking show.
   cy.url().should('include','top')


}
)
})


