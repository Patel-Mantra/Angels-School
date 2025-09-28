import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CheckCircle, Circle, AlertCircle, Calendar, FileText, Users, Award } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ApplicationStep {
  id: number
  title: string
  description: string
  status: 'completed' | 'in-progress' | 'pending' | 'not-started'
  dueDate?: string
  documents?: string[]
  estimatedTime?: string
}

interface StudentInfo {
  firstName: string
  lastName: string
  gradeLevel: string
  applicationId: string
}

const defaultSteps: ApplicationStep[] = [
  {
    id: 1,
    title: "Initial Inquiry",
    description: "Submit your interest and receive application materials",
    status: 'completed',
    estimatedTime: '5 minutes'
  },
  {
    id: 2,
    title: "Online Application",
    description: "Complete the comprehensive application form",
    status: 'completed',
    dueDate: '2026-03-15',
    estimatedTime: '30-45 minutes'
  },
  {
    id: 3,
    title: "Document Submission",
    description: "Upload all required supporting documents",
    status: 'in-progress',
    dueDate: '2026-03-15',
    documents: ['Academic Transcripts', 'Teacher Recommendations (2)', 'Birth Certificate', 'Immunization Records'],
    estimatedTime: '15-20 minutes'
  },
  {
    id: 4,
    title: "Admission Interview",
    description: "Schedule and complete your admission interview",
    status: 'pending',
    dueDate: '2026-03-20',
    estimatedTime: '45-60 minutes'
  },
  {
    id: 5,
    title: "Financial Aid (Optional)",
    description: "Submit financial aid application if requesting assistance",
    status: 'not-started',
    dueDate: '2026-02-01',
    estimatedTime: '20-30 minutes'
  },
  {
    id: 6,
    title: "Decision Notification",
    description: "Receive admission decision and enrollment instructions",
    status: 'not-started',
    dueDate: '2026-04-01',
    estimatedTime: 'N/A'
  }
]

const StatusIcon = ({ status }: { status: ApplicationStep['status'] }) => {
  switch (status) {
    case 'completed':
      return <CheckCircle className="h-6 w-6 text-green-500" />
    case 'in-progress':
      return <AlertCircle className="h-6 w-6 text-yellow-500" />
    case 'pending':
      return <Circle className="h-6 w-6 text-blue-500" />
    default:
      return <Circle className="h-6 w-6 text-gray-300" />
  }
}

const getStatusColor = (status: ApplicationStep['status']) => {
  switch (status) {
    case 'completed':
      return 'bg-green-50 border-green-200'
    case 'in-progress':
      return 'bg-yellow-50 border-yellow-200'
    case 'pending':
      return 'bg-blue-50 border-blue-200'
    default:
      return 'bg-gray-50 border-gray-200'
  }
}

const getStatusBadge = (status: ApplicationStep['status']) => {
  switch (status) {
    case 'completed':
      return <Badge className="bg-green-100 text-green-800">Complete</Badge>
    case 'in-progress':
      return <Badge className="bg-yellow-100 text-yellow-800">In Progress</Badge>
    case 'pending':
      return <Badge className="bg-blue-100 text-blue-800">Ready to Start</Badge>
    default:
      return <Badge variant="secondary">Not Started</Badge>
  }
}

