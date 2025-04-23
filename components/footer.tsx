import Link from 'next/link';
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border py-12 mt-24">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 cosmic-text">Portfolio</h3>
            <p className="text-muted-foreground">
              Creative web developer crafting unique digital experiences.
            </p>
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
              <Link href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                <GithubIcon size={24} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon size={24} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                <TwitterIcon size={24} />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}