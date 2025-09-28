import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { 
  Trophy, 
  Star, 
  Award, 
  Medal, 
  Crown,
  Target,
  BookOpen,
  Users,
  Calendar,
  DollarSign,
  GraduationCap,
  Zap,
  TrendingUp,
  Heart
} from 'lucide-react'

const studentSpotlights = [
  {
    name: 'Sarah Chen',
    grade: 'Grade 12',
    achievement: 'National Science Fair Winner',
    category: 'STEM Excellence',
    description: 'Sarah\'s research on sustainable energy solutions earned her first place at the National Science and Engineering Fair, along with a $50,000 scholarship.',
    image: 'bg-gradient-to-br from-blue-400 to-purple-500',
    date: 'March 2024',
    impact: 'Her project is being reviewed by renewable energy companies for potential implementation.',
    mentor: 'Dr. Rodriguez, Physics Department',
    nextGoals: 'Pursuing MIT early admission for Environmental Engineering'
  },
  {
    name: 'Marcus Williams',
    grade: 'Grade 11',
    achievement: 'State Debate Champion',
    category: 'Communication Arts',
    description: 'Led our debate team to the state championship, demonstrating exceptional public speaking and critical thinking skills.',
    image: 'bg-gradient-to-br from-green-400 to-teal-500',
    date: 'February 2024',
    impact: 'Team finished with a perfect 12-0 record in state competition.',
    mentor: 'Ms. Johnson, English Department',
    nextGoals: 'Competing in national tournaments and considering pre-law programs'
  },
  {
    name: 'Emma Rodriguez',
    grade: 'Grade 10',
    achievement: 'International Art Competition Finalist',
    category: 'Creative Arts',
    description: 'Emma\'s mixed-media piece "Voices of Tomorrow" was selected as a finalist in the Global Youth Art Initiative.',
    image: 'bg-gradient-to-br from-pink-400 to-orange-500',
    date: 'January 2024',
    impact: 'Artwork will be displayed in galleries across three countries.',
    mentor: 'Ms. Williams, Art Department',
    nextGoals: 'Planning solo exhibition and exploring art therapy programs'
  },
  {
    name: 'Alex Thompson',
    grade: 'Grade 12',
    achievement: 'Community Service Leadership Award',
    category: 'Service Excellence',
    description: 'Organized and led over 500 hours of community service projects, impacting more than 1,000 community members.',
    image: 'bg-gradient-to-br from-yellow-400 to-red-500',
    date: 'March 2024',
    impact: 'Established ongoing partnerships with 5 local non-profits.',
    mentor: 'Mrs. Davis, Student Life',
    nextGoals: 'Studying Social Work and continuing community activism'
  }
]

const competitionResults = [
  {
    competition: 'State Academic Decathlon',
    date: 'March 2024',
    result: '1st Place - Division AA',
    participants: ['Team of 9 students', 'Grades 10-12'],
    achievements: ['Overall team championship', '3 individual gold medals', '5 individual silver medals'],
    coach: 'Mr. Peterson',
    nextEvent: 'National Championships - April 2024'
  },
  {
    competition: 'Regional Robotics Championship',
    date: 'February 2024',
    result: '2nd Place - Innovation Award',
    participants: ['Robotics Club - 15 members', 'Grades 9-12'],
    achievements: ['Best robot design', 'Programming excellence', 'Team collaboration award'],
    coach: 'Ms. Chen',
    nextEvent: 'State Championships - May 2024'
  },
  {
    competition: 'State Math Olympiad',
    date: 'January 2024',
    result: '3rd Place - Team Competition',
    participants: ['Math Team - 8 students', 'Grades 9-11'],
    achievements: ['Top 5% individual scores', 'Problem solving excellence', 'Rising team recognition'],
    coach: 'Dr. Kumar',
    nextEvent: 'Regional Qualifiers - Fall 2024'
  },
  {
    competition: 'Model UN Conference',
    date: 'December 2023',
    result: 'Outstanding Delegation',
    participants: ['Model UN Club - 12 delegates', 'Grades 10-12'],
    achievements: ['Best position paper', 'Outstanding diplomacy', 'Crisis simulation winners'],
    coach: 'Ms. Garcia',
    nextEvent: 'International Conference - June 2024'
  }
]

