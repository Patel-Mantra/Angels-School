import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { ArrowRight, ArrowDown, GraduationCap, Microscope, Palette, Calculator, Globe, Briefcase } from 'lucide-react'

const pathways = [
  {
    id: 'stem',
    title: 'STEM Pathway',
    icon: Microscope,
    color: 'blue',
    description: 'Science, Technology, Engineering, and Mathematics focus',
    tracks: [
      {
        grade: 'K-5',
        courses: ['Math Foundations', 'Science Inquiry', 'Technology Literacy', 'Engineering Design'],
        milestones: ['STEM Fair Participation', 'Coding Introduction']
      },
      {
        grade: '6-8',
        courses: ['Pre-Algebra', 'Physical Science', 'Computer Programming', 'Engineering Projects'],
        milestones: ['Science Olympiad', 'Math Competition', 'Robotics Club']
      },
      {
        grade: '9-12',
        courses: ['AP Calculus', 'AP Physics', 'AP Computer Science', 'Research Project'],
        milestones: ['STEM Internship', 'Science Fair Awards', 'College Research']
      }
    ],
    careers: ['Engineer', 'Doctor', 'Data Scientist', 'Research Scientist', 'Software Developer'],
    colleges: ['MIT', 'Caltech', 'UC Berkeley', 'Stanford']
  },
  {
    id: 'arts',
    title: 'Arts & Creative Pathway',
    icon: Palette,
    color: 'purple',
    description: 'Visual and performing arts specialization',
    tracks: [
      {
        grade: 'K-5',
        courses: ['Art Fundamentals', 'Music Basics', 'Creative Writing', 'Drama Play'],
        milestones: ['Art Show Participation', 'School Performance']
      },
      {
        grade: '6-8',
        courses: ['Digital Art', 'Band/Orchestra', 'Theater Arts', 'Creative Portfolio'],
        milestones: ['Regional Art Competition', 'Drama Production', 'Music Recital']
      },
      {
        grade: '9-12',
        courses: ['AP Art', 'AP Music Theory', 'Film Production', 'Portfolio Development'],
        milestones: ['Arts Scholarship', 'Gallery Exhibition', 'Film Festival Entry']
      }
    ],
    careers: ['Graphic Designer', 'Musician', 'Actor', 'Film Director', 'Art Therapist'],
    colleges: ['RISD', 'Juilliard', 'CalArts', 'NYU Tisch']
  },
  {
    id: 'humanities',
    title: 'Humanities Pathway',
    icon: Globe,
    color: 'green',
    description: 'Language arts, social studies, and cultural studies',
    tracks: [
      {
        grade: 'K-5',
        courses: ['Reading & Writing', 'Social Studies', 'Cultural Awareness', 'Public Speaking'],
        milestones: ['Writing Contest', 'Cultural Fair', 'Reading Challenge']
      },
      {
        grade: '6-8',
        courses: ['Advanced Writing', 'World History', 'Foreign Language', 'Debate Team'],
        milestones: ['Essay Competition', 'Model UN', 'Language Proficiency']
      },
      {
        grade: '9-12',
        courses: ['AP Literature', 'AP History', 'Philosophy', 'Research Methods'],
        milestones: ['Published Writing', 'Debate Championship', 'Research Publication']
      }
    ],
    careers: ['Teacher', 'Lawyer', 'Journalist', 'Diplomat', 'Social Worker'],
    colleges: ['Harvard', 'Yale', 'Columbia', 'Georgetown']
  },
  {
    id: 'business',
    title: 'Business & Entrepreneurship',
    icon: Briefcase,
    color: 'orange',
    description: 'Business skills, economics, and leadership development',
    tracks: [
      {
        grade: 'K-5',
        courses: ['Math Skills', 'Communication', 'Team Projects', 'Basic Economics'],
        milestones: ['Student Store Project', 'Leadership Roles']
      },
      {
        grade: '6-8',
        courses: ['Business Math', 'Economics Intro', 'Marketing Basics', 'Leadership Skills'],
        milestones: ['Business Plan Competition', 'Student Government', 'Fundraising Project']
      },
      {
        grade: '9-12',
        courses: ['AP Economics', 'Business Management', 'Accounting', 'Entrepreneurship'],
        milestones: ['Business Internship', 'Startup Competition', 'Investment Club']
      }
    ],
    careers: ['CEO', 'Marketing Manager', 'Financial Analyst', 'Entrepreneur', 'Consultant'],
    colleges: ['Wharton', 'Stanford GSB', 'Harvard Business', 'Kellogg']
  }
]

interface PathwayDetailProps {
  pathway: typeof pathways[0]
}

