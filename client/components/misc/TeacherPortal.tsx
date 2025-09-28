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
  GraduationCap,
  Users,
  BookOpen,
  Calendar,
  MessageSquare,
  Clock,
  FileText,
  Award,
  TrendingUp,
  Target,
  CheckCircle,
  AlertCircle,
  Star,
  Eye,
  Edit,
  Send,
  Plus,
  Download,
  Upload,
  Search,
  Filter,
  BarChart3,
  Mail,
  Phone,
  Video,
  Bell,
  Settings,
  Share2,
  Presentation,
  School,
  User
} from 'lucide-react'

const teacherData = {
  name: 'Sarah Johnson',
  employeeId: 'TCH-2019-0847',
  department: 'Mathematics',
  grade: '8th Grade',
  email: 'sarah.johnson@school.edu',
  phone: '(555) 234-5678',
  classrooms: ['Room 201', 'Room 205'],
  yearsExperience: 8,
  qualifications: ['M.Ed Mathematics', 'Teaching License', 'Advanced Placement Certified']
}

const currentClasses = [
  {
    id: 1,
    name: 'Algebra I - Period 1',
    students: 28,
    room: 'Room 201',
    time: '08:00 - 08:50',
    avgGrade: 3.2,
    attendance: 95.5,
    assignments: 15,
    graded: 12
  },
  {
    id: 2,
    name: 'Pre-Algebra - Period 3',
    students: 24,
    room: 'Room 201',
    time: '10:15 - 11:05',
    avgGrade: 3.6,
    attendance: 92.8,
    assignments: 18,
    graded: 16
  },
  {
    id: 3,
    name: 'Geometry - Period 5',
    students: 26,
    room: 'Room 205',
    time: '13:00 - 13:50',
    avgGrade: 3.4,
    attendance: 94.2,
    assignments: 14,
    graded: 11
  },
  {
    id: 4,
    name: 'Math Support - Period 7',
    students: 15,
    room: 'Room 201',
    time: '15:15 - 16:05',
    avgGrade: 2.8,
    attendance: 89.3,
    assignments: 12,
    graded: 10
  }
]

const recentGrades = [
  {
    class: 'Algebra I - Period 1',
    assignment: 'Chapter 5 Quiz',
    submitted: 28,
    graded: 23,
    avgScore: 84,
    needsGrading: 5
  },
  {
    class: 'Pre-Algebra - Period 3',
    assignment: 'Linear Equations Homework',
    submitted: 24,
    graded: 24,
    avgScore: 91,
    needsGrading: 0
  },
  {
    class: 'Geometry - Period 5',
    assignment: 'Triangle Properties Test',
    submitted: 25,
    graded: 18,
    avgScore: 78,
    needsGrading: 7
  }
]

const attendanceData = [
  { class: 'Algebra I - Period 1', present: 26, absent: 2, tardy: 0, total: 28 },
  { class: 'Pre-Algebra - Period 3', present: 23, absent: 1, tardy: 0, total: 24 },
  { class: 'Geometry - Period 5', present: 24, absent: 1, tardy: 1, total: 26 },
  { class: 'Math Support - Period 7', present: 14, absent: 1, tardy: 0, total: 15 }
]

const parentMessages = [
  {
    id: 1,
    parent: 'Maria Rodriguez',
    student: 'Diego Rodriguez',
    subject: 'Homework Concerns',
    message: 'I noticed Diego has been struggling with the recent algebra assignments. Could we schedule a meeting to discuss support strategies?',
    priority: 'medium',
    date: '2025-09-18T14:30:00Z',
    replied: false
  },
  {
    id: 2,
    parent: 'James Wilson',
    student: 'Emma Wilson',
    subject: 'Advanced Placement Request',
    message: 'Emma is excelling in geometry and would like to know about AP Calculus prerequisites for next year.',
    priority: 'low',
    date: '2025-09-17T10:15:00Z',
    replied: true
  },
  {
    id: 3,
    parent: 'Linda Chen',
    student: 'Alex Chen',
    subject: 'Attendance Question',
    message: 'Alex was marked absent yesterday but was actually in the nurse\'s office. Can this be corrected?',
    priority: 'high',
    date: '2025-09-16T16:45:00Z',
    replied: false
  }
]

