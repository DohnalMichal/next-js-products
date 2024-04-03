import type { Product, ProductResponse } from '@/types/products'

export const BASE_URL = 'https://dummyjson.com'

export const createURL = (path: string) => {
  return `${BASE_URL}${path}`
}

export const getProducts = async (
  limit: number,
  skip: number,
  query?: string,
): Promise<ProductResponse> => {
  const queryString = query
    ? `/products/search?q=${query}`
    : `/products?limit=${limit}&skip=${skip}`

  const res = await fetch(
    new Request(createURL(queryString), {
      method: 'GET',
    }),
  )

  try {
    return await res.json()
  } catch (error) {
    console.error(error)
    throw new Error('Something went wrong!')
  }
}

export const getProduct = async (id: number): Promise<Product | null> => {
  const res = await fetch(
    new Request(createURL(`/products/${id}`), {
      method: 'GET',
    }),
  )

  try {
    if (res.ok) {
      return res.json()
    } else {
      return null
    }
  } catch (error) {
    console.error(error)
    throw new Error('Something went wrong!')
  }
}

export const deleteProduct = async (id: number): Promise<Product> => {
  const res = await fetch(
    new Request(createURL(`/products/${id}`), {
      method: 'DELETE',
    }),
  )

  try {
    return await res.json()
  } catch (error) {
    console.error(error)
    throw new Error('Something went wrong!')
  }
}
