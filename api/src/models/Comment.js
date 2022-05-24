const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('comment', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true
      },
      message: {
        type: DataTypes.TEXT,
        unique: true,
        allowNull: false
      },
      rating: {
        type: DataTypes.FLOAT,
        defaultValue: 0
      }
    },
    {
      timestamps: false
    });
  };