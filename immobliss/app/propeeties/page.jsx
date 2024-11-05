"use client"

import { useState } from 'react'

import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import { Badge } from "@/components/ui/badge"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

import { Label } from "@/components/ui/label"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Building, Search, Edit, Trash, Plus, Home, Filter } from "lucide-react"

import Link from "next/link"



// Mock data for demonstration

const mockProperties = [

  { id: 1, name: "Sunset Apartments", address: "123 Main St, City, State", units: 20, occupancyRate: 0.85 },

  { id: 2, name: "Ocean View Condos", address: "456 Beach Rd, Coastal City, State", units: 15, occupancyRate: 0.93 },

  { id: 3, name: "Mountain Lodge", address: "789 Pine Ave, Mountain Town, State", units: 10, occupancyRate: 0.7 },

]



const mockUnits = [

  { id: 1, propertyId: 1, unitNumber: "A101", type: "Apartment", area: 750, status: "Rented", rentalPrice: 1200 },

  { id: 2, propertyId: 1, unitNumber: "A102", type: "Apartment", area: 800, status: "Available", rentalPrice: 1300 },

  { id: 3, propertyId: 2, unitNumber: "B201", type: "Condo", area: 1000, status: "Under Maintenance", rentalPrice: 1800 },

  { id: 4, propertyId: 2, unitNumber: "B202", type: "Condo", area: 1100, status: "Rented", rentalPrice: 2000 },

  { id: 5, propertyId: 3, unitNumber: "C301", type: "Cabin", area: 600, status: "Available", rentalPrice: 900 },

]



