import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { 
  Users,
  MessageSquare,
  CreditCard,
  Calendar,
  FileText,
  BookOpen,
  Bell,
  Award,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  TrendingDown,
  User,
  GraduationCap,
  Clock,
  MapPin,
  Phone,
  Mail,
  DollarSign,
  Receipt,
  Star,
  Heart,
  Target,
  BarChart3,
  Download,
  Send,
  Plus,
  Eye,
  Filter,
  Search
} from 'lucide-react'

const familyData = {
  parentName: 'Maria Rodriguez',
  email: 'maria.rodriguez@email.com',
  phone: '(555) 123-4567',
  emergencyContact: 'Carlos Rodriguez',
  emergencyPhone: '(555) 987-6543'
}

const children = [
  {
    id: 1,
    name: 'Emma Rodriguez',
    grade: '11th Grade',
    studentId: 'AR-2025-1847',
    gpa: 3.85,
    attendance: 96.2,
    behavior: 'Excellent',
    lastLogin: '2025-09-20T08:30:00Z',
    photo: '/api/placeholder/60/60'
  },
  {
    id: 2,
    name: 'Diego Rodriguez',
    grade: '8th Grade',
    studentId: 'AR-2025-2134',
    gpa: 3.42,
    attendance: 94.8,
    behavior: 'Good',
    lastLogin: '2025-09-19T15:45:00Z',
    photo: '/api/placeholder/60/60'
  }
]

const recentGrades = [
  {
    student: 'Emma Rodriguez',
    subject: 'AP Chemistry',
    assignment: 'Lab Report #5',
    grade: 'A-',
    points: '91/100',
    date: '2025-09-18',
    teacher: 'Mr. Chen'
  },
  {
    student: 'Diego Rodriguez',
    subject: 'Algebra I',
    assignment: 'Chapter 4 Test',
    grade: 'B+',
    points: '87/100',
    date: '2025-09-17',
    teacher: 'Mrs. Johnson'
  },
  {
    student: 'Emma Rodriguez',
    subject: 'English Literature',
    assignment: 'Essay - Character Analysis',
    grade: 'A',
    points: '95/100',
    date: '2025-09-16',
    teacher: 'Ms. Wilson'
  }
]

const teacherMessages = [
  {
    id: 1,
    from: 'Mr. Chen (AP Chemistry)',
    student: 'Emma Rodriguez',
    subject: 'Outstanding Lab Performance',
    message: 'Emma has shown exceptional understanding of organic chemistry concepts. Her lab reports consistently demonstrate thorough analysis and scientific reasoning.',
    date: '2025-09-18T14:30:00Z',
    priority: 'low',
    read: false
  },
  {
    id: 2,
    from: 'Mrs. Johnson (Algebra I)',
    student: 'Diego Rodriguez',
    subject: 'Math Homework Reminder',
    message: 'Diego missed turning in yesterday\'s homework assignment. Please remind him about the importance of consistent practice.',
    date: '2025-09-17T16:15:00Z',
    priority: 'medium',
    read: false
  },
  {
    id: 3,
    from: 'Ms. Rodriguez (Guidance)',
    student: 'Emma Rodriguez',
    subject: 'College Planning Meeting',
    message: 'I\'d like to schedule a meeting to discuss Emma\'s college application timeline and course selection for senior year.',
    date: '2025-09-16T10:45:00Z',
    priority: 'high',
    read: true
  }
]

const financialData = {
  accountBalance: -247.50,
  monthlyFees: 850.00,
  mealPlan: 125.00,
  activities: 75.00,
  transportation: 45.00,
  recentPayments: [
    {
      id: 1,
      description: 'Monthly Tuition - September',
      amount: 850.00,
      date: '2025-09-01',
      status: 'paid'
    },
    {
      id: 2,
      description: 'Meal Plan - September',
      amount: 125.00,
      date: '2025-09-01',
      status: 'paid'
    },
    {
      id: 3,
      description: 'Fall Sports Registration',
      amount: 75.00,
      date: '2025-08-25',
      status: 'pending'
    }
  ]
}

