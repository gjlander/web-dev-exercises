// models/User.js
import { DataTypes } from 'sequelize'; // The library provides an object to help you  define types for your model attributes.
import sequelize from '../db/index.js'; // See we needed this
import Note from './Note.js';

// Define the User model
const User = sequelize.define('User', {
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// User.hasMany(Note);
// User.sync(); // Check the block about Model synchronization

export default User;
