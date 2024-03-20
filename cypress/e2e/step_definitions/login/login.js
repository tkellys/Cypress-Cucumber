import{Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

Given("Dado Que eu esteja na tela de Login", () => {
    cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F")
})

When("Quando Eu digitar meu email e senha registrados",()=> {
cy.get('#Email').clear().type('admin@yourstore.com')
cy.get('#Password').clear().type('admin')
cy.get('.login-button').click()

}) 

Then("Então Realizar login com sucesso", ()=>{
cy.get('.brand-image-xl')
})
