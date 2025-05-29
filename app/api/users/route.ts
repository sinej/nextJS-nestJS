import {NextResponse} from "next/server";

const DB = [
  { id: 1, name: 'shin' },
  { id: 2, name: 'kim' },
  { id: 3, name: 'lee' },
]

export async function GET(request: Request, Response: Response) {
  
  const searchParams = new URL(request.url).searchParams;
  const name = searchParams.get('name') as string;
  
  return NextResponse.json({
    users: DB.filter((user) => user.name.includes(name)),
  })
}