import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu, X, Trophy } from "lucide-react";
import { useState } from "react";
import logo from "@assets/a557c1a3-51a1-46eb-9be2-6c9114cefba7_1765443335512.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/register", label: "Register" },
    { href: "/login", label: "Login" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-full border border-primary/50 group-hover:border-primary transition-colors">
              <img src={logo} alt="IPEORG" className="w-full h-full object-cover" />
            </div>
            <span className="font-orbitron font-bold text-xl tracking-wider text-white group-hover:text-primary transition-colors">
              IPEORG
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className={`relative font-rajdhani font-semibold text-lg uppercase tracking-wide transition-colors hover:text-primary ${
                location === link.href ? "text-primary" : "text-muted-foreground"
              }`}>
                {link.label}
                {location === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary shadow-[0_0_10px_var(--primary)]"
                  />
                )}
              </a>
            </Link>
          ))}
          <Link href="/register">
            <a className="bg-primary/10 border border-primary/50 hover:bg-primary/20 hover:border-primary text-primary px-6 py-2 rounded-full font-orbitron font-bold text-sm uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(0,255,255,0.2)] hover:shadow-[0_0_25px_rgba(0,255,255,0.4)]">
              Join Tournament
            </a>
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-black/95 border-b border-white/10 p-4 flex flex-col gap-4"
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a 
                className={`block py-2 font-orbitron text-center ${
                  location === link.href ? "text-primary" : "text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}