
/** Defines the Review database model and association
 * @exports Review
 * @param  {object} sequelize - sequelize
 * @param  {object} DataTypes - sequelize Datatypes
 * @return {object} Review model
 */
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: {
          args: [1, 1000],
          msg: 'Minimum of 1 character and Maximum of 1000 characters required'
        }
      }
    },
    bookId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Books',
        key: 'id',
        as: 'bookId',
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId',
      }
    }
  });
  Review.associate = (models) => {
    Review.belongsTo(models.Book, {
      foreignKey: 'bookId',
    });
    Review.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user'
    });
  };
  return Review;
};
