"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import ExternalScript from "./components/ExternalScript"

const questions = [
  "Eu nunca viajei de avião",
  "Eu nunca menti sobre minha idade",
  "Eu nunca dancei em público",
  "Eu nunca comi comida que caiu no chão",
  "Eu nunca fingi estar doente para faltar ao trabalho",
  "Eu nunca cantei no chuveiro",
  "Eu nunca dormi em uma aula",
  "Eu nunca esqueci o nome de alguém logo após ser apresentado",
  "Eu nunca usei roupas do avesso sem perceber",
  "Eu nunca falei sozinho em voz alta",
  "Eu nunca chorei assistindo um filme",
  "Eu nunca menti sobre ter lido um livro",
  "Eu nunca fingi entender uma piada",
  "Eu nunca comi pizza no café da manhã",
  "Eu nunca stalkeei alguém nas redes sociais",
  "Eu nunca fingi estar ocupado para evitar compromissos",
  "Eu nunca usei o telefone de outra pessoa sem permissão",
  "Eu nunca menti sobre meu peso",
  "Eu nunca fingi gostar de um presente",
  "Eu nunca dormi com a TV ligada",
  "Eu nunca comi algo que estava vencido",
  "Eu nunca fingi estar feliz quando estava triste",
  "Eu nunca usei a mesma roupa dois dias seguidos",
  "Eu nunca menti sobre ter feito exercícios",
  "Eu nunca fingi estar doente para ganhar atenção",
  "Eu nunca comi doce escondido",
  "Eu nunca fingi não ver uma mensagem",
  "Eu nunca menti sobre minha profissão",
  "Eu nunca fingi entender um idioma estrangeiro",
  "Eu nunca comi na cama",
  "Eu nunca fingi estar dormindo",
  "Eu nunca menti sobre ter dinheiro",
  "Eu nunca fingi gostar de uma música",
  "Eu nunca usei roupas íntimas furadas",
  "Eu nunca fingi estar ocupado no telefone",
  "Eu nunca comi algo que encontrei no fundo da bolsa",
]

export default function RezenharApp() {
  const [gameStarted, setGameStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState("")
  const [usedQuestions, setUsedQuestions] = useState<number[]>([])
  const [showRules, setShowRules] = useState(false)

  const getRandomQuestion = () => {
    const availableQuestions = questions.filter((_, index) => !usedQuestions.includes(index))

    if (availableQuestions.length === 0) {
      // Reset if all questions were used
      setUsedQuestions([])
      const randomIndex = Math.floor(Math.random() * questions.length)
      setCurrentQuestion(questions[randomIndex])
      setUsedQuestions([randomIndex])
    } else {
      const randomIndex = Math.floor(Math.random() * availableQuestions.length)
      const selectedQuestion = availableQuestions[randomIndex]
      const originalIndex = questions.indexOf(selectedQuestion)
      setCurrentQuestion(selectedQuestion)
      setUsedQuestions([...usedQuestions, originalIndex])
    }
  }

  const startGame = () => {
    setGameStarted(true)
    getRandomQuestion()
  }

  const resetGame = () => {
    setGameStarted(false)
    setCurrentQuestion("")
    setUsedQuestions([])
  }

  const RulesModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md mx-auto shadow-2xl border-2 border-accent/30 bg-card/95 backdrop-blur-sm">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-foreground">📋 Regras do Jogo</h2>
            <Button
              onClick={() => setShowRules(false)}
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
            >
              ✕
            </Button>
          </div>

          <div className="space-y-3 text-sm">
            <div className="bg-primary/5 border border-primary/20 p-3 rounded-lg">
              <h3 className="font-semibold text-accent mb-2">Como jogar:</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li>• O mestre lê a frase em voz alta</li>
                <li>• O mestre escolhe quem deve responder</li>
                <li>• Se a pessoa já fez isso, ela conta a história</li>
                <li>• Se não quiser responder, deve beber! 🍻</li>
                <li>• Use "Nova frase" para pular para próxima</li>
              </ul>
            </div>

            <div className="bg-accent/5 border border-accent/20 p-3 rounded-lg">
              <h3 className="font-semibold text-accent mb-2">Dicas:</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Seja honesto para mais diversão</li>
                <li>• Respeite os limites dos outros</li>
                <li>• O objetivo é se divertir!</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-card to-muted flex items-center justify-center p-4">
        <Card
          className="w-full max-w-md mx-auto shadow-2xl border-2 border-white backdrop-blur-sm"
          style={{ backgroundColor: "#101728" }}
        >
          <CardContent className="p-8 text-center space-y-8">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-primary/10 border-2 border-primary/20">
                <Image src="/logo.svg" alt="Rezenhar Logo" width={120} height={120} className="drop-shadow-lg" />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-white text-balance">Rezenhar</h1>
              <p className="text-lg text-white/80 text-pretty">
                O jogo mais divertido para descobrir segredos dos seus amigos!
              </p>
            </div>

            <div className="space-y-3">
              <Button
                onClick={startGame}
                size="lg"
                className="w-full text-lg py-6 bg-white text-black hover:bg-white/90 shadow-lg px-8 transform hover:scale-105 transition-all border border-gray-200"
              >
                🎉 Começar a Jogar
              </Button>

              <Button
                onClick={() => setShowRules(true)}
                variant="outline"
                size="lg"
                className="w-full text-lg py-4 border-white/30 text-white hover:bg-white/10 shadow-md"
              >
                📋 Ver Regras Completas
              </Button>
            </div>
          </CardContent>
        </Card>

        {showRules && <RulesModal />}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-muted p-4">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div
          className="flex items-center justify-between p-4 rounded-lg shadow-lg border border-primary/30"
          style={{ backgroundColor: "#101728" }}
        >
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Logo" width={40} height={40} className="drop-shadow-sm" />
            <h1 className="text-xl font-bold text-white">Rezenhar</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={() => setShowRules(true)}
              variant="ghost"
              size="sm"
              className="text-white/80 hover:text-white hover:bg-white/10"
            >
              📋
            </Button>
            <Button
              onClick={resetGame}
              variant="secondary"
              size="sm"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md"
            >
              Sair
            </Button>
          </div>
        </div>

        {/* Question Card */}
        <Card className="shadow-2xl border-2 border-white backdrop-blur-sm" style={{ backgroundColor: "#101728" }}>
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <div className="bg-gradient-to-r from-white/10 to-white/5 border border-white/20 p-6 rounded-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-white text-balance leading-relaxed">
                  {currentQuestion}
                </h2>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-center">
          <Button
            onClick={getRandomQuestion}
            size="lg"
            className="py-6 text-lg bg-orange-500 text-white hover:bg-orange-600 shadow-lg px-8 transform hover:scale-105 transition-all"
          >
            🎲 Nova Frase
          </Button>
        </div>

        {/* Stats */}
        <Card className="bg-white border border-gray-200">
          <CardContent className="p-4">
            <div className="text-center text-sm text-gray-600">
              <p>
                Perguntas usadas: {usedQuestions.length} de {questions.length}
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div
                  className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(usedQuestions.length / questions.length) * 100}%` }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {showRules && <RulesModal />}
        <ExternalScript />
      </div>
    </div>
  )
}
