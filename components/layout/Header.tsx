'use client'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'

const navLinks = [
  { label: 'Produse', href: '#products' },
  { label: 'Soluții', href: '#solutions' },
  { label: 'Tarife', href: '#pricing' },
  { label: 'Despre', href: '#about' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#0a0e1a]/90 backdrop-blur-md border-b border-white/8 shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-bold text-indigo-400 tracking-tight">
              FinCredit
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="primary" size="sm" onClick={() => window.dispatchEvent(new Event('openApplyModal'))}>
              Începe Acum
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                'block w-6 h-0.5 bg-current transition-all duration-200',
                menuOpen && 'rotate-45 translate-y-2'
              )}
            />
            <span
              className={cn(
                'block w-6 h-0.5 bg-current transition-all duration-200',
                menuOpen && 'opacity-0'
              )}
            />
            <span
              className={cn(
                'block w-6 h-0.5 bg-current transition-all duration-200',
                menuOpen && '-rotate-45 -translate-y-2'
              )}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/8 py-4 flex flex-col gap-4 bg-[#0a0e1a]/95 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors px-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2 border-t border-white/8">
              <Button variant="primary" size="sm" className="justify-center" onClick={() => { setMenuOpen(false); window.dispatchEvent(new Event('openApplyModal')) }}>
                Începe Acum
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
