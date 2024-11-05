"use client";

import React from 'react';

import { Button } from "@/components/ui/button";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

import { Building, Mail, Phone, MapPin } from "lucide-react";

import Link from "next/link";



export default function ContactPage() {

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

        <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <Card>

            <CardHeader>

              <CardTitle>Get in Touch</CardTitle>

              <CardDescription>Fill out the form and we'll get back to you as soon as possible.</CardDescription>

            </CardHeader>

            <CardContent>

              <form className="space-y-4">

                <div className="grid grid-cols-2 gap-4">

                  <div>

                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>

                    <Input id="first-name" placeholder="John" />

                  </div>

                  <div>

                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>

                    <Input id="last-name" placeholder="Doe" />

                  </div>

                </div>

                <div>

                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>

                  <Input id="email" type="email" placeholder="john@example.com" />

                </div>

                <div>

                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>

                  <Input id="subject" placeholder="How can we help you?" />

                </div>

                <div>

                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>

                  <Textarea id="message" placeholder="Your message here..." rows={4} />

                </div>

                <Button type="submit" className="w-full">Send Message</Button>

              </form>

            </CardContent>

          </Card>



          <Card>

            <CardHeader>

              <CardTitle>Contact Information</CardTitle>

              <CardDescription>You can also reach us using the following contact details.</CardDescription>

            </CardHeader>

            <CardContent className="space-y-4">

              <div className="flex items-center">

                <Mail className="h-5 w-5 mr-2 text-blue-600" />

                <span>support@propmanage.com</span>

              </div>

              <div className="flex items-center">

                <Phone className="h-5 w-5 mr-2 text-blue-600" />

                <span>+1 (555) 123-4567</span>

              </div>

              <div className="flex items-center">

                <MapPin className="h-5 w-5 mr-2 text-blue-600" />

                <span>123 Property St, Real Estate City, 12345</span>

              </div>

              <div className="mt-6">

                <h3 className="text-lg font-semibold mb-2">Office Hours</h3>

                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>

                <p>Saturday: 10:00 AM - 2:00 PM</p>

                <p>Sunday: Closed</p>

              </div>

            </CardContent>

          </Card>

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

  );

}
