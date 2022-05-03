describe('Contact Form Test', () => {
  it('Loads the contact page', () => {
    cy.visit('contact')
    cy.get('.mb-15-xs').contains('Send a message') // Implicit assertion
  })

  it('Fails to submit the form with no data', () => {
    cy.submitForm()
  })

  it('Displays name validation message', () => {
    cy.get('#i-amphtml-aria-desc-form_general-0').should('be.visible') // Test name validation message appears
  })

  it('Displays telephone validation message', () => {
    cy.get('#i-amphtml-aria-desc-form_general-1').should('be.visible') // Test telephone validation message appears
  })

  it('Displays email validation message', () => {
    cy.get('#i-amphtml-aria-desc-form_general-2').should('be.visible') // Test email validation message appears
  })

  it('Displays message validation message', () => {
    cy.get('#i-amphtml-aria-desc-form_general-3').should('be.visible') // Test message validation message appears
  })

  it('Enters a name and hides the validation message', () => {
    cy.get('#general_name').type('Test Ascensor').blur()
    cy.get('#i-amphtml-aria-desc-form_general-0').should('not.be.visible') // Test name validation message is not visible
  })

  it('Enters a telephone number and hides the validation message', () => {
    cy.get('#general_tel').type('01138314400').blur()
    cy.get('#i-amphtml-aria-desc-form_general-1').should('not.be.visible') // Test telephone validation message is not visible
  })

  it('Enters an email and hides the validation message', () => {
    cy.get('#general_email').type('sit1@ascensor.co.uk').blur()
    cy.get('#i-amphtml-aria-desc-form_general-2').should('not.be.visible') // Test email validation message is not visible
  })

  it('Enters a message and hides the validation message', () => {
    cy.get('#general_message').type('This is a test message from Ascensor, please ignore.').blur()
    cy.get('#i-amphtml-aria-desc-form_general-3').should('not.be.visible') // Test message validation message is not visible
  })

  // Uncomment to submit form
  // it('Sends the form successfully', () => {
  //   cy.submitForm()
  //   cy.get('#form_general > #form-success').should('be.visible')
  // })
})