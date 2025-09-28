import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { 
  Search, 
  Clock, 
  MapPin, 
  Users, 
  Mail,
  Trophy,
  Music,
  Camera,
  Palette,
  BookOpen,
  Microscope,
  Globe,
  Heart,
  Code,
  Gamepad2
} from 'lucide-react'

const clubCategories = [
  { id: 'all', label: 'All Clubs', count: 52 },
  { id: 'academic', label: 'Academic', count: 15 },
  { id: 'arts', label: 'Arts & Performance', count: 12 },
  { id: 'stem', label: 'STEM', count: 8 },
  { id: 'service', label: 'Service', count: 10 },
  { id: 'special', label: 'Special Interest', count: 7 }
]

const clubs = [
  {
    id: 1,
    name: 'Robotics Team',
    category: 'stem',
    description: 'Design, build, and program robots for competitions. No experience required!',
    members: 24,
    meetingTime: 'Tuesdays & Thursdays 3:30-5:00 PM',
    location: 'STEM Lab',
    advisor: 'Ms. Chen',
    contact: 'robotics@Angelsschool.edu',
    tags: ['Competition', 'Engineering', 'Programming'],
    achievement: 'State Champions 2023',
    icon: Code,
    recruiting: true
  },
  {
    id: 2,
    name: 'Drama Club',
    category: 'arts',
    description: 'Explore theater arts through performances, workshops, and behind-the-scenes work.',
    members: 31,
    meetingTime: 'Monday, Wednesday, Friday 3:30-5:30 PM',
    location: 'Performing Arts Center',
    advisor: 'Mr. Rodriguez',
    contact: 'drama@Angelsschool.edu',
    tags: ['Theater', 'Performance', 'Creative'],
    achievement: 'Regional Drama Festival Winners',
    icon: Camera,
    recruiting: false
  },
  {
    id: 3,
    name: 'Debate Team',
    category: 'academic',
    description: 'Sharpen your argumentation skills and compete in regional debate tournaments.',
    members: 18,
    meetingTime: 'Tuesdays & Thursdays 4:00-6:00 PM',
    location: 'Room 201',
    advisor: 'Ms. Johnson',
    contact: 'debate@Angelsschool.edu',
    tags: ['Public Speaking', 'Research', 'Competition'],
    achievement: 'National Qualifiers 2023',
    icon: BookOpen,
    recruiting: true
  },
  {
    id: 4,
    name: 'Environmental Club',
    category: 'service',
    description: 'Work on sustainability projects and environmental awareness campaigns.',
    members: 29,
    meetingTime: 'Wednesdays 3:30-4:30 PM',
    location: 'Science Garden',
    advisor: 'Dr. Patel',
    contact: 'environment@Angelsschool.edu',
    tags: ['Sustainability', 'Community Service', 'Outdoor'],
    achievement: 'Reduced school waste by 40%',
    icon: Globe,
    recruiting: true
  },
  {
    id: 5,
    name: 'Gaming Club',
    category: 'special',
    description: 'Competitive gaming, game development, and exploring gaming culture.',
    members: 35,
    meetingTime: 'Fridays 3:30-5:00 PM',
    location: 'Computer Lab B',
    advisor: 'Mr. Kim',
    contact: 'gaming@Angelsschool.edu',
    tags: ['Gaming', 'Technology', 'Competition'],
    achievement: 'Esports Regional Champions',
    icon: Gamepad2,
    recruiting: false
  },
  {
    id: 6,
    name: 'Art Society',
    category: 'arts',
    description: 'Create, exhibit, and explore various art forms from painting to digital design.',
    members: 22,
    meetingTime: 'Tuesdays & Thursdays 3:30-5:00 PM',
    location: 'Art Studio',
    advisor: 'Ms. Williams',
    contact: 'art@Angelsschool.edu',
    tags: ['Visual Arts', 'Creative', 'Exhibition'],
    achievement: 'City Art Show Featured Artists',
    icon: Palette,
    recruiting: true
  }
]

