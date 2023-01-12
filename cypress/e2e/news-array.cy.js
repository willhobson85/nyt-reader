describe('NYT Top Stories', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=pqO5h6jnWnyYItaeFfd16zfxI77GeLWh', {
      fixture: 'news-array.json'
    }).as('sampleArticles')
    cy.visit("http://localhost:3000/")
  });

  it('Should have a header with the site name', () => {
    cy.get('[data-cy="header-test"]')
    .should('be.visible')
    cy.get('[data-cy="header-test"] > h1')
    .contains('NYT Top Stories')
  })

  it('Should have buttons to sort articles', () => {
    cy.get('.alpha')
    .should('be.visible')
  })
})