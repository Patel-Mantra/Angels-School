import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Filter,
  Search,
  Plus,
  Eye,
  UserCheck,
  UserPlus,
  AlertCircle,
  CheckCircle,
  X,
  ChevronLeft,
  ChevronRight,
  Repeat
} from 'lucide-react'

const eventCategories = [
  { id: 'all', label: 'All Events', color: 'bg-gray-100', count: 89 },
  { id: 'academic', label: 'Academic', color: 'bg-blue-100 text-blue-800', count: 23 },
  { id: 'athletic', label: 'Athletic', color: 'bg-orange-100 text-orange-800', count: 18 },
  { id: 'arts', label: 'Arts', color: 'bg-pink-100 text-pink-800', count: 15 },
  { id: 'community', label: 'Community', color: 'bg-green-100 text-green-800', count: 21 },
  { id: 'parent', label: 'Parent Events', color: 'bg-purple-100 text-purple-800', count: 12 }
]

const upcomingEvents = [
  {
    id: 1,
    title: 'Parent-Teacher Conferences',
    description: 'Individual meetings to discuss student progress and academic goals.',
    date: '2025-09-22',
    startTime: '14:00',
    endTime: '18:00',
    location: 'Various Classrooms',
    category: 'parent',
    organizer: 'Academic Office',
    capacity: 500,
    registered: 456,
    waitlist: 12,
    registrationRequired: true,
    registrationDeadline: '2025-09-20',
    recurring: false,
    status: 'open'
  },
  {
    id: 2,
    title: 'Fall Musical Auditions',
    description: 'Open auditions for "Into the Woods" - all students welcome to participate.',
    date: '2025-09-25',
    startTime: '19:00',
    endTime: '21:00',
    location: 'Performing Arts Center',
    category: 'arts',
    organizer: 'Ms. Rodriguez',
    capacity: 100,
    registered: 89,
    waitlist: 5,
    registrationRequired: true,
    registrationDeadline: '2025-09-24',
    recurring: false,
    status: 'open'
  },
  {
    id: 3,
    title: 'Homecoming Game vs Central High',
    description: 'Varsity football homecoming game - come support the Angels Wolves!',
    date: '2025-09-28',
    startTime: '18:30',
    endTime: '21:30',
    location: 'Angels Stadium',
    category: 'athletic',
    organizer: 'Athletics Department',
    capacity: 1500,
    registered: 1247,
    waitlist: 0,
    registrationRequired: false,
    registrationDeadline: null,
    recurring: false,
    status: 'open'
  },
  {
    id: 4,
    title: 'College Fair 2025',
    description: 'Representatives from 150+ colleges and universities will be available.',
    date: '2025-10-01',
    startTime: '09:00',
    endTime: '15:00',
    location: 'Main Gymnasium',
    category: 'academic',
    organizer: 'Guidance Department',
    capacity: 800,
    registered: 324,
    waitlist: 0,
    registrationRequired: true,
    registrationDeadline: '2025-09-28',
    recurring: false,
    status: 'open'
  },
  {
    id: 5,
    title: 'Weekly Mindfulness Sessions',
    description: 'Guided meditation and stress reduction techniques for students.',
    date: '2025-09-23',
    startTime: '15:30',
    endTime: '16:30',
    location: 'Wellness Room',
    category: 'community',
    organizer: 'Counseling Department',
    capacity: 30,
    registered: 28,
    waitlist: 8,
    registrationRequired: true,
    registrationDeadline: null,
    recurring: true,
    status: 'open'
  },
  {
    id: 6,
    title: 'Science Fair Project Showcase',
    description: 'Students present their research projects to judges and community members.',
    date: '2025-10-05',
    startTime: '18:00',
    endTime: '20:00',
    location: 'Science Wing',
    category: 'academic',
    organizer: 'Science Department',
    capacity: 200,
    registered: 156,
    waitlist: 0,
    registrationRequired: false,
    registrationDeadline: null,
    recurring: false,
    status: 'open'
  }
]

