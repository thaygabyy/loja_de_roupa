import { schema, rules } from '@adonisjs/validator'

export const CategoriaValidator = schema.create({
  nome: schema.string({}, [rules.maxLength(255)]) 
})