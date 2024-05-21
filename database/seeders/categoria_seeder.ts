import { BaseSeeder } from '@adonisjs/lucid/seeders'
import categoria from '#models/categoria'

export default class extends BaseSeeder {
  public async run() {
 
    await categoria.createMany([
      { nome: 'Sobremesas' },
      { nome: 'Entradas' },
      { nome: 'Pratos Principais' },
      { nome: 'Bebidas' },
      { nome: 'Saladas' },
      { nome: 'Lanches' },
    ])
  }
}