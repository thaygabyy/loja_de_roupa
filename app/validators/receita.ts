import { schema, rules } from '@adonisjs/validator'

export const ReceitaValidator = schema.create({
  nome: schema.string({}, [rules.maxLength(255)]),
  instrucoes: schema.string({}, [rules.maxLength(1000)]),
  tempo_de_preparo: schema.number([rules.unsigned()]),
  num_porcoes: schema.number([rules.unsigned()]),
  categoria_id: schema.number([rules.unsigned()])
})