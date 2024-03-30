'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { debounce } from 'lodash'
import { type ChangeEvent, useState } from 'react'

const SearchInput = () => {
  const [value, setValue] = useState('')

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const debouncedRouterPush = debounce((url: string) => {
    router.push(url)
  }, 200)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue)
    const params = new URLSearchParams(searchParams.toString())

    if (newValue.length === 0) {
      params.delete('q')
    } else {
      params.set('q', newValue)
    }

    const url = pathname + '?' + params.toString()
    debouncedRouterPush(url)
  }

  return (
    <input
      type="text"
      name="query"
      value={value}
      placeholder="Search for products..."
      className="w-full mt-4 p-2 border border-gray-400/30 rounded-md shadow-md"
      onChange={handleChange}
    />
  )
}

export default SearchInput
