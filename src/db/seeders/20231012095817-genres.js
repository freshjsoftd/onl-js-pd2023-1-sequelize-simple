'use strict';
const {genres} = require('../../constants/db-start-info')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('genres', genres, {});
   
  },

  async down (queryInterface, Sequelize) {
    
     
      await queryInterface.bulkDelete('genres', null, {});
    
  }
};
