import { useState, useEffect } from 'react'
import { Layout } from '@/components/layout/Layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calendar } from '@/components/ui/calendar'
import { 
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Video,
  Calendar as CalendarIcon,
  Users,
  Search,
  Globe,
  MessageSquare,
  BookOpen,
  Heart,
  Building,
  Car,
  Bus,
  Bike,
  Shield,
  Star,
  ChevronRight,
  ExternalLink,
  AlertCircle,
  CheckCircle,
  HelpCircle,
  Zap,
  User,
  GraduationCap,
  Briefcase,
  UserPlus,
  Languages,
  Navigation,
  Camera,
  Volume2,
  Eye
} from 'lucide-react'

// Department data
const departments = [
  {
    id: 'main',
    name: 'Main Office',
    description: 'General inquiries and administration',
    phone: '(555) 123-4567',
    email: 'info@stellarhaven.edu',
    hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
    status: 'open',
    languages: ['English', 'Spanish', 'French'],
    staff: [
      { name: 'Sarah Johnson', role: 'Principal', available: true },
      { name: 'Mike Chen', role: 'Assistant Principal', available: false },
      { name: 'Lisa Rodriguez', role: 'Secretary', available: true }
    ]
  },
  {
    id: 'admissions',
    name: 'Admissions Office',
    description: 'Student enrollment and registration',
    phone: '(555) 123-4568',
    email: 'admissions@stellarhaven.edu',
    hours: 'Mon-Fri: 8:30 AM - 4:30 PM',
    status: 'open',
    languages: ['English', 'Spanish', 'Mandarin'],
    staff: [
      { name: 'David Park', role: 'Admissions Director', available: true },
      { name: 'Maria Santos', role: 'Enrollment Coordinator', available: true }
    ]
  },
  {
    id: 'student-services',
    name: 'Student Services',
    description: 'Academic support and counseling',
    phone: '(555) 123-4569',
    email: 'services@stellarhaven.edu',
    hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
    status: 'open',
    languages: ['English', 'Spanish', 'Arabic'],
    staff: [
      { name: 'Dr. Jennifer Adams', role: 'Counseling Director', available: true },
      { name: 'Robert Kim', role: 'Academic Advisor', available: false },
      { name: 'Amanda Foster', role: 'Social Worker', available: true }
    ]
  },
  {
    id: 'technology',
    name: 'Technology Support',
    description: 'IT help desk and technical assistance',
    phone: '(555) 123-4570',
    email: 'techsupport@stellarhaven.edu',
    hours: 'Mon-Fri: 7:30 AM - 6:00 PM',
    status: 'open',
    languages: ['English', 'Spanish'],
    staff: [
      { name: 'Alex Turner', role: 'IT Director', available: true },
      { name: 'Sam Patel', role: 'Help Desk Specialist', available: true }
    ]
  },
  {
    id: 'transportation',
    name: 'Transportation',
    description: 'Bus routes and transportation services',
    phone: '(555) 123-4571',
    email: 'transport@stellarhaven.edu',
    hours: 'Mon-Fri: 6:00 AM - 4:00 PM',
    status: 'open',
    languages: ['English', 'Spanish'],
    staff: [
      { name: 'Tom Wilson', role: 'Transportation Coordinator', available: false },
      { name: 'Nina Garcia', role: 'Route Supervisor', available: true }
    ]
  },
  {
    id: 'emergency',
    name: 'Emergency Contact',
    description: '24/7 urgent matters and emergencies',
    phone: '(555) 911-HELP',
    email: 'emergency@stellarhaven.edu',
    hours: '24/7 Emergency Line',
    status: 'always-open',
    languages: ['English', 'Spanish'],
    staff: [
      { name: 'Security Dispatch', role: 'Emergency Response', available: true }
    ]
  }
]

// FAQ data
const faqCategories = [
  {
    id: 'enrollment',
    title: 'Enrollment & Registration',
    questions: [
      {
        question: 'How do I enroll my child?',
        answer: 'Visit our Admissions Office or use our online enrollment portal. Required documents include birth certificate, immunization records, and proof of residence.'
      },
      {
        question: 'What are the enrollment deadlines?',
        answer: 'Open enrollment runs from January 15 - March 15 for the following school year. Late enrollment is accepted based on available space.'
      },
      {
        question: 'Can I transfer mid-year?',
        answer: 'Yes, we accept transfers throughout the year. Contact our Admissions Office to check availability and begin the transfer process.'
      }
    ]
  },
  {
    id: 'academics',
    title: 'Academics & Curriculum',
    questions: [
      {
        question: 'What curriculum do you follow?',
        answer: 'We follow state standards with enhanced STEAM programs, differentiated instruction, and project-based learning approaches.'
      },
      {
        question: 'How can I access my child\'s grades?',
        answer: 'Grades are available through our Parent Portal 24/7. You can also request progress reports from your child\'s teacher.'
      },
      {
        question: 'What support is available for struggling students?',
        answer: 'We offer tutoring, academic coaching, counseling services, and individualized learning plans through our Student Services team.'
      }
    ]
  },
  {
    id: 'operations',
    title: 'School Operations',
    questions: [
      {
        question: 'What are the school hours?',
        answer: 'Regular school hours are 8:00 AM - 3:15 PM. Early drop-off starts at 7:30 AM, and after-school care is available until 6:00 PM.'
      },
      {
        question: 'How do I report an absence?',
        answer: 'Call the main office at (555) 123-4567 before 9:00 AM or use the online absence reporting form in the Parent Portal.'
      },
      {
        question: 'What is your weather closure policy?',
        answer: 'School closures due to weather are announced by 6:00 AM through our alert system, website, and local news stations.'
      }
    ]
  }
]

