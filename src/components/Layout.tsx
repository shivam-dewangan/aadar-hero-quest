import { ReactNode } from "react";
import { useLocation, Link } from "react-router-dom";
import { GameButton } from "@/components/ui/game-button";
import { Home, Play, HelpCircle, Award } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Simulation", href: "/simulation", icon: Play },
    { name: "Quiz", href: "/quiz", icon: HelpCircle },
    { name: "Badges", href: "/badges", icon: Award },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-fun/10">
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-fun rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">₹</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-fun bg-clip-text text-transparent">
                DBT Learn
              </span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link key={item.name} to={item.href}>
                    <GameButton
                      variant={isActive ? "primary" : "ghost"}
                      className="flex items-center space-x-2"
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </GameButton>
                  </Link>
                );
              })}
            </div>

            <div className="flex md:hidden">
              <GameButton variant="ghost" size="icon">
                <Home className="w-5 h-5" />
              </GameButton>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Mobile Navigation */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-background/90 backdrop-blur-lg border-t border-border/50">
        <div className="flex items-center justify-around py-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            return (
              <Link key={item.name} to={item.href} className="flex flex-col items-center p-2">
                <GameButton
                  variant={isActive ? "primary" : "ghost"}
                  size="icon"
                  className="mb-1"
                >
                  <Icon className="w-5 h-5" />
                </GameButton>
                <span className={`text-xs ${isActive ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Layout;