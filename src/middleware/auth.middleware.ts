// Middleware
import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'

export function middleware(req: NextRequest) {
    console.log('Middleware')
    return NextResponse.next()
}
