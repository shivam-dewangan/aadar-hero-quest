import { useState } from "react";
import { GameCard, GameCardContent, GameCardHeader, GameCardTitle } from "@/components/ui/game-card";
import { GameButton } from "@/components/ui/game-button";
import { Banknote, Key, CreditCard, ArrowDown, CheckCircle, XCircle } from "lucide-react";
import piggyBankImage from "@/assets/piggy-bank-hero.png";

type AccountType = "aadhaar-only" | "dbt-enabled" | null;

const Simulation = () => {
  const [selectedAccount, setSelectedAccount] = useState<AccountType>(null);
  const [showResult, setShowResult] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);

  const handleAccountSelect = (type: AccountType) => {
    setSelectedAccount(type);
    setShowResult(false);
    setAnimationStep(0);
  };

  const startAnimation = () => {
    if (!selectedAccount) return;
    
    setAnimationStep(1);
    setTimeout(() => setAnimationStep(2), 1000);
    setTimeout(() => setAnimationStep(3), 2000);
    setTimeout(() => {
      setShowResult(true);
      setAnimationStep(4);
    }, 3000);
  };

  const resetSimulation = () => {
    setSelectedAccount(null);
    setShowResult(false);
    setAnimationStep(0);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-fun bg-clip-text text-transparent">
          Account Type Simulation
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          See how different account types affect your government benefit transfers. 
          Choose an account type and watch what happens!
        </p>
      </div>

      {/* Account Type Selection */}
      <div className="grid md:grid-cols-2 gap-6">
        <GameCard 
          variant="interactive"
          className={`cursor-pointer transition-all ${
            selectedAccount === "aadhaar-only" ? "ring-4 ring-warning border-warning" : ""
          }`}
          onClick={() => handleAccountSelect("aadhaar-only")}
        >
          <GameCardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-warning/20 rounded-full flex items-center justify-center mb-4">
              <CreditCard className="w-8 h-8 text-warning" />
            </div>
            <GameCardTitle className="text-warning">Aadhaar-Linked Only</GameCardTitle>
          </GameCardHeader>
          <GameCardContent className="text-center">
            <p className="text-muted-foreground">
              Your bank account is linked to Aadhaar but not enabled for Direct Benefit Transfer (DBT).
            </p>
          </GameCardContent>
        </GameCard>

        <GameCard 
          variant="interactive"
          className={`cursor-pointer transition-all ${
            selectedAccount === "dbt-enabled" ? "ring-4 ring-success border-success" : ""
          }`}
          onClick={() => handleAccountSelect("dbt-enabled")}
        >
          <GameCardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mb-4">
              <Key className="w-8 h-8 text-success" />
            </div>
            <GameCardTitle className="text-success">DBT-Enabled Account</GameCardTitle>
          </GameCardHeader>
          <GameCardContent className="text-center">
            <p className="text-muted-foreground">
              Your account is Aadhaar-seeded AND enabled for Direct Benefit Transfer (DBT).
            </p>
          </GameCardContent>
        </GameCard>
      </div>

      {/* Simulation Area */}
      {selectedAccount && (
        <GameCard variant="quiz" className="relative overflow-hidden">
          <GameCardContent className="py-12">
            <div className="text-center space-y-8">
              {/* Piggy Bank */}
              <div className="relative">
                <img 
                  src={piggyBankImage} 
                  alt="Piggy Bank" 
                  className={`w-32 h-32 mx-auto transition-all duration-1000 ${
                    animationStep >= 2 ? "animate-wiggle" : "animate-float"
                  }`} 
                />
                
                {/* Money Animation */}
                {animationStep >= 2 && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                    {selectedAccount === "dbt-enabled" ? (
                      <div className="animate-bounce">
                        <Banknote className="w-8 h-8 text-success animate-sparkle" />
                      </div>
                    ) : (
                      <div className="animate-bounce">
                        <XCircle className="w-8 h-8 text-destructive" />
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Government Transfer Simulation */}
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-4">
                  <div className="bg-primary/20 p-4 rounded-xl">
                    <span className="text-sm font-medium text-primary">Government Scholarship</span>
                    <div className="text-2xl font-bold text-primary">₹5,000</div>
                  </div>
                  
                  {animationStep >= 1 && (
                    <ArrowDown className={`w-8 h-8 text-primary transition-all duration-500 ${
                      animationStep >= 2 ? "animate-bounce" : ""
                    }`} />
                  )}
                  
                  <div className={`p-4 rounded-xl border-2 transition-all duration-1000 ${
                    selectedAccount === "dbt-enabled" 
                      ? "bg-success/20 border-success" 
                      : "bg-warning/20 border-warning"
                  }`}>
                    <span className="text-sm font-medium">Your Account</span>
                    <div className={`text-2xl font-bold ${
                      selectedAccount === "dbt-enabled" ? "text-success" : "text-warning"
                    }`}>
                      {selectedAccount === "dbt-enabled" ? "₹5,000" : "₹0"}
                    </div>
                  </div>
                </div>

                {!showResult && selectedAccount && (
                  <GameButton 
                    variant="hero" 
                    size="lg" 
                    onClick={startAnimation}
                    className="mt-6"
                  >
                    Start Transfer Simulation
                  </GameButton>
                )}
              </div>

              {/* Results */}
              {showResult && (
                <div className={`p-6 rounded-2xl border-2 transition-all duration-500 animate-fade-in ${
                  selectedAccount === "dbt-enabled" 
                    ? "bg-success/10 border-success text-success" 
                    : "bg-warning/10 border-warning text-warning"
                }`}>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    {selectedAccount === "dbt-enabled" ? (
                      <CheckCircle className="w-8 h-8 animate-sparkle" />
                    ) : (
                      <XCircle className="w-8 h-8" />
                    )}
                    <h3 className="text-xl font-bold">
                      {selectedAccount === "dbt-enabled" ? "Transfer Successful!" : "Transfer Failed!"}
                    </h3>
                  </div>
                  
                  <p className="text-sm leading-relaxed">
                    {selectedAccount === "dbt-enabled" 
                      ? "🎉 Your DBT-enabled account received the scholarship money directly! The government can transfer benefits seamlessly to accounts that are properly set up for Direct Benefit Transfer."
                      : "❌ Your Aadhaar-linked account cannot receive direct transfers. Even though your account is linked to Aadhaar, it needs to be specifically enabled for DBT to receive government benefits."
                    }
                  </p>
                </div>
              )}

              {showResult && (
                <div className="flex justify-center space-x-4">
                  <GameButton variant="secondary" onClick={resetSimulation}>
                    Try Again
                  </GameButton>
                  <GameButton variant="success" onClick={() => window.location.href = "/quiz"}>
                    Take Quiz
                  </GameButton>
                </div>
              )}
            </div>
          </GameCardContent>
        </GameCard>
      )}

      {/* Educational Info */}
      <div className="grid md:grid-cols-2 gap-6">
        <GameCard>
          <GameCardHeader>
            <GameCardTitle className="text-warning">Why Aadhaar-Only Fails?</GameCardTitle>
          </GameCardHeader>
          <GameCardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Account is linked but not enabled for DBT</li>
              <li>• Government systems cannot identify it for transfers</li>
              <li>• Benefits get stuck or returned</li>
              <li>• Manual intervention required</li>
            </ul>
          </GameCardContent>
        </GameCard>

        <GameCard>
          <GameCardHeader>
            <GameCardTitle className="text-success">Why DBT Works?</GameCardTitle>
          </GameCardHeader>
          <GameCardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Account is Aadhaar-seeded AND DBT-enabled</li>
              <li>• Government can directly transfer benefits</li>
              <li>• Automatic and instant transfers</li>
              <li>• No delays or manual processing</li>
            </ul>
          </GameCardContent>
        </GameCard>
      </div>
    </div>
  );
};

export default Simulation;