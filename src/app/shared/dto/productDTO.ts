export interface ProductDTO {
  id: number,
  productName: string,
  price: number,
  quantity: number,
  isImported: boolean,
  category: string
}

export function copyProduct(product: ProductDTO, quantity: number): ProductDTO{
  return {
    category: product.category,
    id: product.id,
    isImported: product.isImported,
    price: product.price,
    productName: product.productName,
    quantity: quantity
  }
}