export function ApplicationStatusPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginForm, setLoginForm] = useState({ email: '', applicationId: '' })
  const [studentInfo] = useState<StudentInfo>({
    firstName: 'Emma',
    lastName: 'Johnson',
    gradeLevel: '7th Grade',
    applicationId: 'SHA-2026-001234'
  })
  const [steps] = useState<ApplicationStep[]>(defaultSteps)

  const completedSteps = steps.filter(step => step.status === 'completed').length
  const totalSteps = steps.length
  const progressPercentage = (completedSteps / totalSteps) * 100

  const handleLogin = () => {
    // Simulate login - in real app, this would validate credentials
    if (loginForm.email && loginForm.applicationId) {
      setIsLoggedIn(true)
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setLoginForm({ email: '', applicationId: '' })
  }

  if (!isLoggedIn) {
    return (
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="mr-2 h-5 w-5" />
            Application Status Portal
          </CardTitle>
          <CardDescription>
            Track your admission application progress
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={loginForm.email}
              onChange={(e) => setLoginForm(prev => ({ ...prev, email: e.target.value }))}
              placeholder="student@email.com"
            />
          </div>
          <div>
            <Label htmlFor="applicationId">Application ID</Label>
            <Input
              id="applicationId"
              value={loginForm.applicationId}
              onChange={(e) => setLoginForm(prev => ({ ...prev, applicationId: e.target.value }))}
              placeholder="SHA-2026-XXXXXX"
            />
          </div>
          <Button onClick={handleLogin} className="w-full">
            Access Portal
          </Button>
          <div className="text-center text-sm text-gray-500">
            <p>Demo credentials:</p>
            <p>Email: demo@email.com</p>
            <p>Application ID: SHA-2026-001234</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl">
                Welcome, {studentInfo.firstName} {studentInfo.lastName}
              </CardTitle>
              <CardDescription className="text-lg">
                {studentInfo.gradeLevel} Application • {studentInfo.applicationId}
              </CardDescription>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Application Progress</span>
                <span className="text-sm text-gray-500">{completedSteps} of {totalSteps} steps completed</span>
              </div>
              <Progress value={progressPercentage} className="h-3" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">{completedSteps}</div>
                <div className="text-sm text-gray-600">Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-600">
                  {steps.filter(s => s.status === 'in-progress' || s.status === 'pending').length}
                </div>
                <div className="text-sm text-gray-600">In Progress</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-400">
                  {steps.filter(s => s.status === 'not-started').length}
                </div>
                <div className="text-sm text-gray-600">Remaining</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Application Steps */}
      <div className="space-y-4">
        {steps.map((step, index) => (
          <Card key={step.id} className={cn("transition-all", getStatusColor(step.status))}>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <StatusIcon status={step.status} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    {getStatusBadge(step.status)}
                  </div>
                  <p className="text-gray-600 mb-3">{step.description}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm">
                    {step.dueDate && (
                      <div className="flex items-center text-gray-500">
                        <Calendar className="mr-1 h-4 w-4" />
                        Due: {new Date(step.dueDate).toLocaleDateString()}
                      </div>
                    )}
                    {step.estimatedTime && (
                      <div className="flex items-center text-gray-500">
                        <AlertCircle className="mr-1 h-4 w-4" />
                        Estimated time: {step.estimatedTime}
                      </div>
                    )}
                  </div>

                  {step.documents && (
                    <div className="mt-4">
                      <h4 className="font-medium mb-2">Required Documents:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {step.documents.map((doc, idx) => (
                          <div key={idx} className="flex items-center space-x-2 p-2 bg-white rounded border">
                            <FileText className="h-4 w-4 text-gray-400" />
                            <span className="text-sm">{doc}</span>
                            <Badge variant="secondary" className="ml-auto">Pending</Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {step.status === 'in-progress' && (
                    <div className="mt-4">
                      <Button>Continue Step</Button>
                    </div>
                  )}

                  {step.status === 'pending' && (
                    <div className="mt-4">
                      <Button variant="outline">Start Step</Button>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Important Dates */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="mr-2 h-5 w-5" />
            Important Dates
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Application Deadline</span>
                <span className="font-semibold text-red-600">March 15, 2026</span>
              </div>
              <div className="flex justify-between">
                <span>Financial Aid Deadline</span>
                <span className="font-semibold">February 1, 2026</span>
              </div>
              <div className="flex justify-between">
                <span>Interview Period</span>
                <span className="font-semibold">February 15 - March 20</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Decision Notification</span>
                <span className="font-semibold">April 1, 2026</span>
              </div>
              <div className="flex justify-between">
                <span>Enrollment Confirmation</span>
                <span className="font-semibold">May 1, 2026</span>
              </div>
              <div className="flex justify-between">
                <span>Orientation Day</span>
                <span className="font-semibold">August 15, 2026</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="font-semibold mb-2">Need Help?</h3>
            <p className="text-gray-600 mb-4">
              Our admissions team is here to support you throughout the process.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline">
                <Users className="mr-2 h-4 w-4" />
                Contact Admissions
              </Button>
              <Button variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Interview
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}