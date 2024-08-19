import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest ) {
  const data = await request.formData()
  const name = data.get('name') as string
  const email = data.get('email') as string
  const subject = data.get('subject') as string
  const message = data.get('message') as string

  try {
    const { data, error } = await resend.emails.send({
      from: 'contact@revuecg.com',
      to: 'contact@revuecg.com',
      subject: subject,
      text: "Message envoyé depuis le site de la Revue Congolaise de Gestion",
      react: EmailTemplate({ name: name, email: email, message:message })
    });

    if (error) {
      console.log(error)
      return NextResponse.json({ success: false, error: error });
    }

    console.log(data)
    return NextResponse.json({ success: true, data: data });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ success: false, error: error });
  }
}
