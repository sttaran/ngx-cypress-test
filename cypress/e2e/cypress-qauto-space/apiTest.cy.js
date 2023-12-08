describe('posts', () => {
  it('should return post details for a specific post', () => {
    const id = 1
    cy.api({
      url:`https://jsonplaceholder.typicode.com/posts/${id}`,
      method:`GET`
    }).as('post');

    cy.get('@post').should((response) => {
      expect(response.status).to.equal(200); // Перевіряємо, чи статус відповіді - 200
      expect(response.body).to.have.property('id', 1); // Перевіряємо, чи є відповідь з id рівним 1 (або замініть на інший id за потреби)
    });
  });
});
