import type { ReactNode } from 'react'

const ProductsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="ml-auto mr-auto max-w-3xl">
      <div className=" flex flex-col">{children}</div>
    </div>
  )
}

export default ProductsLayout
