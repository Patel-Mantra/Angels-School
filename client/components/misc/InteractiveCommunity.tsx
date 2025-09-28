import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { 
  Calendar, 
  Camera, 
  Users, 
  MapPin,
  Clock,
  Heart,
  Share2,
  Filter,
  Search,
  Plus,
  Star,
  MessageSquare,
  Eye,
  Download,
  UserPlus
} from 'lucide-react'

const upcomingEvents = [
  {
    id: 1,
    title: 'Spring Carnival',
    date: '2024-04-15',
    time: '11:00 AM - 4:00 PM',
    location: 'School Courtyard',
    category: 'Social',
    description: 'Join us for games, food trucks, and fun activities celebrating the arrival of spring!',
    attendees: 245,
    maxCapacity: 300,
    organizer: 'Student Council',
    rsvpRequired: true,
    featured: true
  },
  {
    id: 2,
    title: 'Science Fair Exhibition',
    date: '2024-04-08',
    time: '6:00 PM - 8:00 PM',
    location: 'Main Gymnasium',
    category: 'Academic',
    description: 'Discover innovative student projects and cutting-edge research from our science students.',
    attendees: 180,
    maxCapacity: 250,
    organizer: 'Science Department',
    rsvpRequired: false,
    featured: true
  },
  {
    id: 3,
    title: 'Art Gallery Opening',
    date: '2024-04-12',
    time: '7:00 PM - 9:00 PM',
    location: 'Art Wing',
    category: 'Arts',
    description: 'Celebrate student creativity with an exhibition of paintings, sculptures, and digital art.',
    attendees: 95,
    maxCapacity: 150,
    organizer: 'Art Department',
    rsvpRequired: true,
    featured: false
  },
  {
    id: 4,
    title: 'Model UN Conference',
    date: '2024-04-20',
    time: '9:00 AM - 3:00 PM',
    location: 'Conference Rooms A-D',
    category: 'Academic',
    description: 'Students represent different countries in simulated United Nations sessions.',
    attendees: 60,
    maxCapacity: 80,
    organizer: 'Model UN Club',
    rsvpRequired: true,
    featured: false
  },
  {
    id: 5,
    title: 'Spring Sports Banquet',
    date: '2024-04-25',
    time: '6:30 PM - 9:00 PM',
    location: 'Cafeteria',
    category: 'Sports',
    description: 'Honoring our spring sports teams and athletes with awards and recognition.',
    attendees: 150,
    maxCapacity: 200,
    organizer: 'Athletics Department',
    rsvpRequired: true,
    featured: false
  }
]

const photoGalleries = [
  {
    id: 1,
    title: 'Winter Formal 2024',
    date: '2024-02-14',
    photos: 127,
    views: 1249,
    likes: 89,
    photographer: 'Photography Club',
    category: 'Social Events',
    thumbnail: 'bg-gradient-to-br from-purple-400 to-pink-500',
    featured: true
  },
  {
    id: 2,
    title: 'Basketball Championship Win',
    date: '2024-03-10',
    photos: 85,
    views: 892,
    likes: 156,
    photographer: 'Sports Media Team',
    category: 'Athletics',
    thumbnail: 'bg-gradient-to-br from-orange-400 to-red-500',
    featured: true
  },
  {
    id: 3,
    title: 'Spring Musical Rehearsals',
    date: '2024-03-15',
    photos: 94,
    views: 634,
    likes: 72,
    photographer: 'Drama Club',
    category: 'Performing Arts',
    thumbnail: 'bg-gradient-to-br from-blue-400 to-purple-500',
    featured: false
  },
  {
    id: 4,
    title: 'Science Fair Preparations',
    date: '2024-03-20',
    photos: 156,
    views: 423,
    likes: 43,
    photographer: 'STEM Club',
    category: 'Academic',
    thumbnail: 'bg-gradient-to-br from-green-400 to-teal-500',
    featured: false
  },
  {
    id: 5,
    title: 'Community Service Day',
    date: '2024-03-05',
    photos: 203,
    views: 758,
    likes: 124,
    photographer: 'Service Learning',
    category: 'Community Service',
    thumbnail: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    featured: false
  }
]

