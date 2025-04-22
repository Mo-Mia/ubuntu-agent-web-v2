"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
      
      // Close mobile menu on scroll (better UX)
      if (isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMenuOpen])
  
  // Handle click outside to close mobile menu
  useEffect(() => {
    if (!isMenuOpen) return
    
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const menuButton = document.querySelector('.menu-button')
      const mobileMenu = document.querySelector('.mobile-menu')
      
      if (
        menuButton && 
        mobileMenu && 
        !menuButton.contains(target) && 
        !mobileMenu.contains(target)
      ) {
        setIsMenuOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = (menuItem?: string) => {
    setIsMenuOpen(false)
    
    // Set active menu item for visual feedback
    if (menuItem) {
      setActiveMenuItem(menuItem)
      
      // Reset after a short delay
      setTimeout(() => {
        setActiveMenuItem(null)
      }, 300)
    }
    
    // Close any open dropdowns
    setServicesDropdownOpen(false)
  }

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen)
  }

  return (
    <header
      className="fixed w-full z-50 transition-all duration-300 bg-white shadow-md py-3"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-16 w-64">
              <Image
                src="/ubuntu-agent-simple.svg"
                alt="The Ubuntu Agent Logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 256px, 256px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/ubuntu-giving" className="nav-link">
              Ubuntu Giving
            </Link>
            <div className="relative group">
              <button
                className="nav-link flex items-center"
                onClick={toggleServicesDropdown}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div
                className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ${
                  servicesDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <div className="py-1">
                  <Link
                    href="/services#buyers"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    For Buyers
                  </Link>
                  <Link
                    href="/services#sellers"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    For Sellers
                  </Link>
                  <Link
                    href="/services#areas"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    Areas Served
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/listings" className="nav-link">
              Listings
            </Link>
            <Link href="/resources" className="nav-link">
              Resources
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <Link href="/contact" className="hidden md:block btn-primary">
            Get in Touch
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden menu-button p-2 rounded-md hover:bg-gray-100 transition-colors" 
            onClick={toggleMenu} 
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-black transition-opacity duration-300 z-40 
          ${isMenuOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'}`}
        onClick={() => closeMenu()}
        aria-hidden="true"
      />
      
      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
        className={`mobile-menu md:hidden fixed top-[72px] left-0 right-0 bottom-0 bg-white shadow-md transition-all duration-300 z-50
          ${isMenuOpen 
            ? "translate-x-0 opacity-100" 
            : "translate-x-full opacity-0 pointer-events-none"
          }
        `}
      >
        <div className="container mx-auto px-4 py-6 h-full overflow-y-auto">
          <nav className="flex flex-col space-y-5">
            <Link 
              href="/" 
              className={`nav-link py-3 px-4 rounded-md transition-all ${activeMenuItem === 'home' ? 'bg-amber-50 text-amber-600' : 'hover:bg-gray-50'}`} 
              onClick={() => closeMenu('home')}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`nav-link py-3 px-4 rounded-md transition-all ${activeMenuItem === 'about' ? 'bg-amber-50 text-amber-600' : 'hover:bg-gray-50'}`} 
              onClick={() => closeMenu('about')}
            >
              About
            </Link>
            <Link 
              href="/ubuntu-giving" 
              className={`nav-link py-3 px-4 rounded-md transition-all ${activeMenuItem === 'ubuntu' ? 'bg-amber-50 text-amber-600' : 'hover:bg-gray-50'}`} 
              onClick={() => closeMenu('ubuntu')}
            >
              Ubuntu Giving
            </Link>
            <div className="py-1">
              <button 
                className={`nav-link flex items-center justify-between w-full py-3 px-4 rounded-md ${servicesDropdownOpen ? 'bg-gray-50' : 'hover:bg-gray-50'}`} 
                onClick={toggleServicesDropdown}
                aria-expanded={servicesDropdownOpen}
                aria-controls="services-dropdown"
              >
                <span>Services</span>
                <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${servicesDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              <div 
                id="services-dropdown"
                className={`overflow-hidden transition-all duration-300 ${servicesDropdownOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
              >
                <div className="pl-4 space-y-3 pt-1 pb-2">
                  <Link 
                    href="/services#buyers" 
                    className="nav-link block py-3 px-4 rounded-md hover:bg-gray-50" 
                    onClick={() => closeMenu('buyers')}
                  >
                    For Buyers
                  </Link>
                  <Link 
                    href="/services#sellers" 
                    className="nav-link block py-3 px-4 rounded-md hover:bg-gray-50" 
                    onClick={() => closeMenu('sellers')}
                  >
                    For Sellers
                  </Link>
                  <Link 
                    href="/services#areas" 
                    className="nav-link block py-3 px-4 rounded-md hover:bg-gray-50" 
                    onClick={() => closeMenu('areas')}
                  >
                    Areas Served
                  </Link>
                </div>
              </div>
            </div>
            <Link 
              href="/listings" 
              className={`nav-link py-3 px-4 rounded-md transition-all ${activeMenuItem === 'listings' ? 'bg-amber-50 text-amber-600' : 'hover:bg-gray-50'}`} 
              onClick={() => closeMenu('listings')}
            >
              Listings
            </Link>
            <Link 
              href="/resources" 
              className={`nav-link py-3 px-4 rounded-md transition-all ${activeMenuItem === 'resources' ? 'bg-amber-50 text-amber-600' : 'hover:bg-gray-50'}`} 
              onClick={() => closeMenu('resources')}
            >
              Resources
            </Link>
            <Link 
              href="/contact" 
              className={`nav-link py-3 px-4 rounded-md transition-all ${activeMenuItem === 'contact' ? 'bg-amber-50 text-amber-600' : 'hover:bg-gray-50'}`} 
              onClick={() => closeMenu('contact')}
            >
              Contact
            </Link>
            
            <div className="pt-4 mt-4 border-t border-gray-200">
              <Link 
                href="/contact" 
                className="btn-primary text-center flex items-center justify-center w-full" 
                onClick={() => closeMenu()}
              >
                Get in Touch
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
