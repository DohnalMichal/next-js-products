import Link from 'next/link'

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col justify-start items-center ">
      <Link
        className="mt-8 p-2 border border-gray-400/30 hover:bg-gray-50 rounded-md shadow-md"
        href="/products"
      >
        Go back
      </Link>
      {children}
    </div>
  )
}

export default ProductLayout
