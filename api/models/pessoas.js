'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Pessoas extends Model {
		static associate(models) {
			Pessoas.hasMany(models.Turmas, { // pasamos a chave estrangeira em forma de objeto
				foreignKey: 'docente_id'
			});
			Pessoas.hasMany(models.Matriculas, {
				foreignKey: 'estudante_id'
			});
		}
	}
	Pessoas.init({
		nome: DataTypes.STRING,
		ativo: DataTypes.BOOLEAN,
		email: DataTypes.STRING,
		role: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'Pessoas',
	});
	return Pessoas;
};