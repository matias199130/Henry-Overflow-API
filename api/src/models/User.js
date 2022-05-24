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
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: true,
        },
        badges: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        role: {
            type: DataTypes.ENUM('Student', 'Henry Hero', 'Technical Assitance', 'Henry Mentor', 'Instructor', 'Staff Henry', 'Graduate'),
            allowNull: true,
        },
        twitter: {
            type: DataTypes.TEXT,
        },
        github: {
            type: DataTypes.TEXT,
        },
        portfolio: {
            type: DataTypes.TEXT,
        },
        image: {
            type: DataTypes.TEXT,
        },
    });
};