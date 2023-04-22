describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('frontpage can be opened', () => {
    cy.contains('Luciano Gimenez')
  })

  xit('when in the header, contact is pressed, should take me to contact section and fill all fields', () => {
    cy.contains('Contacto').click()
    cy.get('form').within(() => {
      cy.get('input:first').type('Luciano')
      cy.get('input[name="apellido"]').type('Gimenez')
      cy.get('input[name="email"]').type('test@gmail.com')
      cy.get('textarea').type('Me encanta tu trabajo')

      cy.get('button').click()

      cy.get('input:first')
        .should('contain', '')
    })
  })

  it('When I hover over a project, it displays the element stack.', () => {
    cy.goToElement()
      .trigger('mouseover')
      .children('.modal-stack')
      .should('have.css', 'display', 'flex')
      .wait(3000)
      .trigger('mouseout')

    cy.goToElement()
      .children('.modal-stack')
      .should('have.css', 'display', 'none')
  })
})
