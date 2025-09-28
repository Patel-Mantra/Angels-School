import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { 
  Mail, 
  Smartphone, 
  Globe, 
  AlertTriangle, 
  Settings, 
  History, 
  Bell, 
  BellOff,
  Send,
  Users,
  Calendar,
  BookOpen,
  Trophy,
  Heart,
  Megaphone,
  Shield,
  CheckCircle,
  Clock,
  Languages,
  Volume2,
  VolumeX,
  Download,
  Filter
} from 'lucide-react'

const notificationCategories = [
  {
    id: 'emergency',
    title: 'Emergency Alerts',
    description: 'Critical safety and security notifications',
    icon: AlertTriangle,
    color: 'text-red-600',
    enabled: true,
    count: 3
  },
  {
    id: 'academic',
    title: 'Academic Updates',
    description: 'Assignment deadlines, grades, and academic calendar',
    icon: BookOpen,
    color: 'text-blue-600',
    enabled: true,
    count: 28
  },
  {
    id: 'events',
    title: 'Events & Activities',
    description: 'School events, sports, and extracurricular activities',
    icon: Calendar,
    color: 'text-green-600',
    enabled: true,
    count: 15
  },
  {
    id: 'athletics',
    title: 'Athletics',
    description: 'Sports schedules, results, and team announcements',
    icon: Trophy,
    color: 'text-orange-600',
    enabled: false,
    count: 12
  },
  {
    id: 'wellness',
    title: 'Health & Wellness',
    description: 'Health tips, mental wellness resources',
    icon: Heart,
    color: 'text-pink-600',
    enabled: true,
    count: 8
  },
  {
    id: 'general',
    title: 'General Announcements',
    description: 'School news, policy updates, and general information',
    icon: Megaphone,
    color: 'text-purple-600',
    enabled: true,
    count: 34
  }
]

const subscriptions = [
  {
    id: 'weekly-newsletter',
    title: 'Weekly Newsletter',
    description: 'Comprehensive weekly summary of school news and events',
    frequency: 'Weekly',
    lastSent: '2025-01-15',
    subscribers: 2847,
    enabled: true
  },
  {
    id: 'daily-digest',
    title: 'Daily Digest',
    description: 'Quick daily updates on important school information',
    frequency: 'Daily',
    lastSent: '2025-01-18',
    subscribers: 1523,
    enabled: true
  },
  {
    id: 'event-reminders',
    title: 'Event Reminders',
    description: 'Timely reminders about upcoming events and deadlines',
    frequency: 'As needed',
    lastSent: '2025-01-17',
    subscribers: 3156,
    enabled: false
  },
  {
    id: 'grade-reports',
    title: 'Grade Reports',
    description: 'Monthly academic progress reports',
    frequency: 'Monthly',
    lastSent: '2025-01-01',
    subscribers: 2234,
    enabled: true
  }
]

const notificationHistory = [
  {
    id: 1,
    type: 'emergency',
    title: 'Weather Alert - Early Dismissal',
    message: 'Due to incoming severe weather, school will dismiss 2 hours early today.',
    timestamp: '2025-01-18T11:30:00Z',
    channels: ['email', 'sms', 'push'],
    status: 'delivered',
    recipients: 3247
  },
  {
    id: 2,
    type: 'events',
    title: 'Basketball Game Tonight',
    message: 'Don\'t forget - Angels Wolves vs Central High at 7 PM in the main gym!',
    timestamp: '2025-01-17T15:45:00Z',
    channels: ['email', 'push'],
    status: 'delivered',
    recipients: 1856
  },
  {
    id: 3,
    type: 'academic',
    title: 'Parent-Teacher Conferences',
    message: 'Sign-up for spring parent-teacher conferences is now open.',
    timestamp: '2025-01-16T09:00:00Z',
    channels: ['email'],
    status: 'delivered',
    recipients: 1234
  },
  {
    id: 4,
    type: 'general',
    title: 'New Library Hours',
    message: 'The library will now be open until 6 PM on weekdays.',
    timestamp: '2025-01-15T08:30:00Z',
    channels: ['email', 'website'],
    status: 'delivered',
    recipients: 2890
  }
]

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' }
]

