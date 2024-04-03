'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

type Props = {
  totalPages: number
}

const Pagination = ({ totalPages }: Props) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const skip = Number(searchParams.get('skip')) || 0
  const limit = Number(searchParams.get('limit')) || 10

  const currentPage = Math.floor(skip / limit)
  const numPages = Math.ceil(totalPages / limit)

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams)
    params.set('limit', limit.toString())
    params.set('skip', pageNumber.toString())

    return `${pathname}?${params.toString()}`
  }

  return (
    <div className="flex gap-2">
      {Array.from({ length: numPages }, (_, index) => (
        <Link
          key={index}
          href={createPageURL(index * limit)}
          className={`${
            index === currentPage ? 'font-bold' : 'font-normal'
          } py-1 px-2 border border-gray-400/30 rounded-md shadow-md`}
        >
          <span>{index + 1}</span>
        </Link>
      ))}
    </div>
  )
}

export default Pagination
