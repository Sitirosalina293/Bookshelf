const {
  addBook,
  getAll,
  getBooks,
  editBooks,
  deleteBooks,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBook,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAll,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBooks,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBooks,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBooks,
  },
];

module.exports = {
  routes,
};
