import { ProductResponse } from '@/types/products'

export const BASE_URL = 'https://dummyjson.com'

export const createURL = (path: string) => {
  return `${BASE_URL}${path}`
}

export const getProducts = async (): Promise<ProductResponse> => {
  const res = await fetch(
    new Request(createURL('/products'), {
      method: 'GET',
    }),
  )

  if (res.ok) {
    return res.json()
  } else {
    throw new Error('Something went wrong!')
  }
}
