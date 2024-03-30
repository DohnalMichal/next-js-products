import Link from 'next/link'
import { getProducts } from '@/utils/api'
import SearchInput from '@/components/SearchInput'

type Props = {
  searchParams: { q: string }
}

const ProductsPage = async ({ searchParams }: Props) => {
  const entries = await getProducts(searchParams.q)

  return (
    <div>
      <SearchInput />
      {entries.products.map((product) => (
        <div
          key={product.id}
          className="flex items-center justify-between border-b border-gray-200 py-2"
        >
          <Link href={`/products/${product.id}`} className="font-semibold">
            {product.title}
          </Link>
          <button className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-md">
            DELETE
          </button>
        </div>
      ))}
    </div>
  )
}

export default ProductsPage
