import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Funcionario from '../../app/models/funcionario.js'

export default class extends BaseSeeder {
  async run() {
    await Funcionario.createMany([
      { 
        nome: 'Alice Silva',
       cargo: 'Gerente',
        telefone: 123456789,
         email: 'alice.silva@example.com' 
        },
      { 
        nome: 'Bruno Oliveira',
       cargo: 'Vendedor',
        telefone: 987654321,
         email: 'bruno.oliveira@example.com'
         },
      { 
        nome: 'Carla Souza',
       cargo: 'Caixa',
        telefone: 123123123,
         email: 'carla.souza@example.com' 
        },
    ])
  }
}