export function Contact() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null)
  const [isLiveChatOpen, setIsLiveChatOpen] = useState(false)
  const [appointmentDate, setAppointmentDate] = useState<Date | undefined>(new Date())
  const [contactForm, setContactForm] = useState({
    type: '',
    urgency: '',
    department: '',
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    language: 'english'
  })

  // Get current time for office hours display
  const currentTime = new Date()
  const currentHour = currentTime.getHours()
  const isBusinessHours = currentHour >= 8 && currentHour < 17

  // Filter departments based on search
  const filteredDepartments = departments.filter(dept =>
    dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dept.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dept.staff.some(staff => staff.name.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-blue-600 rounded-full">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900">Connect With Us</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your comprehensive communication hub for all school-related inquiries, support, and engagement opportunities
            </p>
            
            {/* Quick Actions */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button 
                onClick={() => setIsLiveChatOpen(true)}
                className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Live Chat
                <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Emergency: (555) 911-HELP
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Languages className="w-4 h-4" />
                Multilingual Support
              </Button>
            </div>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="directory" className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-8">
              <TabsTrigger value="directory" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Directory
              </TabsTrigger>
              <TabsTrigger value="contact" className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Contact
              </TabsTrigger>
              <TabsTrigger value="location" className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Location
              </TabsTrigger>
              <TabsTrigger value="community" className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Community
              </TabsTrigger>
              <TabsTrigger value="support" className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                Support
              </TabsTrigger>
              <TabsTrigger value="faq" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                FAQ
              </TabsTrigger>
            </TabsList>

            {/* Department Directory Tab */}
            <TabsContent value="directory">
              <div className="space-y-6">
                {/* Search and Filters */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Search className="w-5 h-5" />
                      Department Directory
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                      <div className="flex-1">
                        <Input
                          placeholder="Search departments, staff, or services..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full"
                        />
                      </div>
                      <Button variant="outline" className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        Language Filter
                      </Button>
                    </div>

                    {/* Current Status Indicator */}
                    <div className="flex items-center gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${isBusinessHours ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                        <span className="text-sm font-medium">
                          {isBusinessHours ? 'Office Hours - Most departments open' : 'After Hours - Limited availability'}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Current time: {currentTime.toLocaleTimeString()}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Department Cards */}
                <div className="grid gap-6">
                  {filteredDepartments.map((dept) => (
                    <Card key={dept.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row gap-6">
                          {/* Department Info */}
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{dept.name}</h3>
                                <p className="text-gray-600 mb-3">{dept.description}</p>
                                
                                {/* Contact Info */}
                                <div className="grid md:grid-cols-2 gap-4 mb-4">
                                  <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-blue-600" />
                                    <span className="font-mono text-sm">{dept.phone}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-blue-600" />
                                    <span className="text-sm">{dept.email}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-blue-600" />
                                    <span className="text-sm">{dept.hours}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Badge 
                                      variant={dept.status === 'open' ? 'default' : dept.status === 'always-open' ? 'secondary' : 'outline'}
                                      className={
                                        dept.status === 'open' ? 'bg-green-100 text-green-800' :
                                        dept.status === 'always-open' ? 'bg-blue-100 text-blue-800' :
                                        'bg-yellow-100 text-yellow-800'
                                      }
                                    >
                                      {dept.status === 'open' ? 'Open Now' : 
                                       dept.status === 'always-open' ? '24/7 Available' : 'Closed'}
                                    </Badge>
                                  </div>
                                </div>

                                {/* Languages Supported */}
                                <div className="flex items-center gap-2 mb-4">
                                  <Languages className="w-4 h-4 text-gray-500" />
                                  <span className="text-sm text-gray-600">Languages:</span>
                                  <div className="flex gap-2">
                                    {dept.languages.map((lang) => (
                                      <Badge key={lang} variant="outline" className="text-xs">
                                        {lang}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Staff List */}
                            <div>
                              <h4 className="font-medium text-gray-900 mb-3">Staff Directory</h4>
                              <div className="grid md:grid-cols-2 gap-3">
                                {dept.staff.map((staff, index) => (
                                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <div>
                                      <div className="font-medium text-sm">{staff.name}</div>
                                      <div className="text-xs text-gray-600">{staff.role}</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <div className={`w-2 h-2 rounded-full ${staff.available ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                      <span className="text-xs text-gray-600">
                                        {staff.available ? 'Available' : 'Busy'}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Quick Actions */}
                          <div className="lg:w-64 space-y-3">
                            <Button className="w-full flex items-center gap-2">
                              <Phone className="w-4 h-4" />
                              Call Now
                            </Button>
                            <Button variant="outline" className="w-full flex items-center gap-2">
                              <Mail className="w-4 h-4" />
                              Send Email
                            </Button>
                            <Button variant="outline" className="w-full flex items-center gap-2">
                              <CalendarIcon className="w-4 h-4" />
                              Schedule Meeting
                            </Button>
                            <Button variant="outline" className="w-full flex items-center gap-2">
                              <Video className="w-4 h-4" />
                              Video Call
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Contact & Communication Tab - Will continue in next part */}
            <TabsContent value="contact">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Dynamic Contact Form */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="w-5 h-5" />
                      Contact Form
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Form Type Selection */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Inquiry Type</label>
                        <Select value={contactForm.type} onValueChange={(value) => setContactForm(prev => ({...prev, type: value}))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Question</SelectItem>
                            <SelectItem value="enrollment">Enrollment Inquiry</SelectItem>
                            <SelectItem value="academic">Academic Support</SelectItem>
                            <SelectItem value="technical">Technical Issue</SelectItem>
                            <SelectItem value="complaint">Concern/Complaint</SelectItem>
                            <SelectItem value="suggestion">Suggestion</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium mb-2 block">Urgency Level</label>
                        <Select value={contactForm.urgency} onValueChange={(value) => setContactForm(prev => ({...prev, urgency: value}))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select urgency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low - General inquiry</SelectItem>
                            <SelectItem value="medium">Medium - Need response within 48 hours</SelectItem>
                            <SelectItem value="high">High - Need response within 24 hours</SelectItem>
                            <SelectItem value="urgent">Urgent - Need immediate attention</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Department Selection */}
                    <div>
                      <label className="text-sm font-medium mb-2 block">Preferred Department</label>
                      <Select value={contactForm.department} onValueChange={(value) => setContactForm(prev => ({...prev, department: value}))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          {departments.map((dept) => (
                            <SelectItem key={dept.id} value={dept.id}>{dept.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Language Preference */}
                    <div>
                      <label className="text-sm font-medium mb-2 block">Preferred Language</label>
                      <Select value={contactForm.language} onValueChange={(value) => setContactForm(prev => ({...prev, language: value}))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="spanish">Español</SelectItem>
                          <SelectItem value="french">Français</SelectItem>
                          <SelectItem value="mandarin">中文</SelectItem>
                          <SelectItem value="arabic">العربية</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Contact Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Full Name</label>
                        <Input 
                          value={contactForm.name}
                          onChange={(e) => setContactForm(prev => ({...prev, name: e.target.value}))}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Email Address</label>
                        <Input 
                          type="email"
                          value={contactForm.email}
                          onChange={(e) => setContactForm(prev => ({...prev, email: e.target.value}))}
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Phone Number (Optional)</label>
                      <Input 
                        value={contactForm.phone}
                        onChange={(e) => setContactForm(prev => ({...prev, phone: e.target.value}))}
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Subject</label>
                      <Input 
                        value={contactForm.subject}
                        onChange={(e) => setContactForm(prev => ({...prev, subject: e.target.value}))}
                        placeholder="Brief description of your inquiry"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Message</label>
                      <Textarea 
                        value={contactForm.message}
                        onChange={(e) => setContactForm(prev => ({...prev, message: e.target.value}))}
                        placeholder="Please provide details about your inquiry..."
                        rows={5}
                      />
                    </div>

                    {/* Response Time Expectation */}
                    {contactForm.urgency && (
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-4 h-4 text-blue-600" />
                          <span className="font-medium text-blue-800">Expected Response Time</span>
                        </div>
                        <p className="text-sm text-blue-700">
                          {contactForm.urgency === 'urgent' ? 'Within 2 hours during business hours' :
                           contactForm.urgency === 'high' ? 'Within 24 hours' :
                           contactForm.urgency === 'medium' ? 'Within 48 hours' :
                           'Within 72 hours'}
                        </p>
                      </div>
                    )}

                    <Button className="w-full flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Send Message
                    </Button>
                  </CardContent>
                </Card>

                {/* Appointment Scheduling */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CalendarIcon className="w-5 h-5" />
                        Schedule Appointment
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <Calendar
                          mode="single"
                          selected={appointmentDate}
                          onSelect={setAppointmentDate}
                          className="rounded-md border"
                          disabled={(date) => 
                            date < new Date() || 
                            date.getDay() === 0 || 
                            date.getDay() === 6
                          }
                          weekStartsOn={0}
                          fixedWeeks
                        />
                        
                        <div>
                          <label className="text-sm font-medium mb-2 block">Available Time Slots</label>
                          {appointmentDate ? (
                            <div className="mb-3">
                              <div className="text-sm text-gray-600 mb-2">
                                Available slots for {appointmentDate.toLocaleDateString('en-US', { 
                                  weekday: 'long', 
                                  year: 'numeric', 
                                  month: 'long', 
                                  day: 'numeric' 
                                })}:
                              </div>
                              <div className="grid grid-cols-3 gap-2">
                                {['9:00 AM', '10:30 AM', '1:00 PM', '2:30 PM', '4:00 PM'].map((time) => (
                                  <Button key={time} variant="outline" size="sm" className="text-xs">
                                    {time}
                                  </Button>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <div className="p-4 bg-gray-50 rounded-lg text-center text-sm text-gray-600">
                              Please select a date to view available time slots
                            </div>
                          )}
                        </div>

                        <div>
                          <label className="text-sm font-medium mb-2 block">Meeting Type</label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="in-person">In-Person Meeting</SelectItem>
                              <SelectItem value="video">Video Call</SelectItem>
                              <SelectItem value="phone">Phone Call</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <Button className="w-full flex items-center gap-2">
                          <CalendarIcon className="w-4 h-4" />
                          Book Appointment
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Contact Options */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="w-5 h-5" />
                        Quick Contact
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <Button variant="outline" className="w-full justify-start">
                          <Phone className="w-4 h-4 mr-2" />
                          Call Main Office: (555) 123-4567
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Live Chat Support
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Video className="w-4 h-4 mr-2" />
                          Request Video Consultation
                        </Button>
                        <Button variant="outline" className="w-full justify-start text-red-600 border-red-200">
                          <AlertCircle className="w-4 h-4 mr-2" />
                          Emergency Line: (555) 911-HELP
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Location & Access Information Tab */}
            <TabsContent value="location">
              <div className="space-y-8">
                {/* Interactive Campus Map */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      Interactive Campus Map
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-3 gap-6">
                      {/* Map Placeholder */}
                      <div className="lg:col-span-2">
                        <div className="aspect-video bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                          <div className="text-center">
                            <Navigation className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <h3 className="font-medium text-gray-600 mb-2">Interactive Campus Map</h3>
                            <p className="text-sm text-gray-500">Click buildings for detailed information</p>
                            <Button className="mt-4" variant="outline">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Open Full Map
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Building Directory */}
                      <div className="space-y-4">
                        <h3 className="font-semibold text-gray-900">Campus Buildings</h3>
                        <div className="space-y-2">
                          {[
                            { name: 'Main Office', room: 'Building A, Room 101', icon: Building },
                            { name: 'Library', room: 'Building B, Floor 1', icon: BookOpen },
                            { name: 'Gymnasium', room: 'Building C', icon: Heart },
                            { name: 'Cafeteria', room: 'Building A, Floor 2', icon: Users },
                            { name: 'Science Labs', room: 'Building D, Rooms 201-206', icon: Zap },
                            { name: 'Auditorium', room: 'Building E', icon: Volume2 }
                          ].map((building) => (
                            <div key={building.name} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                              <building.icon className="w-4 h-4 text-blue-600" />
                              <div className="flex-1">
                                <div className="font-medium text-sm">{building.name}</div>
                                <div className="text-xs text-gray-600">{building.room}</div>
                              </div>
                              <ChevronRight className="w-4 h-4 text-gray-400" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Address & Directions */}
                    <div className="mt-6 grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">School Address</h4>
                        <div className="space-y-2">
                          <p className="text-sm">
                            Stellar Haven Academy<br />
                            123 Education Drive<br />
                            Learning City, LC 12345
                          </p>
                          <Button variant="outline" size="sm" className="flex items-center gap-2">
                            <Navigation className="w-4 h-4" />
                            Get Directions
                          </Button>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">GPS Coordinates</h4>
                        <div className="text-sm text-gray-600">
                          <p>Latitude: 40.7128° N</p>
                          <p>Longitude: 74.0060° W</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Transportation Hub */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bus className="w-5 h-5" />
                      Transportation Hub
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-3 gap-6">
                      {/* Bus Routes */}
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                          <Bus className="w-4 h-4" />
                          School Bus Routes
                        </h4>
                        <div className="space-y-3">
                          {[
                            { route: 'Route A1', areas: 'North District', time: '7:30 AM - 3:45 PM' },
                            { route: 'Route A2', areas: 'East District', time: '7:45 AM - 4:00 PM' },
                            { route: 'Route B1', areas: 'South District', time: '7:30 AM - 3:45 PM' },
                            { route: 'Route B2', areas: 'West District', time: '7:15 AM - 3:30 PM' }
                          ].map((bus) => (
                            <div key={bus.route} className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                              <div className="font-medium text-sm text-yellow-800">{bus.route}</div>
                              <div className="text-xs text-yellow-700">{bus.areas}</div>
                              <div className="text-xs text-yellow-600">{bus.time}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Public Transit */}
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                          <Bus className="w-4 h-4" />
                          Public Transportation
                        </h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                            <div className="font-medium text-sm text-blue-800">Metro Bus Line 42</div>
                            <div className="text-xs text-blue-700">Stops 200m from main entrance</div>
                            <div className="text-xs text-blue-600">Every 15 minutes</div>
                          </div>
                          <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                            <div className="font-medium text-sm text-green-800">Metro Line 3</div>
                            <div className="text-xs text-green-700">Education Station - 0.5 miles</div>
                            <div className="text-xs text-green-600">Every 10 minutes</div>
                          </div>
                        </div>
                      </div>

                      {/* Parking & Alternative Transport */}
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                          <Car className="w-4 h-4" />
                          Parking & Alternative
                        </h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <Car className="w-4 h-4 text-gray-600" />
                              <span className="font-medium text-sm">Visitor Parking</span>
                            </div>
                            <div className="text-xs text-gray-600">200 spaces available</div>
                            <div className="text-xs text-gray-600">Free for visitors</div>
                          </div>
                          <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <Bike className="w-4 h-4 text-green-600" />
                              <span className="font-medium text-sm">Bike Facilities</span>
                            </div>
                            <div className="text-xs text-green-600">Secure bike racks</div>
                            <div className="text-xs text-green-600">Repair station available</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Accessibility & Visitor Management */}
                <div className="grid lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Heart className="w-5 h-5" />
                        Accessibility Features
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            { feature: 'Wheelchair Access', icon: Heart, available: true },
                            { feature: 'Elevator Access', icon: Building, available: true },
                            { feature: 'Audio Assistance', icon: Volume2, available: true },
                            { feature: 'Visual Aids', icon: Eye, available: true },
                            { feature: 'Accessible Parking', icon: Car, available: true },
                            { feature: 'Service Animal Friendly', icon: Heart, available: true }
                          ].map((item) => (
                            <div key={item.feature} className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                              <item.icon className="w-4 h-4 text-green-600" />
                              <span className="text-sm font-medium text-green-800">{item.feature}</span>
                              {item.available && <CheckCircle className="w-4 h-4 text-green-600 ml-auto" />}
                            </div>
                          ))}
                        </div>
                        <Button variant="outline" className="w-full">
                          Request Accommodation
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="w-5 h-5" />
                        Visitor Management
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">Check-in Procedure</h4>
                          <ol className="text-sm text-blue-700 space-y-1 list-decimal list-inside">
                            <li>Report to main office</li>
                            <li>Present valid photo ID</li>
                            <li>Sign visitor log</li>
                            <li>Receive visitor badge</li>
                            <li>Wait for escort if required</li>
                          </ol>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <Clock className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                            <div className="text-sm font-medium">Visiting Hours</div>
                            <div className="text-xs text-gray-600">8:00 AM - 4:00 PM</div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <Shield className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                            <div className="text-sm font-medium">Security</div>
                            <div className="text-xs text-gray-600">Background check may be required</div>
                          </div>
                        </div>

                        <Button className="w-full">
                          Pre-Register Visit
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Community Connection Tab */}
            <TabsContent value="community">
              <div className="space-y-8">
                {/* Social Media Integration */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="w-5 h-5" />
                      Social Media & Community Feeds
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-3 gap-6">
                      {/* Live Social Feed */}
                      <div className="lg:col-span-2">
                        <h4 className="font-semibold mb-4">Latest Community Updates</h4>
                        <div className="space-y-4">
                          {[
                            {
                              platform: 'Twitter',
                              content: 'Congratulations to our Science Fair winners! Amazing projects from grades K-12. #STEMEducation #StellarHaven',
                              time: '2 hours ago',
                              engagement: '24 likes, 8 retweets'
                            },
                            {
                              platform: 'Facebook',
                              content: 'Parent-Teacher conferences scheduled for next week. Online booking is now available through our portal.',
                              time: '4 hours ago',
                              engagement: '15 likes, 3 comments'
                            },
                            {
                              platform: 'Instagram',
                              content: 'Beautiful autumn colors on our campus! Students enjoying outdoor learning activities. 🍂📚',
                              time: '1 day ago',
                              engagement: '42 likes, 7 comments'
                            }
                          ].map((post, index) => (
                            <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow">
                              <div className="flex items-start justify-between mb-2">
                                <Badge variant="outline" className="text-xs">{post.platform}</Badge>
                                <span className="text-xs text-gray-500">{post.time}</span>
                              </div>
                              <p className="text-sm text-gray-800 mb-2">{post.content}</p>
                              <div className="text-xs text-gray-500">{post.engagement}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Social Media Links */}
                      <div>
                        <h4 className="font-semibold mb-4">Follow Us</h4>
                        <div className="space-y-3">
                          {[
                            { platform: 'Facebook', followers: '2.3k', color: 'blue' },
                            { platform: 'Twitter', followers: '1.8k', color: 'sky' },
                            { platform: 'Instagram', followers: '3.1k', color: 'pink' },
                            { platform: 'YouTube', followers: '925', color: 'red' },
                            { platform: 'LinkedIn', followers: '456', color: 'indigo' }
                          ].map((social) => (
                            <Button key={social.platform} variant="outline" className="w-full justify-between">
                              <span>{social.platform}</span>
                              <Badge variant="secondary">{social.followers} followers</Badge>
                            </Button>
                          ))}
                        </div>

                        {/* Community Engagement Metrics */}
                        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                          <h5 className="font-medium mb-3">Community Engagement</h5>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Monthly Reach</span>
                              <span className="font-medium">12.5k</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>Active Members</span>
                              <span className="font-medium">3.2k</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>Event Participation</span>
                              <span className="font-medium">85%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Volunteer & Partnership Opportunities */}
                <div className="grid lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Heart className="w-5 h-5" />
                        Volunteer Opportunities
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            title: 'Reading Mentors',
                            description: 'Help students with reading skills during lunch hours',
                            commitment: '2 hours/week',
                            urgency: 'high'
                          },
                          {
                            title: 'Event Coordinators',
                            description: 'Assist with school events and fundraising activities',
                            commitment: 'Flexible',
                            urgency: 'medium'
                          },
                          {
                            title: 'Technology Assistants',
                            description: 'Support teachers with classroom technology',
                            commitment: '3 hours/week',
                            urgency: 'medium'
                          },
                          {
                            title: 'Garden Club Leaders',
                            description: 'Lead our school garden and sustainability initiatives',
                            commitment: '1 hour/week',
                            urgency: 'low'
                          }
                        ].map((volunteer) => (
                          <div key={volunteer.title} className="p-4 border border-gray-200 rounded-lg">
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="font-medium">{volunteer.title}</h4>
                              <Badge 
                                variant={volunteer.urgency === 'high' ? 'destructive' : 
                                        volunteer.urgency === 'medium' ? 'default' : 'secondary'}
                              >
                                {volunteer.urgency} need
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{volunteer.description}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-gray-500">Commitment: {volunteer.commitment}</span>
                              <Button size="sm">Apply</Button>
                            </div>
                          </div>
                        ))}
                        
                        <Button className="w-full" variant="outline">
                          <UserPlus className="w-4 h-4 mr-2" />
                          View All Opportunities
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Briefcase className="w-5 h-5" />
                        Partnership Inquiries
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <Button variant="outline" className="h-20 flex-col">
                            <Building className="w-6 h-6 mb-2" />
                            <span className="text-xs">Business Partnership</span>
                          </Button>
                          <Button variant="outline" className="h-20 flex-col">
                            <Heart className="w-6 h-6 mb-2" />
                            <span className="text-xs">Community Organization</span>
                          </Button>
                          <Button variant="outline" className="h-20 flex-col">
                            <GraduationCap className="w-6 h-6 mb-2" />
                            <span className="text-xs">Educational Partner</span>
                          </Button>
                          <Button variant="outline" className="h-20 flex-col">
                            <Globe className="w-6 h-6 mb-2" />
                            <span className="text-xs">Non-Profit Collaboration</span>
                          </Button>
                        </div>

                        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                          <h5 className="font-medium text-blue-800 mb-2">Current Partners</h5>
                          <div className="text-sm text-blue-700 space-y-1">
                            <p>• Local Public Library System</p>
                            <p>• Community Health Center</p>
                            <p>• Chamber of Commerce</p>
                            <p>• Environmental Conservation Group</p>
                            <p>• Youth Sports League</p>
                          </div>
                        </div>

                        <Button className="w-full">
                          Submit Partnership Proposal
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Alumni Network */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5" />
                      Alumni Network & Mentorship
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold mb-4">Reconnect with Stellar Haven</h4>
                        <div className="space-y-3">
                          <Button className="w-full justify-start">
                            <User className="w-4 h-4 mr-2" />
                            Update Alumni Profile
                          </Button>
                          <Button variant="outline" className="w-full justify-start">
                            <Users className="w-4 h-4 mr-2" />
                            Find Classmates
                          </Button>
                          <Button variant="outline" className="w-full justify-start">
                            <Heart className="w-4 h-4 mr-2" />
                            Volunteer Opportunities
                          </Button>
                          <Button variant="outline" className="w-full justify-start">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Share Your Story
                          </Button>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-4">Mentorship Program</h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                            <div className="font-medium text-green-800 text-sm">Become a Mentor</div>
                            <div className="text-xs text-green-700">Share your expertise with current students</div>
                          </div>
                          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                            <div className="font-medium text-blue-800 text-sm">Career Guidance</div>
                            <div className="text-xs text-blue-700">Provide professional insights and advice</div>
                          </div>
                          <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                            <div className="font-medium text-purple-800 text-sm">Guest Speaking</div>
                            <div className="text-xs text-purple-700">Inspire students with your journey</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-4">Alumni Statistics</h4>
                        <div className="space-y-3">
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-2xl font-bold text-gray-900">2,847</div>
                            <div className="text-sm text-gray-600">Active Alumni</div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-2xl font-bold text-gray-900">156</div>
                            <div className="text-sm text-gray-600">Mentors Available</div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-2xl font-bold text-gray-900">89%</div>
                            <div className="text-sm text-gray-600">Success Rate</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Support & Optimization Tab */}
            <TabsContent value="support">
              <div className="space-y-6">
                {/* Response Time & Escalation */}
                <div className="grid lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        Response Time Expectations
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { type: 'Emergency', time: 'Immediate', color: 'red', description: 'Safety concerns, urgent medical' },
                          { type: 'Urgent', time: 'Within 2 hours', color: 'orange', description: 'Academic issues, behavioral concerns' },
                          { type: 'High Priority', time: 'Within 24 hours', color: 'yellow', description: 'Enrollment, important notices' },
                          { type: 'Standard', time: 'Within 48 hours', color: 'green', description: 'General inquiries, routine requests' },
                          { type: 'Low Priority', time: 'Within 72 hours', color: 'gray', description: 'Information requests, suggestions' }
                        ].map((item) => (
                          <div key={item.type} className="flex items-center justify-between p-3 border rounded-lg">
                            <div className="flex items-center gap-3">
                              <div className={`w-3 h-3 rounded-full bg-${item.color}-500`}></div>
                              <div>
                                <div className="font-medium text-sm">{item.type}</div>
                                <div className="text-xs text-gray-600">{item.description}</div>
                              </div>
                            </div>
                            <Badge variant="outline">{item.time}</Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <AlertCircle className="w-5 h-5" />
                        Escalation Procedures
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                          <h4 className="font-medium text-red-800 mb-2 flex items-center gap-2">
                            <AlertCircle className="w-4 h-4" />
                            Emergency Escalation
                          </h4>
                          <ol className="text-sm text-red-700 space-y-1 list-decimal list-inside">
                            <li>Call emergency line: (555) 911-HELP</li>
                            <li>Automated system routes to on-duty staff</li>
                            <li>Principal/VP notification within 10 minutes</li>
                            <li>Parent/guardian contact if student-related</li>
                          </ol>
                        </div>

                        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                          <h4 className="font-medium text-yellow-800 mb-2">Standard Escalation</h4>
                          <ol className="text-sm text-yellow-700 space-y-1 list-decimal list-inside">
                            <li>Department staff initial response</li>
                            <li>Department head if unresolved (24h)</li>
                            <li>Administrative team review (48h)</li>
                            <li>Principal intervention if needed (72h)</li>
                          </ol>
                        </div>

                        <Button variant="outline" className="w-full">
                          Submit Escalation Request
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Feedback Collection */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="w-5 h-5" />
                      Feedback & Satisfaction
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-4">Rate Your Experience</h4>
                        <div className="space-y-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block">Overall Satisfaction</label>
                            <div className="flex gap-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-6 h-6 text-yellow-400 fill-current cursor-pointer hover:text-yellow-500" />
                              ))}
                            </div>
                          </div>

                          <div>
                            <label className="text-sm font-medium mb-2 block">Response Time</label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="How was our response time?" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="excellent">Excellent - Faster than expected</SelectItem>
                                <SelectItem value="good">Good - Met expectations</SelectItem>
                                <SelectItem value="fair">Fair - Slightly slow</SelectItem>
                                <SelectItem value="poor">Poor - Too slow</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <label className="text-sm font-medium mb-2 block">Staff Helpfulness</label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="How helpful was our staff?" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="very-helpful">Very Helpful</SelectItem>
                                <SelectItem value="helpful">Helpful</SelectItem>
                                <SelectItem value="somewhat-helpful">Somewhat Helpful</SelectItem>
                                <SelectItem value="not-helpful">Not Helpful</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <label className="text-sm font-medium mb-2 block">Additional Comments</label>
                            <Textarea placeholder="Tell us how we can improve..." rows={3} />
                          </div>

                          <Button className="w-full">Submit Feedback</Button>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-4">Recent Satisfaction Metrics</h4>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                            <span className="text-sm font-medium text-green-800">Overall Satisfaction</span>
                            <Badge className="bg-green-100 text-green-800">4.7/5.0</Badge>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg">
                            <span className="text-sm font-medium text-blue-800">Response Time</span>
                            <Badge className="bg-blue-100 text-blue-800">4.5/5.0</Badge>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-purple-50 border border-purple-200 rounded-lg">
                            <span className="text-sm font-medium text-purple-800">Staff Helpfulness</span>
                            <Badge className="bg-purple-100 text-purple-800">4.8/5.0</Badge>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-orange-50 border border-orange-200 rounded-lg">
                            <span className="text-sm font-medium text-orange-800">Issue Resolution</span>
                            <Badge className="bg-orange-100 text-orange-800">4.6/5.0</Badge>
                          </div>
                        </div>

                        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                          <h5 className="font-medium mb-2">Improvement Initiatives</h5>
                          <div className="text-sm text-gray-600 space-y-1">
                            <p>• Enhanced staff training program</p>
                            <p>• New multilingual support system</p>
                            <p>• Improved response time tracking</p>
                            <p>• 24/7 emergency protocol updates</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* FAQ Knowledge Base Tab */}
            <TabsContent value="faq">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5" />
                      Knowledge Base & FAQ
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* Search FAQ */}
                    <div className="mb-6">
                      <div className="flex gap-4">
                        <div className="flex-1">
                          <Input 
                            placeholder="Search frequently asked questions..." 
                            className="w-full"
                          />
                        </div>
                        <Button>
                          <Search className="w-4 h-4 mr-2" />
                          Search
                        </Button>
                      </div>
                    </div>

                    {/* Popular Topics */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Popular Topics</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Enrollment', 'Grades', 'Transportation', 'Lunch Program', 'After School', 'Technology Support'].map((topic) => (
                          <Button key={topic} variant="outline" size="sm">
                            {topic}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* FAQ Categories */}
                    <div className="space-y-6">
                      {faqCategories.map((category) => (
                        <div key={category.id} className="border border-gray-200 rounded-lg">
                          <div className="p-4 bg-gray-50 border-b border-gray-200">
                            <h3 className="font-semibold text-gray-900">{category.title}</h3>
                          </div>
                          <div className="p-4 space-y-4">
                            {category.questions.map((qa, index) => (
                              <div key={index} className="border border-gray-200 rounded-lg">
                                <Button
                                  variant="ghost"
                                  className="w-full p-4 justify-between text-left"
                                >
                                  <span className="font-medium">{qa.question}</span>
                                  <ChevronRight className="w-4 h-4" />
                                </Button>
                                <div className="px-4 pb-4">
                                  <p className="text-sm text-gray-600">{qa.answer}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Still Need Help */}
                    <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg text-center">
                      <HelpCircle className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                      <h4 className="font-semibold text-blue-800 mb-2">Still Need Help?</h4>
                      <p className="text-sm text-blue-700 mb-4">
                        Can't find the answer you're looking for? Our support team is here to help!
                      </p>
                      <div className="flex flex-wrap justify-center gap-3">
                        <Button>
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Live Chat
                        </Button>
                        <Button variant="outline">
                          <Mail className="w-4 h-4 mr-2" />
                          Email Support
                        </Button>
                        <Button variant="outline">
                          <Phone className="w-4 h-4 mr-2" />
                          Call Us
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Additional tabs continue here... */}
          </Tabs>
        </div>

        {/* Live Chat Widget */}
        <Dialog open={isLiveChatOpen} onOpenChange={setIsLiveChatOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Live Support Chat
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="h-64 bg-gray-50 rounded-lg p-4 overflow-y-auto">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="bg-white p-3 rounded-lg flex-1 shadow-sm">
                      <p className="text-sm">Hello! I'm Sarah from Student Services. How can I help you today?</p>
                      <span className="text-xs text-gray-500">Now</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Input placeholder="Type your message..." className="flex-1" />
                <Button size="sm">Send</Button>
              </div>
              
              <div className="text-xs text-gray-500 text-center">
                Average response time: Under 2 minutes
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  )
}