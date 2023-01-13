/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/52%20Places%20to%20Go%20in%202023')
  })

  it('Should have a title that matches the url', () => {
    cy.get('.detailed-title')
      .should('exist')
      .contains('52 Places to Go in 2023')
  })

  it('Should have an image', () => {
    cy.get('img')
      .should('exist')
  })

  it('Should have an abstract', () => {
    cy.get('.detailed-abstract')
      .contains('Travel’s rebound has revealed the depth of our drive to explore the world. Why do we travel? For food, culture, adventure, natural beauty? This year’s list has all those elements, and more.')
  })

  it('Should have a link to the NY Times site', () => {
    cy.get('.detailed-link')
      .should('exist')
  })

  it('Should have a Home button', () => {
    cy.get('#home')
      .should('exist')
  })

  it('Should be abkle to navigate Home', () => {
    cy.get('#home').click()
    cy.url().should('eq', 'http://localhost:3000/');
  })
})