const scholarshipOpportunities = [
  {
    name: 'Angels  Excellence Scholarship',
    amount: '$10,000',
    criteria: 'Academic achievement, leadership, community service',
    deadline: 'April 15, 2024',
    renewable: true,
    description: 'Awarded annually to graduating seniors who demonstrate outstanding academic performance and community involvement.',
    recipients: 5,
    status: 'Open'
  },
  {
    name: 'STEM Innovation Grant',
    amount: '$5,000',
    criteria: 'STEM project with community impact',
    deadline: 'May 1, 2024',
    renewable: false,
    description: 'Supports student-led science, technology, engineering, or math projects that benefit the local community.',
    recipients: 3,
    status: 'Open'
  },
  {
    name: 'Arts & Creativity Fellowship',
    amount: '$7,500',
    criteria: 'Portfolio submission, artistic achievement',
    deadline: 'March 30, 2024',
    renewable: false,
    description: 'Recognizes exceptional talent in visual arts, music, drama, or creative writing.',
    recipients: 2,
    status: 'Closing Soon'
  },
  {
    name: 'Community Impact Award',
    amount: '$3,000',
    criteria: 'Demonstrated community service leadership',
    deadline: 'June 1, 2024',
    renewable: true,
    description: 'Honors students who have made significant contributions to their community through volunteer work and advocacy.',
    recipients: 4,
    status: 'Open'
  }
]

const monthlyAchievements = [
  {
    month: 'March 2024',
    achievements: [
      { category: 'Academic', title: 'Perfect Attendance Recognition - 45 students', icon: Calendar },
      { category: 'Sports', title: 'Basketball Team - Regional Champions', icon: Trophy },
      { category: 'Arts', title: 'Spring Musical Cast - Outstanding Performance', icon: Star },
      { category: 'Service', title: 'Food Drive - 2,000+ items collected', icon: Heart }
    ]
  },
  {
    month: 'February 2024',
    achievements: [
      { category: 'Academic', title: 'Honor Roll - 180 students', icon: BookOpen },
      { category: 'STEM', title: 'Science Fair - 12 state qualifiers', icon: Award },
      { category: 'Leadership', title: 'Student Council - New initiatives launched', icon: Users },
      { category: 'Community', title: 'Peer Tutoring - 200+ sessions completed', icon: GraduationCap }
    ]
  },
  {
    month: 'January 2024',
    achievements: [
      { category: 'Academic', title: 'Dean\'s List - 85 students', icon: Medal },
      { category: 'Arts', title: 'Art Exhibition - 25 student works featured', icon: Target },
      { category: 'Service', title: 'Volunteer Hours - 500+ hours completed', icon: Heart },
      { category: 'Innovation', title: 'App Development Club - 3 apps published', icon: Zap }
    ]
  }
]

