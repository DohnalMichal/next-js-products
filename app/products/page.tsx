import { getProducts } from '@/utils/api'
import SearchInput from '@/components/SearchInput'
import ProductsList from '@/components/ProductsList'

type Props = {
  searchParams: { q: string }
}

const ProductsPage = async ({ searchParams }: Props) => {
  const entries = await getProducts(searchParams.q)

  return (
    <div>
      <SearchInput />
      <ProductsList products={entries.products} />
    </div>
  )
}

export default ProductsPage
