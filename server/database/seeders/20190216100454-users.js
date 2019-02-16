const now = new Date();
export default {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Abd-afeez',
      lastName: 'Abd-hamid',
      email: 'dent4real@yahoo.com',
      phoneNumber: '08167558013',
      address: 'No 33, Victoria Street, Ojota Lagos.',
      createdAt: now,
      updatedAt: now
    }], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
