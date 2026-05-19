// src/components/Navbar.tsx
import Link from 'next/link'

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="#home"
          className="text-lg font-bold tracking-tight text-white transition hover:text-sky-400"
        >
          Jakob Heeley
        </Link>

        <div className="flex items-center gap-2 md:gap-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
