import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <p className="text-2xl font-bold mb-4">
          This is an Interview Task for DigiVerse
        </p>
        <Link href="/products">
          <span className="text-blue-500 hover:text-blue-700">
            Go to project
          </span>
        </Link>
      </div>
    </div>
  )
}
