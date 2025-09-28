import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  Users,
  Upload,
  Download,
  MessageCircle,
  BarChart3,
  Target,
  Award,
  Bell,
  Folder,
  Share,
  Video,
  MapPin,
  User,
  GraduationCap,
  TrendingUp,
  AlertCircle,
  Star,
  Eye,
  Edit,
  Send,
  Plus
} from 'lucide-react'

const studentProfile = {
  name: 'Emma Rodriguez',
  grade: '11th Grade',
  studentId: 'AR-2025-1847',
  gpa: 3.85,
  attendance: 96.2,
  creditsEarned: 18.5,
  creditsNeeded: 24,
  graduationYear: '2026'
}

const gradeData = [
  {
    subject: 'AP Chemistry',
    teacher: 'Mr. Chen',
    currentGrade: 'A-',
    percentage: 91.5,
    trend: 'up',
    assignments: 12,
    missing: 0
  },
  {
    subject: 'English Literature',
    teacher: 'Ms. Johnson',
    currentGrade: 'A',
    percentage: 94.2,
    trend: 'stable',
    assignments: 8,
    missing: 0
  },
  {
    subject: 'AP US History',
    teacher: 'Mr. Thompson',
    currentGrade: 'B+',
    percentage: 87.8,
    trend: 'up',
    assignments: 15,
    missing: 1
  },
  {
    subject: 'Pre-Calculus',
    teacher: 'Mrs. Davis',
    currentGrade: 'A-',
    percentage: 90.3,
    trend: 'down',
    assignments: 20,
    missing: 2
  },
  {
    subject: 'Spanish III',
    teacher: 'Señora Martinez',
    currentGrade: 'A',
    percentage: 93.7,
    trend: 'up',
    assignments: 10,
    missing: 0
  },
  {
    subject: 'Physics',
    teacher: 'Dr. Wilson',
    currentGrade: 'B',
    percentage: 84.6,
    trend: 'stable',
    assignments: 11,
    missing: 1
  }
]

const upcomingAssignments = [
  {
    id: 1,
    title: 'Chemistry Lab Report - Organic Compounds',
    subject: 'AP Chemistry',
    dueDate: '2025-09-22',
    type: 'Lab Report',
    points: 50,
    status: 'pending',
    submitted: false
  },
  {
    id: 2,
    title: 'Essay: Civil War Causes Analysis',
    subject: 'AP US History',
    dueDate: '2025-09-24',
    type: 'Essay',
    points: 100,
    status: 'draft',
    submitted: false
  },
  {
    id: 3,
    title: 'Calculus Problem Set #8',
    subject: 'Pre-Calculus',
    dueDate: '2025-09-23',
    type: 'Problem Set',
    points: 25,
    status: 'completed',
    submitted: true
  },
  {
    id: 4,
    title: 'Spanish Conversation Video',
    subject: 'Spanish III',
    dueDate: '2025-09-25',
    type: 'Video Project',
    points: 75,
    status: 'pending',
    submitted: false
  }
]

const classSchedule = [
  {
    period: 1,
    subject: 'AP Chemistry',
    teacher: 'Mr. Chen',
    room: 'Room 204',
    time: '8:00 AM - 9:15 AM'
  },
  {
    period: 2,
    subject: 'English Literature',
    teacher: 'Ms. Johnson',
    room: 'Room 118',
    time: '9:20 AM - 10:35 AM'
  },
  {
    period: 3,
    subject: 'Lunch',
    teacher: null,
    room: 'Cafeteria',
    time: '10:40 AM - 11:25 AM'
  },
  {
    period: 4,
    subject: 'AP US History',
    teacher: 'Mr. Thompson',
    room: 'Room 305',
    time: '11:30 AM - 12:45 PM'
  },
  {
    period: 5,
    subject: 'Pre-Calculus',
    teacher: 'Mrs. Davis',
    room: 'Room 221',
    time: '12:50 PM - 2:05 PM'
  },
  {
    period: 6,
    subject: 'Spanish III',
    teacher: 'Señora Martinez',
    room: 'Room 156',
    time: '2:10 PM - 3:25 PM'
  },
  {
    period: 7,
    subject: 'Physics',
    teacher: 'Dr. Wilson',
    room: 'Room 208',
    time: '3:30 PM - 4:45 PM'
  }
]

const attendanceData = {
  present: 162,
  absent: 6,
  tardy: 3,
  excused: 4,
  percentage: 96.2
}

