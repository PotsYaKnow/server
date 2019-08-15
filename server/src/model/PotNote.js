module.exports = (sequelize, DataTypes) => {

    const PotNote = sequelize.define('PotNote', {
      note : DataTypes.TEXT
    });

    return PotNote
}
