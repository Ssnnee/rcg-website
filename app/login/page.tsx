"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { setCookie } from 'typescript-cookie'

export default function Login() {
  const router = useRouter()
  const [ name, setName ] = useState<string>('')
  const [ password, setPassword ] = useState<string>('')

  const redirectHome = () => {
    router.push('/')
  }

  const login = async () => {
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ name, password })
    })

    const data = await res.json()
    if(data.success) {
      setCookie('admin', true, { expires: 1 })
    }

    router.push('/admin')
    setName('')
    setPassword('')
  }
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            <Button onClick={redirectHome}>Retourner  sur le site</Button>
        </h2>
      </div>

      <div className="flex flex-col items-center gap-5 mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Input type="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nom" />
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" />
        <Button onClick={login}>Se connecter</Button>
      </div>
    </div>
  )
}
