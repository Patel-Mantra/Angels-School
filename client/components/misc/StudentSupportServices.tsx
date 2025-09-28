import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Heart, 
  Users, 
  Brain, 
  BookOpen, 
  Calendar, 
  Phone, 
  Mail, 
  Clock,
  CheckCircle,
  UserCheck,
  Target,
  Laptop,
  Video,
  FileText,
  Download,
  ExternalLink
} from 'lucide-react'

const supportServices = [
  {
    id: 'special-education',
    title: 'Special Education Services',
    icon: Heart,
    description: 'Comprehensive support for students with diverse learning needs',
    services: [
      'Individualized Education Programs (IEPs)',
      'Learning disability assessments',
      'Speech and language therapy',
      'Occupational therapy services',
      'Behavioral intervention support',
      'Assistive technology integration'
    ],
    staff: {
      coordinator: 'Dr. Maria Santos',
      specialists: 8,
      experience: '15+ years average'
    },
    contact: {
      email: 'speced@stellarhaven.edu',
      phone: '(555) 123-4567',
      hours: 'Mon-Fri 8:00 AM - 4:00 PM'
    }
  },
  {
    id: 'tutoring',
    title: 'Tutoring Programs',
    icon: Users,
    description: 'Peer mentoring and academic assistance across all subjects',
    services: [
      'One-on-one tutoring sessions',
      'Small group study sessions',
      'Peer mentoring program',
      'After-school homework help',
      'Test preparation workshops',
      'Study skills development'
    ],
    staff: {
      coordinator: 'Ms. Jennifer Liu',
      specialists: 25,
      experience: 'Student tutors and certified teachers'
    },
    contact: {
      email: 'tutoring@stellarhaven.edu',
      phone: '(555) 123-4568',
      hours: 'Mon-Thu 3:00 PM - 6:00 PM'
    }
  },
  {
    id: 'counseling',
    title: 'Counseling Services',
    icon: Brain,
    description: 'Academic, career, and personal guidance for student success',
    services: [
      'Academic planning and course selection',
      'Career exploration and guidance',
      'College application support',
      'Social-emotional support',
      'Crisis intervention services',
      'Group counseling sessions'
    ],
    staff: {
      coordinator: 'Dr. Michael Chen',
      specialists: 6,
      experience: 'Licensed counselors and therapists'
    },
    contact: {
      email: 'counseling@stellarhaven.edu',
      phone: '(555) 123-4569',
      hours: 'Mon-Fri 7:30 AM - 4:30 PM'
    }
  },
  {
    id: 'learning-disabilities',
    title: 'Learning Disabilities Support',
    icon: Target,
    description: 'Specialized programs for students with learning differences',
    services: [
      'Dyslexia intervention programs',
      'Executive function coaching',
      'Processing speed accommodations',
      'Memory and attention strategies',
      'Multi-sensory learning approaches',
      'Transition planning support'
    ],
    staff: {
      coordinator: 'Dr. Rachel Kim',
      specialists: 12,
      experience: 'Learning disabilities specialists'
    },
    contact: {
      email: 'learningsupport@stellarhaven.edu',
      phone: '(555) 123-4570',
      hours: 'Mon-Fri 8:00 AM - 5:00 PM'
    }
  }
]

const lmsFeatures = [
  {
    category: 'Assignment Portal',
    features: [
      'Real-time assignment tracking',
      'Submission status monitoring',
      'Grade book access',
      'Feedback and comments from teachers',
      'Late work notifications',
      'Assignment calendar view'
    ],
    icon: FileText
  },
  {
    category: 'Digital Resources',
    features: [
      'Online textbook access',
      'Interactive learning modules',
      'Educational software licenses',
      'Research database access',
      'Digital library resources',
      'Multimedia content library'
    ],
    icon: Laptop
  },
  {
    category: 'Virtual Classrooms',
    features: [
      'Live video conferencing',
      'Screen sharing capabilities',
      'Interactive whiteboards',
      'Breakout room functionality',
      'Recording and playback',
      'Chat and Q&A features'
    ],
    icon: Video
  },
  {
    category: 'Parent Access',
    features: [
      'Real-time grade monitoring',
      'Attendance tracking',
      'Assignment due dates',
      'Teacher communication portal',
      'Progress report access',
      'Parent-teacher conference scheduling'
    ],
    icon: UserCheck
  }
]

