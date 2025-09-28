import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { 
  Camera, 
  Calendar, 
  Users, 
  Star, 
  Clock,
  MapPin,
  Heart,
  BookOpen,
  Award,
  Coffee
} from 'lucide-react'

const dayInLifeStories = [
  {
    time: '7:00 AM',
    student: 'Emma Rodriguez, Grade 11',
    activity: 'Early Morning Study Group',
    description: 'Starting the day with calculus study group in the library. Coffee and math - the perfect combination!',
    image: 'bg-gradient-to-br from-blue-400 to-purple-500',
    location: 'Central Library'
  },
  {
    time: '10:15 AM',
    student: 'Marcus Johnson, Grade 10',
    activity: 'Environmental Science Lab',
    description: 'Testing water quality samples from the school pond. Real science, real impact!',
    image: 'bg-gradient-to-br from-green-400 to-blue-500',
    location: 'Science Wing'
  },
  {
    time: '12:30 PM',
    student: 'Aisha Patel, Grade 12',
    activity: 'Student Council Meeting',
    description: 'Planning our winter formal and discussing new recycling initiatives for the school.',
    image: 'bg-gradient-to-br from-pink-400 to-red-500',
    location: 'Student Center'
  },
  {
    time: '3:45 PM',
    student: 'Jake Thompson, Grade 9',
    activity: 'Basketball Practice',
    description: 'Working on our defense strategy for the championship game next week. Go Wolves!',
    image: 'bg-gradient-to-br from-orange-400 to-red-500',
    location: 'Main Gymnasium'
  }
]

const campusStories = [
  {
    title: 'The Secret Garden Project',
    category: 'Environmental',
    author: 'Biology Club',
    excerpt: 'How students transformed an unused courtyard into a thriving ecosystem that now serves as an outdoor classroom.',
    date: '2 days ago',
    readTime: '5 min read',
    tags: ['Sustainability', 'Student Initiative', 'Science']
  },
  {
    title: 'From Shy Freshman to Debate Champion',
    category: 'Personal Growth',
    author: 'Sarah Kim, Grade 12',
    excerpt: 'My journey from barely speaking in class to winning the state debate championship and finding my voice.',
    date: '1 week ago',
    readTime: '8 min read',
    tags: ['Debate', 'Public Speaking', 'Personal Growth']
  },
  {
    title: 'The Midnight Food Truck Initiative',
    category: 'Innovation',
    author: 'Entrepreneurship Club',
    excerpt: 'Students launch a business providing late-night healthy snacks for study sessions, earning $5K for charity.',
    date: '2 weeks ago',
    readTime: '6 min read',
    tags: ['Business', 'Innovation', 'Community Service']
  },
  {
    title: 'Art Therapy: Healing Through Creativity',
    category: 'Wellness',
    author: 'Art Therapy Club',
    excerpt: 'Discover how our peer-led art therapy sessions are helping students manage stress and express emotions.',
    date: '3 weeks ago',
    readTime: '7 min read',
    tags: ['Mental Health', 'Art', 'Peer Support']
  }
]

const schoolTraditions = [
  {
    name: 'Spirit Week',
    season: 'Fall',
    description: 'Five days of themed dress-up days, pep rallies, and friendly competition between grade levels.',
    highlight: 'The legendary senior prank day that always keeps everyone guessing!',
    participation: '99% student participation',
    icon: Star
  },
  {
    name: 'Winter Formal',
    season: 'Winter',
    description: 'An elegant evening of dancing, dining, and celebrating our school community.',
    highlight: 'Student-designed decorations transform the gym into a winter wonderland.',
    participation: '800+ attendees annually',
    icon: Heart
  },
  {
    name: 'Academic Awards Night',
    season: 'Spring',
    description: 'Recognizing outstanding academic achievement, leadership, and community service.',
    highlight: 'Peer nominations make this event truly special and meaningful.',
    participation: '200+ awards presented',
    icon: Award
  },
  {
    name: 'Graduation Celebration',
    season: 'Summer',
    description: 'A memorable send-off for our graduating class with speeches, performances, and traditions.',
    highlight: 'The time capsule ceremony where seniors leave messages for future classes.',
    participation: 'Entire community attends',
    icon: BookOpen
  }
]

