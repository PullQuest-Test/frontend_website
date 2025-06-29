"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Moon,
  Sun,
  Menu,
  X,
  Star,
  Users,
  Zap,
  Shield,
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [email, setEmail] = useState("")
  const [isToggling, setIsToggling] = useState(false)

  // Theme management
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = async () => {
    if (isToggling) return // Prevent rapid clicking

    setIsToggling(true)
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)

    if (newTheme) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }

    // Small delay to prevent rapid toggling
    setTimeout(() => setIsToggling(false), 300)
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thanks for subscribing with email: ${email}`)
    setEmail("")
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 mx-auto max-w-7xl">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500" />
            <span className="text-xl font-bold">ReactUI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-9 w-9 relative overflow-hidden">
              <div className="relative w-4 h-4">
                <Sun
                  className={`absolute inset-0 h-4 w-4 transition-all duration-300 ease-in-out ${
                    isDarkMode ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
                  }`}
                />
                <Moon
                  className={`absolute inset-0 h-4 w-4 transition-all duration-300 ease-in-out ${
                    isDarkMode ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
                  }`}
                />
              </div>
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button className="hidden md:inline-flex">Get Started</Button>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <nav className="flex flex-col space-y-4 p-4">
              <button
                onClick={() => scrollToSection("features")}
                className="text-sm font-medium hover:text-primary transition-colors text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-sm font-medium hover:text-primary transition-colors text-left"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium hover:text-primary transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium hover:text-primary transition-colors text-left"
              >
                Contact
              </button>
              <Button className="w-full">Get Started</Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4">
              🚀 New Release v2.0
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Build Amazing{" "}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                React Applications
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Create stunning web applications with our modern React toolkit. Fast, reliable, and beautifully designed
              components for your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Start Building <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build modern React applications with confidence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>Optimized performance with modern React patterns and techniques</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-500" />
                </div>
                <CardTitle>Secure by Default</CardTitle>
                <CardDescription>Built-in security features and best practices out of the box</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-500" />
                </div>
                <CardTitle>Team Collaboration</CardTitle>
                <CardDescription>Work together seamlessly with real-time collaboration tools</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-orange-500" />
                </div>
                <CardTitle>Component Library</CardTitle>
                <CardDescription>Extensive collection of pre-built, customizable React components</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                  <Github className="h-6 w-6 text-red-500" />
                </div>
                <CardTitle>Open Source</CardTitle>
                <CardDescription>Fully open source with active community contributions</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-cyan-500" />
                </div>
                <CardTitle>TypeScript Ready</CardTitle>
                <CardDescription>Full TypeScript support for better development experience</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">15K+</div>
              <div className="text-muted-foreground">Active Developers</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">75+</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Pricing</h2>
            <p className="text-xl text-muted-foreground">Choose the plan that works best for you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <CardDescription>Perfect for individuals</CardDescription>
                <div className="text-3xl font-bold">
                  $9<span className="text-sm font-normal">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />5 Projects
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />
                    10GB Storage
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />
                    Email Support
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />
                    Basic Analytics
                  </li>
                </ul>
                <Button className="w-full mt-6">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary shadow-lg hover:shadow-xl transition-shadow relative">
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2">Most Popular</Badge>
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription>Best for growing teams</CardDescription>
                <div className="text-3xl font-bold">
                  $29<span className="text-sm font-normal">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />
                    Unlimited Projects
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />
                    100GB Storage
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />
                    Priority Support
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />
                    Advanced Analytics
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />
                    Team Collaboration
                  </li>
                </ul>
                <Button className="w-full mt-6">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>For large organizations</CardDescription>
                <div className="text-3xl font-bold">
                  $99<span className="text-sm font-normal">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />
                    Everything in Pro
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />
                    Unlimited Storage
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />
                    24/7 Phone Support
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />
                    Custom Integrations
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />
                    Dedicated Manager
                  </li>
                </ul>
                <Button className="w-full mt-6">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About ReactUI</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We're passionate about making React development faster, easier, and more enjoyable. Our team of
                experienced developers has created a comprehensive toolkit that helps you build beautiful applications
                without the complexity.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Founded in 2023, we've already helped thousands of developers create amazing web applications. Our
                mission is to democratize modern web development and make it accessible to everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">Learn More</Button>
                <Button size="lg" variant="outline">
                  Our Story
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8">
                <div className="h-full w-full rounded-xl bg-background/50 backdrop-blur flex items-center justify-center">
                  <div className="text-center">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
                    <p className="text-muted-foreground">Always pushing the boundaries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto max-w-7xl">
          <Card className="max-w-2xl mx-auto text-center border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Stay Updated</CardTitle>
              <CardDescription>Get the latest updates and news delivered to your inbox</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-muted-foreground">We'd love to hear from you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle>Email</CardTitle>
                <CardDescription>hello@reactui.com</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-green-500" />
                </div>
                <CardTitle>Phone</CardTitle>
                <CardDescription>+1 (555) 123-4567</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-purple-500" />
                </div>
                <CardTitle>Office</CardTitle>
                <CardDescription>San Francisco, CA</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container px-4 py-12 mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500" />
                <span className="text-xl font-bold">ReactUI</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Building the future of React development, one component at a time.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <button className="hover:text-foreground transition-colors">Features</button>
                </li>
                <li>
                  <button className="hover:text-foreground transition-colors">Pricing</button>
                </li>
                <li>
                  <button className="hover:text-foreground transition-colors">Documentation</button>
                </li>
                <li>
                  <button className="hover:text-foreground transition-colors">API</button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <button className="hover:text-foreground transition-colors">About</button>
                </li>
                <li>
                  <button className="hover:text-foreground transition-colors">Blog</button>
                </li>
                <li>
                  <button className="hover:text-foreground transition-colors">Careers</button>
                </li>
                <li>
                  <button className="hover:text-foreground transition-colors">Contact</button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <button className="hover:text-foreground transition-colors">Help Center</button>
                </li>
                <li>
                  <button className="hover:text-foreground transition-colors">Community</button>
                </li>
                <li>
                  <button className="hover:text-foreground transition-colors">Status</button>
                </li>
                <li>
                  <button className="hover:text-foreground transition-colors">Privacy</button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} ReactUI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
