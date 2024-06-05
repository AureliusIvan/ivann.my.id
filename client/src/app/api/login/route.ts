// api/login/route.ts
import { NextResponse, NextRequest } from 'next/server'

export function GET(req: NextRequest) {
  return NextResponse.json({
    data: "Hello from the API!",
    message: 'Hello from the API!'
  })
}

export function POST(req: NextRequest) {
  console.log(req.body)
  return NextResponse.json({ message: 'Hello from the API!' })
}