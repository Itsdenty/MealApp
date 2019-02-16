import permissions from '../../config/permissions';

const now = new Date();

export default {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Roles', [
      {
        name: 'super_caterer',
        displayName: 'Super Caterer',
        description: 'The role for the caterer with super admin capabilities',
        permissions: [permissions.GLOBAL],
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'caterer',
        displayName: 'Caterer',
        description: 'The role for the caterers',
        permissions: [permissions.READ_MEAL, permissions.READ_MENU,
          permissions.WRITE_MEAL, permissions.WRITE_MENU,
          permissions.READ_ORDER, permissions.READ_ORDER_ITEM, permissions.READ_USER],
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'user',
        displayName: 'User',
        description: 'The role for the regular users',
        permissions: [permissions.READ_MEAL, permissions.READ_MENU,
          permissions.WRITE_ORDER, permissions.WRITE_ORDER_ITEM,
          permissions.READ_ORDER, permissions.READ_ORDER_ITEM, permissions.READ_USER],
        createdAt: now,
        updatedAt: now
      },
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Role', null, {});
  }
};
