'use client'
import Link from 'next/link';
import { 
  SignInButton,
  SignUpButton,
  UserButton,
  SignedOut,
  SignedIn,
  useAuth
} from '@clerk/nextjs';
import {useState, useEffect } from 'react';
import { BookOpenCheck, BookText, X } from 'lucide-react';

export function Navbar() {
  const { userId } = useAuth();

  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  const [ isScrolled, setIsScrolled ] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 

  return (
    <header
   className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
    ${isScrolled ? 'bg-gray-900/80 backdrop-blur-sm' : 'bg-transparent'}`}> 
    <nav className="container mx-auto px-4 sm:px-8 py-4 sm:py-6">
      <div className="flex flex-wrap justify-between items-center
      max-w-6xl mx-auto">
        <div className="flex items-center">
          <Link href={'/'} className='flex items-center space-x-2'>
          <BookOpenCheck
          className='w-8 h-8 text-blue-400'/>
          <h1 className="text-2xl font-bold text-white">AI Power</h1>
          </Link>
        </div>
        <button className="sm:hidden text-white focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <X className='w-6 h-6' />
          ): (<BookText className='w-6 h-6'/>)}
        </button>
          <div className={`w-full sm:w-auto ${isMenuOpen ? 'block' : 'hidden'} sm:block sm:mt-0 mt-4`}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8">
                 {['Fejlesztések', 'Pricing', 'Dokumentáció'].map((i)=>(
                  <Link key={i} href={`/${i.toLowerCase()}`}
                  className='text-gray-300 hover:text-white transition-colors py-2 sm:py-0 relative group'>
                      {i}
                      <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </Link>
                 ))}  
                 {userId && (
                <Link
                  href="/generate"
                  className="text-gray-300 hover:text-white transition-colors py-2 sm:py-0 relative group"
                >
                  Vezéréőpult
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </Link>
              )} 
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="text-gray-300 hover:text-white transition-colors mt-2 sm:mt-0">
                  Bejelentkezés
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors mt-2 sm:mt-0">
                    Regisztráció
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-10 h-10",
                    },
                  }}
                />
              </SignedIn>
            </div>
          </div>
      </div>
    </nav>
  </header>
  )

}


