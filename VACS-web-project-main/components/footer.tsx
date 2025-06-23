"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Facebook from "lucide-react/dist/esm/icons/facebook"
import Twitter from "lucide-react/dist/esm/icons/twitter"
import Instagram from "lucide-react/dist/esm/icons/instagram"
import Linkedin from "lucide-react/dist/esm/icons/linkedin"

const SocialIcon = ({ href, icon: Icon }) => (
  <a
    href={href}
    className="text-white transition-transform hover:scale-110 hover:[filter:drop-shadow(0_0_6px_#dc824faa)]"
    aria-label={Icon.displayName}
  >
    <Icon size={40} fill="white" strokeWidth={0} />
  </a>
)

export default function Footer() {
  return (
    <footer className="bg-[--clr-primary] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold uppercase mb-4">Dream Schools</h3>
            <p className="text-sm text-gray-300 mb-6">
              Building affordable, sustainable, and high-quality facilities for charter schools across the country.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="#" icon={Facebook} />
              <SocialIcon href="#" icon={Twitter} />
              <SocialIcon href="#" icon={Instagram} />
              <SocialIcon href="#" icon={Linkedin} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-[--clr-accent]">Home</Link></li>
              <li><Link href="/about" className="hover:text-[--clr-accent]">About Us</Link></li>
              <li><Link href="/services" className="hover:text-[--clr-accent]">Services</Link></li>
              <li><Link href="/portfolios" className="hover:text-[--clr-accent]">Portfolios</Link></li>
              <li><Link href="/bids" className="hover:text-[--clr-accent]">Bids</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold uppercase mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>(717)-666-7099</li>
              <li>info@dreamschoolsinc.org</li>
              <li>1530 Westerly Pkwy, State College, PA 16801</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold uppercase mb-4">Newsletter</h3>
            <p className="text-sm text-gray-300 mb-4">Stay updated with our latest news and projects.</p>
            <div className="flex">
              <Input
                placeholder="Your email"
                className="bg-white text-black rounded-full rounded-r-none border-none px-4 py-2"
              />
              <Button
                type="submit"
                className="bg-[--clr-accent] text-white font-bold uppercase rounded-full rounded-l-none px-6 hover:bg-orange-600"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-500 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dream Schools, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
