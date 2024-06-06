import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Compra from '#models/compra'

export default class extends BaseSeeder {
  async run() {
    await Compra.createMany([
      {
        dataDaCompra: '25/02/2024',
        idFornecedor: 1,
        idProduto: 1,
        quantidade: 10,
        precoUnitario: 90.00 
      },
      { 
        dataDaCompra: '27/02/2024',
        idFornecedor: 2,
        idProduto: 2,
        quantidade: 15,
        precoUnitario: 190.00  },
      { 
        dataDaCompra: '26/02/2024',
        idFornecedor: 3,
        idProduto: 3,
        quantidade: 20,
        precoUnitario: 290.00 
      },
      // Adicione mais compras conforme necessário
    ])
  }
}