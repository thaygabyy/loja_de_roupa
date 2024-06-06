import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Fornecedor from '../../app/models/fornecedor.js'

export default class extends BaseSeeder {
  async run() {
    await Fornecedor.createMany([
      { 
      nome: 'Fornecedor A',
      endereco: 'Rua X, 123',
      telefone: 321654987,
      email: 'fornecedor.a@example.com' 
       },
      { 
       nome: 'Fornecedor B',
       endereco: 'Rua Y, 456',
        telefone: 654987321,
        email: 'fornecedor.b@example.com' 
      },
      { 
      nome: 'Fornecedor C',
      endereco: 'Rua Z, 789',
      telefone: 987321654,
      email: 'fornecedor.c@example.com' },
    ])
  }
}