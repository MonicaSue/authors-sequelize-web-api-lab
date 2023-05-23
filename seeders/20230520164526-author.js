'use strict';

// /** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Seed commands

    const date = new Date()

    await queryInterface.bulkInsert('Authors', [{
      name: 'Ryan Holiday',
      genre: 'non-fiction', 
      createdAt: date,
      updatedAt: date,
    }])
  },

  async down (queryInterface, Sequelize) {
    // Commands to revert seed
    
    await queryInterface.bulkDelete('Authors', null, {})
  }
};
