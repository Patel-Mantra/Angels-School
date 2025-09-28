import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { 
  Heart, 
  Brain, 
  Users, 
  Shield,
  Clock,
  Phone,
  MapPin,
  Utensils,
  Bus,
  Book,
  Headphones,
  Calendar,
  MessageCircle,
  Activity
} from 'lucide-react'

const counselingServices = [
  {
    service: 'Individual Counseling',
    description: 'One-on-one sessions with licensed school counselors for academic, personal, and social support.',
    availability: 'Monday - Friday, 8:00 AM - 4:00 PM',
    contact: 'counseling@Angelsschool.edu',
    emergency: false,
    icon: MessageCircle
  },
  {
    service: 'Crisis Support',
    description: '24/7 emergency mental health support and crisis intervention services.',
    availability: 'Available 24/7',
    contact: 'Emergency: 988 or 911',
    emergency: true,
    icon: Phone
  },
  {
    service: 'Group Therapy',
    description: 'Peer support groups for anxiety, depression, grief, and other common challenges.',
    availability: 'Wednesdays 3:30 PM, Fridays 12:00 PM',
    contact: 'groups@Angelsschool.edu',
    emergency: false,
    icon: Users
  },
  {
    service: 'College & Career Counseling',
    description: 'Guidance for academic planning, college applications, and career exploration.',
    availability: 'By appointment',
    contact: 'college@Angelsschool.edu',
    emergency: false,
    icon: Book
  }
]

const healthServices = [
  {
    service: 'School Nurse',
    description: 'First aid, medication administration, health screenings, and wellness education.',
    location: 'Health Office - Main Building',
    hours: 'Monday - Friday, 7:30 AM - 3:30 PM',
    staff: 'Nurse Patricia Williams, RN'
  },
  {
    service: 'Health Screenings',
    description: 'Annual vision, hearing, and general health assessments for all students.',
    location: 'Health Office',
    hours: 'September - October (scheduled)',
    staff: 'School Health Team'
  },
  {
    service: 'Wellness Programs',
    description: 'Nutrition education, stress management workshops, and healthy lifestyle promotion.',
    location: 'Various locations',
    hours: 'Monthly programs',
    staff: 'Wellness Committee'
  }
]

const diningOptions = [
  {
    location: 'Main Cafeteria',
    hours: 'Breakfast: 7:00-8:00 AM, Lunch: 11:00 AM-1:00 PM',
    features: ['Hot meals', 'Salad bar', 'Vegetarian options', 'Allergen-free meals'],
    specialties: 'Daily chef specials, local farm ingredients'
  },
  {
    location: 'Grab & Go Station',
    hours: '7:00 AM - 3:00 PM',
    features: ['Quick snacks', 'Fresh sandwiches', 'Healthy beverages', 'Energy bars'],
    specialties: 'Perfect for busy schedules'
  },
  {
    location: 'Student Café',
    hours: '11:30 AM - 2:00 PM',
    features: ['Artisan pizzas', 'Gourmet sandwiches', 'Fresh smoothies', 'Study-friendly space'],
    specialties: 'Relaxed dining atmosphere'
  }
]

const transportationOptions = [
  {
    type: 'School Buses',
    description: 'Safe, reliable transportation covering all residential areas in the district.',
    schedule: 'Daily routes: 7:00-8:00 AM, 2:30-3:30 PM',
    contact: 'transportation@Angelsschool.edu',
    features: ['GPS tracking', 'Safety protocols', 'Special needs accommodations']
  },
  {
    type: 'Activity Bus',
    description: 'Extended transportation for students participating in after-school activities.',
    schedule: 'Departs 5:00 PM and 6:30 PM',
    contact: 'activities@Angelsschool.edu',
    features: ['Club activities', 'Sports events', 'Academic competitions']
  },
  {
    type: 'Metro Transit Partnership',
    description: 'Discounted public transportation passes for eligible students.',
    schedule: 'Available during school hours',
    contact: 'finance@Angelsschool.edu',
    features: ['Reduced fare program', 'Monthly passes', 'Route planning assistance']
  }
]

const mentalHealthResources = [
  {
    title: 'Mindfulness Mondays',
    description: 'Weekly guided meditation and mindfulness sessions to reduce stress and improve focus.',
    schedule: 'Mondays 3:30-4:00 PM',
    location: 'Wellness Room',
    facilitator: 'Certified mindfulness instructor'
  },
  {
    title: 'Peer Support Network',
    description: 'Trained student peer counselors provide emotional support and crisis response.',
    schedule: 'Available during lunch and study hall',
    location: 'Student Support Center',
    facilitator: 'Student volunteers & staff supervisor'
  },
  {
    title: 'Mental Health First Aid',
    description: 'Training workshops to recognize and respond to mental health challenges.',
    schedule: 'Monthly workshops',
    location: 'Training Room B',
    facilitator: 'Licensed mental health professionals'
  },
  {
    title: 'Wellness Fair',
    description: 'Annual event featuring mental health resources, stress-relief activities, and wellness vendors.',
    schedule: 'October (Mental Health Awareness Month)',
    location: 'Main Gymnasium',
    facilitator: 'School counseling department'
  }
]

