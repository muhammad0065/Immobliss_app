"use client";

import React from 'react';

import { Button } from "@/components/ui/button";

import { Building } from "lucide-react";

import Link from "next/link";



export default function TermsOfServicePage() {

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

        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>



        <div className="bg-white p-6 rounded-lg shadow-md space-y-6">

          <section>

            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>

            <p>By accessing or using PropManage's services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.</p>

          </section>



          <section>

            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>

            <p>PropManage provides a property management platform for landlords and real estate professionals. Our services include property listing, tenant management, maintenance request handling, and financial reporting.</p>

          </section>



          <section>

            <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>

            <p>You must create an account to use our services. You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.</p>

          </section>



          <section>

            <h2 className="text-2xl font-semibold mb-4">4. User Obligations</h2>

            <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You will not use our services:</p>

            <ul className="list-disc pl-6 mt-2">

              <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>

              <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation</li>

              <li>To impersonate or attempt to impersonate PropManage, a PropManage employee, another user, or any other person or entity</li>

            </ul>

          </section>



          <section>

            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>

            <p>The Service and its original content, features, and functionality are and will remain the exclusive property of PropManage and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.</p>

          </section>



          <section>

            <h2 className="text-2xl font-semibold mb-4">6. Termination</h2>

            <p>We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</p>

          </section>



          <section>

            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>

            <p>In no event shall PropManage, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

          </section>



          <section>

            <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>

            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.</p>

          </section>



          <section>

            <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>

            <p>If you have any questions about these Terms, please contact us at:</p>

            <p className="mt-2">

              Email: legal@propmanage.com<br />

              Address: 123 Property St, Real Estate City, 12345

            </p>

          </section>

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

} in 
