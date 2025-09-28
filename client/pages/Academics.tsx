import { useState } from 'react'
import { Layout } from '@/components/layout/Layout'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SubjectCard } from '../components/misc/CurriculumExplorer'
import { CurriculumExplorer } from '../components/misc/CurriculumExplorerFull'
import { TeacherProfiles } from '../components/misc/TeacherProfiles'
import { AcademicStandards } from '../components/misc/AcademicStandards'
import { StudentSupportServices } from '../components/misc/StudentSupportServices'
import { PathwayVisualization } from '../components/misc/PathwayVisualization'
import { BookOpen, Calculator, Beaker, Palette, Globe, MapPin, GraduationCap, Users, Target, Heart } from 'lucide-react'

const gradeTabs = [
  { id: 'overview', label: 'Overview', icon: BookOpen },
  { id: 'curriculum', label: 'Curriculum Explorer', icon: Target },
  { id: 'pathways', label: 'Academic Pathways', icon: MapPin },
  { id: 'teachers', label: 'Faculty', icon: Users },
  { id: 'standards', label: 'Standards & Assessment', icon: GraduationCap },
  { id: 'support', label: 'Student Support', icon: Heart }
]

const subjects = [
  { id: 'math', title: 'Mathematics', icon: Calculator, description: 'Foundational numeracy to advanced problem solving' },
  { id: 'science', title: 'Science', icon: Beaker, description: 'Inquiry-based science, labs, and research projects' },
  { id: 'english', title: 'English', icon: BookOpen, description: 'Literacy, writing, literature, and communication skills' },
  { id: 'arts', title: 'Arts', icon: Palette, description: 'Visual arts, music, drama, and creative expression' },
  { id: 'social', title: 'Social Studies', icon: Globe, description: 'History, civics, geography and global perspectives' }
]

export default function Academics() {
  const [activeTab, setActiveTab] = useState<string>('overview')

  return (
    <Layout>
      <div className="min-h-screen px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Learning Pathways
            </h1>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              Discover our comprehensive curriculum, world-class faculty, and personalized learning experiences 
              designed to prepare students for success in college, career, and life.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid grid-cols-6 h-auto p-2">
              {gradeTabs.map(tab => {
                const Icon = tab.icon
                return (
                  <TabsTrigger 
                    key={tab.id} 
                    value={tab.id} 
                    className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-xs font-medium">{tab.label}</span>
                  </TabsTrigger>
                )
              })}
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Academic Excellence Overview</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Our comprehensive academic program spans from kindergarten through 12th grade, 
                  providing rigorous, engaging, and personalized learning experiences.
                </p>
              </div>

              {/* Grade Level Overview */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="border-blue-200 bg-blue-50/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-700">
                      <BookOpen className="w-6 h-6" />
                      Grades K-5
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">Foundation years focusing on core literacy, numeracy, and curiosity development.</p>
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
                    <p className="text-gray-700 mb-4">Exploration and skill-building with pathway introduction and enrichment.</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Advanced core subjects</li>
                      <li>• Pathway exploration</li>
                      <li>• Critical thinking development</li>
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
                    <p className="text-gray-700 mb-4">Specialized coursework, college preparation, and career readiness focus.</p>
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
                  {subjects.map(subject => (
                    <SubjectCard key={subject.id} subject={subject} />
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-center mb-6">Academic Achievements</h3>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                    <p className="text-gray-600">College Acceptance Rate</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">4.3</div>
                    <p className="text-gray-600">Average AP Score</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
                    <p className="text-gray-600">AP Courses Offered</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">15:1</div>
                    <p className="text-gray-600">Student-Teacher Ratio</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="curriculum">
              <CurriculumExplorer />
            </TabsContent>

            <TabsContent value="pathways">
              <PathwayVisualization />
            </TabsContent>

            <TabsContent value="teachers">
              <TeacherProfiles />
            </TabsContent>

            <TabsContent value="standards">
              <AcademicStandards />
            </TabsContent>

            <TabsContent value="support">
              <StudentSupportServices />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  )
}