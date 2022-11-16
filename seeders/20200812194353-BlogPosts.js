module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('BlogPosts',
      [
        {
          id: 1,
          title: 'Programing',
          content: 'for programing',
          userId: 1,
          published: new Date(),
          updated: new Date(),
        },
        {
          id: 2,
          title: 'Story',
          content: 'for story',
          userId: 1,
          published: new Date(),
          updated: new Date(),
        },
      ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('BlogPosts', null, {});
  },
};
