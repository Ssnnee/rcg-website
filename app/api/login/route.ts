import { NextResponse } from "next/server"

export async function POST(request: Request){

  const requestBody = await request.json();
  if(!requestBody){
    return NextResponse.json({ success: false,});
  }

    const { name, password } = requestBody

    const valideName = process.env.ADMIN_NAME
    const validePassword = process.env.ADMIN_PASSWORD

    if(name == valideName && password == validePassword){
      return NextResponse.json({ success: true,});
    }

    return NextResponse.json({ success: false,});

}

