import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { servicesData } from "@/data/servicesData";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/244935348327", "_blank");
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Vitaleevo" className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/") ? "text-primary" : "text-muted-foreground"
              )}
            >
              Home
            </Link>
            
            <Link
              to="/sobre"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/sobre") ? "text-primary" : "text-muted-foreground"
              )}
            >
              Sobre
            </Link>

            {/* Services Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">
                    Serviços
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                      {servicesData.map((category) => {
                        const Icon = category.icon;
                        return (
                          <li key={category.slug}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={`/servicos/${category.slug}`}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="flex items-center gap-2">
                                  <Icon className="h-4 w-4 text-primary" />
                                  <div className="text-sm font-medium leading-none">
                                    {category.category}
                                  </div>
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {category.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        );
                      })}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              to="/portfolio"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/portfolio") ? "text-primary" : "text-muted-foreground"
              )}
            >
              Portfolio
            </Link>

            <Link
              to="/blog"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/blog") ? "text-primary" : "text-muted-foreground"
              )}
            >
              Blog
            </Link>

            <Link
              to="/contactos"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/contactos") ? "text-primary" : "text-muted-foreground"
              )}
            >
              Contactos
            </Link>

            <Button onClick={handleWhatsAppClick} size="sm">
              Falar no WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={cn(
                  "text-sm font-medium",
                  isActive("/") ? "text-primary" : "text-foreground"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              <Link
                to="/sobre"
                className={cn(
                  "text-sm font-medium",
                  isActive("/sobre") ? "text-primary" : "text-foreground"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre
              </Link>

              <Link
                to="/servicos"
                className={cn(
                  "text-sm font-medium",
                  isActive("/servicos") ? "text-primary" : "text-foreground"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Serviços
              </Link>

              <Link
                to="/portfolio"
                className={cn(
                  "text-sm font-medium",
                  isActive("/portfolio") ? "text-primary" : "text-foreground"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Portfolio
              </Link>

              <Link
                to="/blog"
                className={cn(
                  "text-sm font-medium",
                  isActive("/blog") ? "text-primary" : "text-foreground"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>

              <Link
                to="/contactos"
                className={cn(
                  "text-sm font-medium",
                  isActive("/contactos") ? "text-primary" : "text-foreground"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contactos
              </Link>

              <Button onClick={handleWhatsAppClick} size="sm" className="w-full">
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
