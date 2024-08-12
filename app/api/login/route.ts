import { NextResponse } from "next/server"

export async function POST(request: Request){

  const requestBody = await request.json();
  console.log("Here is the request body :", requestBody)
  if(!requestBody){
    return NextResponse.json({ success: false,});
  }

    const { name, password } = requestBody

    const valideName = process.env.ADMIN_NAME
    const validePassword = process.env.ADMIN_PASSWORD

    if(name == valideName && password == validePassword){
      console.log("Cooooooooooooool you are connected !")
      return NextResponse.json({ success: true,});
    }

    return NextResponse.json({ success: false,});

}

