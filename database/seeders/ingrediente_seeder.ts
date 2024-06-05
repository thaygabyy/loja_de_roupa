import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Ingrediente from '#models/ingrediente'

export default class extends BaseSeeder {
  async run() {
    await Ingrediente.createMany([
      {
        nome: 'Tomate',
        preco: 3.5,
        tipo: 'Vegetal',
      },
      {
        nome: 'Queijo',
        preco: 15.0,
        tipo: 'Laticínio',
      },
      {
        nome: 'Carne',
        preco: 25.0,
        tipo: 'Proteína',
      },
 
    ])
  }
}