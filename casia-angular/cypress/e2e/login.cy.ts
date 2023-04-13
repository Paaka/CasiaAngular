describe('template spec', () => {

  beforeEach(()=>{
    cy.visit('http://localhost:4200/login');
    // cy.wait(1000);
  });

  it('Should contain header', () => {
    cy.get('[data-cy="header"]').should('be.visible');
  });

  describe('When email field was clicked', ()=>{
    beforeEach(()=>{
      cy.get('[data-cy="email_field"]').click();
      cy.get('body').click();
    });

    it('Should set email field as invalid', ()=>{
      cy.get('.mat-form-field-invalid').should('exist');
    });

    it('Button for login should be disabled', ()=>{
      cy.get('[data-cy="sign-up-btn"]').should('be.disabled');
    });

    describe('When email field is set correctly',()=>{
      beforeEach(()=>{
        cy.get('.mat-form-field-invalid').type('test@gmail.com');
        cy.get('body').click();
      });

      it('Button for login should be disabled', ()=>{
        cy.get('[data-cy="sign-up-btn"]').should('be.disabled');
      });

      it('Should set email field as invalid', ()=>{
        cy.get('.mat-form-field-invalid').should('not.exist');
      });
      
    });

  });

})