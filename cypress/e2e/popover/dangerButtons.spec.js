
describe('Popover page', ()=>{
  it('Popover Position widget should contain all required buttons', () => {
      cy.visit('/pages/modal-overlays/popover')

      cy.get('nb-card[size="small"]').first().find('button.status-danger').then(($elements)=>{
          const buttonsText = []
            cy.wrap($elements).each(($el)=>{
                const text = $el.text()
                buttonsText.push(text)
            }).then(()=>{
              cy.log(`Buttons text : ${JSON.stringify(buttonsText)}`)
              expect(buttonsText).to.deep.equal(['Left','Top', 'Bottom', 'Right'])
            })
      })
  });
})
