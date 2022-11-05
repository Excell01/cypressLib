/// <reference types="Cypress" />
import HomePage from '../E2E/pageObject/HomePage'

describe( 'My First Suit' , function ()
{

     before(function()
     {

      cy.fixture('name').then(function(data)
      
      {
this.data=data

      })

     })

it('My first test case', function()


{
  const homePage= new HomePage()
   cy.visit("https://www.rahulshettyacademy.com/angularpractice/")
   homePage.getEditBox().type(this.data.name)
   homePage.getGender().select(this.data.gender)
   //assertion
   homePage.getEditBox().should('have.value',this.data.name)
   //homePage.getTwoWayDataBinding().should('have.attr','minlength','2')
   homePage.getEntrapreneur().should('be.disabled')

   //you can pause your test run using
   //cy.pause() or cy.debug()

   homePage.getShopTab().click()

   this.data.productName.forEach(function(element ) {

     cy.selectProduct(element )
   });
      
      
     
  // cy.selectProduct('Blackberry')
   //cy.selectProduct('Nokia Edge')
  
   
   

}
)

})
