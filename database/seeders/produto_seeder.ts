import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Produto from '../../app/models/produto.js'

export default class extends BaseSeeder {
  async run() {
    await Produto.createMany([
      {
      nome_produto: 'Produto A',
      tamanho: 'M',
      cor: 'Vermelho',
      preco: 100.00,
      quantidade_em_estoque: 50
    },
      {
      nome_produto: 'Produto B', 
      tamanho: 'G', 
      cor: 'Azul', 
      preco: 150.00, 
      quantidade_em_estoque: 30 
    },
      { 
      nome_produto: 'Produto C',
      tamanho: 'P', 
      cor: 'Verde', 
      preco: 200.00, 
      quantidade_em_estoque: 20 
    },
    { 
      nome_produto: 'Produto D',
      tamanho: 'G', 
      cor: 'Amarelo', 
      preco: 232.00, 
      quantidade_em_estoque: 30 
    },
    ])
  }
}