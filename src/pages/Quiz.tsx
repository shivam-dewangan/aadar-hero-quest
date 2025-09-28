import { useState } from "react";
import { GameCard, GameCardContent, GameCardHeader, GameCardTitle } from "@/components/ui/game-card";
import { GameButton } from "@/components/ui/game-button";
import { CheckCircle, XCircle, Award, RotateCcw } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What happens when government sends scholarship money to an Aadhaar-linked only account?",
    options: [
      "Money is received instantly",
      "Money transfer fails or gets stuck",
      "Money is doubled automatically",
      "Account gets upgraded to DBT"
    ],
    correctAnswer: 1,
    explanation: "Aadhaar-linked accounts cannot receive direct government transfers. The account needs to be DBT-enabled for successful transfers."
  },
  {
    id: 2,
    question: "Which type of account can receive government benefits directly?",
    options: [
      "Only Aadhaar-linked account",
      "Any bank account",
      "DBT-enabled Aadhaar-seeded account",
      "Cash-only transactions"
    ],
    correctAnswer: 2,
    explanation: "DBT-enabled Aadhaar-seeded accounts are specifically set up to receive direct government benefit transfers."
  },
  {
    id: 3,
    question: "True or False: All Aadhaar-linked accounts automatically receive government benefits.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False! Being Aadhaar-linked is not enough. The account must also be enabled for Direct Benefit Transfer (DBT)."
  },
  {
    id: 4,
    question: "What does DBT stand for?",
    options: [
      "Digital Banking Transfer",
      "Direct Benefit Transfer",
      "Data Bank Technology",
      "Digital Benefit Technology"
    ],
    correctAnswer: 1,
    explanation: "DBT stands for Direct Benefit Transfer - a system that allows government to transfer benefits directly to citizens' bank accounts."
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    setShowResult(true);
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(answers[currentQuestion + 1]);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers(new Array(questions.length).fill(null));
    setQuizCompleted(false);
  };

  const currentQ = questions[currentQuestion];
  const isCorrect = selectedAnswer === currentQ.correctAnswer;

  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100);
    const getBadge = () => {
      if (percentage >= 90) return { name: "DBT Master", icon: "🏆", color: "text-success" };
      if (percentage >= 70) return { name: "Account Expert", icon: "🥈", color: "text-primary" };
      if (percentage >= 50) return { name: "Learning Scholar", icon: "🥉", color: "text-warning" };
      return { name: "Keep Learning", icon: "📚", color: "text-muted-foreground" };
    };

    const badge = getBadge();

    return (
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-fun bg-clip-text text-transparent">
            Quiz Complete!
          </h1>
        </div>

        <GameCard variant="achievement" className="text-center">
          <GameCardContent className="py-12">
            <div className="space-y-6">
              <div className="text-6xl animate-sparkle">{badge.icon}</div>
              <div>
                <h2 className={`text-3xl font-bold ${badge.color} mb-2`}>
                  {badge.name}
                </h2>
                <p className="text-xl text-muted-foreground">
                  You scored {score} out of {questions.length} questions
                </p>
                <div className="text-4xl font-bold text-primary mt-4">
                  {percentage}%
                </div>
              </div>

              {percentage >= 70 && (
                <div className="bg-success/10 border border-success/20 rounded-xl p-4">
                  <div className="flex items-center justify-center space-x-2 text-success">
                    <Award className="w-6 h-6" />
                    <span className="font-semibold">Badge Earned!</span>
                  </div>
                  <p className="text-sm text-success/80 mt-2">
                    Great job! You understand DBT concepts well.
                  </p>
                </div>
              )}

              <div className="flex justify-center space-x-4">
                <GameButton variant="secondary" onClick={resetQuiz}>
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Try Again
                </GameButton>
                <GameButton variant="success" onClick={() => window.location.href = "/badges"}>
                  View Badges
                </GameButton>
              </div>
            </div>
          </GameCardContent>
        </GameCard>

        {/* Review Answers */}
        <GameCard>
          <GameCardHeader>
            <GameCardTitle>Review Your Answers</GameCardTitle>
          </GameCardHeader>
          <GameCardContent>
            <div className="space-y-4">
              {questions.map((q, index) => {
                const userAnswer = answers[index];
                const isUserCorrect = userAnswer === q.correctAnswer;
                return (
                  <div key={q.id} className="border rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      {isUserCorrect ? (
                        <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                      )}
                      <div>
                        <p className="font-medium text-sm">{q.question}</p>
                        <p className={`text-sm ${isUserCorrect ? 'text-success' : 'text-destructive'}`}>
                          Your answer: {userAnswer !== null ? q.options[userAnswer] : 'Not answered'}
                        </p>
                        {!isUserCorrect && (
                          <p className="text-sm text-success">
                            Correct: {q.options[q.correctAnswer]}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </GameCardContent>
        </GameCard>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-fun bg-clip-text text-transparent">
          DBT Knowledge Quiz
        </h1>
        <div className="flex items-center justify-center space-x-4">
          <div className="bg-primary/20 px-4 py-2 rounded-full">
            <span className="text-sm font-medium text-primary">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          <div className="bg-success/20 px-4 py-2 rounded-full">
            <span className="text-sm font-medium text-success">
              Score: {score}
            </span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-muted rounded-full h-3">
        <div 
          className="bg-gradient-to-r from-primary to-fun h-3 rounded-full transition-all duration-500"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        />
      </div>

      <GameCard variant="quiz">
        <GameCardHeader>
          <GameCardTitle className="text-center text-2xl">
            {currentQ.question}
          </GameCardTitle>
        </GameCardHeader>
        <GameCardContent className="space-y-4">
          <div className="grid gap-3">
            {currentQ.options.map((option, index) => (
              <GameButton
                key={index}
                variant={selectedAnswer === index ? "primary" : "ghost"}
                className="justify-start text-left h-auto py-4 px-6"
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
              >
                <span className="font-medium mr-3">
                  {String.fromCharCode(65 + index)}.
                </span>
                {option}
              </GameButton>
            ))}
          </div>

          {showResult && (
            <div className={`p-4 rounded-xl border-2 transition-all duration-500 ${
              isCorrect 
                ? "bg-success/10 border-success text-success" 
                : "bg-destructive/10 border-destructive text-destructive"
            }`}>
              <div className="flex items-center space-x-2 mb-2">
                {isCorrect ? (
                  <CheckCircle className="w-6 h-6" />
                ) : (
                  <XCircle className="w-6 h-6" />
                )}
                <span className="font-bold">
                  {isCorrect ? "Correct!" : "Incorrect!"}
                </span>
              </div>
              <p className="text-sm">{currentQ.explanation}</p>
            </div>
          )}

          <div className="flex justify-center">
            {!showResult ? (
              <GameButton 
                variant="primary" 
                size="lg" 
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
              >
                Submit Answer
              </GameButton>
            ) : (
              <GameButton 
                variant="secondary" 
                size="lg" 
                onClick={handleNextQuestion}
              >
                {currentQuestion < questions.length - 1 ? "Next Question" : "Finish Quiz"}
              </GameButton>
            )}
          </div>
        </GameCardContent>
      </GameCard>
    </div>
  );
};

export default Quiz;