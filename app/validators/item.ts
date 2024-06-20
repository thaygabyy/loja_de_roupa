import { schema } from '@adonisjs/validator'

export const ItemValidator = schema.create({
  id_pedido: schema.number(),
  id_produto: schema.number(),
  quantidade: schema.number(),
  preco_unitario: schema.number()
})


