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
  Shield,
  Users,
  BarChart3,
  MessageSquare,
  Calendar,
  DollarSign,
  FileCheck,
  Laptop,
  Bell,
  Settings,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Activity,
  Database,
  Lock,
  Eye,
  Edit,
  Send,
  Plus,
  Download,
  Upload,
  Search,
  Filter,
  Globe,
  Smartphone,
  Mail,
  Phone,
  Video,
  PieChart,
  LineChart,
  BarChart4,
  MonitorSpeaker,
  Wifi,
  HardDrive,
  Server,
  Zap,
  AlertOctagon,
  Target,
  Clock
} from 'lucide-react'

const adminData = {
  name: 'Dr. Michael Chen',
  position: 'Principal',
  employeeId: 'ADM-2015-0001',
  email: 'michael.chen@school.edu',
  phone: '(555) 123-0001',
  yearsAtSchool: 9,
  totalStudents: 1247,
  totalStaff: 89,
  totalTeachers: 58
}

const schoolMetrics = {
  enrollment: {
    current: 1247,
    target: 1300,
    change: +23,
    changePercent: +1.9
  },
  attendance: {
    current: 94.2,
    target: 95.0,
    change: -0.8,
    changePercent: -0.8
  },
  gpa: {
    current: 3.42,
    target: 3.50,
    change: +0.05,
    changePercent: +1.5
  },
  retention: {
    current: 96.8,
    target: 97.0,
    change: +0.3,
    changePercent: +0.3
  }
}

const financialOverview = {
  budget: {
    total: 15750000,
    spent: 8940000,
    remaining: 6810000,
    percentSpent: 56.8
  },
  revenue: {
    tuition: 12500000,
    grants: 2100000,
    donations: 890000,
    other: 260000
  },
  expenses: {
    salaries: 9800000,
    facilities: 2400000,
    equipment: 1200000,
    programs: 1100000,
    other: 1250000
  }
}

const systemHealth = {
  servers: { status: 'healthy', uptime: 99.9, issues: 0 },
  network: { status: 'healthy', bandwidth: 85.2, issues: 1 },
  applications: { status: 'warning', uptime: 98.7, issues: 3 },
  security: { status: 'healthy', threats: 0, lastScan: '2025-09-20T02:00:00Z' }
}

const recentAlerts = [
  {
    id: 1,
    type: 'security',
    severity: 'high',
    title: 'Multiple failed login attempts detected',
    description: 'IP 192.168.1.45 attempted 15 failed logins in 5 minutes',
    timestamp: '2025-09-20T09:15:00Z',
    resolved: false
  },
  {
    id: 2,
    type: 'system',
    severity: 'medium',
    title: 'Student portal experiencing slow response times',
    description: 'Average response time increased to 3.2 seconds',
    timestamp: '2025-09-20T08:30:00Z',
    resolved: false
  },
  {
    id: 3,
    type: 'compliance',
    severity: 'low',
    title: 'Monthly data backup completed',
    description: 'All student records successfully backed up to secure storage',
    timestamp: '2025-09-20T06:00:00Z',
    resolved: true
  }
]

const communicationStats = {
  totalMessages: 1247,
  broadcastsSent: 23,
  eventNotifications: 156,
  emergencyAlerts: 0,
  parentEngagement: 87.3,
  teacherParticipation: 94.1
}

const upcomingEvents = [
  {
    id: 1,
    title: 'Board of Directors Meeting',
    date: '2025-09-22',
    time: '19:00',
    attendees: 12,
    location: 'Conference Room A'
  },
  {
    id: 2,
    title: 'Staff Development Day',
    date: '2025-09-25',
    time: '08:00',
    attendees: 89,
    location: 'Main Auditorium'
  },
  {
    id: 3,
    title: 'Parent Information Evening',
    date: '2025-09-28',
    time: '18:30',
    attendees: 245,
    location: 'Gymnasium'
  }
]

const complianceStatus = [
  { area: 'Data Privacy (FERPA)', status: 'compliant', lastAudit: '2025-08-15', nextReview: '2025-11-15' },
  { area: 'Financial Reporting', status: 'compliant', lastAudit: '2025-09-01', nextReview: '2025-12-01' },
  { area: 'Safety Protocols', status: 'pending', lastAudit: '2025-07-20', nextReview: '2025-10-20' },
  { area: 'Curriculum Standards', status: 'compliant', lastAudit: '2025-08-30', nextReview: '2025-11-30' }
]

