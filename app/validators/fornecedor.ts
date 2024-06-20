import { schema, rules } from '@adonisjs/validator'

export const FornecedorValidator = schema.create({
  nome: schema.string({}, [
    rules.maxLength(255),
    rules.required()
  ]),
  endereco: schema.string({}, [
    rules.maxLength(255),
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
