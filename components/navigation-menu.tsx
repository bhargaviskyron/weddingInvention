"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navigationItems = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "Our Story",
    href: "#story",
  },
  {
    title: "Event Details",
    href: "#details",
  },
  {
    title: "Gallery",
    href: "#gallery",
  },
  {
    title: "RSVP",
    href: "#rsvp",
  },
]

export function MainNav() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="container flex h-20 items-center">
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex mx-auto">
          <NavigationMenuList className="gap-8">
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink 
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent",
                      "text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400",
                      "hover:from-pink-400 hover:via-purple-400 hover:to-indigo-500",
                      "transition-all duration-300 font-semibold text-lg",
                      "hover:scale-110"
                    )}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden absolute right-4">
            <Button variant="ghost" size="icon" className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block px-2 py-2 text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 hover:from-pink-400 hover:via-purple-400 hover:to-indigo-500 transition-all duration-300 font-semibold hover:scale-105"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
} 