const teachingResources = [
  {
    category: 'Lesson Plans',
    title: 'Quadratic Functions Interactive Lesson',
    subject: 'Algebra I',
    downloads: 156,
    rating: 4.8,
    shared: true
  },
  {
    category: 'Worksheets',
    title: 'Triangle Congruence Practice Problems',
    subject: 'Geometry',
    downloads: 89,
    rating: 4.6,
    shared: false
  },
  {
    category: 'Assessment',
    title: 'Pre-Algebra Chapter Test Template',
    subject: 'Pre-Algebra',
    downloads: 234,
    rating: 4.9,
    shared: true
  }
]

const professionalDevelopment = [
  {
    title: 'Technology Integration in Mathematics',
    date: '2025-10-15',
    time: '15:30 - 17:00',
    location: 'Professional Development Center',
    credits: 2,
    registered: true
  },
  {
    title: 'Differentiated Instruction Strategies',
    date: '2025-11-08',
    time: '14:00 - 16:30',
    location: 'Online Workshop',
    credits: 3,
    registered: false
  },
  {
    title: 'Assessment and Grading Best Practices',
    date: '2025-11-22',
    time: '13:00 - 15:00',
    location: 'Main Conference Room',
    credits: 2,
    registered: false
  }
]

export function TeacherPortal() {
  const [selectedClass, setSelectedClass] = useState(currentClasses[0])
  const [showGradingDialog, setShowGradingDialog] = useState(false)
  const [showMessageDialog, setShowMessageDialog] = useState(false)
  const [showResourceDialog, setShowResourceDialog] = useState(false)

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

  const totalStudents = currentClasses.reduce((sum, cls) => sum + cls.students, 0)
  const avgClassGrade = currentClasses.reduce((sum, cls) => sum + cls.avgGrade, 0) / currentClasses.length
  const avgAttendance = currentClasses.reduce((sum, cls) => sum + cls.attendance, 0) / currentClasses.length
  const totalAssignments = recentGrades.reduce((sum, grade) => sum + grade.needsGrading, 0)

  return (
    <div className="space-y-8">
      {/* Teacher Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl p-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">{teacherData.name}</h2>
              <p className="text-blue-100">{teacherData.department} Teacher • {teacherData.yearsExperience} Years Experience</p>
            </div>
          </div>
          
          <div className="flex gap-6 flex-1 justify-end">
            <div className="text-center">
              <div className="text-2xl font-bold">{totalStudents}</div>
              <div className="text-blue-200 text-sm">Total Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{currentClasses.length}</div>
              <div className="text-blue-200 text-sm">Classes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{avgClassGrade.toFixed(1)}</div>
              <div className="text-blue-200 text-sm">Avg GPA</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{avgAttendance.toFixed(1)}%</div>
              <div className="text-blue-200 text-sm">Attendance</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <FileText className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-red-600">{totalAssignments}</div>
              <div className="text-sm text-gray-600">Need Grading</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <MessageSquare className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-orange-600">
                {parentMessages.filter(m => !m.replied).length}
              </div>
              <div className="text-sm text-gray-600">Unread Messages</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">4</div>
              <div className="text-sm text-gray-600">Today's Classes</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">2</div>
              <div className="text-sm text-gray-600">PD Credits Due</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="dashboard" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="grades">Grade Book</TabsTrigger>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="communication">Messages</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="development">Professional Dev</TabsTrigger>
        </TabsList>

        {/* Dashboard Tab */}
        <TabsContent value="dashboard" className="space-y-6">
          {/* Class Overview */}
          <Card>
            <CardHeader>
              <CardTitle>My Classes Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {currentClasses.map(cls => (
                  <div key={cls.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
                       onClick={() => setSelectedClass(cls)}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <School className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{cls.name}</h4>
                        <div className="text-sm text-gray-600">
                          {cls.time} • {cls.room} • {cls.students} students
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">GPA: {cls.avgGrade.toFixed(1)}</div>
                      <div className="text-sm text-gray-600">{cls.attendance}% attendance</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentGrades.map((grade, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">{grade.assignment}</h4>
                      <p className="text-sm text-gray-600">{grade.class}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">Avg: {grade.avgScore}%</div>
                      <div className="text-sm text-gray-600">
                        {grade.graded}/{grade.submitted} graded
                      </div>
                      {grade.needsGrading > 0 && (
                        <Badge className="bg-red-100 text-red-800 mt-1">
                          {grade.needsGrading} need grading
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Grade Book Tab */}
        <TabsContent value="grades" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Grade Management</h3>
            <div className="flex gap-2">
              <Dialog open={showGradingDialog} onOpenChange={setShowGradingDialog}>
                <DialogTrigger asChild>
                  <Button>
                    <Edit className="w-4 h-4 mr-2" />
                    Quick Grade Entry
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Quick Grade Entry</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Class</label>
                        <select className="w-full p-2 border rounded-md">
                          {currentClasses.map(cls => (
                            <option key={cls.id} value={cls.id}>{cls.name}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Assignment</label>
                        <Input placeholder="Assignment name..." />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <Input placeholder="Total Points" />
                      <Input placeholder="Due Date" type="date" />
                      <select className="p-2 border rounded-md">
                        <option>Quiz</option>
                        <option>Test</option>
                        <option>Homework</option>
                        <option>Project</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Student Grades</h4>
                      <div className="max-h-64 overflow-y-auto space-y-2">
                        {Array.from({ length: selectedClass.students }).map((_, i) => (
                          <div key={i} className="flex items-center gap-3 p-2 border rounded">
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                              <User className="w-4 h-4" />
                            </div>
                            <div className="flex-1">Student {i + 1}</div>
                            <Input className="w-20" placeholder="Grade" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1">Save Grades</Button>
                      <Button variant="outline" className="flex-1">Save & Email Parents</Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Grades
              </Button>
            </div>
          </div>

          {/* Class Selector */}
          <div className="flex flex-wrap gap-2">
            {currentClasses.map(cls => (
              <Button
                key={cls.id}
                variant={selectedClass.id === cls.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedClass(cls)}
              >
                {cls.name}
              </Button>
            ))}
          </div>

          {/* Grade Summary */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">{selectedClass.avgGrade.toFixed(1)}</div>
                  <div className="text-sm text-gray-600">Class Average GPA</div>
                  <Progress value={selectedClass.avgGrade * 25} className="mt-3" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">{selectedClass.graded}</div>
                  <div className="text-sm text-gray-600">Assignments Graded</div>
                  <Progress value={(selectedClass.graded / selectedClass.assignments) * 100} className="mt-3" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-600">{selectedClass.students}</div>
                  <div className="text-sm text-gray-600">Total Students</div>
                  <div className="text-xs text-gray-500 mt-2">{selectedClass.attendance}% avg attendance</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Gradebook */}
          <Card>
            <CardHeader>
              <CardTitle>Gradebook - {selectedClass.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Student</th>
                      <th className="text-center p-3">Quiz 1</th>
                      <th className="text-center p-3">Homework 1</th>
                      <th className="text-center p-3">Test 1</th>
                      <th className="text-center p-3">Project</th>
                      <th className="text-center p-3">Current Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: Math.min(selectedClass.students, 8) }).map((_, i) => (
                      <tr key={i} className="border-b hover:bg-gray-50">
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <User className="w-4 h-4 text-blue-600" />
                            </div>
                            Student {i + 1}
                          </div>
                        </td>
                        <td className="text-center p-3">
                          <span className="inline-block w-12 h-8 bg-green-100 text-green-800 rounded text-sm leading-8">
                            {85 + Math.floor(Math.random() * 15)}
                          </span>
                        </td>
                        <td className="text-center p-3">
                          <span className="inline-block w-12 h-8 bg-blue-100 text-blue-800 rounded text-sm leading-8">
                            {80 + Math.floor(Math.random() * 20)}
                          </span>
                        </td>
                        <td className="text-center p-3">
                          <span className="inline-block w-12 h-8 bg-yellow-100 text-yellow-800 rounded text-sm leading-8">
                            {75 + Math.floor(Math.random() * 25)}
                          </span>
                        </td>
                        <td className="text-center p-3">
                          <span className="text-gray-400 text-sm">Not Due</span>
                        </td>
                        <td className="text-center p-3">
                          <span className="font-semibold">
                            {(3.0 + Math.random()).toFixed(1)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {selectedClass.students > 8 && (
                <div className="text-center mt-4">
                  <Button variant="outline">
                    View All {selectedClass.students} Students
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Attendance Tab */}
        <TabsContent value="attendance" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Attendance Tracking</h3>
            <Button>
              <Edit className="w-4 h-4 mr-2" />
              Take Attendance
            </Button>
          </div>

          {/* Today's Attendance */}
          <div className="grid md:grid-cols-2 gap-6">
            {attendanceData.map((attendance, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-lg">{attendance.class}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 text-center mb-4">
                    <div>
                      <div className="text-2xl font-bold text-green-600">{attendance.present}</div>
                      <div className="text-sm text-gray-600">Present</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-600">{attendance.absent}</div>
                      <div className="text-sm text-gray-600">Absent</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-yellow-600">{attendance.tardy}</div>
                      <div className="text-sm text-gray-600">Tardy</div>
                    </div>
                  </div>
                  <Progress value={(attendance.present / attendance.total) * 100} />
                  <div className="text-center text-sm text-gray-600 mt-2">
                    {((attendance.present / attendance.total) * 100).toFixed(1)}% attendance rate
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Attendance History */}
          <Card>
            <CardHeader>
              <CardTitle>Weekly Attendance Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Class</th>
                      <th className="text-center p-3">Mon</th>
                      <th className="text-center p-3">Tue</th>
                      <th className="text-center p-3">Wed</th>
                      <th className="text-center p-3">Thu</th>
                      <th className="text-center p-3">Fri</th>
                      <th className="text-center p-3">Weekly %</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentClasses.map(cls => (
                      <tr key={cls.id} className="border-b hover:bg-gray-50">
                        <td className="p-3 font-medium">{cls.name}</td>
                        <td className="text-center p-3">
                          <Badge className="bg-green-100 text-green-800">
                            {cls.students - Math.floor(Math.random() * 3)}
                          </Badge>
                        </td>
                        <td className="text-center p-3">
                          <Badge className="bg-green-100 text-green-800">
                            {cls.students - Math.floor(Math.random() * 2)}
                          </Badge>
                        </td>
                        <td className="text-center p-3">
                          <Badge className="bg-yellow-100 text-yellow-800">
                            {cls.students - Math.floor(Math.random() * 4)}
                          </Badge>
                        </td>
                        <td className="text-center p-3">
                          <Badge className="bg-green-100 text-green-800">
                            {cls.students - Math.floor(Math.random() * 2)}
                          </Badge>
                        </td>
                        <td className="text-center p-3">
                          <Badge className="bg-green-100 text-green-800">
                            {cls.students - Math.floor(Math.random() * 3)}
                          </Badge>
                        </td>
                        <td className="text-center p-3 font-semibold">
                          {cls.attendance.toFixed(1)}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Communication Tab */}
        <TabsContent value="communication" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Parent Communication</h3>
            <Dialog open={showMessageDialog} onOpenChange={setShowMessageDialog}>
              <DialogTrigger asChild>
                <Button>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Send Message to Parent</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Select Student</label>
                      <select className="w-full p-2 border rounded-md">
                        <option>Diego Rodriguez</option>
                        <option>Emma Wilson</option>
                        <option>Alex Chen</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Priority</label>
                      <select className="w-full p-2 border rounded-md">
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject</label>
                    <Input placeholder="Message subject..." />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea placeholder="Your message..." className="min-h-32" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch />
                    <span className="text-sm">Send copy to counselor</span>
                  </div>
                  <Button className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Messages */}
          <div className="space-y-4">
            {parentMessages.map(message => (
              <Card key={message.id} className={!message.replied ? 'border-blue-200 bg-blue-50' : ''}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-semibold">{message.subject}</h4>
                      <p className="text-sm text-gray-600">
                        From: {message.parent} • Re: {message.student}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getPriorityColor(message.priority)}>
                        {message.priority}
                      </Badge>
                      {!message.replied && <Badge>New</Badge>}
                    </div>
                  </div>

                  <p className="text-sm mb-4">{message.message}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{formatDate(message.date)}</span>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Phone className="w-4 h-4 mr-2" />
                        Call
                      </Button>
                      <Button size="sm" variant="outline">
                        <Video className="w-4 h-4 mr-2" />
                        Video Meet
                      </Button>
                      <Button size="sm">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Reply
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Resources Tab */}
        <TabsContent value="resources" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Teaching Resources</h3>
            <Dialog open={showResourceDialog} onOpenChange={setShowResourceDialog}>
              <DialogTrigger asChild>
                <Button>
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Resource
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Upload Teaching Resource</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Resource Title</label>
                    <Input placeholder="Resource title..." />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Category</label>
                      <select className="w-full p-2 border rounded-md">
                        <option>Lesson Plans</option>
                        <option>Worksheets</option>
                        <option>Assessment</option>
                        <option>Activities</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Subject</label>
                      <select className="w-full p-2 border rounded-md">
                        <option>Algebra I</option>
                        <option>Pre-Algebra</option>
                        <option>Geometry</option>
                        <option>General Math</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Description</label>
                    <Textarea placeholder="Resource description..." />
                  </div>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch />
                    <span className="text-sm">Share with other teachers</span>
                  </div>
                  <Button className="w-full">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Resource
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Resource Library */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachingResources.map((resource, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline">{resource.category}</Badge>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(resource.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">({resource.rating})</span>
                    </div>
                  </div>

                  <h4 className="font-semibold mb-2">{resource.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{resource.subject}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{resource.downloads} downloads</span>
                    {resource.shared && <Badge className="bg-green-100 text-green-800">Shared</Badge>}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button size="sm" variant="outline">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Professional Development Tab */}
        <TabsContent value="development" className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Professional Development</h3>
            <p className="text-gray-600">Continue your professional growth with workshops and training opportunities</p>
          </div>

          {/* PD Requirements */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-600">12</div>
                  <div className="text-sm text-gray-600">Required Credits</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">8</div>
                  <div className="text-sm text-gray-600">Credits Earned</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Target className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-orange-600">4</div>
                  <div className="text-sm text-gray-600">Credits Remaining</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Available Workshops */}
          <Card>
            <CardHeader>
              <CardTitle>Available Workshops</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {professionalDevelopment.map((workshop, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">{workshop.title}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(workshop.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {workshop.time}
                        </span>
                        <span>{workshop.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{workshop.credits} Credits</div>
                      {workshop.registered ? (
                        <Badge className="bg-green-100 text-green-800">Registered</Badge>
                      ) : (
                        <Button size="sm">Register</Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Progress Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Professional Development Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Annual Requirement Progress</span>
                    <span>8/12 Credits (67%)</span>
                  </div>
                  <Progress value={67} />
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <Presentation className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <div className="font-semibold">3</div>
                    <div className="text-sm text-gray-600">Workshops Completed</div>
                  </div>
                  <div className="text-center">
                    <Clock className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <div className="font-semibold">24</div>
                    <div className="text-sm text-gray-600">Hours Invested</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}