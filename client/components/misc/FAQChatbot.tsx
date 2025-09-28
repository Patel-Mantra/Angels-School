import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { MessageCircle, Send, Bot, User, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Message {
  id: number
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  quickReplies?: string[]
}

interface FAQ {
  question: string
  answer: string
  category: string
}

const faqs: FAQ[] = [
  {
    question: "What are your application deadlines?",
    answer: "Our application deadline is March 15th for Fall enrollment. Early applications are encouraged and reviewed on a rolling basis starting January 1st.",
    category: "Application Process"
  },
  {
    question: "What is the tuition cost?",
    answer: "Tuition varies by grade level: Elementary (K-5) $12,000/year, Middle School (6-8) $14,000/year, High School (9-12) $16,000/year. Additional fees include technology ($200) and activities ($150).",
    category: "Financial"
  },
  {
    question: "Do you offer financial aid?",
    answer: "Yes! We offer both need-based aid (up to 50% tuition reduction) and merit scholarships. Our financial aid application deadline is February 1st.",
    category: "Financial"
  },
  {
    question: "What documents are required for application?",
    answer: "Required documents include: completed application form, academic transcripts, teacher recommendations, standardized test scores (if applicable), and birth certificate.",
    category: "Application Process"
  },
  {
    question: "Can I schedule a campus tour?",
    answer: "Absolutely! We offer guided campus tours Monday-Friday at 9 AM and 2 PM. Virtual tours are available 24/7. You can book through our website or call admissions.",
    category: "Visits"
  },
  {
    question: "What is your class size?",
    answer: "We maintain small class sizes with a 12:1 student-to-teacher ratio in elementary and 15:1 in middle and high school to ensure personalized attention.",
    category: "Academics"
  },
  {
    question: "Do you have transportation?",
    answer: "Yes, we provide bus service to most areas within a 15-mile radius. Bus routes and stops are finalized each summer based on enrollment.",
    category: "Logistics"
  },
  {
    question: "What extracurricular activities do you offer?",
    answer: "We offer over 30 clubs and activities including robotics, debate team, various sports, drama club, student government, and community service groups.",
    category: "Student Life"
  }
]

const quickStartQuestions = [
  "Application deadlines?",
  "Tuition costs?",
  "Financial aid?",
  "Schedule a tour?",
  "Required documents?"
]

export function FAQChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your admissions assistant. I can help answer common questions about Stellar Haven Academy. What would you like to know?",
      sender: 'bot',
      timestamp: new Date(),
      quickReplies: quickStartQuestions
    }
  ])
  const [inputValue, setInputValue] = useState('')

  const findBestAnswer = (question: string): FAQ | null => {
    const questionLower = question.toLowerCase()
    
    // Direct keyword matching
    const keywords = [
      { words: ['deadline', 'application', 'when', 'due'], faq: faqs[0] },
      { words: ['tuition', 'cost', 'price', 'fee', 'expensive'], faq: faqs[1] },
      { words: ['financial aid', 'scholarship', 'money', 'help', 'assistance'], faq: faqs[2] },
      { words: ['document', 'requirement', 'need', 'submit', 'application'], faq: faqs[3] },
      { words: ['tour', 'visit', 'campus', 'see', 'schedule'], faq: faqs[4] },
      { words: ['class size', 'student', 'teacher', 'ratio'], faq: faqs[5] },
      { words: ['bus', 'transport', 'ride', 'pickup'], faq: faqs[6] },
      { words: ['activities', 'clubs', 'sports', 'extracurricular'], faq: faqs[7] }
    ]

    for (const keyword of keywords) {
      if (keyword.words.some(word => questionLower.includes(word))) {
        return keyword.faq
      }
    }

    return null
  }

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: text,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])

    // Generate bot response
    setTimeout(() => {
      const bestAnswer = findBestAnswer(text)
      let botResponse: Message

      if (bestAnswer) {
        botResponse = {
          id: messages.length + 2,
          text: bestAnswer.answer,
          sender: 'bot',
          timestamp: new Date(),
          quickReplies: quickStartQuestions.filter(q => !q.toLowerCase().includes(text.toLowerCase().split(' ')[0]))
        }
      } else {
        botResponse = {
          id: messages.length + 2,
          text: "I'd be happy to help with that! For specific questions not covered in our FAQ, please contact our admissions office at (555) 123-4567 or admissions@stellarhaven.edu. Is there anything else I can help you with?",
          sender: 'bot',
          timestamp: new Date(),
          quickReplies: quickStartQuestions
        }
      }

      setMessages(prev => [...prev, botResponse])
    }, 1000)

    setInputValue('')
  }

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply)
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full h-14 w-14 shadow-lg bg-blue-600 hover:bg-blue-700"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-96 h-96 max-w-[calc(100vw-2rem)]">
      <Card className="h-full flex flex-col shadow-xl">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="h-5 w-5 text-blue-600" />
              <CardTitle className="text-base">Admissions Assistant</CardTitle>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col p-0">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className="space-y-2">
                <div className={cn(
                  "flex items-start space-x-2",
                  message.sender === 'user' && "justify-end"
                )}>
                  {message.sender === 'bot' && (
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <Bot className="h-3 w-3 text-blue-600" />
                    </div>
                  )}
                  <div className={cn(
                    "max-w-xs p-3 rounded-lg text-sm",
                    message.sender === 'user' 
                      ? "bg-blue-600 text-white rounded-br-sm" 
                      : "bg-gray-100 rounded-bl-sm"
                  )}>
                    {message.text}
                  </div>
                  {message.sender === 'user' && (
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                      <User className="h-3 w-3 text-gray-600" />
                    </div>
                  )}
                </div>
                
                {message.quickReplies && (
                  <div className="flex flex-wrap gap-2 ml-8">
                    {message.quickReplies.map((reply, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="cursor-pointer hover:bg-blue-100"
                        onClick={() => handleQuickReply(reply)}
                      >
                        {reply}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                placeholder="Ask me about admissions..."
                className="flex-1"
              />
              <Button
                onClick={() => handleSendMessage(inputValue)}
                size="sm"
                className="px-3"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}