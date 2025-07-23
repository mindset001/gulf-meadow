import Link from "next/link";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-10">
        <Link href="/" className="flex items-center space-x-2">
          <span className="inline-block font-bold text-xl text-primary ">
            Gulf-Meadow
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/"
            className="transition-colors hover:text-primary text-gray-900"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="transition-colors hover:text-primary text-gray-900"
          >
            About
          </Link>
          <Link
            href="/services"
            className="transition-colors hover:text-primary text-gray-900"
          >
            Services
          </Link>
          <Link
            href="/gallary"
            className="transition-colors hover:text-primary text-gray-900"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-primary text-gray-900"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" asChild>
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col space-y-4 mt-8">
              <Link
                href="/"
                className="transition-colors hover:text-primary text-gray-900"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="transition-colors hover:text-primary text-gray-900"
              >
                About
              </Link>
              <Link
                href="/services"
                className="transition-colors hover:text-primary text-gray-900"
              >
                Services
              </Link>
              <Link
                href="/gallery"
                className="transition-colors hover:text-primary text-gray-900"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="transition-colors hover:text-primary text-gray-900"
              >
                Contact
              </Link>
              <Button variant="outline" asChild className="mt-4">
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}