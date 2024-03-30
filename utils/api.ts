import type { Product, ProductResponse } from '@/types/products'

export const BASE_URL = 'https://dummyjson.com'

export const createURL = (path: string) => {
  return `${BASE_URL}${path}`
}

export const getProducts = async (query?: string): Promise<ProductResponse> => {
  const queryString = query?.length ? `/search?q=${query}` : ''

  const res = await fetch(
    new Request(createURL(`/products${queryString}`), {
      method: 'GET',
    }),
  )

  if (res.ok) {
    return res.json()
  } else {
    throw new Error('Something went wrong!')
  }
}

export const getProduct = async (id: number): Promise<Product> => {
  const res = await fetch(
    new Request(createURL(`/products/${id}`), {
      method: 'GET',
    }),
  )

  if (res.ok) {
    return res.json()
  } else {
    throw new Error('Something went wrong!')
  }
}

export const deleteProduct = async (id: number): Promise<Product> => {
  const res = await fetch(
    new Request(createURL(`/products/${id}`), {
      method: 'DELETE',
    }),
  )

  if (res.ok) {
    return res.json()
  } else {
    throw new Error('Something went wrong!')
  }
}
