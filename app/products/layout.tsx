import type { ReactNode } from 'react'

const ProductsLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen ml-auto mr-auto max-w-3xl">
      <div className="h-full flex flex-col">{children}</div>
    </div>
  )
}

export default ProductsLayout