export function Communications() {
  const [preferences, setPreferences] = useState({
    email: true,
    sms: true,
    push: false,
    language: 'en',
    emergencyOnly: false,
    quietHours: true
  })
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [historyFilter, setHistoryFilter] = useState('all')

  const togglePreference = (key: string) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const toggleCategoryNotification = (categoryId: string) => {
    // This would update the category's enabled state
    console.log(`Toggling notifications for category: ${categoryId}`)
  }

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getTypeColor = (type: string) => {
    const category = notificationCategories.find(cat => cat.id === type)
    return category?.color || 'text-gray-600'
  }

  const getTypeIcon = (type: string) => {
    const category = notificationCategories.find(cat => cat.id === type)
    return category?.icon || Bell
  }

  const filteredHistory = notificationHistory.filter(notification => {
    if (historyFilter === 'all') return true
    return notification.type === historyFilter
  })

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Communications Center</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay connected with personalized notifications and manage your communication preferences.
        </p>
      </div>

      <Tabs defaultValue="preferences" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="emergency">Emergency</TabsTrigger>
        </TabsList>

        {/* Notification Preferences */}
        <TabsContent value="preferences" className="space-y-8">
          {/* Communication Channels */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Communication Channels
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-gray-500">student@Angels.edu</div>
                    </div>
                  </div>
                  <Switch
                    checked={preferences.email}
                    onCheckedChange={() => togglePreference('email')}
                  />
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-medium">SMS</div>
                      <div className="text-sm text-gray-500">(555) 123-4567</div>
                    </div>
                  </div>
                  <Switch
                    checked={preferences.sms}
                    onCheckedChange={() => togglePreference('sms')}
                  />
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Bell className="w-5 h-5 text-purple-600" />
                    <div>
                      <div className="font-medium">Push Notifications</div>
                      <div className="text-sm text-gray-500">Mobile app alerts</div>
                    </div>
                  </div>
                  <Switch
                    checked={preferences.push}
                    onCheckedChange={() => togglePreference('push')}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Language Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Languages className="w-5 h-5" />
                Language & Localization
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium mb-3 block">Preferred Language</label>
                  <div className="space-y-2">
                    {languages.map(lang => (
                      <div key={lang.code} className="flex items-center gap-3">
                        <input
                          type="radio"
                          id={lang.code}
                          name="language"
                          checked={preferences.language === lang.code}
                          onChange={() => setPreferences(prev => ({...prev, language: lang.code}))}
                          className="w-4 h-4"
                        />
                        <label htmlFor={lang.code} className="flex items-center gap-2">
                          <span>{lang.flag}</span>
                          <span>{lang.name}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Emergency Only Mode</div>
                      <div className="text-sm text-gray-500">Only receive critical alerts</div>
                    </div>
                    <Switch
                      checked={preferences.emergencyOnly}
                      onCheckedChange={() => togglePreference('emergencyOnly')}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Quiet Hours</div>
                      <div className="text-sm text-gray-500">10 PM - 7 AM</div>
                    </div>
                    <Switch
                      checked={preferences.quietHours}
                      onCheckedChange={() => togglePreference('quietHours')}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notification Categories */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notification Categories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notificationCategories.map(category => {
                  const Icon = category.icon
                  return (
                    <div key={category.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <Icon className={`w-6 h-6 ${category.color}`} />
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <h4 className="font-medium">{category.title}</h4>
                            <Badge variant="outline">{category.count} this month</Badge>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">{category.description}</p>
                        </div>
                      </div>
                      <Switch
                        checked={category.enabled}
                        onCheckedChange={() => toggleCategoryNotification(category.id)}
                      />
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Email Subscriptions */}
        <TabsContent value="subscriptions" className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Email Subscriptions</h3>
            <p className="text-gray-600">Manage your newsletter and digest preferences</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {subscriptions.map(subscription => (
              <Card key={subscription.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">{subscription.title}</h4>
                      <p className="text-sm text-gray-600 mb-3">{subscription.description}</p>
                    </div>
                    <Switch
                      checked={subscription.enabled}
                      onCheckedChange={() => console.log(`Toggle ${subscription.id}`)}
                    />
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Frequency:</span>
                      <span className="font-medium">{subscription.frequency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Subscribers:</span>
                      <span className="font-medium">{subscription.subscribers.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Last sent:</span>
                      <span className="font-medium">
                        {new Date(subscription.lastSent).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full mt-4">
                    <Download className="w-4 h-4 mr-2" />
                    View Archive
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-blue-600" />
              <div>
                <h4 className="font-semibold text-blue-800 mb-1">Want More Options?</h4>
                <p className="text-blue-700 text-sm">
                  We're constantly improving our communication options. Contact us with suggestions for new newsletter topics or notification types.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Notification History */}
        <TabsContent value="history" className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold">Notification History</h3>
              <p className="text-gray-600">Review recent communications sent to the community</p>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant={historyFilter === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setHistoryFilter('all')}
              >
                All
              </Button>
              {notificationCategories.slice(0, 4).map(category => (
                <Button
                  key={category.id}
                  variant={historyFilter === category.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setHistoryFilter(category.id)}
                >
                  {category.title}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredHistory.map(notification => {
              const Icon = getTypeIcon(notification.type)
              return (
                <Card key={notification.id}>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <Icon className={`w-6 h-6 ${getTypeColor(notification.type)} mt-1`} />
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-semibold">{notification.title}</h4>
                            <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                          </div>
                          <Badge variant="outline" className="ml-4">
                            {notification.status}
                          </Badge>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-4">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {formatTimestamp(notification.timestamp)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {notification.recipients.toLocaleString()} recipients
                          </span>
                          <div className="flex items-center gap-2">
                            <span>Sent via:</span>
                            <div className="flex gap-1">
                              {notification.channels.map(channel => (
                                <Badge key={channel} variant="secondary" className="text-xs">
                                  {channel}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        {/* Emergency Alerts */}
        <TabsContent value="emergency" className="space-y-6">
          <div className="text-center mb-8">
            <AlertTriangle className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Emergency Alert System</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our emergency alert system ensures critical safety information reaches everyone immediately through multiple channels.
            </p>
          </div>

          {/* Emergency Status */}
          <Card className="border-green-200 bg-green-50">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <div>
                  <h4 className="text-lg font-semibold text-green-800">All Systems Operational</h4>
                  <p className="text-green-700">Emergency alert system is functioning normally</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Alert Channels */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-6 text-center">
                <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold">3,247</div>
                <div className="text-sm text-gray-600">Email Contacts</div>
                <Badge className="mt-2 bg-green-100 text-green-800">Active</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Smartphone className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold">2,891</div>
                <div className="text-sm text-gray-600">SMS Numbers</div>
                <Badge className="mt-2 bg-green-100 text-green-800">Active</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Volume2 className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm text-gray-600">PA Systems</div>
                <Badge className="mt-2 bg-green-100 text-green-800">Online</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Globe className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold">1</div>
                <div className="text-sm text-gray-600">Website Banner</div>
                <Badge className="mt-2 bg-green-100 text-green-800">Ready</Badge>
              </CardContent>
            </Card>
          </div>

          {/* Recent Emergency Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <History className="w-5 h-5" />
                Recent Emergency Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notificationHistory
                  .filter(n => n.type === 'emergency')
                  .map(alert => (
                    <div key={alert.id} className="flex gap-4 p-4 border border-red-200 bg-red-50 rounded-lg">
                      <AlertTriangle className="w-6 h-6 text-red-600 mt-1" />
                      <div className="flex-1">
                        <h5 className="font-semibold text-red-800">{alert.title}</h5>
                        <p className="text-red-700 text-sm mt-1">{alert.message}</p>
                        <div className="flex items-center gap-4 mt-3 text-xs text-red-600">
                          <span>{formatTimestamp(alert.timestamp)}</span>
                          <span>•</span>
                          <span>{alert.recipients.toLocaleString()} recipients</span>
                          <span>•</span>
                          <span>Delivered via {alert.channels.join(', ')}</span>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800">
                        {alert.status}
                      </Badge>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>

          {/* Emergency Contact Info */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-red-600 mt-1" />
              <div>
                <h4 className="font-semibold text-red-800 mb-2">Emergency Contact Information</h4>
                <div className="space-y-1 text-red-700 text-sm">
                  <p><strong>Angels High School:</strong> +91 123456789</p>
                  <p><strong>District Emergency Line:</strong> +91 123456789</p>
                  <p><strong>Local Emergency Services:</strong> 911</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}