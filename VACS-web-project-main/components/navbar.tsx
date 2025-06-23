"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import Menu from "lucide-react/dist/esm/icons/menu"
import X from "lucide-react/dist/esm/icons/x"
import ChevronDown from "lucide-react/dist/esm/icons/chevron-down"
import Send from "lucide-react/dist/esm/icons/send"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinkClasses = "text-white uppercase tracking-[.05em] text-sm font-medium"
  const activeLinkClasses = "bg-white/20 rounded-full"

  return (
    <header
      className={cn(
        "sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-[--clr-primary]",
        isScrolled ? "shadow-[0_2px_6px_rgba(0,0,0,.12)]" : "",
      )}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 text-white">
          {/* <Send size={24} /> */}
          <Image 
            src='/vacslogo.png'
            width={35}
            height={35}
          />
          {/* </Image> */}
          <br></br>
          {/* <br /> */}
          <span className="text-xl font-bold">DREAM SCHOOLS</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={cn(navLinkClasses, "px-4 py-2", pathname === "/" && activeLinkClasses)}
          >
            Home
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                navLinkClasses,
                "flex items-center gap-1 px-4 py-2",
                pathname.includes("/about") && activeLinkClasses,
              )}
            >
              About Us <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[--clr-primary] text-white border-none mt-2">
              <DropdownMenuItem asChild>
                <Link href="/about/mission" className={navLinkClasses}>
                  Our Mission
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/about/board" className={navLinkClasses}>
                  Board of Directors
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {["Services", "Portfolios", "Bids"].map((item) => {
            const href = `/${item.toLowerCase()}`
            return (
              <Link key={item} href={href} className={cn(navLinkClasses, "px-4 py-2", pathname === href && activeLinkClasses)}>
                {item}
              </Link>
            )
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[--clr-primary]">
          <nav className="container mx-auto flex flex-col gap-4 py-4">
            <Link href="/" className={cn(navLinkClasses)} onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            {/* Add mobile dropdown or links for About Us */}
            <Link href="/about/mission" className={cn(navLinkClasses)} onClick={() => setIsMenuOpen(false)}>
              Our Mission
            </Link>
            <Link href="/about/board" className={cn(navLinkClasses)} onClick={() => setIsMenuOpen(false)}>
              Board of Directors
            </Link>
            {["Services", "Portfolios", "Bids"].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className={cn(navLinkClasses)} onClick={() => setIsMenuOpen(false)}>
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
