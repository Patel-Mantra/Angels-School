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
  Lock,
  Eye,
  EyeOff,
  Fingerprint,
  Smartphone,
  Key,
  AlertTriangle,
  CheckCircle,
  Clock,
  User,
  Settings,
  Bell,
  Activity,
  Database,
  FileText,
  Server,
  Globe,
  Laptop,
  UserCheck,
  UserX,
  ShieldCheck,
  ShieldAlert,
  Zap,
  History,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  Ban,
  Unlock,
  QrCode,
  Mail,
  Phone,
  KeyRound,
  AlertOctagon
} from 'lucide-react'

const securityMetrics = {
  authenticationAttempts: {
    successful: 15647,
    failed: 234,
    blocked: 67,
    successRate: 98.5
  },
  activeUsers: {
    students: 1247,
    parents: 956,
    teachers: 58,
    staff: 31,
    total: 2292
  },
  systemSecurity: {
    threatLevel: 'low',
    lastScan: '2025-09-20T02:00:00Z',
    vulnerabilities: 0,
    patchLevel: 'current'
  }
}

const authenticationMethods = [
  {
    id: 'password',
    name: 'Password Authentication',
    description: 'Traditional username/password login',
    enabled: true,
    usage: 89.3,
    users: 2047
  },
  {
    id: 'mfa',
    name: 'Multi-Factor Authentication',
    description: 'SMS/Email verification + password',
    enabled: true,
    usage: 76.8,
    users: 1761
  },
  {
    id: 'biometric',
    name: 'Biometric Authentication',
    description: 'Fingerprint/Face recognition',
    enabled: true,
    usage: 23.4,
    users: 537
  },
  {
    id: 'sso',
    name: 'Single Sign-On',
    description: 'Integrated authentication system',
    enabled: true,
    usage: 45.2,
    users: 1036
  }
]

const userRoles = [
  {
    id: 'student',
    name: 'Student',
    permissions: ['view_grades', 'submit_assignments', 'access_schedule', 'use_collaboration'],
    users: 1247,
    color: 'bg-blue-100 text-blue-800'
  },
  {
    id: 'parent',
    name: 'Parent/Guardian',
    permissions: ['view_child_data', 'message_teachers', 'access_financial', 'event_registration'],
    users: 956,
    color: 'bg-green-100 text-green-800'
  },
  {
    id: 'teacher',
    name: 'Teacher',
    permissions: ['manage_grades', 'track_attendance', 'message_parents', 'upload_resources'],
    users: 58,
    color: 'bg-purple-100 text-purple-800'
  },
  {
    id: 'staff',
    name: 'Staff',
    permissions: ['access_admin_tools', 'manage_events', 'view_reports', 'system_configuration'],
    users: 23,
    color: 'bg-orange-100 text-orange-800'
  },
  {
    id: 'admin',
    name: 'Administrator',
    permissions: ['full_access', 'user_management', 'security_oversight', 'system_administration'],
    users: 8,
    color: 'bg-red-100 text-red-800'
  }
]

const auditLogs = [
  {
    id: 1,
    timestamp: '2025-09-20T14:25:00Z',
    user: 'admin@school.edu',
    action: 'User account created',
    target: 'john.doe@school.edu',
    ip: '192.168.1.10',
    status: 'success',
    risk: 'low'
  },
  {
    id: 2,
    timestamp: '2025-09-20T14:18:00Z',
    user: 'sarah.johnson@school.edu',
    action: 'Password changed',
    target: 'self',
    ip: '192.168.1.45',
    status: 'success',
    risk: 'low'
  },
  {
    id: 3,
    timestamp: '2025-09-20T14:12:00Z',
    user: 'unknown',
    action: 'Failed login attempt',
    target: 'admin@school.edu',
    ip: '203.0.113.42',
    status: 'blocked',
    risk: 'high'
  },
  {
    id: 4,
    timestamp: '2025-09-20T14:05:00Z',
    user: 'system',
    action: 'Security scan completed',
    target: 'all_systems',
    ip: 'internal',
    status: 'success',
    risk: 'low'
  }
]

