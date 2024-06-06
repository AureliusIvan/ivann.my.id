import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';
import {getGithubData} from "@/app/api/github/action";
import axios from "axios";

export async function GET(request: NextRequest) {
  const response = await axios.get('https://api.github.com/users/AureliusIvan');
  return NextResponse.json(response.data);
}

// export async function POST(request: NextRequest) {
//   return NextResponse.json({message: 'Hello, Next.js 14 API!'});
// }
