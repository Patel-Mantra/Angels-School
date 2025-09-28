import { useState } from 'react'
import { Layout } from '@/components/layout/Layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { StudentPortal } from '@/components/misc/StudentPortal'
import { ParentPortal } from '@/components/misc/ParentPortal'
import { TeacherPortal } from '@/components/misc/TeacherPortal'
import { AdminPortal } from '@/components/misc/AdminPortal'
import { SecurityAuth } from '@/components/misc/SecurityAuth'
import { 
  Shield,
  User,
  Users,
  GraduationCap,
  Settings,
  Lock,
  Eye,
  CheckCircle,
  Clock,
  AlertTriangle,
  Key,
  Smartphone,
  Globe,
  FileText,
  BarChart3,
  MessageSquare,
  Calendar,
  CreditCard,
  BookOpen,
  UserCheck,
  Database,
  Activity,
  Bell,
  LogIn,
  ArrowRight
} from 'lucide-react'

const portalTypes = [
  {
    id: 'student',
    title: 'Student Portal',
    description: 'Access grades, assignments, schedule, and collaborate with peers',
    icon: User,
    color: 'bg-blue-50 border-blue-200 text-blue-800',
    iconColor: 'text-blue-600',
    users: '2,847 active students',
    features: [
      'Real-time grade tracking',
      'Assignment management',
      'Interactive class schedule',
      'Digital locker & resources',
      'Peer collaboration tools'
    ]
  },
  {
    id: 'parent',
    title: 'Parent Portal',
    description: 'Monitor child progress, communicate with teachers, manage payments',
    icon: Users,
    color: 'bg-green-50 border-green-200 text-green-800',
    iconColor: 'text-green-600',
    users: '1,923 parent accounts',
    features: [
      'Multi-child progress tracking',
      'Direct teacher communication',
      'Online payment system',
      'Event registration',
      'Behavioral reports'
    ]
  },
  {
    id: 'teacher',
    title: 'Teacher Portal',
    description: 'Manage grades, track attendance, communicate with parents',
    icon: GraduationCap,
    color: 'bg-purple-50 border-purple-200 text-purple-800',
    iconColor: 'text-purple-600',
    users: '186 teaching staff',
    features: [
      'Digital gradebook',
      'Attendance tracking',
      'Parent messaging system',
      'Resource sharing',
      'Professional development'
    ]
  },
  {
    id: 'admin',
    title: 'Staff & Admin Portal',
    description: 'School analytics, event coordination, financial oversight',
    icon: Settings,
    color: 'bg-orange-50 border-orange-200 text-orange-800',
    iconColor: 'text-orange-600',
    users: '47 administrators',
    features: [
      'School analytics dashboard',
      'Communication management',
      'Financial oversight',
      'Compliance monitoring',
      'Technology management'
    ]
  }
]

const securityFeatures = [
  {
    icon: Shield,
    title: 'Multi-Factor Authentication',
    description: 'SMS, email, and authenticator app protection',
    status: 'active'
  },
  {
    icon: Key,
    title: 'Role-Based Permissions',
    description: 'Granular access control for different user types',
    status: 'active'
  },
  {
    icon: Clock,
    title: 'Session Management',
    description: 'Automatic logout and concurrent session limits',
    status: 'active'
  },
  {
    icon: Database,
    title: 'Data Encryption',
    description: 'End-to-end protection for sensitive information',
    status: 'active'
  }
]

const quickStats = {
  activeUsers: 4956,
  dailyLogins: 3247,
  securityAlerts: 0,
  systemUptime: 99.9
}