export default function PropertiesPage() {

  const [selectedProperty, setSelectedProperty] = useState(null)

  const [isAddUnitDialogOpen, setIsAddUnitDialogOpen] = useState(false)

  const [unitFilter, setUnitFilter] = useState("all")



  const filteredUnits = selectedProperty

    ? mockUnits.filter(unit => 

        unit.propertyId === selectedProperty.id && 

        (unitFilter === "all" || unit.status.toLowerCase() === unitFilter)

      )

    : []



  return (

    <div className="min-h-screen bg-gray-100">

      <header className="bg-white border-b">

        <div className="container mx-auto px-4 py-4 flex items-center justify-between">

          <Link href="/" className="flex items-center space-x-2">

            <Building className="h-6 w-6 text-blue-600" />

            <span className="text-xl font-bold text-gray-800">PropManage</span>

          </Link>

          <nav className="hidden md:flex space-x-4">

            <Link href="/properties" className="text-blue-600 font-semibold">Properties</Link>

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

        <h1 className="text-3xl font-bold mb-8">Properties</h1>



        <div className="bg-white p-6 rounded-lg shadow-md mb-8">

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">

            <Input type="text" placeholder="Search properties..." className="flex-grow" />

            <Select>

              <SelectTrigger className="w-[180px]">

                <SelectValue placeholder="Property Type" />

              </SelectTrigger>

              <SelectContent>

                <SelectItem value="apartment">Apartment</SelectItem>

                <SelectItem value="condo">Condo</SelectItem>

                <SelectItem value="house">House</SelectItem>

              </SelectContent>

            </Select>

            <Button>

              <Search className="h-4 w-4 mr-2" /> Search

            </Button>

          </div>

          <Button>

            <Plus className="h-4 w-4 mr-2" /> Add New Property

          </Button>

        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {mockProperties.map((property) => (

            <Card key={property.id}>

              <CardHeader>

                <CardTitle>{property.name}</CardTitle>

              </CardHeader>

              <CardContent>

                <p className="text-gray-600 mb-2">{property.address}</p>

                <p className="text-sm text-gray-500">

                  Units: {property.units} • Occupancy: {(property.occupancyRate * 100).toFixed(0)}%

                </p>

              </CardContent>

              <CardFooter className="flex justify-between">

                <Button variant="outline" size="sm" onClick={() => setSelectedProperty(property)}>

                  <Home className="h-4 w-4 mr-2" /> View Units

                </Button>

                <div className="space-x-2">

                  <Button variant="outline" size="sm">

                    <Edit className="h-4 w-4 mr-2" /> Edit

                  </Button>

                  <Button variant="destructive" size="sm">

                    <Trash className="h-4 w-4 mr-2" /> Delete

                  </Button>

                </div>

              </CardFooter>

            </Card>

          ))}

        </div>



        {selectedProperty && (

          <Dialog open={!!selectedProperty} onOpenChange={() => setSelectedProperty(null)}>

            <DialogContent className="max-w-4xl">

              <DialogHeader>

                <DialogTitle>{selectedProperty.name} - Units</DialogTitle>

              </DialogHeader>

              <Tabs defaultValue="list" className="w-full">

                <div className="flex justify-between items-center mb-4">

                  <TabsList>

                    <TabsTrigger value="list">List View</TabsTrigger>

                    <TabsTrigger value="card">Card View</TabsTrigger>

                  </TabsList>

                  <div className="flex items-center space-x-2">

                    <Label htmlFor="status-filter" className="sr-only">Filter by status</Label>

                    <Select value={unitFilter} onValueChange={setUnitFilter}>

                      <SelectTrigger id="status-filter" className="w-[180px]">

                        <SelectValue placeholder="Filter by status" />

                      </SelectTrigger>

                      <SelectContent>

                        <SelectItem value="all">All Units</SelectItem>

                        <SelectItem value="available">Available</SelectItem>

                        <SelectItem value="rented">Rented</SelectItem>

                        <SelectItem value="under maintenance">Under Maintenance</SelectItem>

                      </SelectContent>

                    </Select>

                    <Button onClick={() => setIsAddUnitDialogOpen(true)}>

                      <Plus className="h-4 w-4 mr-2" /> Add Unit

                    </Button>

                  </div>

                </div>

                <TabsContent value="list">

                  <Table>

                    <TableHeader>

                      <TableRow>

                        <TableHead>Unit Number</TableHead>

                        <TableHead>Type</TableHead>

                        <TableHead>Area (sq ft)</TableHead>

                        <TableHead>Status</TableHead>

                        <TableHead>Rental Price</TableHead>

                        <TableHead>Actions</TableHead>

                      </TableRow>

                    </TableHeader>

                    <TableBody>

                      {filteredUnits.map((unit) => (

                        <TableRow key={unit.id}>

                          <TableCell>{unit.unitNumber}</TableCell>

                          <TableCell>{unit.type}</TableCell>

                          <TableCell>{unit.area}</TableCell>

                          <TableCell>

                            <Badge variant={unit.status === 'Available' ? 'success' : unit.status === 'Rented' ? 'default' : 'destructive'}>

                              {unit.status}

                            </Badge>

                          </TableCell>

                          <TableCell>${unit.rentalPrice}</TableCell>

                          <TableCell>

                            <Button variant="outline" size="sm" className="mr-2">

                              <Edit className="h-4 w-4" />

                              <span className="sr-only">Edit</span>

                            </Button>

                            <Button variant="destructive" size="sm">

                              <Trash className="h-4 w-4" />

                              <span className="sr-only">Delete</span>

                            </Button>

                          </TableCell>

                        </TableRow>

                      ))}

                    </TableBody>

                  </Table>

                </TabsContent>

                <TabsContent value="card">

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    {filteredUnits.map((unit) => (

                      <Card key={unit.id}>

                        <CardHeader>

                          <CardTitle>{unit.unitNumber}</CardTitle>

                        </CardHeader>

                        <CardContent>

                          <p><strong>Type:</strong> {unit.type}</p>

                          <p><strong>Area:</strong> {unit.area} sq ft</p>

                          <p><strong>Status:</strong> 

                            <Badge variant={unit.status === 'Available' ? 'success' : unit.status === 'Rented' ? 'default' : 'destructive'} className="ml-2">

                              {unit.status}

                            </Badge>

                          </p>

                          <p><strong>Rental Price:</strong> ${unit.rentalPrice}</p>

                        </CardContent>

                        <CardFooter className="flex justify-end space-x-2">

                          <Button variant="outline" size="sm">

                            <Edit className="h-4 w-4 mr-2" /> Edit

                          </Button>

                          <Button variant="destructive" size="sm">

                            <Trash className="h-4 w-4 mr-2" /> Delete

                          </Button>

                        </CardFooter>

                      </Card>

                    ))}

                  </div>

                </TabsContent>

              </Tabs>

            </DialogContent>

          </Dialog>

        )}



        <Dialog open={isAddUnitDialogOpen} onOpenChange={setIsAddUnitDialogOpen}>

          <DialogContent>

            <DialogHeader>

              <DialogTitle>Add New Unit</DialogTitle>

            </DialogHeader>

            <form className="space-y-4">

              <div>

                <Label htmlFor="unitNumber">Unit Number</Label>

                <Input id="unitNumber" required />

              </div>

              <div>

                <Label htmlFor="unitType">Type</Label>

                <Select>

                  <SelectTrigger id="unitType">

                    <SelectValue placeholder="Select unit type" />

                  </SelectTrigger>

                  <SelectContent>

                    <SelectItem value="apartment">Apartment</SelectItem>

                    <SelectItem value="office">Office</SelectItem>

                    <SelectItem value="commercial">Commercial Space</SelectItem>

                  </SelectContent>

                </Select>

              </div>

              <div>

                <Label htmlFor="unitArea">Area (sq ft)</Label>

                <Input id="unitArea" type="number" required />

              </div>

              <div>

                <Label htmlFor="unitStatus">Status</Label>

                <Select>

                  <SelectTrigger id="unitStatus">

                    <SelectValue placeholder="Select unit status" />

                  </SelectTrigger>

                  <SelectContent>

                    <SelectItem value="available">Available</SelectItem>

                    <SelectItem value="rented">Rented</SelectItem>

                    <SelectItem value="maintenance">Under Maintenance</SelectItem>

                  </SelectContent>

                </Select>

              </div>

              <div>

                <Label htmlFor="rentalPrice">Rental Price</Label>

                <Input id="rentalPrice" type="number" required />

              </div>

              <Button type="submit">Add Unit</Button>

            </form>

          </DialogContent>

        </Dialog>

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

              <ul  className="space-y-2">

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
