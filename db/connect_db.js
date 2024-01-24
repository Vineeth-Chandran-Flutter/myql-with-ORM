import { Sequelize } from "sequelize";
const sequelize = new Sequelize('userdb', 'root', 'Vineeth@123', {
    host: 'localhost',
    dialect:  'mysql' 
  });

  export default sequelize;