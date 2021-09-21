'use strict';
const books = [
  {
    title: 'Harry Potter 1',
    price: 10,
    release_year: 2001,
    IdAuthor: 1
  },
  {
    title: 'Harry Potter 2',
    price: 11,
    release_year: 2002,
    IdAuthor: 1
  },
  {
    title: 'Harry Potter 3',
    price: 10,
    release_year: 2003,
    IdAuthor: 1
  },
  {
    title: 'Davinci Code',
    price: 7,
    release_year: 1999,
    IdAuthor: 2
  },
  {
    title: 'Demon Vs Angel',
    price: 7,
    release_year: 2012,
    IdAuthor: 2
  }
]

books.forEach(el => {
  el.createdAt = new Date()
  el.updatedAt = new Date()
})

module.exports = {
  up:  (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Books', books, {})
  },

  down:  (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Books', null, {})
  }
};
