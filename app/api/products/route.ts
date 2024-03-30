import { NextResponse } from 'next/server'

export const GET = async (req: Request) => {
  const data = await req.json()

  return NextResponse.json({ data: data })
}
