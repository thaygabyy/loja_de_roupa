import { schema, rules } from '@adonisjs/validator'

export const ProdutoValidator = schema.create({
  nome_produto: schema.string({}, [
    rules.maxLength(255),
    rules.required()
  ]),
  tamanho: schema.string.optional({}, [
    rules.maxLength(50)
  ]),
  cor: schema.string.optional({}, [
    rules.maxLength(50)
  ]),
  preco: schema.number([
    rules.required(),
    rules.range(0, 999999) // Definir o range conforme necessário
  ]),
  quantidade_em_estoque: schema.number([
    rules.required(),
    rules.range(0, 9999) // Definir o range conforme necessário
  ])
})