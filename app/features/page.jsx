"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Home, Users, Wrench, BarChart, Shield } from "lucide-react"
import Link from "next/link"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Building className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">PropManage</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/properties" className="text-gray-600 hover:text-blue-600">Properties</Link>
            <Link href="/tenants" className="text-gray-600 hover:text-blue-600">Tenants</Link>
            <Link href="/maintenance" className="text-gray-600 hover:text-blue-600">Maintenance</Link>
            <Link href="/reports" className="text-gray-600 hover:text-blue-600">Reports</Link>
          </nav>
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">PropManage Features</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Home className="h-6 w-6 mr-2 text-blue-600" />
                Property Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Easily manage all your properties in one place. Track occupancy, rent collection, and property details.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-6 w-6 mr-2 text-blue-600" />
                Tenant Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Keep track of tenant information, lease agreements, and communication history all in one system.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wrench className="h-6 w-6 mr-2 text-blue-600" />
                Maintenance Requests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Streamline maintenance workflows with an easy-to-use request and tracking system for all your properties.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart className="h-6 w-6 mr-2 text-blue-600" />
                Financial Reporting
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Generate comprehensive financial reports to track income, expenses, and profitability for each property.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-6 w-6 mr-2 text-blue-600" />
                Security & Compliance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Ensure data security and compliance with industry regulations to protect your business and tenants.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="h-6 w-6 mr-2 text-blue-600" />
                Multi-property Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Manage multiple properties or entire portfolios with ease, perfect for property management companies.</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to streamline your property management?</h2>
          <Button size="lg" asChild>
            <Link href="/pricing">View Pricing Plans</Link>
          </Button>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">PropManage</h3>
              <p className="text-sm text-gray-400">Simplifying property management for landlords and real estate professionals.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link href="/features" className="text-gray-400 hover:text-white">Features</Link></li>
                <li><Link href="/pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
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
