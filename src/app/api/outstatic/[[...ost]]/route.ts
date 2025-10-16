import {OutstaticApi} from 'outstatic'
import { NextRequest } from 'next/server'

export const GET = async (request: NextRequest, context: { params: Promise<{ ost?: string[] }> }) => {
  // @ts-ignore - Outstatic version compatibility workaround
  return OutstaticApi.GET(request, context)
}

export const POST = async (request: NextRequest, context: { params: Promise<{ ost?: string[] }> }) => {
  // @ts-ignore - Outstatic version compatibility workaround
  return OutstaticApi.POST(request, context)
}