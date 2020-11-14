class MovimentRemove {
  constructor(financeRepository) {
    this.financeRepository = financeRepository;
  }

  async execute(user_id, moviment_id) {
    // Serve para armazenar o id do user antes dele ser excluido
    const moviment = await this.financeRepository.movimentById(moviment_id);

    // Compara o id do user do movimento com o id da pessoa logada
    if (moviment.user_id !== user_id) {
      return { message: "you don't have permission to delete this moviment" };
    }

    await this.financeRepository.movimentRemove(moviment_id);
    return null;
  }
}

module.exports = MovimentRemove;
