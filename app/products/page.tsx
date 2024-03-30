import { getProducts } from '@/utils/api'
import type { Product } from '@/types/products'

const ProductsPage = async () => {
  const entries = await getProducts()

  return (
    <div>
      {entries.products.map((product: Product) => (
        <div
          key={product.id}
          className="flex items-center justify-between border-b border-gray-200 py-2"
        >
          <div className="font-semibold">{product.title}</div>
          <button className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-md">
            DELETE
          </button>
        </div>
      ))}
    </div>
  )
}

export default ProductsPage
