describe('Zapta tests', () => {
  it('Saucasa', () => {
      cy.visit("https://saucasa.zaptatech.com/")
      cy.get("body > div.main > div.container.standard > div")
      .should('contain.text', 'Work From Anywhere')
      .should('contain.text', 'Transparent Pricing')
      .should('contain.text', 'Premium Properties')
      cy.get('.discover-text-side > .mx-auto').click()
      cy.url().should('eq', 'https://saucasa.zaptatech.com/index?#featured')
      const currentTime = new Date().toTimeString().split('')[0].replace(/:/g, '-');
      const fileName = `FIRST_${currentTime}`;
      cy.screenshot(fileName, {capture: 'fullPage'});
  });
});