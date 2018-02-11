
export default (sequelize, DataTypes) => {
  const EventCenter = sequelize.define('EventCenter', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      validate: {
        isDecimal: { args: true, msg: 'price format is invalid - make sure value is a number' },
        min: { args: 1000, msg: 'price is invalid! - make sure the value is not less than 1000' },
        max: { args: 100000000, msg: 'price is invalid! - make sure the value is not more than 10,000000' }
      },
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
    },
  });

  EventCenter.associate = (models) => {
    EventCenter.hasMany(models.Event, { as: 'events', foreignKey: 'centerId' });
    EventCenter.hasMany(models.Facility, { as: 'facility', foreignKey: 'centerId' });
    EventCenter.belongsTo(models.User, {foreignKey: 'userId' });
  };

  return EventCenter;
};
