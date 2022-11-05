/// <reference types="Cypress" />
describe( 'My First Suit' , function ()
{

it('My first test case', function()

{

   cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
   cy.get('#alertbtn').click()
   cy.get('#confirmbtn').click()

   //window alert

   cy.on('window:alert',(str)=>

   {
      expect(str).to.equal('Hello , share this practice page and share your knowledge')
   }

   )

   //confirm

   cy.on('window:confirm',(str)=>

   {
      expect(str).to.equal('Hello , Are you sure you want to confirm?')
   }

   )

   //windows

   cy.get('#opentab').invoke('removeAttr','target').click()
   cy.url().should('include','rahulshettyacademy')

   cy.go('back')

})

}
)
