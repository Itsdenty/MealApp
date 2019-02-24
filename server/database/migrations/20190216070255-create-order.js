export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ref: {
        type: Sequelize.STRING
      },
      orderTime: {
        type: Sequelize.DATE
      },
      deliveryTime: {
        type: Sequelize.DATE
      },
      isCancelled: {
        type: Sequelize.BOOLEAN
      },
      isDelivered: {
        type: Sequelize.BOOLEAN
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
      },
      catererId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
      },
      mealId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Meals',
          key: 'id'
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('Orders');
  }
};
