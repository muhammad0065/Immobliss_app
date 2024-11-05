"use client";

import { Button } from "@/components/ui/button"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { Building, BarChart, PieChart, LineChart, Download } from "lucide-react"

import Link from "next/link"



export default function ReportsPage() {

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

            <Link href="/reports" className="text-blue-600 font-semibold">Reports</Link>

          </nav>

          <Button asChild>

            <Link href="/login">Login</Link>

          </Button>

        </div>

      </header>



      <main className="container mx-auto px-4 py-8">

        <h1 className="text-3xl font-bold mb-8">Reports</h1>



        <div className="bg-white p-6 rounded-lg shadow-md mb-8">

          <div className="flex space-x-4 mb-4">

            <Select>

              <SelectTrigger className="w-[180px]">

                <SelectValue placeholder="Report Type" />

              </SelectTrigger>

              <SelectContent>

                <SelectItem value="financial">Financial</SelectItem>

                <SelectItem value="occupancy">Occupancy</SelectItem>

                <SelectItem value="maintenance">Maintenance</SelectItem>

              </SelectContent>

            </Select>

            <Select>

              <SelectTrigger className="w-[180px]">

                <SelectValue placeholder="Time Period" />

              </SelectTrigger>

              <SelectContent>

                <SelectItem value="month">Last Month</SelectItem>

                <SelectItem value="quarter">Last Quarter</SelectItem>

                <SelectItem value="year">Last Year</SelectItem>

              </SelectContent>

            </Select>

            <Button>

              <Download className="h-4 w-4 mr-2" /> Generate Report

            </Button>

          </div>

        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <Card>

            <CardHeader>

              <CardTitle className="flex items-center">

                <BarChart className="h-6 w-6 mr-2" />

                Financial Overview

              </CardTitle>

            </CardHeader>

            <CardContent>

              <div className="h-64 bg-gray-100 flex items-center justify-center">

                [Bar Chart Placeholder]

              </div>

            </CardContent>

          </Card>

          <Card>

            <CardHeader>

              <CardTitle className="flex items-center">

                <PieChart className="h-6 w-6 mr-2" />

                Occupancy Rates

              </CardTitle>

            </CardHeader>

            <CardContent>

              <div className="h-64 bg-gray-100 flex items-center justify-center">

                [Pie Chart Placeholder]

              </div>

            </CardContent>

          </Card>

          <Card>

            <CardHeader>

              <CardTitle className="flex items-center">

                <LineChart className="h-6 w-6 mr-2" />

                Maintenance Trends

              </CardTitle>

            </CardHeader>

            <CardContent>

              <div className="h-64 bg-gray-100 flex items-center justify-center">

                [Line Chart Placeholder]

              </div>

            </CardContent>

          </Card>

          <Card>

            <CardHeader>

              <CardTitle>Key Metrics</CardTitle>

            </CardHeader>

            <CardContent>

              <ul className="space-y-2">

                <li className="flex justify-between">

                  <span>Total Revenue:</span>

                  <span className="font-semibold">$125,000</span>

                </li>

                <li className="flex justify-between">

                  <span>Average Occupancy Rate:</span>

                  <span className="font-semibold">92%</span>

                </li>

                <li className="flex justify-between">

                  <span>Maintenance Costs:</span>

                  <span className="font-semibold">$15,000</span>

                </li>

                <li className="flex justify-between">

                  <span>Net Operating Income:</span>

                  <span className="font-semibold">$95,000</span>

                </li>

              </ul>

            </CardContent>

          </Card>

        </div>

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
