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
        type: DataTypes.STRING,
        unique: true
      },
      rating: {
        type: DataTypes.STRING,
        unique: true
      }
    },
    {
      timestamps: false
    });
  };