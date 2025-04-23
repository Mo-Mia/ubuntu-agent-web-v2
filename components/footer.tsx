import React from 'react';
import Link from 'next/link';
import { ContactDetails } from './ContactDetails';
import { ProfileImage } from './ui/ProfileImage';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <ProfileImage size="sm" className="mr-3" />
              <h3 className="text-xl font-semibold">The Ubuntu Agent</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Real estate with real impact, guided by the Ubuntu philosophy.
            </p>
            <ContactDetails 
              variant="vertical" 
              className="text-gray-300" 
            />
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-amber-400 transition-colors">
                  About Gary
                </Link>
              </li>
              <li>
                <Link href="/ubuntu-giving" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Ubuntu Giving Programme
                </Link>
              </li>
              <li>
                <Link href="/listings" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Service Areas</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Sandton</li>
              <li className="text-gray-300">Fourways</li>
              <li className="text-gray-300">Rosebank</li>
              <li className="text-gray-300">Midrand</li>
              <li className="text-gray-300">Bryanston</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} The Ubuntu Agent. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Gary Berkowitz | Powered by eXp South Africa</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
