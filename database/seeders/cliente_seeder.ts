import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Cliente from '../../app/models/cliente.js'

export default class extends BaseSeeder {
  async run() {
    await Cliente.createMany([
      { nome: 'Alice Silva', endereco: 'Rua A, 123', telefone: 12333464, email: 'alice.silva@example.com' },
      { nome: 'Bruno Oliveira', endereco: 'Rua B, 456', telefone: 987654421, email: 'bruno.oliveira@example.com' },
      { nome: 'Carla Souza', endereco: 'Rua C, 789', telefone: 123123123, email: 'carla.souza@example.com' },
      { nome: 'Thais Lima', endereco: 'Rua D, 965', telefone: 156423654, email: 'thais.lima@example.com' },
      { nome: 'Jessica Andrade', endereco: 'Rua E, 289', telefone: 856359425, email: 'jessica.andrade@example.com' },
      { nome: 'Gabriel Sampaio', endereco: 'Rua F, 389', telefone: 753698412, email: 'gabriel.sampaio@example.com' },
    ])
  }
}