const upcomingEvents = [
  {
    id: 1,
    title: 'Parent-Teacher Conferences',
    date: '2025-09-22',
    time: '14:00-18:00',
    location: 'Various Classrooms',
    registrationRequired: true,
    registered: false,
    capacity: 500,
    spotsLeft: 44
  },
  {
    id: 2,
    title: 'Back-to-School Night',
    date: '2025-09-25',
    time: '19:00-21:00',
    location: 'Main Auditorium',
    registrationRequired: true,
    registered: true,
    capacity: 300,
    spotsLeft: 0
  },
  {
    id: 3,
    title: 'Fall Musical Auditions',
    date: '2025-09-28',
    time: '15:30-17:30',
    location: 'Performing Arts Center',
    registrationRequired: true,
    registered: false,
    capacity: 100,
    spotsLeft: 23
  }
]

const behaviorReports = [
  {
    student: 'Emma Rodriguez',
    type: 'positive',
    category: 'Academic Excellence',
    description: 'Consistently demonstrates exceptional work ethic and helps classmates with difficult concepts.',
    teacher: 'Mr. Chen',
    date: '2025-09-18',
    points: 5
  },
  {
    student: 'Diego Rodriguez',
    type: 'concern',
    category: 'Homework',
    description: 'Missing assignment submitted late. Reminder sent home about due dates.',
    teacher: 'Mrs. Johnson',
    date: '2025-09-17',
    points: -1
  },
  {
    student: 'Emma Rodriguez',
    type: 'positive',
    category: 'Leadership',
    description: 'Elected as Chemistry Lab Partner Coordinator, showing excellent organizational skills.',
    teacher: 'Mr. Chen',
    date: '2025-09-15',
    points: 3
  }
]

const academicResources = [
  {
    category: 'Study Guides',
    title: 'AP Chemistry Study Materials',
    description: 'Comprehensive review materials for AP Chemistry exam preparation',
    grade: '11th Grade',
    subject: 'Chemistry',
    downloads: 234
  },
  {
    category: 'Homework Help',
    title: 'Algebra I Practice Problems',
    description: 'Additional practice problems with step-by-step solutions',
    grade: '8th Grade',
    subject: 'Mathematics',
    downloads: 456
  },
  {
    category: 'Parent Guide',
    title: 'Supporting Your Teen Through High School',
    description: 'Tips for helping your teenager succeed academically and socially',
    grade: 'All Grades',
    subject: 'General',
    downloads: 789
  }
]

