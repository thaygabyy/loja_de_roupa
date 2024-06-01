import { schema, rules } from '@adonisjs/validator'

export const ComentarioValidator = schema.create({
  texto: schema.string({}, [rules.maxLength(255)]),  
  data_comentario: schema.string({}, [rules.maxLength(255)]),  
  usuario_id: schema.number([rules.unsigned()]),
  receita_id: schema.number([rules.unsigned()])
})