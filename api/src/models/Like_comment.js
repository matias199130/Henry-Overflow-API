const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('like_comment', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      userId: {
        type: DataTypes.UUID,
        unique: 'commentAndUser'
      },
      commentId: {
        type: DataTypes.UUID,
        unique: 'commentAndUser'
      },
    },
    {
      timestamps: false
    }
  );
};