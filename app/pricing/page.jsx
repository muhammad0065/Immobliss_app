import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Check } from "lucide-react"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Basic",
    price: 29,
    description: "Perfect for small landlords",
    features: [
      "Up to 5 properties",
      "Basic tenant management",
      "Maintenance request tracking",
      "Monthly financial reports",
      "Email support"
    ]
  },
  {
    name: "Professional",
    price: 79,
    description: "Ideal for growing property portfolios",
    features: [
      "Up to 20 properties",
      "Advanced tenant screening",
      "Automated rent collection",
      "Customizable reports",
      "Priority email & phone support"
    ]
  },
  {
    name: "Enterprise",
    price: 199,
    description: "For large-scale property management",
    features: [
      "Unlimited properties",
      "Full-suite tenant management",
      "Advanced financial tools",
      "API access",
      "Dedicated account manager"
    ]
  }
]

export default function PricingPage() {
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
        <h1 className="text-3xl font-bold mb-8 text-center">Choose Your Plan</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={index === 1 ? "border-blue-500 border-2" : ""}>
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-4">${plan.price}<span className="text-lg font-normal">/month</span></div>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 mr-2 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                  Choose {plan.name}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Need a custom plan?</h2>
          <p className="mb-4">Contact us for a tailored solution that fits your specific needs.</p>
          <Button asChild>
            <Link href="/contact">Contact Sales</Link>
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
