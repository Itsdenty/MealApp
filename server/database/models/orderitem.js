export default (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('OrderItem', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    quantity: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER
  }, {});
  OrderItem.associate = (models) => {
    OrderItem.belongsTo(models.Order, {
      foreignKey: 'orderId',
      as: 'Order'
    });
    OrderItem.belongsTo(models.Menu, {
      foreignKey: 'menuId',
      as: 'menu'
    });
  };
  return OrderItem;
};