function PathwayDetail({ pathway }: PathwayDetailProps) {
  const Icon = pathway.icon
  const colorClasses = {
    blue: 'text-blue-600 bg-blue-50 border-blue-200',
    purple: 'text-purple-600 bg-purple-50 border-purple-200',
    green: 'text-green-600 bg-green-50 border-green-200',
    orange: 'text-orange-600 bg-orange-50 border-orange-200'
  }
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Explore Pathway</Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <Icon className={`w-6 h-6 ${colorClasses[pathway.color as keyof typeof colorClasses]}`} />
            {pathway.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <p className="text-gray-600 text-lg">{pathway.description}</p>
          
          {/* Academic Progression */}
          <div>
            <h4 className="font-semibold mb-4 text-xl">Academic Progression</h4>
            <div className="space-y-4">
              {pathway.tracks.map((track, idx) => (
                <div key={idx} className="relative">
                  <div className="flex items-start gap-4">
                    <div className={`${colorClasses[pathway.color as keyof typeof colorClasses]} p-3 rounded-lg font-semibold min-w-20 text-center`}>
                      {track.grade}
                    </div>
                    <div className="flex-1 space-y-3">
                      <div>
                        <h5 className="font-medium mb-2">Core Courses</h5>
                        <div className="flex flex-wrap gap-2">
                          {track.courses.map((course, courseIdx) => (
                            <Badge key={courseIdx} variant="secondary">{course}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Key Milestones</h5>
                        <div className="flex flex-wrap gap-2">
                          {track.milestones.map((milestone, milestoneIdx) => (
                            <Badge key={milestoneIdx} variant="outline" className="border-green-300 text-green-700">
                              {milestone}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {idx < pathway.tracks.length - 1 && (
                    <div className="flex justify-center my-4">
                      <ArrowDown className="w-5 h-5 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Career Outcomes */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Career Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {pathway.careers.map((career, idx) => (
                    <Badge key={idx} className="bg-green-100 text-green-800">{career}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Target Colleges</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {pathway.colleges.map((college, idx) => (
                    <Badge key={idx} className="bg-blue-100 text-blue-800">{college}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className={`${colorClasses[pathway.color as keyof typeof colorClasses]} p-4 rounded-lg`}>
            <h4 className="font-semibold mb-2">Get Started Today</h4>
            <p className="text-sm mb-3">
              Interested in this pathway? Meet with our academic counselors to create a personalized 
              plan that aligns with your interests and goals.
            </p>
            <Button size="sm">Schedule Counseling Session</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function PathwayVisualization() {
  const [selectedPathway, setSelectedPathway] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Academic Pathway Visualization</h2>
        <p className="text-gray-600 mb-8">Explore specialized tracks that prepare students for their future careers</p>
      </div>

      {/* Pathway Overview */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pathways.map((pathway) => {
          const Icon = pathway.icon
          const colorClasses = {
            blue: 'text-blue-600 bg-blue-50 border-blue-200 hover:bg-blue-100',
            purple: 'text-purple-600 bg-purple-50 border-purple-200 hover:bg-purple-100',
            green: 'text-green-600 bg-green-50 border-green-200 hover:bg-green-100',
            orange: 'text-orange-600 bg-orange-50 border-orange-200 hover:bg-orange-100'
          }
          
          return (
            <Card 
              key={pathway.id} 
              className={`cursor-pointer transition-all ${colorClasses[pathway.color as keyof typeof colorClasses]}`}
              onClick={() => setSelectedPathway(selectedPathway === pathway.id ? null : pathway.id)}
            >
              <CardHeader className="text-center">
                <Icon className="w-12 h-12 mx-auto mb-2" />
                <CardTitle className="text-lg">{pathway.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-center">
                <p className="text-sm text-gray-700 mb-4">{pathway.description}</p>
                <div className="space-y-2">
                  <PathwayDetail pathway={pathway} />
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Flow Chart Visualization */}
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Student Journey Flow</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
            {/* Elementary */}
            <div className="text-center">
              <div className="bg-blue-100 p-6 rounded-full mb-4">
                <div className="text-2xl font-bold text-blue-600">K-5</div>
              </div>
              <h3 className="font-semibold mb-2">Foundation</h3>
              <p className="text-sm text-gray-600 max-w-32">Core skills and interest exploration</p>
            </div>
            
            <ArrowRight className="hidden lg:block w-6 h-6 text-gray-400" />
            <ArrowDown className="lg:hidden w-6 h-6 text-gray-400" />
            
            {/* Middle School */}
            <div className="text-center">
              <div className="bg-purple-100 p-6 rounded-full mb-4">
                <div className="text-2xl font-bold text-purple-600">6-8</div>
              </div>
              <h3 className="font-semibold mb-2">Exploration</h3>
              <p className="text-sm text-gray-600 max-w-32">Pathway introduction and skill building</p>
            </div>
            
            <ArrowRight className="hidden lg:block w-6 h-6 text-gray-400" />
            <ArrowDown className="lg:hidden w-6 h-6 text-gray-400" />
            
            {/* High School */}
            <div className="text-center">
              <div className="bg-green-100 p-6 rounded-full mb-4">
                <div className="text-2xl font-bold text-green-600">9-12</div>
              </div>
              <h3 className="font-semibold mb-2">Specialization</h3>
              <p className="text-sm text-gray-600 max-w-32">Advanced coursework and pathway focus</p>
            </div>
            
            <ArrowRight className="hidden lg:block w-6 h-6 text-gray-400" />
            <ArrowDown className="lg:hidden w-6 h-6 text-gray-400" />
            
            {/* Post-Graduation */}
            <div className="text-center">
              <div className="bg-orange-100 p-6 rounded-full mb-4">
                <GraduationCap className="w-8 h-8 text-orange-600 mx-auto" />
              </div>
              <h3 className="font-semibold mb-2">Success</h3>
              <p className="text-sm text-gray-600 max-w-32">College and career readiness</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pathway Statistics */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">94%</div>
            <p className="text-gray-600">College Acceptance Rate</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">87%</div>
            <p className="text-gray-600">Career-Related First Jobs</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">4.2</div>
            <p className="text-gray-600">Average AP Exam Score</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-gray-50 to-blue-50 border-gray-200">
        <CardContent className="pt-6 text-center space-y-4">
          <Calculator className="w-12 h-12 text-blue-600 mx-auto" />
          <h3 className="text-2xl font-bold">Personalized Pathway Planning</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our academic counselors work with each student to create a customized pathway plan 
            that aligns with their interests, strengths, and career goals.
          </p>
          <Button size="lg">Start Your Pathway Assessment</Button>
        </CardContent>
      </Card>
    </div>
  )
}