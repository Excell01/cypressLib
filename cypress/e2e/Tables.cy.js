/// <reference types="Cypress" />
describe( 'My First Suit' , function ()
{

it('My first table', function()

{

   cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")

   cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

      const text = $e1.text()
      if(text.includes("python"))
      {

         cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)

         {

            const priceText=price.text
            expect(priceText).to.equal('25')
         })

      }

   


   

}
)
})

})
