module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Facilities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      projector: {
        type: Sequelize.BOOLEAN
      },
      chairs: {
        type: Sequelize.INTEGER
      },
      tables: {
        type: Sequelize.INTEGER
      },
      parkinglot: {
        type: Sequelize.INTEGER
      },
      restrooms: {
        type: Sequelize.BOOLEAN
      },
      telescreens: {
        type: Sequelize.BOOLEAN
      },
      lighting: {
        type: Sequelize.BOOLEAN
      },
      sounds: {
        type: Sequelize.BOOLEAN
      },
      stage: {
        type: Sequelize.BOOLEAN
      },
      centerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'EventCenters',
          key: 'id',
          as: 'centerId'
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),
  down: queryInterface => queryInterface.dropTable('Facilities'),
};
