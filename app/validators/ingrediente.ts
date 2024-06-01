import { schema, rules } from '@adonisjs/validator'

export const IngredienteValidator = schema.create({
  nome: schema.string({}, [rules.maxLength(255)]),
  preco: schema.number([rules.unsigned()]),
  tipo: schema.string({}, [rules.maxLength(1000)])
  
})