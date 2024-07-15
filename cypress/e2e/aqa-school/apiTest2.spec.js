
describe("API testing", ()=>{

  it('should return posts list', () => {

    const id = 1
    cy.api({
      url: `https://jsonplaceholder.typicode.com/posts/${id}`,
      method: "GET"
    }).as('posts')


    cy.get('@posts').should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.id).to.eq(id)
      expect(response.body).to.have.keys(['userId', 'title', 'body', 'id'])
    })
  })

  it('should create post', () => {
    const requestBody = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    }

    cy.api({
      url: 'https://jsonplaceholder.typicode.com/posts/',
      method: "POST",
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: requestBody
    }).as('createPost')

    cy.get('@createPost').should((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.keys(['userId', 'title', 'body', 'id'])
      expect(response.body).to.deep.equal({...requestBody, id: 101})
    })
  });

})