export function ParentPortal() {
  const [selectedChild, setSelectedChild] = useState(children[0])
  const [messageFilter, setMessageFilter] = useState('all')
  const [showPaymentDialog, setShowPaymentDialog] = useState(false)
  const [showMessageDialog, setShowMessageDialog] = useState(false)

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getBehaviorColor = (type: string) => {
    return type === 'positive' ? 'bg-green-50 border-green-200' : 'bg-orange-50 border-orange-200'
  }

  const getBehaviorIcon = (type: string) => {
    return type === 'positive' ? (
      <Award className="w-5 h-5 text-green-600" />
    ) : (
      <AlertTriangle className="w-5 h-5 text-orange-600" />
    )
  }

  return (
    <div className="space-y-8">
      {/* Parent Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-xl p-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">{familyData.parentName}</h2>
              <p className="text-green-100">Parent Portal • {children.length} Children</p>
            </div>
          </div>
          
          <div className="flex gap-6 flex-1 justify-end">
            <div className="text-center">
              <div className="text-2xl font-bold">{children.length}</div>
              <div className="text-green-200 text-sm">Children</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">
                {(children.reduce((acc, child) => acc + child.gpa, 0) / children.length).toFixed(2)}
              </div>
              <div className="text-green-200 text-sm">Avg GPA</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">
                {(children.reduce((acc, child) => acc + child.attendance, 0) / children.length).toFixed(1)}%
              </div>
              <div className="text-green-200 text-sm">Attendance</div>
            </div>
          </div>
        </div>
      </div>

      {/* Child Selector */}
      <div className="flex flex-wrap gap-4">
        {children.map(child => (
          <Card 
            key={child.id} 
            className={`cursor-pointer transition-all ${selectedChild.id === child.id ? 'ring-2 ring-primary' : 'hover:shadow-md'}`}
            onClick={() => setSelectedChild(child)}
          >
            <CardContent className="pt-4 pb-4">
              <div className="flex items-center gap-3">
                <img src={child.photo} alt={child.name} className="w-12 h-12 rounded-full" />
                <div>
                  <h4 className="font-semibold">{child.name}</h4>
                  <p className="text-sm text-gray-600">{child.grade}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">GPA: {child.gpa}</div>
                  <div className="text-xs text-gray-500">{child.attendance}% attendance</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="communication">Messages</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Academic Performance */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Academic Status</h3>
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{selectedChild.gpa}</div>
                  <div className="text-sm text-gray-600">Current GPA</div>
                  <Progress value={selectedChild.gpa * 25} className="mt-3" />
                </div>
              </CardContent>
            </Card>

            {/* Attendance */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Attendance</h3>
                  <Calendar className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">{selectedChild.attendance}%</div>
                  <div className="text-sm text-gray-600">This Year</div>
                  <Progress value={selectedChild.attendance} className="mt-3" />
                </div>
              </CardContent>
            </Card>

            {/* Behavior */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Behavior</h3>
                  <Award className="w-5 h-5 text-purple-600" />
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">{selectedChild.behavior}</div>
                  <div className="text-sm text-gray-600">Overall Rating</div>
                  <div className="flex justify-center mt-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < 4 ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Messages */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Messages</h3>
                  <MessageSquare className="w-5 h-5 text-orange-600" />
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    {teacherMessages.filter(m => !m.read).length}
                  </div>
                  <div className="text-sm text-gray-600">Unread</div>
                  <Button size="sm" className="w-full mt-3">
                    View All
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity for {selectedChild.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentGrades
                  .filter(grade => grade.student === selectedChild.name)
                  .slice(0, 3)
                  .map((grade, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">{grade.assignment}</h4>
                        <p className="text-sm text-gray-600">{grade.subject} • {grade.teacher}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg">{grade.grade}</div>
                        <div className="text-sm text-gray-500">{grade.points}</div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Progress Tracking Tab */}
        <TabsContent value="progress" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Academic Progress - {selectedChild.name}</h3>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Generate Report
            </Button>
          </div>

          {/* GPA Trend */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                GPA Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-3xl font-bold text-primary">{selectedChild.gpa}</div>
                  <div className="text-sm text-gray-600">Current GPA</div>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm">+0.12 from last quarter</span>
                </div>
              </div>
              <Progress value={selectedChild.gpa * 25} />
            </CardContent>
          </Card>

          {/* Subject Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Subject Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentGrades
                  .filter(grade => grade.student === selectedChild.name)
                  .map((grade, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold">{grade.subject}</h4>
                        <p className="text-sm text-gray-600">{grade.teacher}</p>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-primary">{grade.grade}</div>
                        <div className="text-sm text-gray-500">{grade.points}</div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>

          {/* Behavior Reports */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Behavior Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {behaviorReports
                  .filter(report => report.student === selectedChild.name)
                  .map((report, idx) => (
                    <div key={idx} className={`p-4 rounded-lg border ${getBehaviorColor(report.type)}`}>
                      <div className="flex items-start gap-3">
                        {getBehaviorIcon(report.type)}
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">{report.category}</h4>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-gray-600">
                                {report.teacher} • {formatDate(report.date)}
                              </span>
                              <Badge variant={report.type === 'positive' ? 'default' : 'secondary'}>
                                {report.points > 0 ? '+' : ''}{report.points} pts
                              </Badge>
                            </div>
                          </div>
                          <p className="text-sm">{report.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Communication Tab */}
        <TabsContent value="communication" className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <h3 className="text-2xl font-bold">Teacher Communications</h3>
            <div className="flex gap-2">
              <Button
                variant={messageFilter === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setMessageFilter('all')}
              >
                All Messages
              </Button>
              <Button
                variant={messageFilter === 'unread' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setMessageFilter('unread')}
              >
                Unread ({teacherMessages.filter(m => !m.read).length})
              </Button>
              <Dialog open={showMessageDialog} onOpenChange={setShowMessageDialog}>
                <DialogTrigger asChild>
                  <Button>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Send Message to Teacher</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Select Child</label>
                      <select className="w-full p-2 border rounded-md">
                        {children.map(child => (
                          <option key={child.id} value={child.id}>{child.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Subject</label>
                      <Input placeholder="Message subject..." />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Message</label>
                      <Textarea placeholder="Your message..." className="min-h-32" />
                    </div>
                    <Button className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="space-y-4">
            {teacherMessages
              .filter(message => messageFilter === 'all' || (messageFilter === 'unread' && !message.read))
              .map(message => (
                <Card key={message.id} className={!message.read ? 'border-primary/50 bg-primary/5' : ''}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-semibold">{message.subject}</h4>
                        <p className="text-sm text-gray-600">
                          From: {message.from} • Re: {message.student}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getPriorityColor(message.priority)}>
                          {message.priority}
                        </Badge>
                        {!message.read && <Badge>New</Badge>}
                      </div>
                    </div>

                    <p className="text-sm mb-4">{message.message}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{formatDate(message.date)}</span>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Reply
                        </Button>
                        {!message.read && (
                          <Button size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            Mark Read
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        {/* Financial Management Tab */}
        <TabsContent value="financial" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Financial Management</h3>
            <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
              <DialogTrigger asChild>
                <Button>
                  <CreditCard className="w-4 h-4 mr-2" />
                  Make Payment
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Make Payment</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Payment Amount</label>
                    <Input placeholder="$0.00" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Payment Method</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Credit Card (**** 1234)</option>
                      <option>Bank Account (**** 5678)</option>
                    </select>
                  </div>
                  <Button className="w-full">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Process Payment
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Account Balance */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className={financialData.accountBalance < 0 ? 'border-red-200 bg-red-50' : 'border-green-200 bg-green-50'}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Account Balance</h3>
                  <DollarSign className={`w-5 h-5 ${financialData.accountBalance < 0 ? 'text-red-600' : 'text-green-600'}`} />
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold mb-2 ${financialData.accountBalance < 0 ? 'text-red-600' : 'text-green-600'}`}>
                    ${Math.abs(financialData.accountBalance).toFixed(2)}
                  </div>
                  <div className="text-sm text-gray-600">
                    {financialData.accountBalance < 0 ? 'Outstanding Balance' : 'Credit Balance'}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Monthly Tuition</h3>
                  <Receipt className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    ${financialData.monthlyFees.toFixed(2)}
                  </div>
                  <div className="text-sm text-gray-600">September 2025</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Meal Plan</h3>
                  <Receipt className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    ${financialData.mealPlan.toFixed(2)}
                  </div>
                  <div className="text-sm text-gray-600">Monthly</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Activities</h3>
                  <Receipt className="w-5 h-5 text-purple-600" />
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    ${financialData.activities.toFixed(2)}
                  </div>
                  <div className="text-sm text-gray-600">This Month</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Payments */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Payments & Charges</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {financialData.recentPayments.map(payment => (
                  <div key={payment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">{payment.description}</h4>
                      <p className="text-sm text-gray-600">{formatDate(payment.date)}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">${payment.amount.toFixed(2)}</div>
                      <Badge className={payment.status === 'paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                        {payment.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Events & Participation Tab */}
        <TabsContent value="events" className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Upcoming School Events</h3>
            <p className="text-gray-600">Register your children for school activities and events</p>
          </div>

          <div className="space-y-4">
            {upcomingEvents.map(event => (
              <Card key={event.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold">{event.title}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(event.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      {event.registered ? (
                        <Badge className="bg-green-100 text-green-800">Registered</Badge>
                      ) : (
                        <Badge variant="outline">Not Registered</Badge>
                      )}
                    </div>
                  </div>

                  {event.registrationRequired && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span>Registration Required</span>
                        <span>{event.spotsLeft} spots remaining</span>
                      </div>
                      <Progress value={(event.capacity - event.spotsLeft) / event.capacity * 100} className="mt-2" />
                    </div>
                  )}

                  <div className="flex gap-2">
                    {event.registered ? (
                      <Button variant="outline" disabled>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Registered
                      </Button>
                    ) : (
                      <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        Register
                      </Button>
                    )}
                    <Button variant="outline">
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Academic Resources Tab */}
        <TabsContent value="resources" className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Academic Resources</h3>
            <p className="text-gray-600">Curriculum guides, study materials, and parent support resources</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicResources.map((resource, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline">{resource.category}</Badge>
                    <BookOpen className="w-5 h-5 text-blue-600" />
                  </div>
                  
                  <h4 className="font-semibold mb-2">{resource.title}</h4>
                  <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Grade:</span>
                      <span>{resource.grade}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Subject:</span>
                      <span>{resource.subject}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Downloads:</span>
                      <span>{resource.downloads}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resource
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-blue-600" />
              <h4 className="font-semibold text-blue-800">Parent Support</h4>
            </div>
            <p className="text-blue-700 text-sm mb-4">
              Need help supporting your child's education? Our parent resource center offers guides, 
              tips, and strategies for academic success at every grade level.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Visit Parent Resource Center
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}