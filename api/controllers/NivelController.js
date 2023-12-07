const dataBase = require('../models');

class NivelController {
	static async pegaTodosOsNiveis(req, res) {
		try {
			const todosOsNiveis = await dataBase.Niveis.findAll();
			return res.status(200).json(todosOsNiveis);

		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async pegaUmNivel(req, res){
		try {
			const { id } = req.params;

			const umNivel = await dataBase.Niveis.findOne({
				where: {
					id: Number(id)
				}
			});

			return res.status(200).json(umNivel);
			
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async criaNivel(req, res){
		try {
			const novoNivel = req.body;

			const novoNivelCriado = await dataBase.Niveis.create(novoNivel);
			return res.status(201).json(novoNivelCriado);
			
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async atualizaNivel(req, res){
		try {
			const { id } = req.params;
			const novasInfos = req.body;

			await dataBase.Niveis.update(novasInfos, {where:{id: Number(id)}});
			const nivelAtualizado = await dataBase.Niveis.findOne({ where: {id: Number(id)}});

			return res.status(200).json(nivelAtualizado);


			
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
}

module.exports = NivelController;