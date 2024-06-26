import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getProduct } from '@/utils/api'
import Carousel from '@/components/Carousel'

type Props = {
  params: { id: number }
}

const ProductPage = async ({ params }: Props) => {
  const product = await getProduct(params.id)

  if (!product) {
    notFound()
  }

  const discountedPrice = Math.round(
    product.price - product.price * (product.discountPercentage / 100),
  )

  return (
    <div className="flex flex-col items-center m-8 p-16 border border-gray-400/30 rounded-md shadow-md">
      <Carousel images={product.images} />
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <p className="text-gray-500 mb-2">
        Category: <span className="text-gray-900">{product.category}</span>
      </p>
      <div className="flex items-center">
        {product.discountPercentage > 0 && (
          <p className="text-red-500 line-through mr-2">${product.price}</p>
        )}
        <p className="text-green-500 font-bold">${discountedPrice}</p>
      </div>
      <p className="text-gray-500 mt-4">{product.description}</p>
    </div>
  )
}

export default ProductPage
