import Comentario from '#models/comentario'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {

    async run() {
      await Comentario.createMany([
        {
          texto: 'muito gostoso',
          data_comentario: '27/04/2005',
          usuario_id: 1,
          receita_id: 1,
        },
        {
          texto: 'muito gostoso',
          data_comentario: '27/04/2005',
          usuario_id: 1,
          receita_id: 1,
        },
        {
          texto: 'muito gostoso',
          data_comentario: '27/04/2005',
          usuario_id: 1,
          receita_id: 1,
        },
        {
          texto: 'muito gostoso',
          data_comentario: '27/04/2005',
          usuario_id: 1,
          receita_id: 1,
        },
   
      ])
    }
  }