"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Home, Key, Search, Settings, Users } from "lucide-react"
import React from 'react';
import '@/app/globals.css';
import Link from "next/link"

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const router = useRouter()

  const handleSearch = (e) => {
    e.preventDefault()
    router.push(`/search?term=${encodeURIComponent(searchTerm)}`)
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Building className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">PropManage</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/properties" className="text-gray-600 hover:text-blue-600">Properties</Link>
            <Link href="/tenants" className="text-gray-600 hover:text-blue-600">Tenants</Link>
            <Link href="maintenance" className="text-gray-600 hover:text-blue-600">Maintenance</Link>
            <Link href="/reports" className="text-gray-600 hover:text-blue-600">Reports</Link>
          </nav>
          <Link href="/login">
            <Button>Login</Button>
          </Link>
        </div>
      </header>

      <main className="flex-grow">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Simplify Your Property Management</h1>
            <p className="text-xl mb-8">Streamline operations, increase efficiency, and boost profitability</p>
            <form onSubmit={handleSearch} className="max-w-md mx-auto flex">
              <Input 
                placeholder="Search properties..." 
                className="rounded-r-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button type="submit" className="rounded-l-none">
                <Search className="h-4 w-4 mr-2" /> Search
              </Button>
            </form>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <img src={`/placeholder.svg?height=200&width=400`} alt="Property" className="w-full h-48 object-cover" />
                  <CardHeader>
                    <CardTitle>Luxury Apartment {i}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">123 Main St, City, State</p>
                    <p className="font-semibold text-lg">$1,500 / month</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Home className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle>Property Listings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Easily manage and showcase your property portfolio with detailed listings and high-quality images.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle>Tenant Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Keep track of tenant information, leases, and communications all in one place.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Key className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle>Maintenance Requests</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Streamline maintenance workflows with an easy-to-use request and tracking system.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8">Join thousands of property managers who trust PropManage</p>
            <Button variant="secondary" size="lg">Start Your Free Trial</Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">PropManage</h3>
              <p className="text-sm text-gray-400">Simplifying property management for landlords and real estate professionals.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link href="/features" className="text-gray-400 hover:text-white">Features</Link></li>
                <li><Link href="/pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
                <li><Link href="contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">Facebook</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Twitter</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">LinkedIn</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} PropManage. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}