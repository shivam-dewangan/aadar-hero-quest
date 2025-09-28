import { Link } from "react-router-dom";
import { GameCard, GameCardContent, GameCardHeader, GameCardTitle } from "@/components/ui/game-card";
import { GameButton } from "@/components/ui/game-button";
import { Play, HelpCircle, Award, Sparkles, TrendingUp, Users } from "lucide-react";
import piggyBankImage from "@/assets/piggy-bank-hero.png";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-fun to-secondary bg-clip-text text-transparent leading-tight">
            Know Your Account,
            <br />
            Get Your Benefits!
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Learn the difference between Aadhaar-linked and DBT-enabled accounts through fun, 
            interactive simulations and quizzes. Master government benefit transfers!
          </p>
        </div>

        {/* Animated Piggy Bank Hero */}
        <div className="relative">
          <div className="bg-gradient-to-br from-primary/10 via-fun/10 to-secondary/10 rounded-3xl p-12">
            <img 
              src={piggyBankImage} 
              alt="Learning with Piggy Bank" 
              className="w-48 h-48 mx-auto animate-float drop-shadow-2xl"
            />
            
            {/* Floating Elements */}
            <div className="absolute top-8 left-8 animate-sparkle">
              <div className="w-6 h-6 bg-success rounded-full opacity-70"></div>
            </div>
            <div className="absolute top-16 right-12 animate-sparkle delay-300">
              <div className="w-4 h-4 bg-warning rounded-full opacity-60"></div>
            </div>
            <div className="absolute bottom-12 left-16 animate-sparkle delay-700">
              <div className="w-5 h-5 bg-fun rounded-full opacity-50"></div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link to="/simulation">
            <GameButton variant="hero" size="xl" className="w-full sm:w-auto">
              <Play className="w-6 h-6 mr-2" />
              Try Simulation
            </GameButton>
          </Link>
          <Link to="/quiz">
            <GameButton variant="fun" size="xl" className="w-full sm:w-auto">
              <HelpCircle className="w-6 h-6 mr-2" />
              Take Quiz
            </GameButton>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8">
        <GameCard variant="interactive">
          <GameCardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <Play className="w-8 h-8 text-primary" />
            </div>
            <GameCardTitle>Interactive Simulations</GameCardTitle>
          </GameCardHeader>
          <GameCardContent className="text-center">
            <p className="text-muted-foreground mb-4">
              See exactly what happens when government sends money to different account types. 
              Drag, drop, and watch the magic!
            </p>
            <Link to="/simulation">
              <GameButton variant="primary" className="w-full">
                Start Simulation
              </GameButton>
            </Link>
          </GameCardContent>
        </GameCard>

        <GameCard variant="quiz">
          <GameCardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-fun/20 rounded-full flex items-center justify-center mb-4">
              <HelpCircle className="w-8 h-8 text-fun" />
            </div>
            <GameCardTitle>Knowledge Quiz</GameCardTitle>
          </GameCardHeader>
          <GameCardContent className="text-center">
            <p className="text-muted-foreground mb-4">
              Test your understanding with interactive quizzes. Get instant feedback 
              and earn badges for correct answers!
            </p>
            <Link to="/quiz">
              <GameButton variant="fun" className="w-full">
                Take Quiz
              </GameButton>
            </Link>
          </GameCardContent>
        </GameCard>

        <GameCard variant="achievement">
          <GameCardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-success" />
            </div>
            <GameCardTitle>Earn Badges</GameCardTitle>
          </GameCardHeader>
          <GameCardContent className="text-center">
            <p className="text-muted-foreground mb-4">
              Collect achievement badges as you learn. Become a DBT expert 
              and show off your knowledge!
            </p>
            <Link to="/badges">
              <GameButton variant="success" className="w-full">
                View Badges
              </GameButton>
            </Link>
          </GameCardContent>
        </GameCard>
      </section>

      {/* Learning Path */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Your Learning Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow our step-by-step path to master DBT concepts and become financially smart!
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="font-bold text-lg">Learn Basics</h3>
            <p className="text-sm text-muted-foreground">
              Understand the difference between account types
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-fun/20 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-fun">2</span>
            </div>
            <h3 className="font-bold text-lg">Try Simulation</h3>
            <p className="text-sm text-muted-foreground">
              See live demonstrations of money transfers
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-secondary">3</span>
            </div>
            <h3 className="font-bold text-lg">Take Quiz</h3>
            <p className="text-sm text-muted-foreground">
              Test your knowledge with interactive questions
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-success">4</span>
            </div>
            <h3 className="font-bold text-lg">Earn Badges</h3>
            <p className="text-sm text-muted-foreground">
              Collect achievements and become an expert
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-primary/5 to-fun/5 rounded-3xl p-8">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-primary">Why Learn About DBT?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-2">💰</div>
              <div className="text-2xl font-bold text-success">₹2.3 Lakh Crore</div>
              <p className="text-sm text-muted-foreground">Transferred via DBT in 2023</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-2">🎓</div>
              <div className="text-2xl font-bold text-primary">40+ Schemes</div>
              <p className="text-sm text-muted-foreground">Government benefits available</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-2">⚡</div>
              <div className="text-2xl font-bold text-fun">Instant</div>
              <p className="text-sm text-muted-foreground">Money transfer with DBT accounts</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6 py-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">Ready to Become DBT Smart?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of students learning about government benefits and financial literacy!
          </p>
        </div>
        
        <div className="flex justify-center">
          <Link to="/simulation">
            <GameButton variant="hero" size="xl" className="animate-bounce-gentle">
              <Sparkles className="w-6 h-6 mr-2" />
              Start Learning Now
            </GameButton>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
