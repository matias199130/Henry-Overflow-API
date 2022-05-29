const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('like_post', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      userId: {
        type: DataTypes.UUID,
        unique: 'postAndUser'
      },
      postId: {
        type: DataTypes.UUID,
        unique: 'postAndUser'
      },
    },
    {
      timestamps: false
    }
  );
};