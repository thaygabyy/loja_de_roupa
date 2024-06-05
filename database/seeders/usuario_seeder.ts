import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Usuario from '../../app/models/usuario.js'

export default class extends BaseSeeder {
  public async run() {
    await Usuario.createMany([
      { nome: 'Alice Silva', email: 'ali.silva@example.com', senha: 'senha1332553' },
      { nome: 'Bruno Oliveira', email: 'bruno.oliveira@example.com', senha: 'senha55123' },
      { nome: 'Carla Souza', email: 'carla.souza@example.com', senha: 'senha1236' },
      { nome: 'Daniel Lima', email: 'daniel.lima@example.com', senha: 'senha1273' },
      { nome: 'Eduarda Costa', email: 'eduarda.costa@example.com', senha: 'senha1723' },
      { nome: 'Felipe Martins', email: 'felipe.martins@example.com', senha: 'senha1273' },
      { nome: 'Gabriela Rocha', email: 'gabriela.rocha@example.com', senha: 'senha77123' },
      { nome: 'Hugo Fernandes', email: 'hugo.fernandes@example.com', senha: 'senha12783' },
      { nome: 'Isabela Almeida', email: 'isabela.almeida@example.com', senha: 'senha12893' },
      { nome: 'João Pereira', email: 'joao.pereira@example.com', senha: 'senha12783' },
    ])
  }
}