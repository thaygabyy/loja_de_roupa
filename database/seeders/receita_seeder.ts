import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Receita from '#models/receita'

export default class extends BaseSeeder {
  public async run() {
    await Receita.createMany([
      {
        nome: 'Bolo de Chocolate',
        instrucoes: 'Misture todos os ingredientes e asse por 45 minutos.',
        tempo_de_preparo: 1,
        num_porcoes: 8,
        categoria_id: 1,
      },
      {
        nome: 'Salada Caesar',
        instrucoes: 'Misture alface, croutons e molho Caesar.',
        tempo_de_preparo: 15 ,
        num_porcoes: 2,
        categoria_id: 2,
      },
      {
        nome: 'Sopa de Legumes',
        instrucoes: 'Cozinhe os legumes em água fervente por 30 minutos.',
        tempo_de_preparo: 40,
        num_porcoes: 4,
        categoria_id: 3,
      },
      {
        nome: 'Pão de Queijo',
        instrucoes: 'Misture os ingredientes e asse por 20 minutos.',
        tempo_de_preparo: 30 ,
        num_porcoes: 12,
        categoria_id: 4,
      },
      {
        nome: 'Brigadeiro',
        instrucoes: 'Cozinhe o leite condensado com chocolate até engrossar.',
        tempo_de_preparo: 20,
        num_porcoes: 10,
        categoria_id: 5,
      },
    ])
  }
}