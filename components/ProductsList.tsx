'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { deleteProduct } from '@/utils/api'
import type { Product } from '@/types/products'

type Props = {
  products: Product[]
}

const ProductsList = ({ products }: Props) => {
  const [items, setItems] = useState(products)

  // Update the state when the products change on search.
  useEffect(() => {
    setItems(products)
  }, [products])

  const handleDelte = async (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id))

    // This only simulates the deletion of the product.
    await deleteProduct(id)
  }

  return (
    <div className="mt-4 mx-auto flex flex-col w-3/4 h-[600px] justify-start">
      {items.map((product) => (
        <div
          key={product.id}
          className="flex items-center justify-between border-b border-gray-200 py-2"
        >
          <Link href={`/products/${product.id}`} className="font-semibold">
            {product.title}
          </Link>

          <button
            type="submit"
            className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
            onClick={() => handleDelte(product.id)}
          >
            DELETE
          </button>
        </div>
      ))}
    </div>
  )
}

export default ProductsList
