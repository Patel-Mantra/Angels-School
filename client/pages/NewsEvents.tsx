import { useState, useEffect } from 'react'
import { Layout } from '@/components/layout/Layout'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { NewsManagement } from '@/components/misc/NewsManagement'
import { EventCalendar } from '@/components/misc/EventCalendar'
import { SocialIntegration } from '@/components/misc/SocialIntegration'
import { Communications } from '@/components/misc/Communications'
import { CommunityEngagement } from '@/components/misc/CommunityEngagement'
import { 
  Newspaper, 
  Calendar, 
  Share2, 
  Mail,
  Users,
  Archive,
  TrendingUp,
  Clock,
  MapPin,
  Eye,
  MessageSquare,
  Heart,
  Bell,
  ChevronRight
} from 'lucide-react'

const newsEventsTabs = [
  { id: 'news', label: 'Latest News', icon: Newspaper },
  { id: 'calendar', label: 'Event Calendar', icon: Calendar },
  { id: 'social', label: 'Social Feed', icon: Share2 },
  { id: 'newsletter', label: 'Communications', icon: Mail },
  { id: 'engagement', label: 'Community', icon: Users },
  { id: 'archive', label: 'Archive', icon: Archive }
]

const featuredStories = [
  {
    id: 1,
    title: 'Angels  Students Win State Science Championship',
    category: 'Academic Achievement',
    excerpt: 'Our robotics team claimed first place at the State Science and Engineering Fair with their innovative renewable energy solution.',
    image: 'bg-gradient-to-br from-blue-500 to-purple-600',
    date: '2025-09-18',
    author: 'Dr. Sarah Chen, Science Department',
    readTime: '4 min read',
    views: 1247,
    featured: true,
    urgent: false
  },
  {
    id: 2,
    title: 'Emergency Weather Update: Early Dismissal Today',
    category: 'Emergency Alert',
    excerpt: 'Due to severe weather conditions, Angels  School will dismiss 2 hours early today. All after-school activities are cancelled.',
    image: 'bg-gradient-to-br from-red-500 to-orange-500',
    date: '2025-09-20',
    author: 'Administration Office',
    readTime: '1 min read',
    views: 3421,
    featured: true,
    urgent: true
  },
  {
    id: 3,
    title: 'Fall Arts Festival: Student Showcases Begin Next Week',
    category: 'Arts & Culture',
    excerpt: 'Join us for a week-long celebration of student creativity featuring art exhibitions, musical performances, and drama productions.',
    image: 'bg-gradient-to-br from-pink-500 to-purple-500',
    date: '2025-09-17',
    author: 'Arts Department',
    readTime: '3 min read',
    views: 892,
    featured: true,
    urgent: false
  }
]

const quickStats = [
  { number: '247', label: 'Stories This Month', icon: Newspaper, trend: '+12%' },
  { number: '89', label: 'Upcoming Events', icon: Calendar, trend: '+23%' },
  { number: '5.2K', label: 'Community Engagements', icon: Heart, trend: '+8%' },
  { number: '1,247', label: 'Newsletter Subscribers', icon: Mail, trend: '+15%' }
]

const upcomingHighlights = [
  {
    date: '2025-09-22',
    time: '2:00 PM',
    title: 'Parent-Teacher Conferences Begin',
    location: 'Various Classrooms',
    category: 'Parent Event',
    attendees: 456
  },
  {
    date: '2025-09-25',
    time: '7:00 PM',
    title: 'Fall Musical Auditions',
    location: 'Performing Arts Center',
    category: 'Arts',
    attendees: 89
  },
  {
    date: '2025-09-28',
    time: '6:30 PM',
    title: 'Homecoming Game vs. Central High',
    location: 'Angels  Stadium',
    category: 'Athletics',
    attendees: 1200
  },
  {
    date: '2025-10-01',
    time: '9:00 AM',
    title: 'College Fair 2025',
    location: 'Main Gymnasium',
    category: 'Academic',
    attendees: 324
  }
]

