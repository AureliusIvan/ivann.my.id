"use server"

import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json({message: 'Hello, Next.js 14 API!'});
}
