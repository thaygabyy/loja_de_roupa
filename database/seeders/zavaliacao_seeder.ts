import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Avaliacao from '#models/avaliacao'

export default class extends BaseSeeder {
  async run() {
    await Avaliacao.createMany([
      {
        pontuacao: 100,
        comentario: 'muito gostoso',
        data_avaliacao: '27/04/2005',
        usuario_id: 1,
        receita_id: 1,
      },
      {
        pontuacao: 30,
        comentario: 'isso e muito salgado',
        data_avaliacao: '03/04/2006',
        usuario_id: 2,
        receita_id: 3,
      },
      {
        pontuacao: 60,
        comentario: 'melhor receita para quem gosta de bolo de cenoura',
        data_avaliacao: '10/05/2003',
        usuario_id: 2,
        receita_id: 3,
      },
    /*  {
        pontuacao: 10,
        comentario: 'pior biscoito que eu ja comi',
        data_avaliacao: '10/05/2022',
        usuario_id: 20,
        receita_id: 30,
      }, 
      
      */
 
    ])
  }
}