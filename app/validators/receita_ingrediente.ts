import { schema, rules } from '@adonisjs/validator'

export const ReceitaIngredienteValidator = schema.create({
  nome: schema.string({}, [rules.maxLength(255)]),
  quantidade: schema.number([rules.unsigned()]),
  unidade_medida: schema.number([rules.unsigned()]),
  receita_id: schema.number([rules.unsigned()]),
  ingrediente_id: schema.number([rules.unsigned()])
})