const clubRecruitment = [
  {
    id: 1,
    clubName: 'Environmental Action Club',
    description: 'Join us in creating a more sustainable future! Work on campus green initiatives and community environmental projects.',
    members: 28,
    meetingTime: 'Wednesdays 3:30 PM',
    location: 'Room 105',
    contact: 'env.action@Angelsschool.edu',
    advisor: 'Ms. Green',
    recruiting: true,
    tags: ['Environment', 'Community Service', 'Outdoor Activities'],
    nextEvent: 'Campus Clean-up - April 10',
    requirements: 'No experience needed - just enthusiasm!'
  },
  {
    id: 2,
    clubName: 'Creative Writing Society',
    description: 'Express yourself through words! Share your stories, poems, and creative writing with fellow literary enthusiasts.',
    members: 22,
    meetingTime: 'Fridays 4:00 PM',
    location: 'Library Study Room',
    contact: 'creative.writing@Angelsschool.edu',
    advisor: 'Mr. Thompson',
    recruiting: true,
    tags: ['Writing', 'Literature', 'Publishing'],
    nextEvent: 'Poetry Slam - April 18',
    requirements: 'Bring your creativity and an open mind!'
  },
  {
    id: 3,
    clubName: 'Chess Club',
    description: 'Sharpen your strategic thinking! Learn chess tactics, compete in tournaments, and challenge your mind.',
    members: 15,
    meetingTime: 'Tuesdays 3:30 PM',
    location: 'Math Classroom',
    contact: 'chess@Angelsschool.edu',
    advisor: 'Dr. Martinez',
    recruiting: true,
    tags: ['Strategy', 'Competition', 'Critical Thinking'],
    nextEvent: 'Inter-school Tournament - April 22',
    requirements: 'All skill levels welcome!'
  },
  {
    id: 4,
    clubName: 'Photography Club',
    description: 'Capture moments and create art! Learn photography techniques, use professional equipment, and build your portfolio.',
    members: 31,
    meetingTime: 'Mondays & Thursdays 3:45 PM',
    location: 'Media Lab',
    contact: 'photo@Angelsschool.edu',
    advisor: 'Ms. Rodriguez',
    recruiting: false,
    tags: ['Photography', 'Digital Art', 'Visual Media'],
    nextEvent: 'Nature Photography Trip - April 14',
    requirements: 'Camera provided - bring your artistic vision!'
  }
]

const eventCategories = [
  { id: 'all', label: 'All Events', color: 'bg-gray-100' },
  { id: 'academic', label: 'Academic', color: 'bg-blue-100 text-blue-800' },
  { id: 'social', label: 'Social', color: 'bg-purple-100 text-purple-800' },
  { id: 'sports', label: 'Sports', color: 'bg-orange-100 text-orange-800' },
  { id: 'arts', label: 'Arts', color: 'bg-pink-100 text-pink-800' }
]