const calendarEvents = [
  // September 2025
  { date: '2025-09-22', events: ['Parent-Teacher Conferences'] },
  { date: '2025-09-23', events: ['Weekly Mindfulness Sessions', 'Soccer Practice'] },
  { date: '2025-09-25', events: ['Fall Musical Auditions'] },
  { date: '2025-09-28', events: ['Homecoming Game vs Central High'] },
  { date: '2025-09-30', events: ['Monthly Faculty Meeting'] },
  // October 2025
  { date: '2025-10-01', events: ['College Fair 2025'] },
  { date: '2025-10-05', events: ['Science Fair Project Showcase'] },
  { date: '2025-10-10', events: ['Fall Break Begins'] },
  { date: '2025-10-15', events: ['Art Exhibition Opening'] },
  { date: '2025-10-20', events: ['Homecoming Dance'] }
]

export function EventCalendar() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState<'month' | 'week' | 'list'>('month')
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedEvent, setSelectedEvent] = useState<typeof upcomingEvents[0] | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredEvents = upcomingEvents.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatTime = (time: string) => {
    return new Date(`2025-01-01T${time}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
  }

  const getEventStatusColor = (event: typeof upcomingEvents[0]) => {
    const capacity = event.capacity
    const registered = event.registered
    const percentage = (registered / capacity) * 100

    if (percentage >= 100) return 'bg-red-100 text-red-800'
    if (percentage >= 80) return 'bg-yellow-100 text-yellow-800'
    return 'bg-green-100 text-green-800'
  }

  const getEventStatusText = (event: typeof upcomingEvents[0]) => {
    const capacity = event.capacity
    const registered = event.registered
    const percentage = (registered / capacity) * 100

    if (percentage >= 100) return 'Full'
    if (percentage >= 80) return 'Nearly Full'
    return 'Available'
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Event Calendar</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover, register, and participate in the exciting events happening at Angels School.
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          {['month', 'week', 'list'].map(mode => (
            <Button
              key={mode}
              variant={viewMode === mode ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode(mode as any)}
            >
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {eventCategories.map(category => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category.id)}
            className={selectedCategory === category.id ? '' : category.color}
          >
            {category.label} ({category.count})
          </Button>
        ))}
      </div>

      <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as any)}>
        {/* Month View */}
        <TabsContent value="month" className="space-y-6">
          <div className="bg-white rounded-lg border">
            <div className="flex items-center justify-between p-4 border-b">
              <Button variant="ghost" size="sm">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <h3 className="text-lg font-semibold">
                {selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </h3>
              <Button variant="ghost" size="sm">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 p-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="text-center font-medium text-gray-500 py-2">
                  {day}
                </div>
              ))}
              
              {/* Calendar Days */}
              {Array.from({ length: 35 }, (_, i) => {
                const date = new Date(2025, 8, i - 6) // September 2025, adjust as needed
                const dateStr = date.toISOString().split('T')[0]
                const hasEvents = calendarEvents.some(event => event.date === dateStr)
                const isToday = dateStr === new Date().toISOString().split('T')[0]
                
                return (
                  <div
                    key={i}
                    className={`min-h-16 p-2 border border-gray-100 ${isToday ? 'bg-primary/10 border-primary' : ''} ${hasEvents ? 'bg-blue-50' : ''}`}
                  >
                    <div className="text-sm font-medium">{date.getDate()}</div>
                    {hasEvents && (
                      <div className="space-y-1 mt-1">
                        {calendarEvents.find(event => event.date === dateStr)?.events.slice(0, 2).map((event, idx) => (
                          <div key={idx} className="text-xs bg-primary text-white rounded px-1 py-0.5 truncate">
                            {event}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </TabsContent>

        {/* Week View */}
        <TabsContent value="week" className="space-y-6">
          <div className="text-center text-gray-600">
            <p>Week view coming soon - showing upcoming events for this week</p>
          </div>
          <div className="grid gap-4">
            {filteredEvents.slice(0, 7).map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{event.description}</p>
                    </div>
                    <Badge className={getEventStatusColor(event)}>
                      {getEventStatusText(event)}
                    </Badge>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span>{formatTime(event.startTime)} - {formatTime(event.endTime)}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span>{event.registered}/{event.capacity} registered</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* List View */}
        <TabsContent value="list" className="space-y-6">
          <div className="grid gap-4">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold">{event.title}</h3>
                        <Badge variant="outline" className={eventCategories.find(cat => cat.id === event.category)?.color}>
                          {eventCategories.find(cat => cat.id === event.category)?.label}
                        </Badge>
                        {event.recurring && (
                          <Badge variant="outline">
                            <Repeat className="w-3 h-3 mr-1" />
                            Recurring
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-3">{event.description}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(event.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {formatTime(event.startTime)} - {formatTime(event.endTime)}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {event.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {event.registered}/{event.capacity}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end gap-3">
                      <Badge className={getEventStatusColor(event)}>
                        {getEventStatusText(event)}
                      </Badge>
                      
                      <div className="flex gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" variant="outline" onClick={() => setSelectedEvent(event)}>
                              <Eye className="w-4 h-4 mr-2" />
                              Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle className="text-xl">{selectedEvent?.title}</DialogTitle>
                            </DialogHeader>
                            {selectedEvent && (
                              <div className="space-y-6">
                                <p className="text-gray-600">{selectedEvent.description}</p>
                                
                                <div className="grid md:grid-cols-2 gap-6">
                                  <div className="space-y-4">
                                    <div>
                                      <h4 className="font-medium mb-2">Event Details</h4>
                                      <div className="space-y-2 text-sm">
                                        <div className="flex items-center gap-2">
                                          <Calendar className="w-4 h-4 text-gray-400" />
                                          <span>{formatDate(selectedEvent.date)}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                          <Clock className="w-4 h-4 text-gray-400" />
                                          <span>{formatTime(selectedEvent.startTime)} - {formatTime(selectedEvent.endTime)}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                          <MapPin className="w-4 h-4 text-gray-400" />
                                          <span>{selectedEvent.location}</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <div className="space-y-4">
                                    <div>
                                      <h4 className="font-medium mb-2">Registration Status</h4>
                                      <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                          <span>Registered:</span>
                                          <span>{selectedEvent.registered}/{selectedEvent.capacity}</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                          <div
                                            className="bg-primary h-2 rounded-full"
                                            style={{ width: `${(selectedEvent.registered / selectedEvent.capacity) * 100}%` }}
                                          />
                                        </div>
                                        {selectedEvent.waitlist > 0 && (
                                          <div className="text-sm text-gray-600">
                                            {selectedEvent.waitlist} on waitlist
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                
                                {selectedEvent.registrationRequired && (
                                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                      <AlertCircle className="w-4 h-4 text-blue-600" />
                                      <span className="font-medium text-blue-800">Registration Required</span>
                                    </div>
                                    {selectedEvent.registrationDeadline && (
                                      <p className="text-blue-700 text-sm">
                                        Deadline: {formatDate(selectedEvent.registrationDeadline)}
                                      </p>
                                    )}
                                  </div>
                                )}
                                
                                <div className="flex gap-3">
                                  {selectedEvent.registrationRequired ? (
                                    selectedEvent.registered < selectedEvent.capacity ? (
                                      <Button className="flex-1">
                                        <UserCheck className="w-4 h-4 mr-2" />
                                        Register Now
                                      </Button>
                                    ) : (
                                      <Button variant="outline" className="flex-1">
                                        <UserPlus className="w-4 h-4 mr-2" />
                                        Join Waitlist
                                      </Button>
                                    )
                                  ) : (
                                    <Button className="flex-1">
                                      <CheckCircle className="w-4 h-4 mr-2" />
                                      Mark as Interested
                                    </Button>
                                  )}
                                  <Button variant="outline">
                                    Add to Calendar
                                  </Button>
                                </div>
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                        
                        {event.registrationRequired ? (
                          event.registered < event.capacity ? (
                            <Button size="sm">
                              <UserCheck className="w-4 h-4 mr-2" />
                              Register
                            </Button>
                          ) : (
                            <Button size="sm" variant="outline">
                              <UserPlus className="w-4 h-4 mr-2" />
                              Waitlist
                            </Button>
                          )
                        ) : (
                          <Button size="sm">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Interested
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Quick Actions */}
      <div className="bg-primary text-white rounded-lg p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Never Miss an Event</h3>
            <p className="opacity-90">Subscribe to calendar updates and get notified about new events.</p>
          </div>
          <div className="flex gap-3">
            <Button className="bg-white text-primary hover:bg-gray-100">
              <Plus className="w-4 h-4 mr-2" />
              Subscribe to Calendar
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Suggest Event
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}