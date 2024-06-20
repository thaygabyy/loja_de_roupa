import { schema, rules } from '@adonisjs/validator'

export const FuncionarioValidator = schema.create({
  nome: schema.string({}, [
    rules.maxLength(30),
    rules.required()
  ]),
  cargo: schema.string({}, [
    rules.maxLength(30),
    rules.required()
  ]),
  telefone: schema.number([
    rules.unsigned(),
    rules.required()
  ]),
  email: schema.string({}, [
    rules.email(),
    rules.maxLength(255),
    rules.required()
  ])
})