const studentBlogs = [
  {
    title: 'My Exchange Experience in Japan',
    author: 'Lisa Wong',
    grade: 'Grade 11',
    category: 'International',
    preview: 'Three months in Tokyo taught me more than just language - it opened my eyes to a whole new way of learning...',
    date: 'March 15, 2024',
    likes: 127,
    comments: 23
  },
  {
    title: 'Building Our Championship Robot',
    author: 'Tech Team Alpha',
    grade: 'Grades 9-12',
    category: 'STEM',
    preview: 'From blueprint to competition floor - follow our robotics team\'s journey to the state championship...',
    date: 'March 10, 2024',
    likes: 89,
    comments: 15
  },
  {
    title: 'The Psychology Behind School Stress',
    author: 'Maya Rodriguez',
    grade: 'Grade 12',
    category: 'Mental Health',
    preview: 'After conducting a school-wide survey, here\'s what I learned about how we can all support each other better...',
    date: 'March 8, 2024',
    likes: 156,
    comments: 34
  }
]

export function CommunityShowcase() {
  const [activeSection, setActiveSection] = useState('dayinlife')

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Community & Culture</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Dive into the vibrant tapestry of daily life, shared stories, and cherished traditions that make our school community unique.
        </p>
      </div>

      <Tabs value={activeSection} onValueChange={setActiveSection}>
        <TabsList className="grid grid-cols-4 h-auto p-2">
          <TabsTrigger value="dayinlife" className="flex flex-col items-center gap-2 p-4">
            <Clock className="w-5 h-5" />
            <span className="text-xs">Day in Life</span>
          </TabsTrigger>
          <TabsTrigger value="stories" className="flex flex-col items-center gap-2 p-4">
            <BookOpen className="w-5 h-5" />
            <span className="text-xs">Campus Stories</span>
          </TabsTrigger>
          <TabsTrigger value="traditions" className="flex flex-col items-center gap-2 p-4">
            <Star className="w-5 h-5" />
            <span className="text-xs">Traditions</span>
          </TabsTrigger>
          <TabsTrigger value="blogs" className="flex flex-col items-center gap-2 p-4">
            <Users className="w-5 h-5" />
            <span className="text-xs">Student Blogs</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="dayinlife" className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">A Day in the Life</h3>
            <p className="text-gray-600">Follow real students through their actual school days</p>
          </div>
          
          <div className="grid gap-6">
            {dayInLifeStories.map((story, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row">
                  <div className={`w-full md:w-48 h-48 ${story.image}`} />
                  <div className="flex-1 p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="font-bold text-primary text-lg">{story.time}</span>
                      <Badge variant="secondary">{story.location}</Badge>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{story.activity}</h4>
                    <p className="text-sm text-gray-600 mb-3">by {story.student}</p>
                    <p className="text-gray-700 mb-4">{story.description}</p>
                    <Button variant="outline" size="sm">
                      <Camera className="w-4 h-4 mr-2" />
                      View Photos
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="stories" className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Campus Stories</h3>
            <p className="text-gray-600">Inspiring tales from our school community</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {campusStories.map((story, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge>{story.category}</Badge>
                    <div className="text-sm text-gray-500">
                      {story.date} • {story.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight">{story.title}</CardTitle>
                  <p className="text-sm text-primary">by {story.author}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{story.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {story.tags.map((tag, tagIdx) => (
                      <Badge key={tagIdx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="p-0">
                    Read Full Story →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="traditions" className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">School Traditions</h3>
            <p className="text-gray-600">Celebrating the events and customs that bring us together</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {schoolTraditions.map((tradition, idx) => {
              const Icon = tradition.icon
              return (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-8 h-8 text-primary" />
                      <div>
                        <CardTitle className="text-xl">{tradition.name}</CardTitle>
                        <Badge variant="outline">{tradition.season}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{tradition.description}</p>
                    <div className="bg-primary/10 rounded-lg p-4 mb-4">
                      <p className="text-sm font-medium text-primary mb-1">Special Highlight:</p>
                      <p className="text-sm">{tradition.highlight}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Users className="w-4 h-4" />
                      {tradition.participation}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="blogs" className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Student Blogs</h3>
            <p className="text-gray-600">Stories, insights, and experiences shared by our students</p>
          </div>
          
          <div className="grid gap-6">
            {studentBlogs.map((blog, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <Badge className="mb-2">{blog.category}</Badge>
                      <h4 className="text-xl font-semibold mb-2">{blog.title}</h4>
                      <p className="text-sm text-primary">
                        by {blog.author} • {blog.grade}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500">{blog.date}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{blog.preview}</p>
                  
                  <div className="flex justify-between items-center">
                    <Button variant="ghost" size="sm" className="p-0">
                      Continue Reading →
                    </Button>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {blog.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {blog.comments}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg">
              <BookOpen className="w-5 h-5 mr-2" />
              Start Your Own Blog
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}