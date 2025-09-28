import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Target, BarChart3, FileText, TrendingUp, CheckCircle, Star, Trophy, GraduationCap } from 'lucide-react'

const standardsMapping = [
  {
    subject: 'Mathematics',
    state: 'California Math Standards',
    national: 'Common Core Mathematics',
    alignment: 95,
    apCourses: ['AP Calculus AB', 'AP Calculus BC', 'AP Statistics'],
    assessments: ['SBAC Math', 'SAT Math', 'AP Exams']
  },
  {
    subject: 'Science',
    state: 'California NGSS',
    national: 'Next Generation Science Standards',
    alignment: 98,
    apCourses: ['AP Biology', 'AP Chemistry', 'AP Physics', 'AP Environmental Science'],
    assessments: ['CAST', 'SAT Science', 'AP Exams']
  },
  {
    subject: 'English',
    state: 'California ELA Standards',
    national: 'Common Core ELA',
    alignment: 92,
    apCourses: ['AP English Language', 'AP English Literature'],
    assessments: ['SBAC ELA', 'SAT Reading/Writing', 'AP Exams']
  },
  {
    subject: 'Social Studies',
    state: 'California HSS Standards',
    national: 'C3 Framework',
    alignment: 88,
    apCourses: ['AP US History', 'AP World History', 'AP Government'],
    assessments: ['District Assessments', 'SAT', 'AP Exams']
  }
]

const assessmentMethods = [
  {
    type: 'Formative Assessment',
    description: 'Ongoing evaluation during learning process',
    frequency: 'Daily/Weekly',
    examples: ['Exit tickets', 'Quick polls', 'Peer feedback', 'Learning journals'],
    weight: 30
  },
  {
    type: 'Summative Assessment',
    description: 'Evaluation of learning at the end of instructional unit',
    frequency: 'End of Unit',
    examples: ['Unit tests', 'Projects', 'Essays', 'Lab reports'],
    weight: 50
  },
  {
    type: 'Authentic Assessment',
    description: 'Real-world application of knowledge and skills',
    frequency: 'Quarterly',
    examples: ['Portfolio presentations', 'Research projects', 'Community service'],
    weight: 20
  }
]

const sampleReportCard = {
  student: 'Sample Student',
  grade: '10th Grade',
  semester: 'Fall 2025',
  gpa: 3.7,
  subjects: [
    { name: 'Algebra II', grade: 'A-', percentage: 92, teacher: 'Dr. Chen', credits: 1.0 },
    { name: 'Chemistry', grade: 'B+', percentage: 88, teacher: 'Mr. Rodriguez', credits: 1.0 },
    { name: 'English Literature', grade: 'A', percentage: 95, teacher: 'Ms. Foster', credits: 1.0 },
    { name: 'World History', grade: 'B', percentage: 85, teacher: 'Mr. Johnson', credits: 1.0 },
    { name: 'Physical Education', grade: 'A', percentage: 98, teacher: 'Coach Davis', credits: 0.5 }
  ],
  achievements: ['Honor Roll', 'Perfect Attendance', 'Science Fair Participant'],
  collegeReadiness: {
    sat: { verbal: 580, math: 620, total: 1200 },
    ap: { taken: 2, passed: 2, scores: [4, 3] },
    gpa: { weighted: 3.9, unweighted: 3.7 }
  }
}

const collegePrepPrograms = [
  {
    program: 'Advanced Placement (AP)',
    courses: 15,
    description: 'College-level coursework with opportunity to earn college credit',
    passRate: 85,
    avgScore: 3.4
  },
  {
    program: 'Dual Enrollment',
    courses: 8,
    description: 'Concurrent enrollment in community college courses',
    passRate: 92,
    avgScore: 3.1
  },
  {
    program: 'International Baccalaureate (IB)',
    courses: 12,
    description: 'Rigorous international curriculum with global perspective',
    passRate: 78,
    avgScore: 4.2
  }
]

function SampleReportModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <FileText className="w-4 h-4 mr-2" />
          View Sample Report
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Sample Progress Report</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Header */}
          <div className="bg-primary text-white p-4 rounded-lg">
            <h3 className="text-xl font-bold">{sampleReportCard.student}</h3>
            <p>{sampleReportCard.grade} • {sampleReportCard.semester}</p>
            <p className="text-sm opacity-90">Cumulative GPA: {sampleReportCard.gpa}</p>
          </div>

          {/* Grades */}
          <div>
            <h4 className="font-semibold mb-3">Course Grades</h4>
            <div className="space-y-2">
              {sampleReportCard.subjects.map((subject, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div className="flex-1">
                    <p className="font-medium">{subject.name}</p>
                    <p className="text-sm text-gray-600">{subject.teacher} • {subject.credits} Credits</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">{subject.grade}</p>
                    <p className="text-sm text-gray-600">{subject.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="font-semibold mb-3">Achievements & Recognition</h4>
            <div className="flex flex-wrap gap-2">
              {sampleReportCard.achievements.map((achievement, idx) => (
                <Badge key={idx} className="bg-yellow-100 text-yellow-800">
                  <Trophy className="w-3 h-3 mr-1" />
                  {achievement}
                </Badge>
              ))}
            </div>
          </div>

          {/* College Readiness */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Test Scores</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-medium">SAT Score</p>
                  <p className="text-2xl font-bold text-primary">{sampleReportCard.collegeReadiness.sat.total}</p>
                  <p className="text-sm text-gray-600">
                    Verbal: {sampleReportCard.collegeReadiness.sat.verbal} | 
                    Math: {sampleReportCard.collegeReadiness.sat.math}
                  </p>
                </div>
                <div>
                  <p className="font-medium">AP Exams</p>
                  <p className="text-sm">
                    {sampleReportCard.collegeReadiness.ap.passed}/{sampleReportCard.collegeReadiness.ap.taken} passed
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Academic Standing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-medium">Weighted GPA</p>
                  <p className="text-2xl font-bold text-green-600">{sampleReportCard.collegeReadiness.gpa.weighted}</p>
                </div>
                <div>
                  <p className="font-medium">Unweighted GPA</p>
                  <p className="text-2xl font-bold">{sampleReportCard.collegeReadiness.gpa.unweighted}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function AcademicStandards() {
  const [selectedTab, setSelectedTab] = useState('standards')

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Academic Standards & Assessment</h2>
        <p className="text-gray-600">Comprehensive evaluation and progress tracking aligned with state and national standards</p>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid grid-cols-4">
          <TabsTrigger value="standards">Standards Alignment</TabsTrigger>
          <TabsTrigger value="assessment">Assessment Methods</TabsTrigger>
          <TabsTrigger value="progress">Progress Tracking</TabsTrigger>
          <TabsTrigger value="college">College Preparation</TabsTrigger>
        </TabsList>

        <TabsContent value="standards" className="space-y-6">
          <div className="grid gap-6">
            {standardsMapping.map((subject, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      {subject.subject}
                    </span>
                    <Badge variant="secondary">{subject.alignment}% Aligned</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-sm text-gray-600">State Standards</p>
                      <p className="font-semibold">{subject.state}</p>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gray-600">National Standards</p>
                      <p className="font-semibold">{subject.national}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-medium text-sm text-gray-600 mb-2">Alignment Progress</p>
                    <Progress value={subject.alignment} className="h-2" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-sm text-gray-600 mb-2">AP Courses Available</p>
                      <div className="flex flex-wrap gap-1">
                        {subject.apCourses.map((course, i) => (
                          <Badge key={i} variant="outline" className="text-xs">{course}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gray-600 mb-2">Assessment Types</p>
                      <div className="flex flex-wrap gap-1">
                        {subject.assessments.map((assessment, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">{assessment}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="assessment" className="space-y-6">
          <div className="grid gap-6">
            {assessmentMethods.map((method, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5" />
                      {method.type}
                    </span>
                    <Badge>{method.weight}% of Grade</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{method.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-sm text-gray-600">Frequency</p>
                      <p className="font-semibold">{method.frequency}</p>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gray-600 mb-2">Examples</p>
                      <div className="flex flex-wrap gap-1">
                        {method.examples.map((example, i) => (
                          <Badge key={i} variant="outline" className="text-xs">{example}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold">Fair & Transparent Grading</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Our assessment philosophy emphasizes growth, multiple opportunities to demonstrate learning, 
                and clear communication of expectations through detailed rubrics and feedback.
              </p>
              <Button variant="outline">View Grading Policy</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="progress" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Progress Tracking Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Real-time grade updates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Assignment and exam tracking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Attendance monitoring</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Goal setting and progress visualization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Parent portal access</span>
                  </div>
                </div>
                <Button className="w-full">Access Student Portal</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Achievement Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium mb-2">School Average GPA</p>
                  <p className="text-3xl font-bold text-primary">3.6</p>
                </div>
                <div>
                  <p className="font-medium mb-2">College Readiness Rate</p>
                  <p className="text-3xl font-bold text-green-600">89%</p>
                </div>
                <div>
                  <p className="font-medium mb-2">State Test Proficiency</p>
                  <p className="text-3xl font-bold text-blue-600">92%</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <SampleReportModal />
          </div>
        </TabsContent>

        <TabsContent value="college" className="space-y-6">
          <div className="grid gap-6">
            {collegePrepPrograms.map((program, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5" />
                      {program.program}
                    </span>
                    <Badge variant="secondary">{program.courses} Courses</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{program.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-sm text-gray-600">Pass Rate</p>
                      <div className="flex items-center gap-2">
                        <Progress value={program.passRate} className="flex-1 h-2" />
                        <span className="font-bold text-green-600">{program.passRate}%</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gray-600">Average Score</p>
                      <p className="text-xl font-bold text-primary">{program.avgScore}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <Star className="w-12 h-12 text-purple-600 mx-auto" />
                <h3 className="text-2xl font-bold">University Partnerships</h3>
                <p className="text-gray-700 max-w-2xl mx-auto">
                  Our students benefit from exclusive partnerships with top universities, including 
                  guaranteed admission pathways, scholarship opportunities, and early college experiences.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  <Badge>UC System Partnership</Badge>
                  <Badge>Community College Dual Enrollment</Badge>
                  <Badge>Merit Scholarship Program</Badge>
                  <Badge>Summer Research Opportunities</Badge>
                </div>
                <Button size="lg" className="mt-4">Learn About Partnerships</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}