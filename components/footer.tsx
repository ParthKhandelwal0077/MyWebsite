import Link from 'next/link';
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react"

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border py-12 mt-24">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 cosmic-text">Parth Khandelwal</h3>
            <h1 className='text-2xl font-bold'>MORE ENERGY | MORE ADRENALINE | NO BREAKS | NO REST | NO THOUGHTS OUTSIDE THE MISSION | NO DISTRACTIONS | NO OUTSIDERS</h1>
          
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#home" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link></li>
              <li><Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link href="https://github.com/ParthKhandelwal0077" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                <IconBrandGithub size={24} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/in/parth-khandelwal-ab90a8254/" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                <IconBrandLinkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://x.com/Parthkh0077" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                <IconBrandX size={24} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://www.instagram.com/parthkhandelwal01/" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                <IconBrandInstagram size={24} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© {currentYear} Parth Khandelwal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}