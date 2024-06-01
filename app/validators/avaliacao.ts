import { schema, rules } from '@adonisjs/validator'

export const AvaliacaoValidator = schema.create({
  pontuacao: schema.number([rules.unsigned()]),
  comentario: schema.string({}, [rules.maxLength(255)]),
  data_avaliacao: schema.string({}, [rules.maxLength(1000)]),
  usuario_id: schema.number([rules.unsigned()]),
  receita_id: schema.number([rules.unsigned()])
})