import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Award, TrendingUp, Users, GraduationCap, Trophy, Star, Target, BookOpen } from 'lucide-react'

interface Achievement {
  title: string
  description: string
  year: string
  category: 'academic' | 'athletics' | 'arts' | 'community'
}

interface Statistic {
  label: string
  value: string
  description: string
  trend?: string
  icon: any
}

const achievements: Achievement[] = [
  {
    title: "National Blue Ribbon School",
    description: "Recognized by the U.S. Department of Education for academic excellence",
    year: "2023",
    category: "academic"
  },
  {
    title: "State Championship - Robotics",
    description: "First place in the state robotics competition",
    year: "2024",
    category: "academic"
  },
  {
    title: "Excellence in Arts Education",
    description: "State recognition for outstanding arts programs",
    year: "2023",
    category: "arts"
  },
  {
    title: "Community Service Award",
    description: "Over 2,000 hours of community service by students",
    year: "2024",
    category: "community"
  },
  {
    title: "Athletic Conference Champions",
    description: "Varsity basketball team conference champions",
    year: "2024",
    category: "athletics"
  },
  {
    title: "Math Competition Winners",
    description: "Regional mathematics competition first place",
    year: "2024",
    category: "academic"
  }
]

const statistics: Statistic[] = [
  {
    label: "College Acceptance Rate",
    value: "98%",
    description: "of graduates accepted to their first-choice college",
    trend: "+3% from last year",
    icon: GraduationCap
  },
  {
    label: "Average SAT Score",
    value: "1,340",
    description: "compared to national average of 1,060",
    trend: "+40 points",
    icon: Target
  },
  {
    label: "Teacher Retention",
    value: "94%",
    description: "experienced faculty return each year",
    trend: "Industry leading",
    icon: Users
  },
  {
    label: "Student-Teacher Ratio",
    value: "12:1",
    description: "ensuring personalized attention",
    icon: BookOpen
  },
  {
    label: "AP Pass Rate",
    value: "87%",
    description: "students score 3 or higher on AP exams",
    trend: "+12% above national average",
    icon: Award
  },
  {
    label: "Merit Scholarships",
    value: "$2.3M",
    description: "in merit scholarships awarded to graduates",
    trend: "Class of 2024",
    icon: Trophy
  }
]

const getCategoryColor = (category: Achievement['category']) => {
  switch (category) {
    case 'academic': return 'bg-blue-100 text-blue-800'
    case 'athletics': return 'bg-green-100 text-green-800'
    case 'arts': return 'bg-purple-100 text-purple-800'
    case 'community': return 'bg-orange-100 text-orange-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

const getCategoryIcon = (category: Achievement['category']) => {
  switch (category) {
    case 'academic': return BookOpen
    case 'athletics': return Trophy
    case 'arts': return Star
    case 'community': return Users
    default: return Award
  }
}

export function AcademicAchievements() {
  return (
    <div className="space-y-8">
      {/* Statistics Overview */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-center">Our Track Record</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {statistics.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <Icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                  <div className="font-semibold text-gray-900 mb-2">{stat.label}</div>
                  <p className="text-sm text-gray-600 mb-2">{stat.description}</p>
                  {stat.trend && (
                    <Badge variant="secondary" className="text-xs">
                      <TrendingUp className="mr-1 h-3 w-3" />
                      {stat.trend}
                    </Badge>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Recent Achievements */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-center">Recent Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => {
            const CategoryIcon = getCategoryIcon(achievement.category)
            return (
              <Card key={index}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <CategoryIcon className="h-5 w-5 text-blue-600" />
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    </div>
                    <Badge className={getCategoryColor(achievement.category)}>
                      {achievement.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">{achievement.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Year: {achievement.year}</span>
                    <Badge variant="outline">{achievement.year}</Badge>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* College Placement Highlights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <GraduationCap className="mr-2 h-5 w-5" />
            College Placement Highlights
          </CardTitle>
          <CardDescription>
            Recent graduate acceptances to top universities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              "Harvard University",
              "Stanford University", 
              "MIT",
              "Yale University",
              "Princeton University",
              "Columbia University",
              "University of Chicago",
              "Duke University"
            ].map((university, index) => (
              <div key={index} className="p-3 bg-blue-50 rounded-lg">
                <div className="font-semibold text-sm text-blue-900">{university}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">4-Year College Enrollment</span>
              <span className="text-2xl font-bold text-green-600">98%</span>
            </div>
            <Progress value={98} className="h-2 mb-2" />
            <p className="text-sm text-gray-600">
              Class of 2024 graduates enrolled in 4-year colleges immediately after graduation
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Accreditations & Memberships */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Award className="mr-2 h-5 w-5" />
            Accreditations & Memberships
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-3">Accredited By:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <Badge variant="outline" className="mr-2">✓</Badge>
                  Middle States Association of Colleges and Schools
                </li>
                <li className="flex items-center">
                  <Badge variant="outline" className="mr-2">✓</Badge>
                  International Baccalaureate Organization
                </li>
                <li className="flex items-center">
                  <Badge variant="outline" className="mr-2">✓</Badge>
                  College Board AP Program
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Member Of:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <Badge variant="outline" className="mr-2">✓</Badge>
                  National Association of Independent Schools
                </li>
                <li className="flex items-center">
                  <Badge variant="outline" className="mr-2">✓</Badge>
                  Educational Records Bureau
                </li>
                <li className="flex items-center">
                  <Badge variant="outline" className="mr-2">✓</Badge>
                  National Honor Society Chapter
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}