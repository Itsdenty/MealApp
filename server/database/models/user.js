import bcrypt from 'bcrypt';

const user = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    phoneNumber: DataTypes.STRING
  }, {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    timestamps: true,
    paranoid: true,
    underscored: true,
    beforeCreate: async (usr) => {
      const salt = await bcrypt.genSalt(15);
      user.password = await bcrypt.hash(usr.password, salt);
    },
  });
  User.associate = (models) => {
    User.belongsTo(models.Role, {
      foreignKey: 'roleId',
      as: 'Role'
    });
    User.hasMany(models.Meal, {
      foreignKey: 'userId',
      as: 'Meals'
    });
  };
  User.prototype.validPassword = async function validPassword(password) {
    bcrypt.compare(password, this.password);
  };
  return User;
};

export default user;
