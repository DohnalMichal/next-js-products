'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import type { ChangeEvent } from 'react'

const SearchInput = () => {
  const { replace } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleChange = useDebouncedCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      const params = new URLSearchParams(searchParams.toString())
      params.set('skip', '0')

      if (newValue.length === 0) {
        params.delete('q')
      } else {
        params.set('q', newValue)
      }

      const url = `${pathname}?${params.toString()}`
      replace(url)
    },
    300,
  )

  return (
    <input
      type="text"
      name="query"
      defaultValue={searchParams.get('q')?.toString()}
      placeholder="Search for products..."
      className="w-full mt-4 p-2 border border-gray-400/30 rounded-md shadow-md"
      onChange={handleChange}
    />
  )
}

export default SearchInput