const digitalLocker = [
  {
    id: 1,
    name: 'Chemistry Lab Reports',
    type: 'folder',
    files: 8,
    size: '12.4 MB',
    modified: '2025-09-20'
  },
  {
    id: 2,
    name: 'History Research Project.docx',
    type: 'document',
    size: '2.1 MB',
    modified: '2025-09-18'
  },
  {
    id: 3,
    name: 'Math Problem Solutions',
    type: 'folder',
    files: 15,
    size: '5.7 MB',
    modified: '2025-09-19'
  },
  {
    id: 4,
    name: 'Spanish Vocabulary Audio.mp3',
    type: 'audio',
    size: '4.2 MB',
    modified: '2025-09-17'
  }
]

const studyGroups = [
  {
    id: 1,
    name: 'AP Chemistry Study Group',
    subject: 'Chemistry',
    members: 6,
    nextMeeting: '2025-09-22T15:30:00Z',
    location: 'Library Room B',
    leader: 'Sarah Kim'
  },
  {
    id: 2,
    name: 'History Essay Peer Review',
    subject: 'History',
    members: 4,
    nextMeeting: '2025-09-23T16:00:00Z',
    location: 'Room 305',
    leader: 'Marcus Johnson'
  },
  {
    id: 3,
    name: 'Calculus Homework Help',
    subject: 'Mathematics',
    members: 8,
    nextMeeting: '2025-09-24T14:00:00Z',
    location: 'Math Lab',
    leader: 'You'
  }
]

