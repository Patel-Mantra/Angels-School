import { useState } from 'react'
import { Layout } from '@/components/layout/Layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Calendar, Calculator, FileText, Users, Video, MapPin, Phone, DollarSign, Clock, CheckCircle, Star, MessageCircle } from 'lucide-react'
import { FAQChatbot } from '@/components/misc/FAQChatbot'
import { ApplicationStatusPortal } from '@/components/misc/ApplicationStatusPortal'
import { TuitionCalculator } from '@/components/misc/TuitionCalculator'
import { CampusTourBooking } from '@/components/misc/CampusTourBooking'
import { AcademicAchievements } from '@/components/misc/AcademicAchievements'

export default function Admissions() {
  const [selectedGradeLevel, setSelectedGradeLevel] = useState<string>('elementary')
  const [applicationStep, setApplicationStep] = useState<number>(1)

  const gradeLevels = [
    { id: 'elementary', name: 'Elementary (K-5)', description: 'Building strong foundations' },
    { id: 'middle', name: 'Middle School (6-8)', description: 'Exploring new horizons' },
    { id: 'high', name: 'High School (9-12)', description: 'Preparing for the future' }
  ]

  const applicationSteps = [
    { id: 1, title: 'Initial Inquiry', description: 'Submit interest form', completed: true },
    { id: 2, title: 'Application', description: 'Complete online application', completed: true },
    { id: 3, title: 'Documents', description: 'Upload required documents', completed: false },
    { id: 4, title: 'Interview', description: 'Schedule admission interview', completed: false },
    { id: 5, title: 'Decision', description: 'Receive admission decision', completed: false }
  ]

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Start Your Journey at{' '}
              <span className="text-blue-600">Stellar Haven</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Welcome to a community where academic excellence meets personal growth, 
              and where every student's potential is nurtured and celebrated.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <FileText className="mr-2 h-5 w-5" />
                Start Application
              </Button>
              <Button size="lg" variant="outline">
                <Video className="mr-2 h-5 w-5" />
                Watch Virtual Tour
              </Button>
            </div>
          </div>
        </section>

        {/* Grade Level Selection */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Choose Your Grade Level</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {gradeLevels.map((level) => (
                <Card 
                  key={level.id}
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedGradeLevel === level.id ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                  }`}
                  onClick={() => setSelectedGradeLevel(level.id)}
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{level.name}</CardTitle>
                    <CardDescription>{level.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant={selectedGradeLevel === level.id ? "default" : "outline"}
                      className="w-full"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process Visualization */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Application Process</h2>
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium">Progress</span>
                <span className="text-sm text-gray-500">Step {applicationStep} of 5</span>
              </div>
              <Progress value={(applicationStep / 5) * 100} className="h-2" />
            </div>
            <div className="grid md:grid-cols-5 gap-4">
              {applicationSteps.map((step) => (
                <Card key={step.id} className={`text-center ${step.completed ? 'bg-green-50 border-green-200' : ''}`}>
                  <CardContent className="p-4">
                    <div className={`w-8 h-8 rounded-full mx-auto mb-3 flex items-center justify-center ${
                      step.completed ? 'bg-green-500 text-white' : 'bg-gray-200'
                    }`}>
                      {step.completed ? <CheckCircle className="h-4 w-4" /> : step.id}
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
                    <p className="text-xs text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Information */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Financial Information</h2>
            <Tabs defaultValue="tuition" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="tuition">Tuition</TabsTrigger>
                <TabsTrigger value="aid">Financial Aid</TabsTrigger>
                <TabsTrigger value="payment">Payment Plans</TabsTrigger>
                <TabsTrigger value="calculator">Calculator</TabsTrigger>
              </TabsList>
              
              <TabsContent value="tuition" className="mt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <DollarSign className="mr-2 h-5 w-5" />
                        Elementary
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-blue-600">₹12,000/year</p>
                      <ul className="mt-4 space-y-2 text-sm">
                        <li>• Core curriculum</li>
                        <li>• Art & Music programs</li>
                        <li>• Technology integration</li>
                        <li>• Extracurricular activities</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <DollarSign className="mr-2 h-5 w-5" />
                        Middle School
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-blue-600">₹14,000/year</p>
                      <ul className="mt-4 space-y-2 text-sm">
                        <li>• Advanced coursework</li>
                        <li>• STEM programs</li>
                        <li>• Leadership opportunities</li>
                        <li>• Sports programs</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <DollarSign className="mr-2 h-5 w-5" />
                        High School
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-blue-600">₹16,000/year</p>
                      <ul className="mt-4 space-y-2 text-sm">
                        <li>• AP courses</li>
                        <li>• College prep</li>
                        <li>• Career counseling</li>
                        <li>• Dual enrollment</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="aid" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Financial Aid & Scholarships</CardTitle>
                    <CardDescription>Making quality education accessible to all families</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-3">Need-Based Aid</h3>
                        <ul className="space-y-2 text-sm">
                          <li>• Up to 50% tuition reduction</li>
                          <li>• Based on family financial need</li>
                          <li>• Confidential application process</li>
                          <li>• Renewable annually</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3">Merit Scholarships</h3>
                        <ul className="space-y-2 text-sm">
                          <li>• Academic excellence awards</li>
                          <li>• Leadership scholarships</li>
                          <li>• Arts & athletics recognition</li>
                          <li>• Community service awards</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="payment" className="mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Flexible Payment Options</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 border rounded">
                          <span>Annual Payment</span>
                          <Badge variant="secondary">5% discount</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded">
                          <span>Semester Payment</span>
                          <Badge variant="secondary">2% discount</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded">
                          <span>Monthly Payment</span>
                          <Badge>Standard rate</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Additional Fees</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Application Fee</span>
                          <span>₹750</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Technology Fee</span>
                          <span>₹2000/year</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Activity Fee</span>
                          <span>₹1500/year</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Materials Fee</span>
                          <span>₹1000/year</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="calculator" className="mt-6">
                <TuitionCalculator />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Visit & Tour Options */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Visit Our Campus</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Campus Tours</h3>
                  <p className="text-sm text-gray-600 mb-4">Guided tours with current students and staff</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">Book Tour</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Campus Tour Booking</DialogTitle>
                        <DialogDescription>
                          Schedule your visit to experience Stellar Haven Academy in person or virtually.
                        </DialogDescription>
                      </DialogHeader>
                      <CampusTourBooking />
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Video className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Virtual Tours</h3>
                  <p className="text-sm text-gray-600 mb-4">360° virtual reality campus exploration</p>
                  <Button variant="outline" size="sm">Start VR Tour</Button>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Shadow Program</h3>
                  <p className="text-sm text-gray-600 mb-4">Experience a typical school day</p>
                  <Button variant="outline" size="sm">Apply to Shadow</Button>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Info Sessions</h3>
                  <p className="text-sm text-gray-600 mb-4">Regular presentations and Q&A</p>
                  <Button variant="outline" size="sm">View Schedule</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Academic Achievements */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Families Choose Us</h2>
            <AcademicAchievements />
          </div>
        </section>

        {/* Testimonials & Social Proof */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What Families Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Parent of Emma (Grade 7)",
                  quote: "Stellar Haven has provided my daughter with an incredible foundation for learning and growth. The teachers truly care about each student's success.",
                  rating: 5
                },
                {
                  name: "Michael Chen",
                  role: "Parent of Alex (Grade 10)",
                  quote: "The college preparation programs are outstanding. My son feels confident and ready for his next chapter thanks to the support he's received.",
                  rating: 5
                },
                {
                  name: "Lisa Rodriguez",
                  role: "Parent of twins (Grade 3)",
                  quote: "The individual attention my children receive is remarkable. They're both thriving academically and socially in this nurturing environment.",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Status Portal */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Track Your Application</h2>
              <p className="text-xl text-gray-600">
                Current applicants can monitor their progress and manage documents
              </p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="mx-auto block">
                  <FileText className="mr-2 h-5 w-5" />
                  Access Application Portal
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Application Status Portal</DialogTitle>
                  <DialogDescription>
                    Track your admission application progress and manage your documents.
                  </DialogDescription>
                </DialogHeader>
                <ApplicationStatusPortal />
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* Virtual Information Session */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Virtual Information Session</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Experience Stellar Haven from Home</h3>
                <p className="text-gray-600 mb-6">
                  Join our comprehensive virtual information session to learn about our programs, 
                  meet our faculty, and get answers to your questions. Each session includes a live 
                  Q&A segment with our admissions team.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Video className="h-5 w-5 text-blue-600" />
                    <span>360° campus tour</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-blue-600" />
                    <span>Meet current students and teachers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <span>Application timeline walkthrough</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-5 w-5 text-blue-600" />
                    <span>Live Q&A session</span>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <Button size="lg" className="w-full">
                    <Video className="mr-2 h-5 w-5" />
                    Join Next Session (Dec 15, 2 PM)
                  </Button>
                  <Button size="lg" variant="outline" className="w-full">
                    <Calendar className="mr-2 h-5 w-5" />
                    View All Session Times
                  </Button>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                <div className="text-center">
                  <Video className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Virtual Tour Preview</p>
                  <Button variant="ghost" className="mt-2">
                    <Video className="mr-2 h-4 w-4" />
                    Watch Sample Tour
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Next Steps */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Begin?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Take the first step toward your child's bright future at Stellar Haven Academy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <FileText className="mr-2 h-5 w-5" />
                Start Application Now
              </Button>
              <Button size="lg" variant="outline">
                <Phone className="mr-2 h-5 w-5" />
                Schedule a Call
              </Button>
            </div>
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Application Deadline:</strong> March 15, 2026 for Fall 2026 admission<br />
                <strong>Decision Notification:</strong> April 1, 2026
              </p>
            </div>
          </div>
        </section>

        {/* FAQChatbot Component */}
        <FAQChatbot />
      </div>
    </Layout>
  )
}