export function AdminPortal() {
  const [selectedTimeRange, setSelectedTimeRange] = useState('30d')
  const [showEventDialog, setShowEventDialog] = useState(false)
  const [showBroadcastDialog, setShowBroadcastDialog] = useState(false)
  const [showAlertDialog, setShowAlertDialog] = useState(false)

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount)
  }

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const formatDateTime = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200'
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'low': return 'bg-green-100 text-green-800 border-green-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-600'
      case 'warning': return 'text-yellow-600'
      case 'critical': return 'text-red-600'
      case 'compliant': return 'text-green-600'
      case 'pending': return 'text-yellow-600'
      case 'non-compliant': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-8">
      {/* Admin Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-xl p-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">{adminData.name}</h2>
              <p className="text-purple-100">{adminData.position} • {adminData.yearsAtSchool} Years of Leadership</p>
            </div>
          </div>
          
          <div className="flex gap-6 flex-1 justify-end">
            <div className="text-center">
              <div className="text-2xl font-bold">{adminData.totalStudents.toLocaleString()}</div>
              <div className="text-purple-200 text-sm">Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{adminData.totalTeachers}</div>
              <div className="text-purple-200 text-sm">Teachers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{adminData.totalStaff}</div>
              <div className="text-purple-200 text-sm">Total Staff</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{systemHealth.security.threats}</div>
              <div className="text-purple-200 text-sm">Security Alerts</div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Enrollment</h3>
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{schoolMetrics.enrollment.current.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Target: {schoolMetrics.enrollment.target.toLocaleString()}</div>
              <div className="flex items-center justify-center gap-1 mt-2">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-sm text-green-600">+{schoolMetrics.enrollment.change}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Attendance</h3>
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{schoolMetrics.attendance.current}%</div>
              <div className="text-sm text-gray-600">Target: {schoolMetrics.attendance.target}%</div>
              <div className="flex items-center justify-center gap-1 mt-2">
                <TrendingDown className="w-4 h-4 text-red-600" />
                <span className="text-sm text-red-600">{schoolMetrics.attendance.change}%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Average GPA</h3>
              <Target className="w-5 h-5 text-purple-600" />
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">{schoolMetrics.gpa.current}</div>
              <div className="text-sm text-gray-600">Target: {schoolMetrics.gpa.target}</div>
              <div className="flex items-center justify-center gap-1 mt-2">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-sm text-green-600">+{schoolMetrics.gpa.change}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Retention Rate</h3>
              <Activity className="w-5 h-5 text-orange-600" />
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">{schoolMetrics.retention.current}%</div>
              <div className="text-sm text-gray-600">Target: {schoolMetrics.retention.target}%</div>
              <div className="flex items-center justify-center gap-1 mt-2">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-sm text-green-600">+{schoolMetrics.retention.change}%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="analytics" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="communication">Communications</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
          <TabsTrigger value="technology">Technology</TabsTrigger>
        </TabsList>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-6">
          {/* Time Range Selector */}
          <div className="flex items-center gap-4">
            <h3 className="text-2xl font-bold">School Analytics Dashboard</h3>
            <div className="flex gap-2 ml-auto">
              {['7d', '30d', '90d', '1y'].map(range => (
                <Button
                  key={range}
                  variant={selectedTimeRange === range ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedTimeRange(range)}
                >
                  {range}
                </Button>
              ))}
            </div>
          </div>

          {/* Analytics Charts */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Enrollment Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <LineChart className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Enrollment trend visualization</p>
                    <p className="text-sm text-gray-400">Interactive chart would render here</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="w-5 h-5" />
                  Grade Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <PieChart className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Grade distribution chart</p>
                    <p className="text-sm text-gray-400">Interactive chart would render here</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart4 className="w-5 h-5" />
                  Department Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { dept: 'Mathematics', score: 94.2, change: +2.1 },
                    { dept: 'English', score: 91.8, change: +0.8 },
                    { dept: 'Science', score: 93.5, change: -0.3 },
                    { dept: 'History', score: 89.7, change: +1.4 },
                    { dept: 'Arts', score: 96.1, change: +0.6 }
                  ].map((dept, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">{dept.dept}</span>
                          <span className="text-sm">{dept.score}%</span>
                        </div>
                        <Progress value={dept.score} className="h-2" />
                      </div>
                      <div className="ml-4 flex items-center gap-1">
                        {dept.change > 0 ? (
                          <TrendingUp className="w-4 h-4 text-green-600" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-600" />
                        )}
                        <span className={`text-sm ${dept.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {dept.change > 0 ? '+' : ''}{dept.change}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Daily Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">847</div>
                    <div className="text-sm text-gray-600">Students Present</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">56</div>
                    <div className="text-sm text-gray-600">Teachers Active</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">234</div>
                    <div className="text-sm text-gray-600">Parent Logins</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">12</div>
                    <div className="text-sm text-gray-600">Events Today</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Recent Alerts & Notifications
                </div>
                <Button size="sm" onClick={() => setShowAlertDialog(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Create Alert
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAlerts.map(alert => (
                  <div key={alert.id} className={`p-4 rounded-lg border ${getSeverityColor(alert.severity)}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold">{alert.title}</h4>
                          <Badge className={getSeverityColor(alert.severity)}>
                            {alert.severity}
                          </Badge>
                          {alert.resolved && <Badge className="bg-green-100 text-green-800">Resolved</Badge>}
                        </div>
                        <p className="text-sm mb-2">{alert.description}</p>
                        <p className="text-xs text-gray-500">{formatDateTime(alert.timestamp)}</p>
                      </div>
                      {!alert.resolved && (
                        <Button size="sm" variant="outline">
                          Resolve
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Communication Tab */}
        <TabsContent value="communication" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Communication Management</h3>
            <Dialog open={showBroadcastDialog} onOpenChange={setShowBroadcastDialog}>
              <DialogTrigger asChild>
                <Button>
                  <Send className="w-4 h-4 mr-2" />
                  Send Broadcast
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Send School-wide Broadcast</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Recipient Groups</label>
                      <div className="space-y-2">
                        {['All Parents', 'All Teachers', 'All Staff', 'All Students'].map(group => (
                          <div key={group} className="flex items-center gap-2">
                            <Switch />
                            <span className="text-sm">{group}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Priority Level</label>
                      <select className="w-full p-2 border rounded-md">
                        <option value="low">Low - General Information</option>
                        <option value="medium">Medium - Important Notice</option>
                        <option value="high">High - Urgent Alert</option>
                        <option value="emergency">Emergency - Immediate Action</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject</label>
                    <Input placeholder="Broadcast subject..." />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea placeholder="Your message..." className="min-h-32" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                      <Switch />
                      <span className="text-sm">Email</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch />
                      <span className="text-sm">SMS</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch />
                      <span className="text-sm">Portal Alert</span>
                    </div>
                  </div>
                  <Button className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Broadcast
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Communication Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <MessageSquare className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">{communicationStats.totalMessages.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Total Messages</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Mail className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">{communicationStats.broadcastsSent}</div>
                  <div className="text-sm text-gray-600">Broadcasts Sent</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Bell className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-orange-600">{communicationStats.eventNotifications}</div>
                  <div className="text-sm text-gray-600">Event Notifications</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <AlertTriangle className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-600">{communicationStats.emergencyAlerts}</div>
                  <div className="text-sm text-gray-600">Emergency Alerts</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Engagement Metrics */}
          <Card>
            <CardHeader>
              <CardTitle>Community Engagement</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Parent Engagement Rate</span>
                    <span className="text-sm">{communicationStats.parentEngagement}%</span>
                  </div>
                  <Progress value={communicationStats.parentEngagement} />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Teacher Participation Rate</span>
                    <span className="text-sm">{communicationStats.teacherParticipation}%</span>
                  </div>
                  <Progress value={communicationStats.teacherParticipation} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Events Tab */}
        <TabsContent value="events" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Event Coordination</h3>
            <Dialog open={showEventDialog} onOpenChange={setShowEventDialog}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Create Event
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Event</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Event Title</label>
                      <Input placeholder="Event title..." />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Category</label>
                      <select className="w-full p-2 border rounded-md">
                        <option>Academic</option>
                        <option>Social</option>
                        <option>Sports</option>
                        <option>Arts</option>
                        <option>Administrative</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Date</label>
                      <Input type="date" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Time</label>
                      <Input type="time" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Location</label>
                    <Input placeholder="Event location..." />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Description</label>
                    <Textarea placeholder="Event description..." />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Max Attendees</label>
                      <Input type="number" placeholder="0 = unlimited" />
                    </div>
                    <div className="flex items-center gap-2 pt-6">
                      <Switch />
                      <span className="text-sm">Requires Registration</span>
                    </div>
                  </div>
                  <Button className="w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Create Event
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Administrative Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map(event => (
                  <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">{event.title}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(event.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {event.time}
                        </span>
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{event.attendees} attendees</div>
                      <div className="flex gap-2 mt-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-2" />
                          View
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Event Calendar Widget */}
          <Card>
            <CardHeader>
              <CardTitle>School Calendar Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                <div className="text-center">
                  <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Interactive calendar widget</p>
                  <p className="text-sm text-gray-400">Full calendar view would render here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Financial Tab */}
        <TabsContent value="financial" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Financial Oversight</h3>
            <Button>
              <Download className="w-4 h-4 mr-2" />
              Export Financial Report
            </Button>
          </div>

          {/* Budget Overview */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {formatCurrency(financialOverview.budget.total)}
                  </div>
                  <div className="text-sm text-gray-600 mb-4">Total Budget</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Spent</span>
                      <span>{formatCurrency(financialOverview.budget.spent)}</span>
                    </div>
                    <Progress value={financialOverview.budget.percentSpent} />
                    <div className="text-center text-sm text-gray-600">
                      {financialOverview.budget.percentSpent}% utilized
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-4 text-center">Revenue Sources</h4>
                <div className="space-y-3">
                  {Object.entries(financialOverview.revenue).map(([source, amount]) => (
                    <div key={source} className="flex justify-between items-center">
                      <span className="text-sm capitalize">{source}</span>
                      <span className="font-medium">{formatCurrency(amount)}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-4 text-center">Major Expenses</h4>
                <div className="space-y-3">
                  {Object.entries(financialOverview.expenses).map(([category, amount]) => (
                    <div key={category} className="flex justify-between items-center">
                      <span className="text-sm capitalize">{category}</span>
                      <span className="font-medium">{formatCurrency(amount)}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Financial Charts */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Budget vs. Actual Spending</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <BarChart4 className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Budget comparison chart</p>
                    <p className="text-sm text-gray-400">Interactive chart would render here</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Revenue Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <PieChart className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Revenue breakdown chart</p>
                    <p className="text-sm text-gray-400">Interactive chart would render here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Compliance Tab */}
        <TabsContent value="compliance" className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Compliance Monitoring</h3>
            <p className="text-gray-600">Ensure adherence to educational standards and regulatory requirements</p>
          </div>

          {/* Compliance Status */}
          <Card>
            <CardHeader>
              <CardTitle>Compliance Status Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {complianceStatus.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">{item.area}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                        <span>Last Audit: {formatDate(item.lastAudit)}</span>
                        <span>Next Review: {formatDate(item.nextReview)}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className={`${getStatusColor(item.status)} bg-opacity-10`}>
                        <span className={getStatusColor(item.status)}>{item.status}</span>
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Audit History */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Audit Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-medium">Financial Audit Completed</h4>
                    <p className="text-sm text-gray-600">All financial records reviewed and found compliant with state regulations.</p>
                    <p className="text-xs text-gray-500 mt-1">September 1, 2025</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-1" />
                  <div>
                    <h4 className="font-medium">Safety Protocol Review Pending</h4>
                    <p className="text-sm text-gray-600">Annual safety protocol review scheduled for next month.</p>
                    <p className="text-xs text-gray-500 mt-1">Due: October 20, 2025</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <FileCheck className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-medium">FERPA Compliance Updated</h4>
                    <p className="text-sm text-gray-600">Student privacy policies reviewed and updated per federal guidelines.</p>
                    <p className="text-xs text-gray-500 mt-1">August 15, 2025</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Technology Tab */}
        <TabsContent value="technology" className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Technology Management</h3>
            <p className="text-gray-600">Monitor system health, security, and infrastructure performance</p>
          </div>

          {/* System Health */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Server className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">{systemHealth.servers.uptime}%</div>
                  <div className="text-sm text-gray-600 mb-2">Server Uptime</div>
                  <Badge className={`${getStatusColor(systemHealth.servers.status)} bg-opacity-10`}>
                    <span className={getStatusColor(systemHealth.servers.status)}>{systemHealth.servers.status}</span>
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Wifi className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">{systemHealth.network.bandwidth}%</div>
                  <div className="text-sm text-gray-600 mb-2">Network Usage</div>
                  <Badge className={`${getStatusColor(systemHealth.network.status)} bg-opacity-10`}>
                    <span className={getStatusColor(systemHealth.network.status)}>{systemHealth.network.status}</span>
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Laptop className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-yellow-600">{systemHealth.applications.uptime}%</div>
                  <div className="text-sm text-gray-600 mb-2">App Availability</div>
                  <Badge className={`${getStatusColor(systemHealth.applications.status)} bg-opacity-10`}>
                    <span className={getStatusColor(systemHealth.applications.status)}>{systemHealth.applications.status}</span>
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Lock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">{systemHealth.security.threats}</div>
                  <div className="text-sm text-gray-600 mb-2">Security Threats</div>
                  <Badge className={`${getStatusColor(systemHealth.security.status)} bg-opacity-10`}>
                    <span className={getStatusColor(systemHealth.security.status)}>{systemHealth.security.status}</span>
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Infrastructure Status */}
          <Card>
            <CardHeader>
              <CardTitle>Infrastructure Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-4">Server Performance</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">CPU Usage</span>
                      <span className="text-sm font-medium">34%</span>
                    </div>
                    <Progress value={34} />
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Memory Usage</span>
                      <span className="text-sm font-medium">67%</span>
                    </div>
                    <Progress value={67} />
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Storage Usage</span>
                      <span className="text-sm font-medium">45%</span>
                    </div>
                    <Progress value={45} />
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Security Status</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                      <span className="text-sm">Last Security Scan</span>
                      <span className="text-sm font-medium">{formatDateTime(systemHealth.security.lastScan)}</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                      <span className="text-sm">Firewall Status</span>
                      <span className="text-sm font-medium text-green-600">Active</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                      <span className="text-sm">System Updates</span>
                      <span className="text-sm font-medium text-yellow-600">3 Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* IT Support Requests */}
          <Card>
            <CardHeader>
              <CardTitle>Recent IT Support Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { id: 1, user: 'Sarah Johnson', issue: 'Gradebook login issues', status: 'open', priority: 'medium' },
                  { id: 2, user: 'Math Department', issue: 'Smartboard calibration needed', status: 'in-progress', priority: 'low' },
                  { id: 3, user: 'Maria Rodriguez', issue: 'Password reset request', status: 'resolved', priority: 'low' }
                ].map(ticket => (
                  <div key={ticket.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{ticket.issue}</h4>
                      <p className="text-sm text-gray-600">Submitted by: {ticket.user}</p>
                    </div>
                    <div className="text-right">
                      <Badge className={getPriorityColor(ticket.priority)}>
                        {ticket.priority}
                      </Badge>
                      <div className="mt-2">
                        <Badge variant={ticket.status === 'resolved' ? 'default' : 'outline'}>
                          {ticket.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Alert Dialog */}
      <Dialog open={showAlertDialog} onOpenChange={setShowAlertDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create System Alert</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Alert Type</label>
              <select className="w-full p-2 border rounded-md">
                <option>Security Alert</option>
                <option>System Maintenance</option>
                <option>Compliance Notice</option>
                <option>Performance Warning</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Severity Level</label>
              <select className="w-full p-2 border rounded-md">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="critical">Critical</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Alert Title</label>
              <Input placeholder="Alert title..." />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Description</label>
              <Textarea placeholder="Alert description..." />
            </div>
            <div className="flex items-center gap-2">
              <Switch />
              <span className="text-sm">Send notification to IT staff</span>
            </div>
            <Button className="w-full">
              <Bell className="w-4 h-4 mr-2" />
              Create Alert
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}