export function AchievementRecognition() {
  const [activeSection, setActiveSection] = useState('spotlights')

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Student Achievement Recognition</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Celebrating the outstanding accomplishments, talents, and contributions of our remarkable students who make Angels  School shine.
        </p>
      </div>

      <Tabs value={activeSection} onValueChange={setActiveSection}>
        <TabsList className="grid grid-cols-4 h-auto p-2">
          <TabsTrigger value="spotlights" className="flex flex-col items-center gap-2 p-4">
            <Star className="w-5 h-5" />
            <span className="text-xs">Student Spotlights</span>
          </TabsTrigger>
          <TabsTrigger value="competitions" className="flex flex-col items-center gap-2 p-4">
            <Trophy className="w-5 h-5" />
            <span className="text-xs">Competition Results</span>
          </TabsTrigger>
          <TabsTrigger value="scholarships" className="flex flex-col items-center gap-2 p-4">
            <DollarSign className="w-5 h-5" />
            <span className="text-xs">Scholarships</span>
          </TabsTrigger>
          <TabsTrigger value="monthly" className="flex flex-col items-center gap-2 p-4">
            <Award className="w-5 h-5" />
            <span className="text-xs">Monthly Recognition</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="spotlights" className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Student Spotlights</h3>
            <p className="text-gray-600">Highlighting exceptional achievements and inspiring stories from our student body</p>
          </div>

          <div className="grid gap-8">
            {studentSpotlights.map((student, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row">
                  <div className={`lg:w-80 h-64 lg:h-auto ${student.image}`} />
                  <div className="flex-1">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <div>
                          <CardTitle className="text-2xl">{student.name}</CardTitle>
                          <p className="text-primary font-medium">{student.grade}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-yellow-100 text-yellow-800">{student.category}</Badge>
                          <span className="text-sm text-gray-500">{student.date}</span>
                        </div>
                      </div>
                      <h4 className="text-xl font-semibold text-primary flex items-center gap-2">
                        <Crown className="w-5 h-5" />
                        {student.achievement}
                      </h4>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-6">{student.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-blue-50 rounded-lg p-4">
                          <h5 className="font-medium text-blue-800 mb-2 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" />
                            Impact
                          </h5>
                          <p className="text-blue-700 text-sm">{student.impact}</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4">
                          <h5 className="font-medium text-green-800 mb-2 flex items-center gap-2">
                            <Target className="w-4 h-4" />
                            Next Goals
                          </h5>
                          <p className="text-green-700 text-sm">{student.nextGoals}</p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-600">
                          <span className="font-medium">Mentor:</span> {student.mentor}
                        </div>
                        <Button>Read Full Story</Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="competitions" className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Competition Results</h3>
            <p className="text-gray-600">Outstanding performance in academic competitions and contests</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {competitionResults.map((competition, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{competition.competition}</CardTitle>
                    <Badge variant="outline">{competition.date}</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    <span className="font-semibold text-lg text-primary">{competition.result}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Participants:</h4>
                      <div className="flex flex-wrap gap-1">
                        {competition.participants.map((participant, pIdx) => (
                          <Badge key={pIdx} variant="secondary" className="text-xs">
                            {participant}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Key Achievements:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {competition.achievements.map((achievement, aIdx) => (
                          <li key={aIdx} className="flex items-center gap-2">
                            <Medal className="w-3 h-3 text-yellow-500" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium">Coach:</span>
                          <p>{competition.coach}</p>
                        </div>
                        <div>
                          <span className="font-medium">Next Event:</span>
                          <p className="text-primary">{competition.nextEvent}</p>
                        </div>
                      </div>
                    </div>

                    <Button size="sm" className="w-full">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="scholarships" className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Scholarship Opportunities</h3>
            <p className="text-gray-600">Financial support to help our outstanding students pursue their dreams</p>
          </div>

          <div className="grid gap-6">
            {scholarshipOpportunities.map((scholarship, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl flex items-center gap-3">
                        <DollarSign className="w-6 h-6 text-green-600" />
                        {scholarship.name}
                      </CardTitle>
                      <p className="text-2xl font-bold text-green-600">{scholarship.amount}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge 
                        className={
                          scholarship.status === 'Open' ? 'bg-green-100 text-green-800' : 
                          scholarship.status === 'Closing Soon' ? 'bg-red-100 text-red-800' : 
                          'bg-gray-100 text-gray-800'
                        }
                      >
                        {scholarship.status}
                      </Badge>
                      <span className="text-sm text-gray-500">
                        Due: {scholarship.deadline}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{scholarship.description}</p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-blue-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-blue-600">{scholarship.recipients}</div>
                      <div className="text-xs text-blue-600">Recipients</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-purple-600">
                        {scholarship.renewable ? 'Yes' : 'No'}
                      </div>
                      <div className="text-xs text-purple-600">Renewable</div>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-orange-600">Merit</div>
                      <div className="text-xs text-orange-600">Based</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Eligibility Criteria:</h4>
                    <p className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
                      {scholarship.criteria}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1">Apply Now</Button>
                    <Button variant="outline">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-yellow-800 mb-3 flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              Scholarship Application Tips
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium mb-2">Application Best Practices:</h5>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Start applications early</li>
                  <li>• Follow all guidelines carefully</li>
                  <li>• Get letters of recommendation</li>
                  <li>• Proofread everything multiple times</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-2">Need Help?</h5>
                <p className="text-sm text-yellow-700 mb-2">
                  Visit the College & Career Center for application assistance and essay reviews.
                </p>
                <Button size="sm" variant="outline">Schedule Appointment</Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="monthly" className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Monthly Achievement Recognition</h3>
            <p className="text-gray-600">Celebrating ongoing accomplishments and milestones throughout the year</p>
          </div>

          <div className="space-y-8">
            {monthlyAchievements.map((month, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-primary" />
                    {month.month}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {month.achievements.map((achievement, aIdx) => {
                      const Icon = achievement.icon
                      return (
                        <div key={aIdx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                          <Icon className="w-5 h-5 text-primary mt-0.5" />
                          <div>
                            <Badge variant="outline" className="mb-2 text-xs">
                              {achievement.category}
                            </Badge>
                            <h4 className="font-medium text-sm">{achievement.title}</h4>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center bg-primary text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Nominate a Peer for Recognition</h3>
            <p className="text-lg mb-6 opacity-90">
              Know someone who deserves recognition? Nominate them for our monthly achievement awards.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Submit Nomination
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                View Criteria
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}