import { getProducts } from '@/utils/api'
import SearchInput from '@/components/SearchInput'
import ProductsList from '@/components/ProductsList'
import Pagination from '@/components/Pagination'

type Props = {
  searchParams: {
    q?: string
    limit?: number
    skip?: number
  }
}

const ProductsPage = async ({ searchParams }: Props) => {
  const query = searchParams.q
  const limit = searchParams.limit || 10
  const skip = searchParams.skip || 0

  const entries = await getProducts(limit, skip, query)

  const totalPages = entries.total
  const isSearchActive = query?.length

  return (
    <>
      <SearchInput />
      <ProductsList products={entries.products} />
      {!isSearchActive && (
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      )}
    </>
  )
}

export default ProductsPage