const sportsTeams = [
  {
    sport: 'Basketball',
    seasons: ['Fall', 'Winter'],
    teams: ['Varsity Boys', 'Varsity Girls', 'JV Boys', 'JV Girls'],
    achievements: ['League Champions 2023', 'State Semifinals'],
    coach: 'Coach Martinez',
    practice: 'Mon-Fri 3:30-5:30 PM',
    tryouts: 'September 5-7'
  },
  {
    sport: 'Soccer',
    seasons: ['Fall', 'Spring'],
    teams: ['Varsity Boys', 'Varsity Girls', 'JV Co-ed'],
    achievements: ['Regional Finalists', 'Sportsmanship Award'],
    coach: 'Coach Thompson',
    practice: 'Tue, Thu, Fri 3:30-5:00 PM',
    tryouts: 'August 28-30'
  },
  {
    sport: 'Track & Field',
    seasons: ['Spring'],
    teams: ['Varsity Co-ed', 'JV Co-ed'],
    achievements: ['Individual State Qualifiers', 'Team Regional 3rd Place'],
    coach: 'Coach Davis',
    practice: 'Mon-Fri 3:30-5:00 PM',
    tryouts: 'March 1-3'
  },
  {
    sport: 'Swimming',
    seasons: ['Fall', 'Winter'],
    teams: ['Varsity Boys', 'Varsity Girls'],
    achievements: ['Conference Champions', 'Multiple State Records'],
    coach: 'Coach Wilson',
    practice: 'Mon-Fri 6:00-7:30 AM',
    tryouts: 'August 21-23'
  }
]

const serviceProjects = [
  {
    title: 'Community Garden Initiative',
    description: 'Partner with local food banks to grow fresh produce for families in need.',
    participants: 45,
    hours: 120,
    impact: '500 lbs of produce donated',
    timeline: 'Spring Semester',
    coordinator: 'Environmental Club'
  },
  {
    title: 'Senior Tech Support',
    description: 'Teach technology skills to senior citizens at the community center.',
    participants: 20,
    hours: 80,
    impact: '60 seniors gained new skills',
    timeline: 'Year-round',
    coordinator: 'Computer Science Club'
  },
  {
    title: 'Reading Buddies Program',
    description: 'Elementary school tutoring and reading assistance program.',
    participants: 35,
    hours: 150,
    impact: '25% improvement in reading scores',
    timeline: 'Fall & Spring Semesters',
    coordinator: 'National Honor Society'
  },
  {
    title: 'Food Drive Campaign',
    description: 'Annual food collection for local food pantries and shelters.',
    participants: 200,
    hours: 60,
    impact: '2,000+ items collected',
    timeline: 'November-December',
    coordinator: 'Student Council'
  }
]

