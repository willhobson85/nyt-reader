/* eslint-disable no-useless-escape */
/* eslint-disable quotes */
/* eslint-disable no-undef */
describe('NYT Top Stories', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=pqO5h6jnWnyYItaeFfd16zfxI77GeLWh', {
      fixture: 'news-array.json'
    }).as('sampleArticles')
    cy.visit('http://localhost:3000/')
  })

  it('Should have a header with the site name', () => {
    cy.get('[data-cy="header-test"]')
      .should('exist')
    cy.get('[data-cy="header-test"] > h1')
      .contains('NYT Top Stories')
  })

  it('Should have buttons to sort articles', () => {
    cy.get('.alpha')
      .should('exist')
  })

  it('Should have buttons to sort articles', () => {
    cy.get('.zed')
      .should('exist')
  })

  it('Should have a container for story tiles', () => {
    cy.get('.tile-container')
      .should('exist')
  })

  it('Should have a length of 3 tiles', () => {
    cy.get('.tile-container > :nth-child(3)')
      .should('exist')
    cy.get('.tile-container > :nth-child(4)')
      .should('not.exist')
  })

  it('Should have a link on each tile', () => {
    // cy.get(`#\35 2\ Places\ to\ Go\ in\ 2023 > a`)
    //   .should('exist')
  })
})
