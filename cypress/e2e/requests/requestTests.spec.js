import expectedPostsList from '../../fixtures/posts/postsList.json'
import insertPost from '../../fixtures/posts/insertPost.json'

describe('GET request', function () {
  const postId = 6
  it('GET post by ID', ()=>{
    const objectById = expectedPostsList.find(obj => {return obj.id === postId})

    cy.request({
      url:`/posts/${postId}`
    }).should((response)=>{
      expect(response).property('status').to.eq(200)
      expect(response).property('body').deep.equal(objectById)
    })
  })
  it('GET list of posts', ()=>{
    cy.request({
      url:`/posts/`
    }).should((response)=>{
      expect(response).property('status').to.eq(200)
      expect(response).property('body').deep.equal(expectedPostsList)
    })
  })

  it('POST request', ()=> {
    cy.request('POST', '/posts', insertPost).then(
      (response) => {
        expect(response.body).to.have.property('userId', 847)
      }
    )
  })
  it('PUT request', ()=> {
    cy.request('PUT', '/posts/11', {title: "UPDATE"}).then((myRes) => {
      expect(myRes.body).to.have.property('title', "UPDATE")
    })
  })

  it('DELETE request', ()=> {
    cy.request('DELETE', '/posts/11')
  })
})
