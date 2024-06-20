import { schema, rules } from '@adonisjs/validator'

export const CompraValidator = schema.create({
  data_da_compra: schema.string({}, [
    rules.required()
  ]),
  id_fornecedor: schema.number([
    rules.required()
  ]),
  id_produto: schema.number([
    rules.required()
  ]),
  quantidade: schema.number([
    rules.unsigned(),
    rules.required()
  ]),
  preco_unitario: schema.number([
    rules.unsigned(),
    rules.required()
  ])
})
