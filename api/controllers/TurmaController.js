const database = require('../models');

class TurmasCrontroler {
	static async pegaTodasAsTurmas(req, res) {
		try {
			const TodasAsTurmas = await database.Turmas.findAll();
			return res.status(200).json(TodasAsTurmas);

		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async pegaUmaTurma(req, res){
		try {
			const { id } = req.params;

			const umaTurma = await database.Turmas.findOne({where: { id: Number(id)}});
			return res.status(200).json(umaTurma);
			
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async criaTurma(req, res){
		try {
			const novaTurma = req.body;

			const novaTurmaCriada = await database.Turmas.create(novaTurma);
			return res.status(201).json(novaTurmaCriada);
			
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async atualizaUmaTurma(req, res){
		try {
			const { id } = req.params;
			const novasInfos = req.body;

			await database.Turmas.update(novasInfos, { where: { id: Number(id)}});
			const turmaAtualizada = await database.Turmas.findOne({where:{id: Number(id)}});
			return res.status(200).json(turmaAtualizada);

			
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async deletaTurma(req, res){
		const { id } = req.params;

		await database.Turmas.destroy({where: {id: Number(id)}});
		return res.status(200).json({mensagem: `O id ${id} foi deletado com sucesso`});
	}

}

module.exports = TurmasCrontroler;