const privacySettings = [
  {
    category: 'Student Data Protection',
    settings: [
      { name: 'FERPA Compliance', enabled: true, required: true },
      { name: 'Grade Privacy Controls', enabled: true, required: true },
      { name: 'Photo Consent Management', enabled: true, required: false },
      { name: 'Personal Information Encryption', enabled: true, required: true }
    ]
  },
  {
    category: 'Communication Privacy',
    settings: [
      { name: 'Message Encryption', enabled: true, required: true },
      { name: 'Contact Information Protection', enabled: true, required: true },
      { name: 'Notification Opt-out', enabled: true, required: false },
      { name: 'Third-party Data Sharing', enabled: false, required: false }
    ]
  },
  {
    category: 'System Security',
    settings: [
      { name: 'Session Timeout', enabled: true, required: true },
      { name: 'IP Address Logging', enabled: true, required: true },
      { name: 'Browser Fingerprinting', enabled: false, required: false },
      { name: 'Geolocation Tracking', enabled: false, required: false }
    ]
  }
]

const sessionData = [
  {
    user: 'sarah.johnson@school.edu',
    role: 'Teacher',
    loginTime: '2025-09-20T08:15:00Z',
    lastActivity: '2025-09-20T14:23:00Z',
    ip: '192.168.1.45',
    device: 'Chrome/Windows',
    location: 'School Network',
    status: 'active'
  },
  {
    user: 'maria.rodriguez@parent.edu',
    role: 'Parent',
    loginTime: '2025-09-20T12:30:00Z',
    lastActivity: '2025-09-20T14:20:00Z',
    ip: '203.0.113.15',
    device: 'Safari/iPhone',
    location: 'Remote',
    status: 'active'
  },
  {
    user: 'emma.student@school.edu',
    role: 'Student',
    loginTime: '2025-09-20T09:45:00Z',
    lastActivity: '2025-09-20T11:15:00Z',
    ip: '192.168.1.78',
    device: 'Chrome/Chromebook',
    location: 'School Network',
    status: 'idle'
  }
]