export default function NewsEvents() {
  const [activeTab, setActiveTab] = useState<string>('news')
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0)

  // Rotate featured stories every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStoryIndex((prev) => (prev + 1) % featuredStories.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const currentStory = featuredStories[currentStoryIndex]

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section with Rotating Featured Stories */}
        <div className={`${currentStory.image} text-white px-4 py-20 transition-all duration-1000`}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-6xl font-bold mb-4">What's Happening Now</h1>
              <p className="text-xl opacity-90">Stay connected with the latest news, events, and stories from Angels  School</p>
            </div>
            
            {/* Featured Story Carousel */}
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        {currentStory.urgent && (
                          <Badge className="bg-red-500 text-white animate-pulse">
                            <Bell className="w-3 h-3 mr-1" />
                            URGENT
                          </Badge>
                        )}
                        <Badge variant="secondary" className="bg-white/20 text-white">
                          {currentStory.category}
                        </Badge>
                        <span className="text-sm opacity-75">{currentStory.date}</span>
                      </div>
                      
                      <h2 className="text-3xl font-bold mb-3">{currentStory.title}</h2>
                      <p className="text-lg opacity-90 mb-4">{currentStory.excerpt}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm opacity-75">
                          <span>{currentStory.author}</span>
                          <span>{currentStory.readTime}</span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {currentStory.views.toLocaleString()}
                          </span>
                        </div>
                        <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                          Read Full Story
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Story Navigation Dots */}
                  <div className="flex justify-center gap-2 mt-6">
                    {featuredStories.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentStoryIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === currentStoryIndex ? 'bg-white w-8' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Tab Navigation */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
              <TabsList className="grid grid-cols-6 h-auto p-2">
                {newsEventsTabs.map(tab => {
                  const Icon = tab.icon
                  return (
                    <TabsTrigger 
                      key={tab.id} 
                      value={tab.id} 
                      className="flex flex-col items-center gap-2 p-4"
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-xs font-medium text-center">{tab.label}</span>
                    </TabsTrigger>
                  )
                })}
              </TabsList>

              {/* Overview Tab - Default Landing */}
              {activeTab === 'news' && (
                <div className="space-y-12">
                  <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4">News Overview</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                      Stay up-to-date with the latest happenings, achievements, and important announcements from Angels  School.
                    </p>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid md:grid-cols-4 gap-6">
                    {quickStats.map((stat, idx) => {
                      const Icon = stat.icon
                      return (
                        <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                          <CardContent className="pt-6">
                            <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                            <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                            <p className="text-gray-600 font-medium mb-2">{stat.label}</p>
                            <div className="flex items-center justify-center gap-1">
                              <TrendingUp className="w-4 h-4 text-green-500" />
                              <span className="text-green-500 text-sm font-medium">{stat.trend}</span>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>

                  {/* Upcoming Events Preview */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
                    <h3 className="text-2xl font-bold text-center mb-8">Upcoming Events This Week</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {upcomingHighlights.map((event, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-6 shadow-md">
                          <div className="flex items-center gap-2 mb-3">
                            <Clock className="w-4 h-4 text-primary" />
                            <span className="font-bold text-primary">{event.time}</span>
                          </div>
                          <h4 className="font-semibold mb-2">{event.title}</h4>
                          <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
                            <MapPin className="w-3 h-3" />
                            {event.location}
                          </div>
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className="text-xs">{event.category}</Badge>
                            <span className="text-xs text-gray-500">{event.attendees} attending</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Emergency Alert Section */}
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Bell className="w-6 h-6 text-red-600" />
                      <h3 className="text-xl font-bold text-red-800">Emergency Alerts & Important Updates</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                          <span className="font-semibold text-red-800">Weather Alert</span>
                          <Badge className="bg-red-100 text-red-800 text-xs">Active</Badge>
                        </div>
                        <p className="text-sm text-red-700">Early dismissal due to severe weather conditions. All after-school activities cancelled.</p>
                        <Button size="sm" variant="outline" className="mt-2 text-red-600 border-red-200">
                          View Details
                        </Button>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="font-semibold text-blue-800">Schedule Update</span>
                          <Badge className="bg-blue-100 text-blue-800 text-xs">Info</Badge>
                        </div>
                        <p className="text-sm text-blue-700">Parent-Teacher conferences start Monday. Check your email for appointment times.</p>
                        <Button size="sm" variant="outline" className="mt-2 text-blue-600 border-blue-200">
                          Check Schedule
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="text-center bg-primary text-white rounded-lg p-8">
                    <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
                    <p className="text-lg mb-6 opacity-90">
                      Never miss important updates, events, or achievements from Angels  School.
                    </p>
                    <div className="flex justify-center gap-4">
                      <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                        <Mail className="w-5 h-5 mr-2" />
                        Subscribe to Newsletter
                      </Button>
                      <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100">
                        <Bell className="w-5 h-5 mr-2" />
                        Enable Notifications
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Other Tab Content */}
              <TabsContent value="news">
                <NewsManagement />
              </TabsContent>

              <TabsContent value="calendar">
                <EventCalendar />
              </TabsContent>

              <TabsContent value="social">
                <SocialIntegration />
              </TabsContent>

              <TabsContent value="newsletter">
                <Communications />
              </TabsContent>

              <TabsContent value="engagement">
                <CommunityEngagement />
              </TabsContent>

              <TabsContent value="archive">
                <div className="text-center py-12">
                  <h3 className="text-2xl font-bold mb-4">News Archive</h3>
                  <p className="text-gray-600 mb-6">Access archived news articles and past announcements</p>
                  <p className="text-sm text-gray-500 mb-6">Use the News Management tab to search through our comprehensive news archive</p>
                  <Button onClick={() => setActiveTab('news')} className="mx-auto">
                    Go to News Management
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  )
}