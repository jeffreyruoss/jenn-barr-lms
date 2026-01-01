import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, ChevronRight, RotateCcw } from "lucide-react";
import { Button } from "./Button";
import type { QuizQuestion } from "../../data/lessonContent";

interface QuizProps {
  questions: QuizQuestion[];
}

export function Quiz({ questions }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null)
  );

  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;

  const handleSelectAnswer = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);

    if (selectedAnswer === question.correctAnswer) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setIsComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setIsComplete(false);
    setAnswers(new Array(questions.length).fill(null));
  };

  if (isComplete) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-8 shadow-lg text-center"
      >
        <div
          className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 ${
            percentage >= 75 ? "bg-green-100" : "bg-yellow-100"
          }`}
        >
          <span
            className={`text-3xl font-bold ${
              percentage >= 75 ? "text-green-600" : "text-yellow-600"
            }`}
          >
            {percentage}%
          </span>
        </div>
        <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">
          {percentage >= 75 ? "Great Job!" : "Keep Learning!"}
        </h3>
        <p className="text-charcoal/70 mb-6">
          You got {score} out of {questions.length} questions correct.
        </p>
        {percentage < 75 && (
          <p className="text-sm text-charcoal/60 mb-6">
            Review the lesson content and try again to improve your score.
          </p>
        )}
        <Button variant="primary" onClick={handleRestart}>
          <RotateCcw className="w-4 h-4 mr-2" />
          Retake Quiz
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm text-charcoal/60">
          Question {currentQuestion + 1} of {questions.length}
        </span>
        <div className="flex gap-1">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`w-8 h-1 rounded-full ${
                index < currentQuestion
                  ? "bg-rose-gold"
                  : index === currentQuestion
                  ? "bg-rose-gold/50"
                  : "bg-charcoal/10"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-charcoal mb-6">
            {question.question}
          </h3>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {question.options.map((option, index) => {
              let optionClass = "border-charcoal/20 hover:border-rose-gold/50";

              if (showResult) {
                if (index === question.correctAnswer) {
                  optionClass = "border-green-500 bg-green-50";
                } else if (
                  index === selectedAnswer &&
                  index !== question.correctAnswer
                ) {
                  optionClass = "border-red-500 bg-red-50";
                }
              } else if (selectedAnswer === index) {
                optionClass = "border-rose-gold bg-blush";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleSelectAnswer(index)}
                  disabled={showResult}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${optionClass} ${
                    showResult ? "cursor-default" : "cursor-pointer"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal">{option}</span>
                    {showResult && index === question.correctAnswer && (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    )}
                    {showResult &&
                      index === selectedAnswer &&
                      index !== question.correctAnswer && (
                        <XCircle className="w-5 h-5 text-red-500" />
                      )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-xl mb-6 ${
                isCorrect ? "bg-green-50" : "bg-yellow-50"
              }`}
            >
              <div className="flex items-start gap-3">
                {isCorrect ? (
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                )}
                <div>
                  <p
                    className={`font-medium mb-1 ${
                      isCorrect ? "text-green-800" : "text-yellow-800"
                    }`}
                  >
                    {isCorrect ? "Correct!" : "Not quite right"}
                  </p>
                  <p
                    className={`text-sm ${
                      isCorrect ? "text-green-700" : "text-yellow-700"
                    }`}
                  >
                    {question.explanation}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Actions */}
          <div className="flex justify-end">
            {!showResult ? (
              <Button
                variant="primary"
                onClick={handleSubmit}
                disabled={selectedAnswer === null}
                className={
                  selectedAnswer === null ? "opacity-50 cursor-not-allowed" : ""
                }
              >
                Check Answer
              </Button>
            ) : (
              <Button variant="primary" onClick={handleNext}>
                {currentQuestion < questions.length - 1
                  ? "Next Question"
                  : "See Results"}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
