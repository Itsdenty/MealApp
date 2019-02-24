import hashPassword from '../../utils/hash-password';
import permissions from '../../config/permissions';

const now = new Date();

export default {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Abd-afeez',
      lastName: 'Abd-hamid',
      email: 'dent4real@yahoo.com',
      phoneNumber: '08167558013',
      address: 'No 33, Victoria Street, Ojota Lagos.',
      permissions: [permissions.GLOBAL],
      roleId: 1,
      password: hashPassword('oloreofe'),
      createdAt: now,
      updatedAt: now
    },
    {
      firstName: 'John',
      lastName: 'Ortega',
      email: 'museguide@gmail.com',
      phoneNumber: '08167558014',
      address: 'No 30, Victoria Street, Ojota Lagos.',
      permissions: [permissions.WRITE_ORDER, permissions.READ_MENU, permissions.READ_ORDER],
      roleId: 1,
      password: hashPassword('oloreofe'),
      createdAt: now,
      updatedAt: now
    }], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
