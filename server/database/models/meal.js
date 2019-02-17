const meal = (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    type: DataTypes.STRING,
    isMenu: DataTypes.BOOLEAN,
    orderedTimes: DataTypes.INTEGER
  }, {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    timestamps: true,
    paranoid: true,
    underscored: true
  });
  Meal.associate = (models) => {
    Meal.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'Caterer'
    });
    Meal.hasMany(models.OrderItem, {
      foreignKey: 'mealId',
      as: 'Orders'
    });
  };
  return Meal;
};

export default meal;
