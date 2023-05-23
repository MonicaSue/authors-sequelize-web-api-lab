'use strict';

// /** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Add column:
    await queryInterface.addColumn('Authors', 'genre', { type: Sequelize.STRING })
  },

  async down (queryInterface, Sequelize) {
    // Remove column:
    await queryInterface.removeColumn('Authors', 'genre')
  }
};