export default function Portals() {
  const [activeTab, setActiveTab] = useState('overview')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userRole, setUserRole] = useState<'student' | 'parent' | 'teacher' | 'admin' | null>(null)
  const [showLogin, setShowLogin] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')

  // Demo credentials
  const demoCredentials = {
    student: { username: 'student', password: 'demo123' },
    parent: { username: 'parent', password: 'demo123' },
    teacher: { username: 'teacher', password: 'demo123' },
    admin: { username: 'admin', password: 'demo123' }
  }

  const handlePortalAccess = (portalType: string) => {
    if (!isAuthenticated) {
      setShowLogin(true)
      return
    }
    setActiveTab(portalType)
  }

  const validateAndLogin = () => {
    setLoginError('')
    
    // Check credentials against demo accounts
    for (const [role, creds] of Object.entries(demoCredentials)) {
      if (username === creds.username && password === creds.password) {
        setIsAuthenticated(true)
        setUserRole(role as any)
        setShowLogin(false)
        setActiveTab(role)
        setUsername('')
        setPassword('')
        return
      }
    }
    
    setLoginError('Invalid credentials. Please use the demo credentials provided above.')
  }

  const handleLogin = (role: string) => {
    // Fill in demo credentials for quick access
    const creds = demoCredentials[role as keyof typeof demoCredentials]
    setUsername(creds.username)
    setPassword(creds.password)
    
    // Auto-login after a brief delay to show the credentials
    setTimeout(() => {
      setIsAuthenticated(true)
      setUserRole(role as any)
      setShowLogin(false)
      setActiveTab(role)
      setUsername('')
      setPassword('')
    }, 500)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setUserRole(null)
    setActiveTab('overview')
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          {/* User Status Bar */}
          {isAuthenticated && userRole && (
            <div className="mb-6 bg-white rounded-lg border shadow-sm p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Authenticated as</span>
                <Badge variant="secondary" className={`capitalize ${
                  userRole === 'student' ? 'bg-blue-100 text-blue-800' :
                  userRole === 'parent' ? 'bg-green-100 text-green-800' :
                  userRole === 'teacher' ? 'bg-purple-100 text-purple-800' :
                  'bg-orange-100 text-orange-800'
                }`}>
                  {userRole}
                </Badge>
              </div>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogIn className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          )}
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="w-12 h-12 text-primary" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Secure Access Hub
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Your gateway to Angels  School's digital ecosystem. Secure, personalized portals for students, parents, teachers, and staff.
            </p>
            
            {/* Status Bar */}
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-green-700">All Systems Operational</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-500" />
                <span className="text-blue-700">{quickStats.activeUsers.toLocaleString()} Active Users</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-500" />
                <span className="text-purple-700">{quickStats.systemUptime}% Uptime</span>
              </div>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="student">Student</TabsTrigger>
              <TabsTrigger value="parent">Parent</TabsTrigger>
              <TabsTrigger value="teacher">Teacher</TabsTrigger>
              <TabsTrigger value="admin">Admin</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-12">
              {/* Portal Selection Cards */}
              <div className="grid md:grid-cols-2 gap-8">
                {portalTypes.map(portal => {
                  const Icon = portal.icon
                  return (
                    <Card 
                      key={portal.id} 
                      className={`${portal.color} hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105`}
                      onClick={() => handlePortalAccess(portal.id)}
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-white rounded-xl shadow-lg">
                              <Icon className={`w-8 h-8 ${portal.iconColor}`} />
                            </div>
                            <div>
                              <CardTitle className="text-xl">{portal.title}</CardTitle>
                              <p className="text-sm opacity-80">{portal.users}</p>
                            </div>
                          </div>
                          <ArrowRight className="w-6 h-6 opacity-60" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4 opacity-90">{portal.description}</p>
                        <div className="space-y-2">
                          {portal.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                        <Button className="w-full mt-6 bg-white text-gray-800 hover:bg-gray-100">
                          Access Portal
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Quick Stats Dashboard */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-center mb-8">System Status & Analytics</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{quickStats.activeUsers.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Active Users</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                      <div className="bg-primary h-2 rounded-full" style={{width: '84%'}}></div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">{quickStats.dailyLogins.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Daily Logins</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '67%'}}></div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">{quickStats.securityAlerts}</div>
                    <div className="text-sm text-gray-600">Security Alerts</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                      <div className="bg-orange-500 h-2 rounded-full" style={{width: '0%'}}></div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">{quickStats.systemUptime}%</div>
                    <div className="text-sm text-gray-600">System Uptime</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                      <div className="bg-purple-500 h-2 rounded-full" style={{width: '99%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Features */}
              <div className="bg-slate-900 text-white rounded-2xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Enterprise-Grade Security</h3>
                  <p className="text-slate-300">Protecting your data with industry-leading security measures</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {securityFeatures.map((feature, idx) => {
                    const Icon = feature.icon
                    return (
                      <div key={idx} className="text-center">
                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-8 h-8 text-blue-400" />
                        </div>
                        <h4 className="font-semibold mb-2">{feature.title}</h4>
                        <p className="text-sm text-slate-300 mb-3">{feature.description}</p>
                        <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {feature.status}
                        </Badge>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Quick Access Help */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Bell className="w-6 h-6 text-blue-600" />
                  <h4 className="font-semibold text-blue-800">Need Help Getting Started?</h4>
                </div>
                <p className="text-blue-700 text-sm mb-4">
                  First time using the portals? Contact our support team or visit our help center for step-by-step guides and video tutorials.
                </p>
                <div className="flex gap-3">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    Contact Support
                  </Button>
                  <Button size="sm" variant="outline">
                    Help Center
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Individual Portal Tabs */}
            <TabsContent value="student">
              <StudentPortal />
            </TabsContent>

            <TabsContent value="parent">
              <ParentPortal />
            </TabsContent>

            <TabsContent value="teacher">
              <TeacherPortal />
            </TabsContent>

            <TabsContent value="admin">
              <AdminPortal />
            </TabsContent>

            <TabsContent value="security">
              <SecurityAuth />
            </TabsContent>
          </Tabs>

          {/* Login Dialog */}
          <Dialog open={showLogin} onOpenChange={(open) => {
            setShowLogin(open)
            if (!open) {
              setUsername('')
              setPassword('')
              setLoginError('')
            }
          }}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  Secure Login Required
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <p className="text-gray-600">Please authenticate to access the portal system.</p>
                
                {/* Demo Credentials Section */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                    <Key className="w-4 h-4" />
                    Demo Credentials Available
                  </h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="space-y-1">
                      <div className="font-medium text-blue-700">Student Access:</div>
                      <div className="text-blue-600">ID: student | Pass: demo123</div>
                    </div>
                    <div className="space-y-1">
                      <div className="font-medium text-green-700">Parent Access:</div>
                      <div className="text-green-600">ID: parent | Pass: demo123</div>
                    </div>
                    <div className="space-y-1">
                      <div className="font-medium text-purple-700">Teacher Access:</div>
                      <div className="text-purple-600">ID: teacher | Pass: demo123</div>
                    </div>
                    <div className="space-y-1">
                      <div className="font-medium text-orange-700">Admin Access:</div>
                      <div className="text-orange-600">ID: admin | Pass: demo123</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Input 
                    placeholder="Username or Email" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <Input 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {loginError && (
                    <div className="text-red-600 text-sm flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      {loginError}
                    </div>
                  )}
                </div>

                {/* Manual Login Button */}
                <Button 
                  onClick={validateAndLogin} 
                  className="w-full bg-gray-800 hover:bg-gray-900"
                  disabled={!username || !password}
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Login with Credentials
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">Or quick access</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Smartphone className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-600">Two-factor authentication will be requested after login</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button onClick={() => handleLogin('student')} className="bg-blue-600">
                    <User className="w-4 h-4 mr-2" />
                    Student Login
                  </Button>
                  <Button onClick={() => handleLogin('parent')} className="bg-green-600">
                    <Users className="w-4 h-4 mr-2" />
                    Parent Login
                  </Button>
                  <Button onClick={() => handleLogin('teacher')} className="bg-purple-600">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    Teacher Login
                  </Button>
                  <Button onClick={() => handleLogin('admin')} className="bg-orange-600">
                    <Settings className="w-4 h-4 mr-2" />
                    Admin Login
                  </Button>
                </div>

                <Button variant="outline" className="w-full" onClick={() => {
                  setShowLogin(false)
                  setUsername('')
                  setPassword('')
                  setLoginError('')
                }}>
                  Cancel
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </Layout>
  )
}