import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Interview task</h1>
        <p className="text-center w-8/12">
          This app uses Next.js&apos;s app router for dynamic routing and
          fetches data from the API{' '}
          <Link
            href="https://dummyjson.com/docs/products"
            className="font-mono bg-gray-100 p-1 rounded-md"
          >
            dummyjson.com
          </Link>
          .
          <br />
          It includes server-side search and pagination functionality. However,
          the deletion of products is only handled client-side due to the use of
          a mock API. Additionally, the project utilizes Flowbite&apos;s
          carousel component for displaying product images.
        </p>
        <Link
          href="/products"
          className="mt-4 text-blue-500 hover:text-blue-700"
        >
          Go to project
        </Link>
      </div>
    </div>
  )
}
