import { useState } from 'react'
import { Layout } from '@/components/layout/Layout'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Calculator, Beaker, Palette, Globe, GraduationCap, Users, Target, Heart } from 'lucide-react'

const gradeTabs = [
  { id: 'overview', label: 'Overview', icon: BookOpen },
  { id: 'curriculum', label: 'Curriculum', icon: Target },
  { id: 'pathways', label: 'Pathways', icon: GraduationCap },
  { id: 'faculty', label: 'Faculty', icon: Users },
  { id: 'support', label: 'Support', icon: Heart }
]

const subjects = [
  { id: 'math', title: 'Mathematics', icon: Calculator, description: 'Foundational numeracy to advanced problem solving' },
  { id: 'science', title: 'Science', icon: Beaker, description: 'Inquiry-based science, labs, and research projects' },
  { id: 'english', title: 'English', icon: BookOpen, description: 'Literacy, writing, literature, and communication skills' },
  { id: 'arts', title: 'Arts', icon: Palette, description: 'Visual arts, music, drama, and creative expression' },
  { id: 'social', title: 'Social Studies', icon: Globe, description: 'History, civics, geography and global perspectives' }
]

export default function AcademicsWorking() {
  const [activeTab, setActiveTab] = useState<string>('overview')
  // Force cache refresh
  const version = "v1.0.1"

  return (
    <Layout>
      <div className="min-h-screen px-4 py-16" data-version={version}>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Learning Pathways
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive curriculum, world-class faculty, and personalized learning experiences 
              designed to prepare students for success in college, career, and life.
            </p>
          </div>

          {/* Tabs Navigation */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid grid-cols-5 h-auto p-2">
              {gradeTabs.map(tab => {
                const Icon = tab.icon
                return (
                  <TabsTrigger 
                    key={tab.id} 
                    value={tab.id} 
                    className="flex flex-col items-center gap-2 p-4"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-xs font-medium">{tab.label}</span>
                  </TabsTrigger>
                )
              })}
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Academic Excellence Overview</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Our comprehensive academic program spans from kindergarten through 12th grade.
                </p>
              </div>

              {/* Grade Level Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-blue-200 bg-blue-50/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-700">
                      <BookOpen className="w-6 h-6" />
                      Grades K-5
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">Foundation years focusing on core skills.</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Reading & writing fundamentals</li>
                      <li>• Mathematical reasoning</li>
                      <li>• Scientific inquiry</li>
                      <li>• Creative expression</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 bg-purple-50/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-700">
                      <Target className="w-6 h-6" />
                      Grades 6-8
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">Exploration and pathway introduction.</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Advanced core subjects</li>
                      <li>• Pathway exploration</li>
                      <li>• Critical thinking</li>
                      <li>• Leadership opportunities</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700">
                      <GraduationCap className="w-6 h-6" />
                      Grades 9-12
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">Specialization and college preparation.</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• AP and honors courses</li>
                      <li>• Pathway specialization</li>
                      <li>• College partnerships</li>
                      <li>• Career preparation</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Subject Areas */}
              <div>
                <h3 className="text-2xl font-bold text-center mb-6">Core Subject Areas</h3>
                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {subjects.map(subject => {
                    const Icon = subject.icon
                    return (
                      <Card key={subject.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader className="text-center pb-2">
                          <Icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                          <CardTitle className="text-lg">{subject.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-sm text-gray-600 text-center">{subject.description}</p>
                          <Button variant="outline" size="sm" className="w-full mt-3">
                            Learn More
                          </Button>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>

              {/* Stats */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-center mb-6">Academic Achievements</h3>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                    <p className="text-gray-600">College Acceptance</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">4.3</div>
                    <p className="text-gray-600">Average AP Score</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
                    <p className="text-gray-600">AP Courses</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">15:1</div>
                    <p className="text-gray-600">Student-Teacher Ratio</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Other Tabs - Simple Content for now */}
            <TabsContent value="curriculum">
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-4">Curriculum Explorer</h2>
                <p className="text-gray-600 mb-6">Interactive curriculum details coming soon...</p>
                <Button>Explore Courses</Button>
              </div>
            </TabsContent>

            <TabsContent value="pathways">
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-4">Academic Pathways</h2>
                <p className="text-gray-600 mb-6">STEM, Arts, Humanities, and Business tracks</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                  <Badge className="p-4 bg-blue-100 text-blue-800">STEM Pathway</Badge>
                  <Badge className="p-4 bg-purple-100 text-purple-800">Arts Pathway</Badge>
                  <Badge className="p-4 bg-green-100 text-green-800">Humanities</Badge>
                  <Badge className="p-4 bg-orange-100 text-orange-800">Business</Badge>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="faculty">
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-4">Meet Our Faculty</h2>
                <p className="text-gray-600 mb-6">Experienced educators dedicated to student success</p>
                <Button>View Teacher Profiles</Button>
              </div>
            </TabsContent>

            <TabsContent value="support">
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-4">Student Support Services</h2>
                <p className="text-gray-600 mb-6">Comprehensive support for every learner</p>
                <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">Special Education</h3>
                      <p className="text-sm text-gray-600">Inclusive support and accommodations</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">Tutoring Programs</h3>
                      <p className="text-sm text-gray-600">Peer mentoring and academic help</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  )
}