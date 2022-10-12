const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'userID' });
    }
  }
  Book.init({
    title: DataTypes.STRING,
    photo: DataTypes.STRING,
    author: DataTypes.STRING,
    year: DataTypes.INTEGER,
    googleID: DataTypes.STRING,
    userID: DataTypes.INTEGER,
    url: DataTypes.STRING,
    comment: DataTypes.STRING,
    desc: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};
