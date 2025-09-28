import { useState } from 'react'
import { Layout } from '@/components/layout/Layout'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CommunityShowcase } from '@/components/misc/CommunityShowcase'
import { ExtracurricularHub } from '@/components/misc/ExtracurricularHub'
import { StudentWellness } from '@/components/misc/StudentWellness'
import { AchievementRecognition } from '@/components/misc/AchievementRecognition'
import { InteractiveCommunity } from '@/components/misc/InteractiveCommunity'
import { 
  Users, 
  Calendar, 
  Trophy, 
  Heart, 
  Camera, 
  Music,
  BookOpen,
  Star,
  MapPin,
  Clock
} from 'lucide-react'

const studentLifeTabs = [
  { id: 'overview', label: 'Overview', icon: Users },
  { id: 'community', label: 'Community & Culture', icon: Camera },
  { id: 'activities', label: 'Activities', icon: Music },
  { id: 'wellness', label: 'Support & Wellness', icon: Heart },
  { id: 'achievements', label: 'Recognition', icon: Trophy },
  { id: 'interactive', label: 'Community Hub', icon: Calendar }
]

const quickStats = [
  { number: '50+', label: 'Active Clubs', icon: Users },
  { number: '15', label: 'Sports Teams', icon: Trophy },
  { number: '200+', label: 'Annual Events', icon: Calendar },
  { number: '98%', label: 'Student Participation', icon: Star }
]

const dailyHighlights = [
  {
    time: '7:30 AM',
    activity: 'Morning Assembly',
    description: 'Community announcements and daily inspiration',
    location: 'Main Auditorium'
  },
  {
    time: '12:00 PM',
    activity: 'Club Fair',
    description: 'Discover new interests and join student organizations',
    location: 'Student Center'
  },
  {
    time: '3:30 PM',
    activity: 'Sports Practice',
    description: 'Athletic teams prepare for upcoming competitions',
    location: 'Various Fields'
  },
  {
    time: '4:00 PM',
    activity: 'Arts Rehearsal',
    description: 'Drama, music, and dance groups collaborate',
    location: 'Performing Arts Center'
  }
]

export default function StudentLife() {
  const [activeTab, setActiveTab] = useState<string>('overview')

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 text-white px-4 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6">Where Stories Begin</h1>
            <p className="text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
              Experience the vibrant community, endless opportunities, and lifelong friendships 
              that make Angels  School more than just education—it's where your story unfolds.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Camera className="w-5 h-5 mr-2" />
                View Photo Gallery
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-purple-600 hover:bg-gray-100">
                <Calendar className="w-5 h-5 mr-2" />
                Upcoming Events
              </Button>
            </div>
          </div>
        </div>

        <div className="px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Tab Navigation */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
              <TabsList className="grid grid-cols-6 h-auto p-2">
                {studentLifeTabs.map(tab => {
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

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-12">
                <div className="text-center">
                  <h2 className="text-4xl font-bold mb-4">Student Life Overview</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    At Angels  School, every day is an opportunity to grow, connect, and create memories that last a lifetime.
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
                          <p className="text-gray-600 font-medium">{stat.label}</p>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>

                {/* Daily Highlights */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-center mb-8">A Day in Student Life</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {dailyHighlights.map((highlight, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-6 shadow-md">
                        <div className="flex items-center gap-2 mb-3">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="font-bold text-primary">{highlight.time}</span>
                        </div>
                        <h4 className="font-semibold mb-2">{highlight.activity}</h4>
                        <p className="text-sm text-gray-600 mb-3">{highlight.description}</p>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <MapPin className="w-3 h-3" />
                          {highlight.location}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Featured Stories Preview */}
                <div>
                  <h3 className="text-2xl font-bold text-center mb-8">Featured Student Stories</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="hover:shadow-lg transition-shadow">
                      <div className="h-48 bg-gradient-to-br from-pink-400 to-purple-500 rounded-t-lg"></div>
                      <CardContent className="pt-4">
                        <Badge className="mb-2">Student Spotlight</Badge>
                        <h4 className="font-semibold mb-2">Sarah's Science Fair Journey</h4>
                        <p className="text-sm text-gray-600">From curiosity to state championship - follow Sarah's incredible research project.</p>
                        <Button variant="ghost" size="sm" className="mt-3 p-0">Read More →</Button>
                      </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow">
                      <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 rounded-t-lg"></div>
                      <CardContent className="pt-4">
                        <Badge className="mb-2">Club Feature</Badge>
                        <h4 className="font-semibold mb-2">Drama Club's Spring Musical</h4>
                        <p className="text-sm text-gray-600">Behind the scenes of our award-winning production of "Into the Woods".</p>
                        <Button variant="ghost" size="sm" className="mt-3 p-0">Read More →</Button>
                      </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow">
                      <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 rounded-t-lg"></div>
                      <CardContent className="pt-4">
                        <Badge className="mb-2">Community Service</Badge>
                        <h4 className="font-semibold mb-2">Volunteer Day Impact</h4>
                        <p className="text-sm text-gray-600">Students make a difference in the local community through service learning.</p>
                        <Button variant="ghost" size="sm" className="mt-3 p-0">Read More →</Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center bg-primary text-white rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">Ready to Join Our Community?</h3>
                  <p className="text-lg mb-6 opacity-90">
                    Discover the activities, clubs, and opportunities waiting for you at Angels  School.
                  </p>
                  <div className="flex justify-center gap-4">
                    <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                      Explore Activities
                    </Button>
                    <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100">
                      Contact Student Life
                    </Button>
                  </div>
                </div>
              </TabsContent>

              {/* Other Tab Content - Placeholder for now */}
              <TabsContent value="community">
                <CommunityShowcase />
              </TabsContent>

              <TabsContent value="activities">
                <ExtracurricularHub />
              </TabsContent>

              <TabsContent value="wellness">
                <StudentWellness />
              </TabsContent>

              <TabsContent value="achievements">
                <AchievementRecognition />
              </TabsContent>

              <TabsContent value="interactive">
                <InteractiveCommunity />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  )
}