export function StudentPortal() {
  const [selectedSubject, setSelectedSubject] = useState('all')
  const [showSubmissionDialog, setShowSubmissionDialog] = useState(false)
  const [selectedAssignment, setSelectedAssignment] = useState<typeof upcomingAssignments[0] | null>(null)

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getGradeColor = (percentage: number) => {
    if (percentage >= 93) return 'text-green-600'
    if (percentage >= 85) return 'text-blue-600'
    if (percentage >= 70) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800'
      case 'draft': return 'bg-yellow-100 text-yellow-800'
      case 'pending': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getTrendIcon = (trend: string) => {
    if (trend === 'up') return <TrendingUp className="w-4 h-4 text-green-500" />
    if (trend === 'down') return <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />
    return <div className="w-4 h-4 bg-gray-400 rounded-full" />
  }

  return (
    <div className="space-y-8">
      {/* Student Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl p-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">{studentProfile.name}</h2>
              <p className="text-blue-100">{studentProfile.grade} • ID: {studentProfile.studentId}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 flex-1">
            <div className="text-center">
              <div className="text-2xl font-bold">{studentProfile.gpa}</div>
              <div className="text-blue-200 text-sm">Current GPA</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{studentProfile.attendance}%</div>
              <div className="text-blue-200 text-sm">Attendance</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{studentProfile.creditsEarned}/{studentProfile.creditsNeeded}</div>
              <div className="text-blue-200 text-sm">Credits</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{studentProfile.graduationYear}</div>
              <div className="text-blue-200 text-sm">Graduation</div>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="dashboard" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="grades">Grades</TabsTrigger>
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="locker">Digital Locker</TabsTrigger>
          <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
        </TabsList>

        {/* Dashboard */}
        <TabsContent value="dashboard" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* GPA Overview */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Academic Performance</h3>
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{studentProfile.gpa}</div>
                  <div className="text-sm text-gray-600">Cumulative GPA</div>
                  <Progress value={studentProfile.gpa * 25} className="mt-3" />
                </div>
              </CardContent>
            </Card>

            {/* Attendance */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Attendance Record</h3>
                  <Calendar className="w-5 h-5 text-green-600" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Present: {attendanceData.present} days</span>
                    <span className="text-green-600">96.2%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Absent: {attendanceData.absent} days</span>
                    <span>Tardy: {attendanceData.tardy}</span>
                  </div>
                  <Progress value={attendanceData.percentage} className="mt-2" />
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Assignments */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Due Soon</h3>
                  <Clock className="w-5 h-5 text-orange-600" />
                </div>
                <div className="space-y-3">
                  {upcomingAssignments.slice(0, 3).map(assignment => (
                    <div key={assignment.id} className="flex items-center justify-between text-sm">
                      <div>
                        <div className="font-medium truncate">{assignment.title.split(' - ')[0]}</div>
                        <div className="text-gray-500">{assignment.subject}</div>
                      </div>
                      <Badge className={getStatusColor(assignment.status)}>
                        {assignment.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Grades Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Grade Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
                {gradeData.map(subject => (
                  <div key={subject.subject} className="text-center">
                    <div className={`text-xl font-bold ${getGradeColor(subject.percentage)}`}>
                      {subject.currentGrade}
                    </div>
                    <div className="text-sm text-gray-600 mb-2">{subject.subject}</div>
                    <div className="flex items-center justify-center">
                      {getTrendIcon(subject.trend)}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Grades Tab */}
        <TabsContent value="grades" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Grade Book</h3>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Transcript
            </Button>
          </div>

          <div className="space-y-4">
            {gradeData.map(subject => (
              <Card key={subject.subject}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold">{subject.subject}</h4>
                      <p className="text-gray-600">{subject.teacher}</p>
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${getGradeColor(subject.percentage)}`}>
                        {subject.currentGrade}
                      </div>
                      <div className="text-sm text-gray-500">{subject.percentage}%</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Assignments:</span>
                      <span className="font-medium ml-1">{subject.assignments}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Missing:</span>
                      <span className={`font-medium ml-1 ${subject.missing > 0 ? 'text-red-600' : 'text-green-600'}`}>
                        {subject.missing}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-500">Trend:</span>
                      {getTrendIcon(subject.trend)}
                    </div>
                  </div>

                  <Progress value={subject.percentage} className="mt-4" />
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Assignments Tab */}
        <TabsContent value="assignments" className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <h3 className="text-2xl font-bold">Assignment Center</h3>
            <div className="flex gap-2">
              <Button
                variant={selectedSubject === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedSubject('all')}
              >
                All Subjects
              </Button>
              {['pending', 'draft', 'completed'].map(status => (
                <Button
                  key={status}
                  variant={selectedSubject === status ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedSubject(status)}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {upcomingAssignments.map(assignment => (
              <Card key={assignment.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold">{assignment.title}</h4>
                        <Badge className={getStatusColor(assignment.status)}>
                          {assignment.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>{assignment.subject}</span>
                        <span>•</span>
                        <span>{assignment.type}</span>
                        <span>•</span>
                        <span>{assignment.points} points</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">Due: {formatDate(assignment.dueDate)}</div>
                      <div className="text-sm text-gray-500">
                        {assignment.submitted ? 'Submitted' : 'Not submitted'}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" variant="outline" onClick={() => setSelectedAssignment(assignment)}>
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{selectedAssignment?.title}</DialogTitle>
                        </DialogHeader>
                        {selectedAssignment && (
                          <div className="space-y-4">
                            <div>
                              <p className="font-medium">Subject: {selectedAssignment.subject}</p>
                              <p className="font-medium">Type: {selectedAssignment.type}</p>
                              <p className="font-medium">Points: {selectedAssignment.points}</p>
                              <p className="font-medium">Due: {formatDate(selectedAssignment.dueDate)}</p>
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-2">Submit Assignment</label>
                              <Textarea placeholder="Add comments or notes..." className="mb-3" />
                              <Button className="w-full">
                                <Upload className="w-4 h-4 mr-2" />
                                Upload File
                              </Button>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>

                    {!assignment.submitted && (
                      <Button size="sm">
                        <Upload className="w-4 h-4 mr-2" />
                        Submit
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Schedule Tab */}
        <TabsContent value="schedule" className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Daily Class Schedule</h3>
            <p className="text-gray-600">Today's classes and locations</p>
          </div>

          <div className="space-y-3">
            {classSchedule.map(period => (
              <Card key={period.period} className={period.subject === 'Lunch' ? 'bg-green-50' : ''}>
                <CardContent className="pt-4 pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="font-bold text-primary">{period.period}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">{period.subject}</h4>
                        {period.teacher && <p className="text-gray-600 text-sm">{period.teacher}</p>}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-medium">{period.time}</div>
                      <div className="text-sm text-gray-600 flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {period.room}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Digital Locker Tab */}
        <TabsContent value="locker" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Digital Locker</h3>
            <Button>
              <Upload className="w-4 h-4 mr-2" />
              Upload File
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {digitalLocker.map(item => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {item.type === 'folder' ? (
                        <Folder className="w-8 h-8 text-blue-600" />
                      ) : item.type === 'document' ? (
                        <FileText className="w-8 h-8 text-green-600" />
                      ) : item.type === 'audio' ? (
                        <Video className="w-8 h-8 text-purple-600" />
                      ) : (
                        <FileText className="w-8 h-8 text-gray-600" />
                      )}
                      <div>
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        <p className="text-xs text-gray-500">
                          {item.type === 'folder' ? `${item.files} files` : item.size}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-500 mb-3">
                    Modified: {item.modified}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Eye className="w-3 h-3 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline">
                      <Share className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Collaboration Tab */}
        <TabsContent value="collaboration" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Peer Collaboration</h3>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Study Group
            </Button>
          </div>

          <div className="space-y-4">
            {studyGroups.map(group => (
              <Card key={group.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-semibold">{group.name}</h4>
                      <p className="text-gray-600 text-sm">Led by {group.leader}</p>
                    </div>
                    <Badge variant="outline">{group.subject}</Badge>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span>{group.members} members</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-green-600" />
                      <span>Next: {formatDate(group.nextMeeting)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-orange-600" />
                      <span>{group.location}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Join Discussion
                    </Button>
                    <Button size="sm" variant="outline">
                      <Calendar className="w-4 h-4 mr-2" />
                      View Schedule
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}