export function ExtracurricularHub() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState('clubs')

  const filteredClubs = clubs.filter(club => {
    const matchesCategory = selectedCategory === 'all' || club.category === selectedCategory
    const matchesSearch = club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         club.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         club.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Extracurricular Activities Hub</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover your passions, develop new skills, and connect with like-minded peers through our diverse range of clubs, sports, and service opportunities.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 h-auto p-2">
          <TabsTrigger value="clubs" className="flex flex-col items-center gap-2 p-4">
            <Users className="w-5 h-5" />
            <span className="text-xs">Clubs & Organizations</span>
          </TabsTrigger>
          <TabsTrigger value="sports" className="flex flex-col items-center gap-2 p-4">
            <Trophy className="w-5 h-5" />
            <span className="text-xs">Sports & Athletics</span>
          </TabsTrigger>
          <TabsTrigger value="arts" className="flex flex-col items-center gap-2 p-4">
            <Music className="w-5 h-5" />
            <span className="text-xs">Arts & Performance</span>
          </TabsTrigger>
          <TabsTrigger value="service" className="flex flex-col items-center gap-2 p-4">
            <Heart className="w-5 h-5" />
            <span className="text-xs">Service Learning</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="clubs" className="space-y-6">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search clubs, activities, or interests..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {clubCategories.map(category => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.label} ({category.count})
                </Button>
              ))}
            </div>
          </div>

          {/* Club Directory */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClubs.map((club) => {
              const Icon = club.icon
              return (
                <Card key={club.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Icon className="w-8 h-8 text-primary" />
                        <div>
                          <CardTitle className="text-lg">{club.name}</CardTitle>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              {clubCategories.find(cat => cat.id === club.category)?.label}
                            </Badge>
                            {club.recruiting && (
                              <Badge className="bg-green-100 text-green-800 text-xs">
                                Recruiting
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">{club.description}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span>{club.members} active members</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span>{club.meetingTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span>{club.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span className="text-primary">{club.contact}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t">
                      <div className="flex items-center gap-2 mb-2">
                        <Trophy className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-medium">{club.achievement}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {club.tags.map((tag, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          Join Club
                        </Button>
                        <Button size="sm" variant="outline">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="sports" className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Athletics Program</h3>
            <p className="text-gray-600">Compete at the highest level while building character and teamwork</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {sportsTeams.map((sport, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{sport.sport}</CardTitle>
                    <div className="flex gap-1">
                      {sport.seasons.map((season) => (
                        <Badge key={season} variant="outline">{season}</Badge>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Teams Available:</h4>
                      <div className="flex flex-wrap gap-1">
                        {sport.teams.map((team) => (
                          <Badge key={team} className="text-xs">{team}</Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Recent Achievements:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {sport.achievements.map((achievement, achIdx) => (
                          <li key={achIdx} className="flex items-center gap-2">
                            <Trophy className="w-3 h-3 text-yellow-500" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium">Coach:</span>
                          <p>{sport.coach}</p>
                        </div>
                        <div>
                          <span className="font-medium">Practice:</span>
                          <p>{sport.practice}</p>
                        </div>
                        <div className="col-span-2">
                          <span className="font-medium">Tryouts:</span>
                          <p>{sport.tryouts}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">Join Team</Button>
                      <Button size="sm" variant="outline">View Schedule</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="arts" className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Arts & Performance</h3>
            <p className="text-gray-600">Express yourself through creative arts and showcase your talents</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 rounded-t-lg"></div>
              <CardContent className="pt-4">
                <h3 className="text-lg font-semibold mb-2">Spring Musical</h3>
                <p className="text-sm text-gray-600 mb-4">Join our production of "Hamilton" - auditions open to all students!</p>
                <div className="flex gap-2">
                  <Button size="sm">Audition Info</Button>
                  <Button size="sm" variant="outline">Past Shows</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-teal-500 rounded-t-lg"></div>
              <CardContent className="pt-4">
                <h3 className="text-lg font-semibold mb-2">Art Exhibition</h3>
                <p className="text-sm text-gray-600 mb-4">Annual student art show featuring works from all grade levels.</p>
                <div className="flex gap-2">
                  <Button size="sm">Submit Art</Button>
                  <Button size="sm" variant="outline">View Gallery</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 rounded-t-lg"></div>
              <CardContent className="pt-4">
                <h3 className="text-lg font-semibold mb-2">Music Ensembles</h3>
                <p className="text-sm text-gray-600 mb-4">Band, choir, orchestra, and jazz ensemble opportunities available.</p>
                <div className="flex gap-2">
                  <Button size="sm">Join Ensemble</Button>
                  <Button size="sm" variant="outline">Concerts</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="service" className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Service Learning Projects</h3>
            <p className="text-gray-600">Make a positive impact in your community while developing leadership skills</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {serviceProjects.map((project, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <p className="text-sm text-primary">Led by {project.coordinator}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-blue-50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-blue-600">{project.participants}</div>
                      <div className="text-xs text-blue-600">Participants</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-green-600">{project.hours}</div>
                      <div className="text-xs text-green-600">Service Hours</div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                    <div className="text-sm font-medium text-yellow-800 mb-1">Community Impact:</div>
                    <div className="text-sm text-yellow-700">{project.impact}</div>
                  </div>

                  <div className="flex justify-between items-center">
                    <Badge variant="outline">{project.timeline}</Badge>
                    <Button size="sm">Get Involved</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}