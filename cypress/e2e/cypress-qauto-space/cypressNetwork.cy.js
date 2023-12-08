const baseApiUrl = 'https://jsonplaceholder.typicode.com/posts';

describe('Get Post by ID', () => {
  const id = 1;

  it('should return a specific post by ID', () => {
    cy.api({
      url: `${baseApiUrl}/${id}`,
      method: 'GET',
    })
      .as('post')
      .should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('userId');
        expect(response.body).to.have.property('id', id);
        // Add more assertions based on the API response structure
      });
  });
});

describe('Get Posts List', () => {
  it('should return a list of posts', () => {
    cy.api({
      url: baseApiUrl,
      method: 'GET',
    })
      .should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
        expect(response.body.length).to.be.greaterThan(0);
      });
  });
});

describe('Create New Post', () => {
  it('should create a new post', () => {
    const newPost = {
      title: 'New Post',
      body: 'This is the body of the new post.',
      userId: 1,
    };

    cy.api({
      url: baseApiUrl,
      method: 'POST',
      body: newPost,
    })
      .as('createdPost')
      .should((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('id')
      });
  });
});

describe('Update Post by ID', () => {
  const idToUpdate = 1;

  it('should update a specific post by ID', () => {
    const updatedPost = {
      title: 'Updated Post Title',
      body: 'This is the updated body of the post.',
    };

    cy.api({
      url: `${baseApiUrl}/${idToUpdate}`,
      method: 'PUT',
      body: updatedPost,
    })
      .should((response) => {
        expect(response.status).to.eq(200)
      });
  });
});

describe('Delete Post by ID', () => {
  const idToDelete = 1;

  it('should delete a specific post by ID', () => {
    cy.api({
      url: `${baseApiUrl}/${idToDelete}`,
      method: 'DELETE',
    })
      .should((response) => {
        expect(response.status).to.eq(200);
      });
  });
});

