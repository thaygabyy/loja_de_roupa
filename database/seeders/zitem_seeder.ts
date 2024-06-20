import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Item from '../../app/models/item.js'

export default class extends BaseSeeder {
  async run() {
    await Item.createMany([
      { 
      id_pedido: 1,
      id_produto: 1,
      quantidade: 2,
      preco_unitario: 100.00 
    },
      { 
      id_pedido: 2,
      id_produto: 2,
      quantidade: 1,
      preco_unitario: 150.00
     },
      { 
      id_pedido: 3,
      id_produto: 3,
      quantidade: 3,
      preco_unitario: 200.00 
    },
    ])
  }
}