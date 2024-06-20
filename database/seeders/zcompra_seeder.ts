import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Compra from '#models/compra'

export default class extends BaseSeeder {
  async run() {
    await Compra.createMany([
      {
        data_da_compra: '25/02/2024',
        id_fornecedor: 1,
        id_produto: 1,
        quantidade: 10,
        preco_unitario: 90.00 
      },
      { 
        data_da_compra: '27/02/2024',
        id_fornecedor: 2,
        id_produto: 2,
        quantidade: 15,
        preco_unitario: 190.00  },
      { 
        data_da_compra: '26/02/2024',
        id_fornecedor: 3,
        id_produto: 3,
        quantidade: 20,
        preco_unitario: 290.00 
      },
      // Adicione mais compras conforme necessário
    ])
  }
}