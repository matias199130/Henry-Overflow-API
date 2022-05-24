const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
    // defino el modelo`1
    sequelize.define('user', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        First_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Badges: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        released: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        rating: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        image: {
            type: DataTypes.TEXT,
        },
        platforms: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        createdVideoGame: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: true,
        }
    });
};