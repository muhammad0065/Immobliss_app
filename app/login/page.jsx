"use client";

import { useState } from 'react'

import Link from 'next/link'

import { Building } from 'lucide-react'

import { useRouter } from 'next/navigation'



export default function LoginPage() {

  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')

  const router = useRouter()



  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      // Hier können Sie die Login-Logik implementieren

      console.log('Login attempt:', { email, password })

      // Nach erfolgreicher Anmeldung zur Hauptseite weiterleiten

      router.push('/properties')

    } catch (error) {

      console.error('Login failed:', error)

    }

  }



  const handleGoogleLogin = async () => {

    try {

      console.log('Google login')

      // Implementieren Sie hier die Google-Login-Logik

    } catch (error) {

      console.error('Google login failed:', error)

    }

  }



  const handleMicrosoftLogin = async () => {

    try {

      console.log('Microsoft login')

      // Implementieren Sie hier die Microsoft-Login-Logik

    } catch (error) {

      console.error('Microsoft login failed:', error)

    }

  }



  return (

    <div className="min-h-screen bg-gray-100 flex flex-col">

      <header className="bg-white border-b">

        <div className="container mx-auto px-4 py-4">

          <Link href="/" className="flex items-center space-x-2">

            <Building className="h-6 w-6 text-blue-600" />

            <span className="text-xl font-bold text-gray-800">PropManage</span>

          </Link>

        </div>

      </header>



      <main className="flex-grow flex items-center justify-center py-12 px-4">

        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">

          <div>

            <h2 className="text-3xl font-bold text-center text-gray-900">

              Sign in to your account

            </h2>

          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>

            <div className="space-y-4">

              <div>

                <label htmlFor="email" className="block text-sm font-medium text-gray-700">

                  Email address

                </label>

                <input

                  id="email"

                  name="email"

                  type="email"

                  autoComplete="email"

                  required

                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"

                  value={email}

                  onChange={(e) => setEmail(e.target.value)}

                />

              </div>

              <div>

                <label htmlFor="password" className="block text-sm font-medium text-gray-700">

                  Password

                </label>

                <input

                  id="password"

                  name="password"

                  type="password"

                  autoComplete="current-password"

                  required

                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"

                  value={password}

                  onChange={(e) => setPassword(e.target.value)}

                />

              </div>

            </div>



            <div className="flex items-center justify-between">

              <div className="flex items-center">

                <input

                  id="remember-me"

                  name="remember-me"

                  type="checkbox"

                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"

                />

                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">

                  Remember me

                </label>

              </div>



              <div className="text-sm">

                <Link href="/forgot-password" className="text-blue-600 hover:text-blue-500">

                  Forgot your password?

                </Link>

              </div>

            </div>



            <div>

              <button

                type="submit"

                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"

              >

                Sign in

              </button>

            </div>

          </form>



          <div className="mt-6">

            <div className="relative">

              <div className="absolute inset-0 flex items-center">

                <div className="w-full border-t border-gray-300" />

              </div>

              <div className="relative flex justify-center text-sm">

                <span className="px-2 bg-white text-gray-500">

                  Or continue with

                </span>

              </div>

            </div>



            <div className="mt-6 grid grid-cols-2 gap-3">

              <button

                type="button"

                onClick={handleGoogleLogin}

                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"

              >

                Google

              </button>

              <button

                type="button"

                onClick={handleMicrosoftLogin}

                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"

              >

                Microsoft

              </button>

            </div>

          </div>

        </div>

      </main>

    </div>

  )

}  
