import { schema, rules} from '@adonisjs/validator'

export const PedidoValidator = schema.create({
    data_do_pedido: schema.string({}, [rules.maxLength(8)]),
    id_funcionario: schema.number(),
    id_cliente: schema.number(),
    preco_unitario: schema.number()
  })


