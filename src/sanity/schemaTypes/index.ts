import { type SchemaTypeDefinition } from 'sanity'
import products from './products'
import orders from "./orders"
import contactForm from "./contact"
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products,orders,contactForm],
}
