module.exports = (sequelize, DataTypes) => {
    const contacts = sequelize.define('contacts', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        firstname: {
            type: DataTypes.STRING,                      
        },
        lastname: {
            type: DataTypes.STRING,                      
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        phone: {
            type: DataTypes.STRING,
            unique: true,
        },
        comments: {
            type: DataTypes.STRING,
            unique: true,
        },
        isStudent: {
            type: DataTypes.STRING,
            unique: true,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        }

        },   
        {
        tableName: 'contacts',
        timestamps: true, 
        })
       
    return contacts;
    }