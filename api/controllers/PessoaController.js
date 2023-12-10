const database = require('../models');

class PessoasController {
	static async pegaTodasAsPessoas(req, res) {
		try {
			const todasAsPessoas = await database.Pessoas.findAll();
			return res.status(200).json(todasAsPessoas);

		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async pegaUmaPessoa(req, res) {
		const { id } = req.params;

		try {
			const umaPessoa = await database.Pessoas.findOne({
				where: {
					id: Number(id)
				}
			});
			return res.status(200).json(umaPessoa);

		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async criaPessoa(req, res) {
		const novaPessoa = req.body;

		try {
			const novaPessoaCriada = await database.Pessoas.create(novaPessoa);
			return res.status(201).json(novaPessoaCriada);

		} catch (error) {
			return res.status(500).json(error.mensage);
		}

	}

	static async atualizaPessoa(req, res) {
		const { id } = req.params;
		const novasInfos = req.body;
		try {
			await database.Pessoas.update(novasInfos, { where: { id: Number(id) } });
			const pessoasAtualizada = await database.Pessoas.findOne({ where: { id: Number(id) } });

			return res.status(200).json(pessoasAtualizada);


		} catch (error) {
			return res.satus(500).json(error.mensage);
		}
	}

	static async apagaPessoas(req, res) {
		const { id } = req.params;

		try {
			await database.Pessoas.destroy({ where: { id: Number(id) } });
			return res.status(200).json({ mesage: `O id ${id} foi deletado` });
		} catch (error) {
			return res.status(500).json(error.mensage);
		}
	}

	static async pegaUmaMatricula(req, res) {
		const { estudanteId, matriculaId } = req.params;

		try {
			const umaMatricula = await database.Matriculas.findOne({
				where: {
					id: Number(matriculaId),
					estudante_Id: Number(estudanteId)
				}
			});
			return res.status(200).json(umaMatricula);

		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async criaMatricula(req, res) {
		const { estudanteId } = req.params;
		// aqui está associando as tebelas de matriculas às pessoas
		const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) };

		try {
			const novaMatriculaCriada = await database.Matriculas.create(novaMatricula);
			return res.status(201).json(novaMatriculaCriada);

		} catch (error) {
			return res.status(500).json(error.mensage);
		}

	}

	static async atualizaMatricula(req, res) {
		const { estudanteId, matriculaId } = req.params;
		const novasInfos = req.body;
		try {
			await database.Matriculas.update(novasInfos, {
				where: {
					id: Number(matriculaId),
					estudante_Id: Number(estudanteId)

				}
			});
			const matriculaAtualizada = await database.Matriculas.findOne({ where: { id: Number(matriculaId) } });

			return res.status(200).json(matriculaAtualizada);


		} catch (error) {
			return res.satus(500).json(error.mensage);
		}
	}

	static async apagaMatricula(req, res) {
		const { estudanteId, matriculaId } = req.params;

		try {
			await database.Matriculas.destroy(
				{
					where: {
						id: Number(matriculaId),
						estudante_Id: Number(estudanteId),
					}
				});
			return res.status(200).json({ mesage: `O id ${estudanteId} foi deletado` });
		} catch (error) {
			return res.status(500).json(error.mensage);
		}
	}
}

module.exports = PessoasController;