export function StudentWellness() {
  const [activeService, setActiveService] = useState('counseling')

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Student Support & Wellness</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your wellbeing is our priority. Access comprehensive support services designed to help you thrive academically, emotionally, and physically.
        </p>
      </div>

      <Tabs value={activeService} onValueChange={setActiveService}>
        <TabsList className="grid grid-cols-5 h-auto p-2">
          <TabsTrigger value="counseling" className="flex flex-col items-center gap-2 p-4">
            <Brain className="w-5 h-5" />
            <span className="text-xs">Counseling</span>
          </TabsTrigger>
          <TabsTrigger value="health" className="flex flex-col items-center gap-2 p-4">
            <Heart className="w-5 h-5" />
            <span className="text-xs">Health Services</span>
          </TabsTrigger>
          <TabsTrigger value="dining" className="flex flex-col items-center gap-2 p-4">
            <Utensils className="w-5 h-5" />
            <span className="text-xs">Dining</span>
          </TabsTrigger>
          <TabsTrigger value="transportation" className="flex flex-col items-center gap-2 p-4">
            <Bus className="w-5 h-5" />
            <span className="text-xs">Transportation</span>
          </TabsTrigger>
          <TabsTrigger value="mental-health" className="flex flex-col items-center gap-2 p-4">
            <Shield className="w-5 h-5" />
            <span className="text-xs">Mental Health</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="counseling" className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Counseling Services</h3>
            <p className="text-gray-600">Professional support for academic, personal, and social challenges</p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <Phone className="w-6 h-6 text-red-600" />
              <h4 className="text-lg font-semibold text-red-800">Emergency Support</h4>
            </div>
            <p className="text-red-700 mb-3">
              If you're experiencing a mental health crisis or having thoughts of self-harm:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4">
                <div className="font-medium">National Crisis Line</div>
                <div className="text-lg font-bold text-red-600">988</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="font-medium">Emergency Services</div>
                <div className="text-lg font-bold text-red-600">911</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {counselingServices.map((service, idx) => {
              const Icon = service.icon
              return (
                <Card key={idx} className={`hover:shadow-lg transition-shadow ${service.emergency ? 'border-red-200 bg-red-50' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Icon className={`w-6 h-6 ${service.emergency ? 'text-red-600' : 'text-primary'}`} />
                      <CardTitle className="text-lg">{service.service}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span>{service.availability}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span className="text-primary">{service.contact}</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4" size="sm">
                      Request Appointment
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="health" className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Health Services</h3>
            <p className="text-gray-600">Comprehensive healthcare support to keep you healthy and learning</p>
          </div>

          <div className="grid gap-6">
            {healthServices.map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-3">
                    <Heart className="w-6 h-6 text-primary" />
                    {service.service}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                      <div>
                        <div className="font-medium">Location</div>
                        <div className="text-gray-600">{service.location}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-gray-400 mt-0.5" />
                      <div>
                        <div className="font-medium">Hours</div>
                        <div className="text-gray-600">{service.hours}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Users className="w-4 h-4 text-gray-400 mt-0.5" />
                      <div>
                        <div className="font-medium">Staff</div>
                        <div className="text-gray-600">{service.staff}</div>
                      </div>
                    </div>
                  </div>
                  <Button className="mt-4" size="sm">Schedule Visit</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="dining" className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Dining Services</h3>
            <p className="text-gray-600">Nutritious, delicious meals to fuel your learning and growth</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {diningOptions.map((option, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-3">
                    <Utensils className="w-6 h-6 text-primary" />
                    {option.location}
                  </CardTitle>
                  <p className="text-sm text-gray-600">{option.hours}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Available Options:</h4>
                    <div className="flex flex-wrap gap-1">
                      {option.features.map((feature, featureIdx) => (
                        <Badge key={featureIdx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="text-sm font-medium text-blue-800 mb-1">Specialty:</div>
                    <div className="text-sm text-blue-700">{option.specialties}</div>
                  </div>
                  <Button className="w-full mt-4" size="sm">View Menu</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-green-800 mb-3">Nutritional Support</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium mb-2">Special Dietary Needs</h5>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Allergen-free meal options</li>
                  <li>• Vegetarian and vegan choices</li>
                  <li>• Gluten-free alternatives</li>
                  <li>• Kosher and Halal options available</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-2">Free & Reduced Lunch Program</h5>
                <p className="text-sm text-green-700 mb-2">
                  Financial assistance available for qualifying families. All applications are confidential.
                </p>
                <Button size="sm" variant="outline">Apply Now</Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="transportation" className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Transportation Services</h3>
            <p className="text-gray-600">Safe, reliable transportation options to get you to and from school</p>
          </div>

          <div className="grid gap-6">
            {transportationOptions.map((transport, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-3">
                    <Bus className="w-6 h-6 text-primary" />
                    {transport.type}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{transport.description}</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-gray-400 mt-0.5" />
                      <div>
                        <div className="font-medium">Schedule</div>
                        <div className="text-sm text-gray-600">{transport.schedule}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Phone className="w-4 h-4 text-gray-400 mt-0.5" />
                      <div>
                        <div className="font-medium">Contact</div>
                        <div className="text-sm text-primary">{transport.contact}</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {transport.features.map((feature, featureIdx) => (
                        <Badge key={featureIdx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="mt-4" size="sm">Get Route Info</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="mental-health" className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Mental Health & Wellness Programs</h3>
            <p className="text-gray-600">Proactive mental health support and wellness initiatives</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {mentalHealthResources.map((resource, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-3">
                    <Shield className="w-5 h-5 text-primary" />
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>{resource.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span>{resource.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span>{resource.facilitator}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4" size="sm">Join Program</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-purple-800 mb-3 flex items-center gap-2">
              <Headphones className="w-5 h-5" />
              Digital Wellness Resources
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium mb-2">Wellness Apps</h5>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Headspace for Students (Free)</li>
                  <li>• Calm meditation sessions</li>
                  <li>• Mindfulness Bell reminders</li>
                  <li>• Stress tracking tools</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-2">Online Resources</h5>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Mental health self-assessments</li>
                  <li>• Coping strategies database</li>
                  <li>• Crisis chat support</li>
                  <li>• Wellness videos and podcasts</li>
                </ul>
              </div>
            </div>
            <Button className="mt-4" size="sm" variant="outline">
              Access Digital Tools
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}