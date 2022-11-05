/// <reference types="Cypress" />
describe( 'My First Suit' , function ()
{

it('My first window', function()

{
   //remove target attribute
   cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
   
   cy.get('#opentab').invoke('removeAttr','target').click()
   cy.url().should('include','rahulshettyacademy')

   cy.go('back')

   //hit the url on same page
   //this works only if the dormain you want to hit is same as the one opened first

   //cy.get('#opentab').then(function(e1)

   cy.get('#openwindow').then(function(e1)

   {

      const url = e1.prop('href')
      cy.visit(url)
   })




}
)
})


