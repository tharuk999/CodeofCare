import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Nature', to: '/nature' },
  { label: 'Self', to: '/self' },
  { label: 'Community', to: '/community' },
  { label: 'Tech', to: '/tech' },
  { label: 'Economy', to: '/economy' },
];

export default function Nav() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="flex justify-between items-center px-6 md:px-12 py-5 max-w-[1440px] mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="font-headline text-xl md:text-2xl italic font-light tracking-tight text-primary"
        >
          Future Code of Care
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`font-headline text-base lg:text-lg tracking-tight transition-colors duration-300 ${
                  active
                    ? 'text-secondary font-medium border-b-2 border-secondary pb-0.5'
                    : 'text-primary/70 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70 transition-opacity hidden md:block">
            account_circle
          </span>
          <button
            className="md:hidden p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-primary">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface-container-low border-t border-outline-variant/10 px-6 py-6 space-y-4">
          {navLinks.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`block font-headline text-lg transition-colors ${
                  active ? 'text-secondary' : 'text-primary/70'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