export function SecurityAuth() {
  const [selectedTimeRange, setSelectedTimeRange] = useState('24h')
  const [showMfaDialog, setShowMfaDialog] = useState(false)
  const [showUserDialog, setShowUserDialog] = useState(false)
  const [showAuditDialog, setShowAuditDialog] = useState(false)
  const [selectedLogLevel, setSelectedLogLevel] = useState('all')

  const formatDateTime = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getThreatLevelColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-600 bg-green-100'
      case 'medium': return 'text-yellow-600 bg-yellow-100'
      case 'high': return 'text-red-600 bg-red-100'
      case 'critical': return 'text-red-800 bg-red-200'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'bg-green-100 text-green-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'high': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'bg-green-100 text-green-800'
      case 'failed': return 'bg-red-100 text-red-800'
      case 'blocked': return 'bg-red-100 text-red-800'
      case 'active': return 'bg-green-100 text-green-800'
      case 'idle': return 'bg-yellow-100 text-yellow-800'
      case 'expired': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-8">
      {/* Security Header */}
      <div className="bg-gradient-to-r from-red-600 to-rose-700 text-white rounded-xl p-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Security & Authentication</h2>
              <p className="text-red-100">Multi-layered protection for educational data</p>
            </div>
          </div>
          
          <div className="flex gap-6 flex-1 justify-end">
            <div className="text-center">
              <div className="text-2xl font-bold">{securityMetrics.activeUsers.total.toLocaleString()}</div>
              <div className="text-red-200 text-sm">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{securityMetrics.authenticationAttempts.successRate}%</div>
              <div className="text-red-200 text-sm">Auth Success</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{securityMetrics.systemSecurity.vulnerabilities}</div>
              <div className="text-red-200 text-sm">Vulnerabilities</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${securityMetrics.systemSecurity.threatLevel === 'low' ? '' : 'text-yellow-200'}`}>
                {securityMetrics.systemSecurity.threatLevel.toUpperCase()}
              </div>
              <div className="text-red-200 text-sm">Threat Level</div>
            </div>
          </div>
        </div>
      </div>

      {/* Security Status Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <ShieldCheck className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">
                {securityMetrics.authenticationAttempts.successful.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Successful Logins</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <ShieldAlert className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-red-600">
                {securityMetrics.authenticationAttempts.failed + securityMetrics.authenticationAttempts.blocked}
              </div>
              <div className="text-sm text-gray-600">Failed/Blocked</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <Fingerprint className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600">
                {Math.round(authenticationMethods.find(m => m.id === 'mfa')?.usage || 0)}%
              </div>
              <div className="text-sm text-gray-600">MFA Adoption</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <Activity className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">
                {sessionData.filter(s => s.status === 'active').length}
              </div>
              <div className="text-sm text-gray-600">Active Sessions</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="authentication" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="authentication">Authentication</TabsTrigger>
          <TabsTrigger value="permissions">Permissions</TabsTrigger>
          <TabsTrigger value="sessions">Sessions</TabsTrigger>
          <TabsTrigger value="encryption">Data Security</TabsTrigger>
          <TabsTrigger value="audit">Audit Logs</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
        </TabsList>

        {/* Authentication Tab */}
        <TabsContent value="authentication" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Multi-Factor Authentication</h3>
            <Dialog open={showMfaDialog} onOpenChange={setShowMfaDialog}>
              <DialogTrigger asChild>
                <Button>
                  <Key className="w-4 h-4 mr-2" />
                  Configure MFA
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Configure Multi-Factor Authentication</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3">Authentication Methods</h4>
                    <div className="space-y-3">
                      {[
                        { id: 'sms', name: 'SMS Verification', icon: Phone },
                        { id: 'email', name: 'Email Verification', icon: Mail },
                        { id: 'app', name: 'Authenticator App', icon: Smartphone },
                        { id: 'biometric', name: 'Biometric', icon: Fingerprint }
                      ].map(method => (
                        <div key={method.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <method.icon className="w-5 h-5 text-blue-600" />
                            <span>{method.name}</span>
                          </div>
                          <Switch defaultChecked={method.id !== 'biometric'} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">MFA Requirement Level</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Optional for all users</option>
                      <option>Required for staff and teachers</option>
                      <option>Required for administrators only</option>
                      <option>Required for all users</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch defaultChecked />
                    <span className="text-sm">Allow backup codes</span>
                  </div>
                  <Button className="w-full">
                    <Settings className="w-4 h-4 mr-2" />
                    Update MFA Settings
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Authentication Methods */}
          <div className="grid md:grid-cols-2 gap-6">
            {authenticationMethods.map(method => (
              <Card key={method.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{method.name}</CardTitle>
                    <Switch checked={method.enabled} />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{method.description}</p>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Usage Rate</span>
                      <span className="text-sm font-semibold">{method.usage}%</span>
                    </div>
                    <Progress value={method.usage} />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Active Users</span>
                      <span>{method.users.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Security Policies */}
          <Card>
            <CardHeader>
              <CardTitle>Security Policies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Password Requirements</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Minimum 8 characters</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Mixed case letters required</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Numbers and symbols required</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Password expiration: 90 days</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Access Controls</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Session timeout: 30 minutes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Failed login lockout: 5 attempts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>IP-based access restrictions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Device registration required</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Permissions Tab */}
        <TabsContent value="permissions" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Role-Based Permissions</h3>
            <Dialog open={showUserDialog} onOpenChange={setShowUserDialog}>
              <DialogTrigger asChild>
                <Button>
                  <User className="w-4 h-4 mr-2" />
                  Manage User Roles
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>User Role Management</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Select User</label>
                    <Input placeholder="Search users..." />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Assign Role</label>
                    <select className="w-full p-2 border rounded-md">
                      {userRoles.map(role => (
                        <option key={role.id} value={role.id}>{role.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Custom Permissions</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        'View Grades', 'Edit Grades', 'Manage Users', 'System Admin',
                        'Send Messages', 'View Reports', 'Financial Access', 'Event Management'
                      ].map(permission => (
                        <div key={permission} className="flex items-center gap-2">
                          <Switch />
                          <span className="text-sm">{permission}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full">
                    <UserCheck className="w-4 h-4 mr-2" />
                    Update User Permissions
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Role Overview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userRoles.map(role => (
              <Card key={role.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{role.name}</CardTitle>
                    <Badge className={role.color}>
                      {role.users} users
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Permissions:</h4>
                    <div className="space-y-1">
                      {role.permissions.map(permission => (
                        <div key={permission} className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-600" />
                          <span className="text-xs">{permission.replace('_', ' ')}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <Button size="sm" variant="outline" className="w-full">
                      Edit Permissions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Permission Matrix */}
          <Card>
            <CardHeader>
              <CardTitle>Permission Matrix</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Permission</th>
                      <th className="text-center p-3">Student</th>
                      <th className="text-center p-3">Parent</th>
                      <th className="text-center p-3">Teacher</th>
                      <th className="text-center p-3">Staff</th>
                      <th className="text-center p-3">Admin</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'View Grades', perms: [true, true, true, false, true] },
                      { name: 'Edit Grades', perms: [false, false, true, false, true] },
                      { name: 'Send Messages', perms: [false, true, true, true, true] },
                      { name: 'Manage Users', perms: [false, false, false, true, true] },
                      { name: 'System Settings', perms: [false, false, false, false, true] },
                      { name: 'Financial Data', perms: [false, true, false, true, true] }
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b hover:bg-gray-50">
                        <td className="p-3 font-medium">{row.name}</td>
                        {row.perms.map((allowed, i) => (
                          <td key={i} className="text-center p-3">
                            {allowed ? (
                              <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                            ) : (
                              <Ban className="w-5 h-5 text-red-600 mx-auto" />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Sessions Tab */}
        <TabsContent value="sessions" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Session Management</h3>
            <div className="flex gap-2">
              <Button variant="outline">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
              <Button>
                <Settings className="w-4 h-4 mr-2" />
                Session Settings
              </Button>
            </div>
          </div>

          {/* Active Sessions */}
          <Card>
            <CardHeader>
              <CardTitle>Active Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sessionData.map((session, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{session.user}</h4>
                          <Badge className={userRoles.find(r => r.name === session.role)?.color}>
                            {session.role}
                          </Badge>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Login:</span> {formatDateTime(session.loginTime)}
                        </div>
                        <div>
                          <span className="font-medium">Last Activity:</span> {formatDateTime(session.lastActivity)}
                        </div>
                        <div>
                          <span className="font-medium">IP:</span> {session.ip}
                        </div>
                        <div>
                          <span className="font-medium">Device:</span> {session.device}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={getStatusColor(session.status)}>
                        {session.status}
                      </Badge>
                      <Button size="sm" variant="outline">
                        <Ban className="w-4 h-4 mr-2" />
                        Terminate
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Session Analytics */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Session Duration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2h 34m</div>
                  <div className="text-sm text-gray-600">Average Session</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Concurrent Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">847</div>
                  <div className="text-sm text-gray-600">Peak Today</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Session Timeouts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">23</div>
                  <div className="text-sm text-gray-600">Today</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Data Security Tab */}
        <TabsContent value="encryption" className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Data Encryption & Security</h3>
            <p className="text-gray-600">Advanced encryption protocols protecting sensitive educational data</p>
          </div>

          {/* Encryption Status */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Lock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">AES-256</div>
                  <div className="text-sm text-gray-600">Data at Rest</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">TLS 1.3</div>
                  <div className="text-sm text-gray-600">Data in Transit</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Database className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-600">SHA-256</div>
                  <div className="text-sm text-gray-600">Data Hashing</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <KeyRound className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-orange-600">HSM</div>
                  <div className="text-sm text-gray-600">Key Management</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Security Certificates */}
          <Card>
            <CardHeader>
              <CardTitle>Security Certificates & Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <h4 className="font-medium">SSL Certificate</h4>
                        <p className="text-sm text-gray-600">Valid until Dec 2025</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Valid</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <h4 className="font-medium">FERPA Compliance</h4>
                        <p className="text-sm text-gray-600">Student Privacy Protection</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Certified</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <h4 className="font-medium">SOC 2 Type II</h4>
                        <p className="text-sm text-gray-600">Security & Availability</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Compliant</Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Encryption Strength</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Password Hashing</span>
                        <span className="text-sm font-medium">bcrypt + salt</span>
                      </div>
                      <Progress value={100} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Database Encryption</span>
                        <span className="text-sm font-medium">AES-256</span>
                      </div>
                      <Progress value={100} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">File Storage</span>
                        <span className="text-sm font-medium">AES-256</span>
                      </div>
                      <Progress value={100} />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Audit Logs Tab */}
        <TabsContent value="audit" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Security Audit Logs</h3>
            <div className="flex gap-2">
              <select 
                className="p-2 border rounded-md"
                value={selectedLogLevel}
                onChange={(e) => setSelectedLogLevel(e.target.value)}
              >
                <option value="all">All Events</option>
                <option value="high">High Risk Only</option>
                <option value="failed">Failed Attempts</option>
                <option value="success">Successful Events</option>
              </select>
              <Dialog open={showAuditDialog} onOpenChange={setShowAuditDialog}>
                <DialogTrigger asChild>
                  <Button>
                    <Download className="w-4 h-4 mr-2" />
                    Export Logs
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Export Audit Logs</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Start Date</label>
                        <Input type="date" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">End Date</label>
                        <Input type="date" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Log Level</label>
                      <select className="w-full p-2 border rounded-md">
                        <option>All Events</option>
                        <option>Security Events Only</option>
                        <option>High Risk Events</option>
                        <option>Failed Attempts</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Export Format</label>
                      <select className="w-full p-2 border rounded-md">
                        <option>CSV</option>
                        <option>JSON</option>
                        <option>PDF Report</option>
                      </select>
                    </div>
                    <Button className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Generate Export
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Audit Log Entries */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Security Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {auditLogs.map(log => (
                  <div key={log.id} className="flex items-start justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                        <h4 className="font-semibold">{log.action}</h4>
                        <Badge className={getStatusColor(log.status)}>
                          {log.status}
                        </Badge>
                        <Badge className={getRiskColor(log.risk)}>
                          {log.risk} risk
                        </Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">User:</span> {log.user}
                        </div>
                        <div>
                          <span className="font-medium">Target:</span> {log.target}
                        </div>
                        <div>
                          <span className="font-medium">IP:</span> {log.ip}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 mt-2">
                        {formatDateTime(log.timestamp)}
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4 mr-2" />
                      Details
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Audit Statistics */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <History className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">2,847</div>
                  <div className="text-sm text-gray-600">Events Today</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <AlertOctagon className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-600">12</div>
                  <div className="text-sm text-gray-600">High Risk Events</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <UserX className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-orange-600">67</div>
                  <div className="text-sm text-gray-600">Failed Logins</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Settings className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-600">8</div>
                  <div className="text-sm text-gray-600">Admin Actions</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Privacy Controls Tab */}
        <TabsContent value="privacy" className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Privacy Controls</h3>
            <p className="text-gray-600">Manage data privacy settings and user consent preferences</p>
          </div>

          {/* Privacy Settings */}
          <div className="space-y-6">
            {privacySettings.map((category, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle>{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.settings.map((setting, settingIdx) => (
                      <div key={settingIdx} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <h4 className="font-medium">{setting.name}</h4>
                            {setting.required && (
                              <Badge className="bg-red-100 text-red-800">Required</Badge>
                            )}
                          </div>
                        </div>
                        <Switch 
                          checked={setting.enabled} 
                          disabled={setting.required}
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Data Retention Policy */}
          <Card>
            <CardHeader>
              <CardTitle>Data Retention Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Retention Periods</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm">Student Records</span>
                      <span className="text-sm font-medium">7 years</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm">Communication Logs</span>
                      <span className="text-sm font-medium">3 years</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm">Login Logs</span>
                      <span className="text-sm font-medium">1 year</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm">Financial Records</span>
                      <span className="text-sm font-medium">10 years</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Data Rights</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Right to access personal data</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Right to rectify incorrect data</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Right to data portability</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Right to erasure (where applicable)</span>
                    </div>
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