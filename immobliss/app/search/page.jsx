"use client"



import { useState, useEffect, Suspense } from 'react'

import { useSearchParams } from 'next/navigation'

import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { Slider } from "@/components/ui/slider"

import { Building, Search, Edit, Trash, Plus } from "lucide-react"

import Link from "next/link"



// Mock data for demonstration

const mockProperties = [

  { id: 1, title: "Luxury Apartment", address: "123 Main St, City, State", price: 1500, type: "Apartment", bedrooms: 2 },

  { id: 2, title: "Cozy House", address: "456 Elm St, Town, State", price: 2000, type: "House", bedrooms: 3 },

  { id: 3, title: "Modern Condo", address: "789 Oak Ave, Village, State", price: 1800, type: "Condo", bedrooms: 2 },

  { id: 4, title: "Spacious Townhouse", address: "101 Pine Rd, Suburb, State", price: 2200, type: "Townhouse", bedrooms: 4 },

]



function SearchContent() {

  const searchParams = useSearchParams()

  const [searchTerm, setSearchTerm] = useState(searchParams.get('term') || "")

  const [priceRange, setPriceRange] = useState([0, 5000])

  const [propertyType, setPropertyType] = useState("")

  const [results, setResults] = useState(mockProperties)



  useEffect(() => {

    // Filter properties based on search parameters

    const filteredResults = mockProperties.filter(property => {

      const matchesTerm = property.title.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1]

      const matchesType = propertyType ? property.type.toLowerCase() === propertyType.toLowerCase() : true



      return matchesTerm && matchesPrice && matchesType

    })



    setResults(filteredResults)

  }, [searchTerm, priceRange, propertyType])



  const handleSearch = (e) => {

    e.preventDefault()

    // The filtering is handled by the useEffect hook

  }



  return (

    <div className="min-h-screen bg-gray-100">

      <header className="bg-white border-b">

        <div className="container mx-auto px-4 py-4 flex items-center justify-between">

          <Link href="/" className="flex items-center space-x-2">

            <Building className="h-6 w-6 text-blue-600" />

            <span className="text-xl font-bold text-gray-800">PropManage</span>

          </Link>

          <Button asChild>

            <Link href="/login">Login</Link>

          </Button>

        </div>

      </header>



      <main className="container mx-auto px-4 py-8">

        <h1 className="text-3xl font-bold mb-8">Property Search</h1>



        <div className="bg-white p-6 rounded-lg shadow-md mb-8">

          <form onSubmit={handleSearch} className="space-y-4">

            <div className="flex space-x-4">

              <Input

                type="text"

                placeholder="Search properties..."

                value={searchTerm}

                onChange={(e) => setSearchTerm(e.target.value)}

                className="flex-grow"

              />

              <Button type="submit">

                <Search className="h-4 w-4 mr-2" /> Search

              </Button>

            </div>

            <div className="flex space-x-4">

              <div className="w-1/3">

                <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>

                <Slider

                  min={0}

                  max={5000}

                  step={100}

                  value={priceRange}

                  onValueChange={setPriceRange}

                  className="mt-2"

                />

                <div className="flex justify-between mt-2">

                  <span>${priceRange[0]}</span>

                  <span>${priceRange[1]}</span>

                </div>

              </div>

              <div className="w-1/3">

                <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>

                <Select value={propertyType} onValueChange={setPropertyType}>

                  <SelectTrigger>

                    <SelectValue placeholder="Select type" />

                  </SelectTrigger>

                  <SelectContent>

                    <SelectItem value="apartment">Apartment</SelectItem>

                    <SelectItem value="house">House</SelectItem>

                    <SelectItem value="condo">Condo</SelectItem>

                    <SelectItem value="townhouse">Townhouse</SelectItem>

                  </SelectContent>

                </Select>

              </div>

            </div>

          </form>

        </div>



        <div className="mb-4 flex justify-between items-center">

          <h2 className="text-2xl font-semibold">Search Results</h2>

          <Button>

            <Plus className="h-4 w-4 mr-2" /> Add New Property

          </Button>

        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {results.map((property) => (

            <Card key={property.id}>

              <CardHeader>

                <CardTitle>{property.title}</CardTitle>

              </CardHeader>

              <CardContent>

                <p className="text-gray-600 mb-2">{property.address}</p>

                <p className="font-semibold text-lg mb-2">${property.price} / month</p>

                <p className="text-sm text-gray-500">

                  {property.type} • {property.bedrooms} bedrooms

                </p>

              </CardContent>

              <CardFooter className="flex justify-between">

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

      </main>

    </div>

  )

}



export default function SearchPage() {

  return (

    <Suspense fallback={<div>Laden...</div>}>

      <SearchContent />

    </Suspense>

  );

} 
