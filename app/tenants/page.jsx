"use client";

import { useState } from 'react'

import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

import { Label } from "@/components/ui/label"

import { Building, Search, Edit, Trash, Plus, UserPlus, Filter } from "lucide-react"

import Link from "next/link"



// Mock data for demonstration

const mockTenants = [

  { id: 1, name: "John Doe", nationality: "USA", contactInfo: "john@example.com", currentAddress: "Apt 101, 123 Main St", activeLeases: 1 },

  { id: 2, name: "Jane Smith", nationality: "Canada", contactInfo: "jane@example.com", currentAddress: "Unit 202, 456 Elm St", activeLeases: 2 },

  { id: 3, name: "Bob Johnson", nationality: "UK", contactInfo: "bob@example.com", currentAddress: "Suite 303, 789 Oak Ave", activeLeases: 1 },

  { id: 4, name: "Alice Brown", nationality: "Australia", contactInfo: "alice@example.com", currentAddress: "Room 404, 321 Pine Rd", activeLeases: 0 },

]



export default function TenantsPage() {

  const [searchTerm, setSearchTerm] = useState("")

  const [filterActiveLeases, setFilterActiveLeases] = useState(false)

  const [selectedTenant, setSelectedTenant] = useState(null)



  const filteredTenants = mockTenants.filter(tenant => 

    (tenant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||

     tenant.contactInfo.toLowerCase().includes(searchTerm.toLowerCase())) &&

    (!filterActiveLeases || tenant.activeLeases > 0)

  )



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

            <Link href="/tenants" className="text-blue-600 font-semibold">Tenants</Link>

            <Link href="/maintenance" className="text-gray-600 hover:text-blue-600">Maintenance</Link>

            <Link href="/reports" className="text-gray-600 hover:text-blue-600">Reports</Link>

          </nav>

          <Button asChild>

            <Link href="/login">Login</Link>

          </Button>

        </div>

      </header>



      <main className="container mx-auto px-4 py-8">

        <h1 className="text-3xl font-bold mb-8">Tenants</h1>



        <div className="bg-white p-6 rounded-lg shadow-md mb-8">

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">

            <Input 

              type="text" 

              placeholder="Search tenants..." 

              className="flex-grow"

              value={searchTerm}

              onChange={(e) => setSearchTerm(e.target.value)}

            />

            <Button onClick={() => setFilterActiveLeases(!filterActiveLeases)}>

              <Filter className="h-4 w-4 mr-2" /> 

              {filterActiveLeases ? "Show All" : "Active Leases Only"}

            </Button>

            <Button>

              <Search className="h-4 w-4 mr-2" /> Search

            </Button>

          </div>

          <Button>

            <UserPlus className="h-4 w-4 mr-2" /> Add New Tenant

          </Button>

        </div>



        <div className="bg-white rounded-lg shadow-md overflow-hidden">

          <Table>

            <TableHeader>

              <TableRow>

                <TableHead>Name</TableHead>

                <TableHead>Nationality</TableHead>

                <TableHead>Contact Info</TableHead>

                <TableHead>Current Address</TableHead>

                <TableHead>Active Leases</TableHead>

                <TableHead>Actions</TableHead>

              </TableRow>

            </TableHeader>

            <TableBody>

              {filteredTenants.map((tenant) => (

                <TableRow key={tenant.id}>

                  <TableCell className="font-medium">{tenant.name}</TableCell>

                  <TableCell>{tenant.nationality}</TableCell>

                  <TableCell>{tenant.contactInfo}</TableCell>

                  <TableCell>{tenant.currentAddress}</TableCell>

                  <TableCell>{tenant.activeLeases}</TableCell>

                  <TableCell>

                    <div className="flex space-x-2">

                      <Button variant="outline" size="sm" onClick={() => setSelectedTenant(tenant)}>

                        <Edit className="h-4 w-4 mr-2" /> View

                      </Button>

                      <Button variant="destructive" size="sm">

                        <Trash className="h-4 w-4 mr-2" /> Delete

                      </Button>

                    </div>

                  </TableCell>

                </TableRow>

              ))}

            </TableBody>

          </Table>

        </div>

      </main>



      <Dialog open={!!selectedTenant} onOpenChange={() => setSelectedTenant(null)}>

        <DialogContent className="max-w-3xl">

          <DialogHeader>

            <DialogTitle>Tenant Profile</DialogTitle>

          </DialogHeader>

          {selectedTenant && (

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <Card>

                <CardHeader>

                  <CardTitle>Personal Information</CardTitle>

                </CardHeader>

                <CardContent>

                  <p><strong>Name:</strong> {selectedTenant.name}</p>

                  <p><strong>Nationality:</strong> {selectedTenant.nationality}</p>

                  <p><strong>Contact:</strong> {selectedTenant.contactInfo}</p>

                  <p><strong>Current Address:</strong> {selectedTenant.currentAddress}</p>

                </CardContent>

              </Card>

              <Card>

                <CardHeader>

                  <CardTitle>Lease Information</CardTitle>

                </CardHeader>

                <CardContent>

                  <p><strong>Active Leases:</strong> {selectedTenant.activeLeases}</p>

                  {/* Add more lease details here */}

                </CardContent>

              </Card>

            </div>

          )}

        </DialogContent>

      </Dialog>



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
