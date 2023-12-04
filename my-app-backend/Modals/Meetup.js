const Sequelize = require("sequelize");

const sequelize = require("../util/database");
const User = require('./User')
const Meetup = sequelize.define("meetup", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull:false
  }
  ,
  description: {
    type:Sequelize.STRING,
    allowNull:false
  }
    // date: {
    //     type: Sequelize.DATEONLY,
    //     allowNull: false,
  // }
  ,
});

// Meetup.belongsTo(User, { foreignKey: "userId", onDelete: "SET NULL" });
module.exports = Meetup;
