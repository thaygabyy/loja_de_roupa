import { schema, rules } from '@adonisjs/validator'


export const UsuarioValidator = schema.create({
    nome: schema.string({}, [
      rules.maxLength(255),
      rules.required()
    ]),
    email: schema.string({}, [
      rules.email(),
      rules.maxLength(255),
      rules.required()
    ]),
    senha: schema.string({}, [
      rules.minLength(6),
      rules.required()
    ])
  })