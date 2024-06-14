describe('Login Test', () => {
  it('should log in successfully', () => {
    cy.visit('http://localhost:3000/login'); // ปรับ URL ตามที่จำเป็น

    // แทนที่ '#username' และ '#password' ด้วย selectors ของฟอร์ม login ของคุณ
    cy.get('#email').type('email@email.com');
    cy.get('#password').type('admin1234');
    cy.get('button[type="submit"]').click();

    // แทนที่ 'dashboard' ด้วย URL ที่คุณคาดว่าจะเห็นหลังจาก login
    cy.url().should('include', '/');
    cy.get('#title').should('contain', 'Home Pag');
  });
});
