import { Link, useLocation } from 'react-router-dom';
import { Car, Settings, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
            <Car className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight">
            011 <span className="text-primary">Autosalon</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          <Link to="/">
            <Button
              variant={isActive('/') ? 'secondary' : 'ghost'}
              size="sm"
              className={cn(
                'font-medium',
                isActive('/') && 'bg-secondary text-foreground'
              )}
            >
              <Car className="mr-2 h-4 w-4" />
              Elanlar
            </Button>
          </Link>
          <Link to="/admin">
            <Button
              variant={isActive('/admin') ? 'secondary' : 'ghost'}
              size="sm"
              className={cn(
                'font-medium',
                isActive('/admin') && 'bg-secondary text-foreground'
              )}
            >
              <Settings className="mr-2 h-4 w-4" />
              İdarəetmə
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border/50 bg-background p-4 md:hidden">
          <nav className="flex flex-col gap-2">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <Button
                variant={isActive('/') ? 'secondary' : 'ghost'}
                className="w-full justify-start"
              >
                <Car className="mr-2 h-4 w-4" />
                Elanlar
              </Button>
            </Link>
            <Link to="/admin" onClick={() => setMobileMenuOpen(false)}>
              <Button
                variant={isActive('/admin') ? 'secondary' : 'ghost'}
                className="w-full justify-start"
              >
                <Settings className="mr-2 h-4 w-4" />
                İdarəetmə
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
