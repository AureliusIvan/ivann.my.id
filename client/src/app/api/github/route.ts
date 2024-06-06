"use server"

import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';
import axios from "axios";

export async function GET(request: NextRequest) {
  const response = await axios.get('https://api.github.com/users/AureliusIvan');
  return NextResponse.json(response.data);
}