export function InteractiveCommunity() {
  const [activeTab, setActiveTab] = useState('events')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredEvents = upcomingEvents.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category.toLowerCase() === selectedCategory
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Interactive Community Hub</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay connected with school events, explore photo galleries, and discover new ways to get involved in our vibrant community.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 h-auto p-2">
          <TabsTrigger value="events" className="flex flex-col items-center gap-2 p-4">
            <Calendar className="w-5 h-5" />
            <span className="text-xs">Event Calendar</span>
          </TabsTrigger>
          <TabsTrigger value="photos" className="flex flex-col items-center gap-2 p-4">
            <Camera className="w-5 h-5" />
            <span className="text-xs">Photo Galleries</span>
          </TabsTrigger>
          <TabsTrigger value="recruitment" className="flex flex-col items-center gap-2 p-4">
            <UserPlus className="w-5 h-5" />
            <span className="text-xs">Join a Club</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="events" className="space-y-6">
          {/* Search and Filter */}
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {eventCategories.map(category => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? '' : category.color}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Events */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Featured Events</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {filteredEvents.filter(event => event.featured).map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow border-2 border-primary/20">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{event.title}</CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge className={eventCategories.find(cat => cat.id === event.category.toLowerCase())?.color}>
                            {event.category}
                          </Badge>
                          <Star className="w-4 h-4 text-yellow-500" />
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    
                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span>{event.attendees}/{event.maxCapacity} attending</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1">
                        {event.rsvpRequired ? 'RSVP Now' : 'Mark Interested'}
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* All Events */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">Upcoming Events</h3>
              <Button variant="outline">
                <Plus className="w-4 h-4 mr-2" />
                Suggest Event
              </Button>
            </div>
            
            <div className="grid gap-4">
              {filteredEvents.filter(event => !event.featured).map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-lg font-semibold">{event.title}</h4>
                          <Badge variant="outline" className={eventCategories.find(cat => cat.id === event.category.toLowerCase())?.color}>
                            {event.category}
                          </Badge>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{event.description}</p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(event.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {event.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {event.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {event.attendees} attending
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button size="sm">
                          {event.rsvpRequired ? 'RSVP' : 'Interested'}
                        </Button>
                        <Button variant="outline" size="sm">Details</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="photos" className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Photo Galleries</h3>
            <p className="text-gray-600">Relive the memorable moments from our school community</p>
          </div>

          {/* Featured Galleries */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">Featured Galleries</h4>
            <div className="grid md:grid-cols-2 gap-6">
              {photoGalleries.filter(gallery => gallery.featured).map((gallery) => (
                <Card key={gallery.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className={`h-48 ${gallery.thumbnail} flex items-center justify-center`}>
                    <Camera className="w-16 h-16 text-white opacity-80" />
                  </div>
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-lg font-semibold">{gallery.title}</h4>
                        <p className="text-sm text-gray-600">by {gallery.photographer}</p>
                      </div>
                      <Badge variant="outline">{gallery.category}</Badge>
                    </div>
                    
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                      <span>{new Date(gallery.date).toLocaleDateString()}</span>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Camera className="w-3 h-3" />
                          {gallery.photos}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {gallery.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          {gallery.likes}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">View Gallery</Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* All Galleries */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-xl font-semibold">Recent Galleries</h4>
              <Button variant="outline">
                <Plus className="w-4 h-4 mr-2" />
                Submit Photos
              </Button>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {photoGalleries.filter(gallery => !gallery.featured).map((gallery) => (
                <Card key={gallery.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className={`h-32 ${gallery.thumbnail} flex items-center justify-center`}>
                    <Camera className="w-8 h-8 text-white opacity-80" />
                  </div>
                  <CardContent className="pt-3">
                    <h5 className="font-medium text-sm mb-1">{gallery.title}</h5>
                    <p className="text-xs text-gray-600 mb-2">by {gallery.photographer}</p>
                    
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>{gallery.photos} photos</span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        {gallery.likes}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="recruitment" className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Join a Club</h3>
            <p className="text-gray-600">Discover new interests and connect with like-minded students</p>
          </div>

          <div className="grid gap-6">
            {clubRecruitment.map((club) => (
              <Card key={club.id} className={`hover:shadow-lg transition-shadow ${club.recruiting ? 'border-green-200 bg-green-50/30' : ''}`}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{club.clubName}</CardTitle>
                      <p className="text-sm text-gray-600">Advised by {club.advisor}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {club.recruiting ? (
                        <Badge className="bg-green-100 text-green-800">Recruiting Now</Badge>
                      ) : (
                        <Badge variant="outline">Closed</Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{club.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
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
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="font-medium">Next Event:</div>
                      <p className="text-primary">{club.nextEvent}</p>
                      <div className="font-medium">Requirements:</div>
                      <p className="text-gray-600">{club.requirements}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {club.tags.map((tag, tagIdx) => (
                      <Badge key={tagIdx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      className="flex-1" 
                      disabled={!club.recruiting}
                    >
                      {club.recruiting ? 'Join Club' : 'Currently Closed'}
                    </Button>
                    <Button variant="outline">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-800 mb-3 flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Start Your Own Club
            </h4>
            <p className="text-blue-700 mb-4">
              Have an idea for a new club? We encourage student initiative and are always excited to support new interests and activities.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium mb-2">Requirements:</h5>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Minimum 10 interested students</li>
                  <li>• Faculty advisor commitment</li>
                  <li>• Clear purpose and meeting plan</li>
                  <li>• Complete club proposal form</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-2">We Provide:</h5>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Meeting space reservation</li>
                  <li>• Basic funding for activities</li>
                  <li>• Promotion and recruitment support</li>
                  <li>• Leadership training workshops</li>
                </ul>
              </div>
            </div>
            <Button className="mt-4">Submit Club Proposal</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}