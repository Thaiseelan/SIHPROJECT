'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Therapist extends Model {
    
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
       Therapist.hasMany(models.Specialty, { foreignKey: "therapistId" });
      Therapist.hasMany(models.Language, { foreignKey: "therapistId" });
      Therapist.hasMany(models.Availability, { foreignKey: "therapistId" });
    }
  }
  Therapist.init({
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    yearsOfExperience: DataTypes.INTEGER,
    clientsHelped: DataTypes.INTEGER,
    rating: DataTypes.FLOAT,
    image: DataTypes.STRING,
    nextAvailable: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Therapist',
  });
  return Therapist;
};