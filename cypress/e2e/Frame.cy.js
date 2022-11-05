/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'


describe( 'My First Suit' , function ()
{

it('My first test case', function()

{

   cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
   //frame id
   cy.frameLoaded('#courses-iframe')

   cy.iframe().find("a[href='mentorship']").eq(0).click()

   cy.iframe().find('h1[class="pricing-title text-white ls-1"]').should('have.length',2)
   
   

})

}
)
