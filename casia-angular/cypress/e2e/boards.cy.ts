describe('template spec', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/boards')
    })

    describe('When sidebar is closed', () => {
        it('Should be closed by default', () => {
            cy.get('.sidebar--closed').should('exist')
        })
    })

    describe('When clicked on icon', () => {
        beforeEach(() => {
            // cy.get()
        })
    })
})
