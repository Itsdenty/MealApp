const now = new Date();

export default {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Meals', [{
      price: 800,
      name: 'Golden delight smoothie',
      description: 'A rich blend of bananan, orange and mango fruits',
      isMenu: true,
      type: 'African Delight',
      promo: 'none',
      userId: 1,
      createdAt: now,
      updatedAt: now
    },
    {
      price: 500,
      name: 'Ofada Rice with diced beef stew',
      description: 'A delicious ofada rice with diced beef stew',
      isMenu: false,
      type: 'African Delight',
      promo: 'none',
      userId: 1,
      createdAt: now,
      updatedAt: now
    }], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
