import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Pedido from '../../app/models/pedido.js'

export default class extends BaseSeeder {
  async run() {
    await Pedido.createMany([
      {
        dataDoPedido: '2024-01-01',
        idCliente: 1, 
        idFuncionario: 1 
        },
      { 
        dataDoPedido: '2024-02-01',
        idCliente: 2,
        idFuncionario: 2 
      },
      { dataDoPedido: '2024-03-01',
      idCliente: 3,
      idFuncionario: 3 
      },
    ])
  }
}