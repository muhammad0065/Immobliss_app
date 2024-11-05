"use client";

import { useState } from 'react'

import Link from 'next/link'

import { Building, Search, Edit, Plus } from 'lucide-react'



// Mock data for demonstration

const mockMaintenanceRequests = [

  { id: 1, property: "Luxury Apartment", issue: "Leaky faucet", status: "Pending", date: "2023-05-15" },

  { id: 2, property: "Cozy House", issue: "Broken window", status: "In Progress", date: "2023-05-14" },

  { id: 3, property: "Modern Condo", issue: "HVAC not working", status: "Completed", date: "2023-05-13" },

  { id: 4, property: "Spacious Townhouse", issue: "Electrical outlet sparking", status: "Urgent", date: "2023-05-16" },

]



export default function MaintenancePage() {

  const [searchTerm, setSearchTerm] = useState("")

  const [statusFilter, setStatusFilter] = useState("all")



  const filteredRequests = mockMaintenanceRequests.filter(request => 

    (request.property.toLowerCase().includes(searchTerm.toLowerCase()) ||

     request.issue.toLowerCase().includes(searchTerm.toLowerCase())) &&

    (statusFilter === "all" || request.status.toLowerCase() === statusFilter.toLowerCase())

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

            <Link href="/tenants" className="text-gray-600 hover:text-blue-600">Tenants</Link>

            <Link href="/maintenance" className="text-blue-600 font-semibold">Maintenance</Link>

            <Link href="/reports" className="text-gray-600 hover:text-blue-600">Reports</Link>

          </nav>

          <Link href="/login" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">

            Login

          </Link>

        </div>

      </header>



      <main className="container mx-auto px-4 py-8">

        <h1 className="text-3xl font-bold mb-8">Maintenance Requests</h1>



        <div className="bg-white p-6 rounded-lg shadow-md mb-8">

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">

            <input 

              type="text" 

              placeholder="Search maintenance requests..." 

              className="flex-grow px-4 py-2 border rounded-md"

              value={searchTerm}

              onChange={(e) => setSearchTerm(e.target.value)}

            />

            <select 

              value={statusFilter} 

              onChange={(e) => setStatusFilter(e.target.value)}

              className="px-4 py-2 border rounded-md"

            >

              <option value="all">All Statuses</option>

              <option value="pending">Pending</option>

              <option value="in progress">In Progress</option>

              <option value="completed">Completed</option>

              <option value="urgent">Urgent</option>

            </select>

            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">

              <Search className="h-4 w-4 inline mr-2" /> Search

            </button>

          </div>

          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">

            <Plus className="h-4 w-4 inline mr-2" /> New Maintenance Request

          </button>

        </div>



        <div className="bg-white rounded-lg shadow-md overflow-hidden">

          <table className="min-w-full">

            <thead className="bg-gray-50">

              <tr>

                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>

                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issue</th>

                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>

                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>

                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>

              </tr>

            </thead>

            <tbody className="bg-white divide-y divide-gray-200">

              {filteredRequests.map((request) => (

                <tr key={request.id}>

                  <td className="px-6 py-4 whitespace-nowrap">{request.property}</td>

                  <td className="px-6 py-4 whitespace-nowrap">{request.issue}</td>

                  <td className="px-6 py-4 whitespace-nowrap">

                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full

                      ${request.status === 'Urgent' ? 'bg-red-100 text-red-800' : 

                        request.status === 'Completed' ? 'bg-green-100 text-green-800' : 

                        'bg-blue-100 text-blue-800'}`}>

                      {request.status}

                    </span>

                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">{request.date}</td>

                  <td className="px-6 py-4 whitespace-nowrap">

                    <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50">

                      <Edit className="h-4 w-4 inline" />

                      <span className="sr-only">Update</span>

                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

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
