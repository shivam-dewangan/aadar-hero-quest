import { GameCard, GameCardContent, GameCardHeader, GameCardTitle } from "@/components/ui/game-card";
import { GameButton } from "@/components/ui/game-button";
import { Award, Star, Trophy, Target, BookOpen, Zap } from "lucide-react";
import achievementBadges from "@/assets/achievement-badges.png";

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
  earnedDate?: string;
  category: "simulation" | "quiz" | "special";
}

const badges: Badge[] = [
  {
    id: "first-simulation",
    name: "First Steps",
    description: "Completed your first account simulation",
    icon: "🎯",
    earned: true,
    earnedDate: "Today",
    category: "simulation"
  },
  {
    id: "dbt-detective", 
    name: "DBT Detective",
    description: "Successfully identified DBT-enabled accounts",
    icon: "🔍", 
    earned: true,
    earnedDate: "Today",
    category: "simulation"
  },
  {
    id: "quiz-master",
    name: "Quiz Master", 
    description: "Scored 100% on the DBT knowledge quiz",
    icon: "🧠",
    earned: false,
    category: "quiz"
  },
  {
    id: "account-guru",
    name: "Account Guru",
    description: "Completed all simulations perfectly",
    icon: "🏆",
    earned: false, 
    category: "simulation"
  },
  {
    id: "learning-streak",
    name: "Learning Streak",
    description: "Learned for 7 days in a row",
    icon: "🔥",
    earned: false,
    category: "special"
  },
  {
    id: "scholarship-smart",
    name: "Scholarship Smart",
    description: "Mastered government benefit concepts",
    icon: "🎓",
    earned: true,
    earnedDate: "Today",
    category: "quiz"
  }
];

const Badges = () => {
  const earnedBadges = badges.filter(badge => badge.earned);
  const upcomingBadges = badges.filter(badge => !badge.earned);

  const getBadgeColor = (category: string) => {
    switch (category) {
      case "simulation": return "border-primary/30 bg-primary/5";
      case "quiz": return "border-fun/30 bg-fun/5";
      case "special": return "border-success/30 bg-success/5";
      default: return "border-muted";
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-fun bg-clip-text text-transparent">
          Achievement Badges
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Earn badges by completing simulations, quizzes, and reaching learning milestones!
        </p>
        
        <div className="flex justify-center space-x-6 text-center">
          <div>
            <div className="text-3xl font-bold text-success">{earnedBadges.length}</div>
            <div className="text-sm text-muted-foreground">Earned</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">{badges.length}</div>
            <div className="text-sm text-muted-foreground">Total</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-fun">{Math.round((earnedBadges.length / badges.length) * 100)}%</div>
            <div className="text-sm text-muted-foreground">Complete</div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-muted rounded-full h-4">
        <div 
          className="bg-gradient-to-r from-success to-primary h-4 rounded-full transition-all duration-500"
          style={{ width: `${(earnedBadges.length / badges.length) * 100}%` }}
        />
      </div>

      {/* Earned Badges */}
      <section>
        <h2 className="text-2xl font-bold text-success mb-6 flex items-center">
          <Trophy className="w-6 h-6 mr-2" />
          Your Badges ({earnedBadges.length})
        </h2>
        
        {earnedBadges.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {earnedBadges.map((badge) => (
              <GameCard 
                key={badge.id} 
                variant="achievement"
                className={`relative overflow-hidden ${getBadgeColor(badge.category)}`}
              >
                <GameCardContent className="p-6 text-center">
                  <div className="space-y-4">
                    <div className="text-5xl animate-sparkle">{badge.icon}</div>
                    <div>
                      <h3 className="font-bold text-lg text-success">{badge.name}</h3>
                      <p className="text-sm text-muted-foreground">{badge.description}</p>
                      {badge.earnedDate && (
                        <p className="text-xs text-success/70 mt-2">
                          Earned {badge.earnedDate}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="absolute top-2 right-2">
                    <Award className="w-5 h-5 text-success" />
                  </div>
                </GameCardContent>
              </GameCard>
            ))}
          </div>
        ) : (
          <GameCard>
            <GameCardContent className="text-center py-12">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-muted-foreground mb-2">No badges yet!</h3>
              <p className="text-muted-foreground mb-6">
                Complete simulations and quizzes to earn your first badge.
              </p>
              <GameButton variant="primary" onClick={() => window.location.href = "/simulation"}>
                Start Learning
              </GameButton>
            </GameCardContent>
          </GameCard>
        )}
      </section>

      {/* Upcoming Badges */}
      {upcomingBadges.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-muted-foreground mb-6 flex items-center">
            <Target className="w-6 h-6 mr-2" />
            Upcoming Badges ({upcomingBadges.length})
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingBadges.map((badge) => (
              <GameCard 
                key={badge.id}
                className={`relative overflow-hidden opacity-60 hover:opacity-80 transition-opacity ${getBadgeColor(badge.category)}`}
              >
                <GameCardContent className="p-6 text-center">
                  <div className="space-y-4">
                    <div className="text-5xl grayscale">{badge.icon}</div>
                    <div>
                      <h3 className="font-bold text-lg">{badge.name}</h3>
                      <p className="text-sm text-muted-foreground">{badge.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute top-2 right-2">
                    <div className="w-5 h-5 border-2 border-muted-foreground rounded-full" />
                  </div>
                </GameCardContent>
              </GameCard>
            ))}
          </div>
        </section>
      )}

      {/* Achievement Gallery */}
      <GameCard>
        <GameCardHeader>
          <GameCardTitle className="flex items-center">
            <Star className="w-6 h-6 mr-2 text-fun" />
            Achievement Gallery
          </GameCardTitle>
        </GameCardHeader>
        <GameCardContent>
          <div className="text-center">
            <img 
              src={achievementBadges} 
              alt="Achievement Badges Collection" 
              className="w-full max-w-md mx-auto rounded-xl shadow-lg"
            />
            <p className="text-sm text-muted-foreground mt-4">
              Collect all badges to become a DBT expert!
            </p>
          </div>
        </GameCardContent>
      </GameCard>

      {/* Quick Actions */}
      <div className="flex justify-center space-x-4">
        <GameButton variant="primary" onClick={() => window.location.href = "/simulation"}>
          <Zap className="w-4 h-4 mr-2" />
          Try Simulation
        </GameButton>
        <GameButton variant="secondary" onClick={() => window.location.href = "/quiz"}>
          <BookOpen className="w-4 h-4 mr-2" />
          Take Quiz
        </GameButton>
      </div>
    </div>
  );
};

export default Badges;