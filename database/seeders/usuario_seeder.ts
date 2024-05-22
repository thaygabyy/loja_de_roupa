import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Usuario from '../../app/models/usuario'

export default class extends BaseSeeder {
  async run() {
    return await Usuario.createmany([
      { nome: 'Alice Silva', email: 'alice.silva@example.com', senha: 'senha123' },
      { nome: 'Bruno Oliveira', email: 'bruno.oliveira@example.com', senha: 'senha123' },
      { nome: 'Carla Souza', email: 'carla.souza@example.com', senha: 'senha123' },
      { nome: 'Daniel Lima', email: 'daniel.lima@example.com', senha: 'senha123' },
      { nome: 'Eduarda Costa', email: 'eduarda.costa@example.com', senha: 'senha123' },
      { nome: 'Felipe Martins', email: 'felipe.martins@example.com', senha: 'senha123' },
      { nome: 'Gabriela Rocha', email: 'gabriela.rocha@example.com', senha: 'senha123' },
      { nome: 'Hugo Fernandes', email: 'hugo.fernandes@example.com', senha: 'senha123' },
      { nome: 'Isabela Almeida', email: 'isabela.almeida@example.com', senha: 'senha123' },
      { nome: 'João Pereira', email: 'joao.pereira@example.com', senha: 'senha123' },
    ])
  }
}