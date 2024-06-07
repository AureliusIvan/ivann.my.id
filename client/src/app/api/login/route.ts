"use server"

import {NextResponse, NextRequest} from 'next/server'

export async function GET() {
  return NextResponse.json({
    data: "Hello from the API!",
    message: 'Hello from the API!'
  })
}

export async function POST(req: NextRequest) {
  console.log(req.body)
  return NextResponse.json({message: 'Hello from the API!'})
}