function ServiceDetailModal({ service }: { service: typeof supportServices[0] }) {
  const Icon = service.icon
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Learn More</Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <Icon className="w-6 h-6 text-primary" />
            {service.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <p className="text-gray-600">{service.description}</p>
          
          <div>
            <h4 className="font-semibold mb-3">Services Provided</h4>
            <ul className="space-y-2">
              {service.services.map((svc, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{svc}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Our Team</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <p className="font-medium text-sm">Program Coordinator</p>
                  <p>{service.staff.coordinator}</p>
                </div>
                <div>
                  <p className="font-medium text-sm">Specialists</p>
                  <p>{service.staff.specialists} staff members</p>
                </div>
                <div>
                  <p className="font-medium text-sm">Experience</p>
                  <p className="text-sm text-gray-600">{service.staff.experience}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm">{service.contact.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm">{service.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm">{service.contact.hours}</span>
                </div>
                <Button size="sm" className="w-full mt-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Appointment
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-blue-900">Getting Started</h4>
            <p className="text-sm text-blue-800 mb-3">
              To access {service.title.toLowerCase()}, please contact our coordinator to schedule an 
              initial consultation and assessment.
            </p>
            <Button size="sm" variant="outline">
              <FileText className="w-4 h-4 mr-2" />
              Download Referral Form
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function StudentSupportServices() {
  const [selectedTab, setSelectedTab] = useState('support')

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Student Support Services</h2>
        <p className="text-gray-600">Comprehensive support systems to ensure every student succeeds</p>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid grid-cols-2">
          <TabsTrigger value="support">Support Services</TabsTrigger>
          <TabsTrigger value="lms">Learning Management</TabsTrigger>
        </TabsList>

        <TabsContent value="support" className="space-y-6">
          <div className="grid gap-6">
            {supportServices.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon className="w-6 h-6 text-primary" />
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">{service.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium text-sm text-gray-600 mb-2">Key Services</p>
                        <ul className="text-sm space-y-1">
                          {service.services.slice(0, 3).map((svc, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                              {svc}
                            </li>
                          ))}
                          {service.services.length > 3 && (
                            <li className="text-gray-500">+{service.services.length - 3} more services</li>
                          )}
                        </ul>
                      </div>
                      
                      <div>
                        <p className="font-medium text-sm text-gray-600 mb-2">Quick Contact</p>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center gap-2">
                            <UserCheck className="w-3 h-3 text-gray-500" />
                            <span>{service.staff.coordinator}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-3 h-3 text-gray-500" />
                            <span>{service.contact.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-3 h-3 text-gray-500" />
                            <span>{service.contact.hours}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      <ServiceDetailModal service={service} />
                      <Button variant="outline" size="sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule Meeting
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <Heart className="w-12 h-12 text-green-600 mx-auto" />
                <h3 className="text-2xl font-bold">Our Commitment</h3>
                <p className="text-gray-700 max-w-2xl mx-auto">
                  Every student deserves the opportunity to succeed. Our comprehensive support services 
                  are designed to meet diverse learning needs and ensure no student is left behind.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  <Badge className="bg-green-100 text-green-800">504 Plan Support</Badge>
                  <Badge className="bg-blue-100 text-blue-800">IEP Development</Badge>
                  <Badge className="bg-purple-100 text-purple-800">Crisis Intervention</Badge>
                  <Badge className="bg-yellow-100 text-yellow-800">Family Support</Badge>
                </div>
                <Button size="lg" className="mt-4">Contact Student Services</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="lms" className="space-y-6">
          <div className="grid gap-6">
            {lmsFeatures.map((category) => {
              const Icon = category.icon
              return (
                <Card key={category.category}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon className="w-6 h-6 text-primary" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {category.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Laptop className="w-5 h-5" />
                  Student Portal Access
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Access assignments, grades, resources, and communicate with teachers through our 
                  integrated learning management system.
                </p>
                <div className="space-y-2">
                  <Button className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Student Login
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Mobile App Download
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="w-5 h-5" />
                  Parent Portal Access
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Monitor your child's progress, communicate with teachers, and stay updated on 
                  assignments and school events.
                </p>
                <div className="space-y-2">
                  <Button className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Parent Login
                  </Button>
                  <Button variant="outline" className="w-full">
                    <FileText className="w-4 h-4 mr-2" />
                    Parent Guide
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <Video className="w-12 h-12 text-blue-600 mx-auto" />
                <h3 className="text-2xl font-bold">24/7 Learning Access</h3>
                <p className="text-gray-700 max-w-2xl mx-auto">
                  Our learning management system provides round-the-clock access to educational resources, 
                  enabling flexible learning that fits your schedule.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  <Badge>Mobile Responsive</Badge>
                  <Badge>Offline Capability</Badge>
                  <Badge>Multi-Device Sync</Badge>
                  <Badge>Automatic Backups</Badge>
                </div>
                <div className="flex justify-center gap-3 mt-4">
                  <Button size="lg">Get Started</Button>
                  <Button size="lg" variant="outline">Watch Demo</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}