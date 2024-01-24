import sequelize from "../db/connect_db.js";
import { Sequelize,DataTypes } from "sequelize";

const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type:DataTypes.TEXT
    },
    age:{
        type:DataTypes.INTEGER
    }
},{
    timestamps:false
})
export default User;