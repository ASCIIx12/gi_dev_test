module.exports = (sequelize, Sequelize) => {
    const Data = sequelize.define('data', {
        code: {
            type: Sequelize.STRING,
            allowNull: false
        },
        department: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        visitTime: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        idCode: {
            type: Sequelize.STRING,
            allowNull: false
        },
        birthDate: {
            type: Sequelize.STRING,
            allowNull: false
        },
        gender: {
            type: Sequelize.STRING,
            allowNull: false
        },
        age: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })

    return Data
}