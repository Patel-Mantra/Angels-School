import { useState } from 'react'
import { Layout } from '@/components/layout/Layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { 
  Award, 
  Users, 
  BookOpen, 
  Trophy, 
  Star, 
  Heart, 
  Target, 
  Eye, 
  Lightbulb, 
  GraduationCap,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Globe,
  Play,
  ChevronRight,
  Building,
  TreePine,
  Handshake
} from 'lucide-react'

export default function AboutUs() {
  const [selectedYear, setSelectedYear] = useState<string>('2024')
  const [activeValue, setActiveValue] = useState<string>('')

  const coreValues = [
    {
      id: 'excellence',
      title: 'Academic Excellence',
      icon: Trophy,
      description: 'We strive for the highest standards in teaching and learning.',
      details: 'Our commitment to academic excellence drives everything we do, from curriculum design to individual student support, ensuring every learner reaches their full potential.'
    },
    {
      id: 'integrity',
      title: 'Integrity',
      icon: Heart,
      description: 'We foster honesty, respect, and ethical behavior in all interactions.',
      details: 'Integrity forms the foundation of our school community, guiding our decisions and relationships with transparency, accountability, and moral courage.'
    },
    {
      id: 'innovation',
      title: 'Innovation',
      icon: Lightbulb,
      description: 'We embrace new ideas and creative approaches to education.',
      details: 'Innovation drives our educational practices, incorporating cutting-edge technology and pedagogical methods to prepare students for a rapidly evolving world.'
    },
    {
      id: 'community',
      title: 'Community',
      icon: Users,
      description: 'We build strong connections between students, families, and staff.',
      details: 'Our inclusive community celebrates diversity, fosters collaboration, and creates lasting bonds that extend far beyond graduation.'
    }
  ]

  const leadership = [
    {
      name: 'Satish Vora',
      role: 'Head of School',
      avatar: '/api/placeholder/150/150',
      bio: 'Dr. Vora brings 20+ years of educational leadership experience, with a Ph.D. in Educational Administration from Columbia University.',
      philosophy: 'Every child deserves an education that ignites their curiosity and prepares them to be compassionate leaders.',
      email: 's.vora@stellarhaven.edu',
      phone: '+91 1234567890'
    },
    {
      name: 'Girish Patel',
      role: 'Assistant Head of School',
      avatar: '/api/placeholder/150/150',
      bio: 'Former classroom teacher and curriculum specialist with expertise in STEM education and school technology integration.',
      philosophy: 'Learning should be engaging, relevant, and connected to real-world applications.',
      email: 'g.patel@stellarhaven.edu',
      phone: '+91 1234567891'
    },
    {
      name: 'Mahesh Patel',
      role: 'Academic Director',
      avatar: '/api/placeholder/150/150',
      bio: 'Curriculum designer and former university professor specializing in differentiated instruction and assessment.',
      philosophy: 'Great teaching meets students where they are and takes them where they need to go.',
      email: 'm.patel@stellarhaven.edu',
      phone: '+91 1234567892'
    },
    {
      name: 'Minal Patel',
      role: 'Student Life Director',
      avatar: '/api/placeholder/150/150',
      bio: 'Youth development specialist focused on social-emotional learning and character development programs.',
      philosophy: 'Education is about developing the whole child - mind, body, and spirit.',
      email: 'm.patel@stellarhaven.edu',
      phone: '+91 1234567893'
    }
  ]

  const timeline = [
    {
      year: '1985',
      title: 'Foundation',
      description: 'Stellar Haven Academy was founded by educator Mary Thompson with 45 students.',
      image: '/api/placeholder/400/200',
      details: 'Started in a converted Victorian home with a vision to provide personalized, excellence-driven education.'
    },
    {
      year: '1992',
      title: 'First Campus',
      description: 'Moved to our current 25-acre campus with purpose-built facilities.',
      image: '/api/placeholder/400/200',
      details: 'The new campus featured state-of-the-art science labs, a performing arts center, and athletic facilities.'
    },
    {
      year: '2001',
      title: 'Technology Integration',
      description: 'Pioneered 1:1 laptop program and digital learning initiatives.',
      image: '/api/placeholder/400/200',
      details: 'One of the first schools in the region to provide every student with personal technology devices.'
    },
    {
      year: '2010',
      title: 'STEM Excellence',
      description: 'Received National STEM Education Award for innovative programs.',
      image: '/api/placeholder/400/200',
      details: 'Recognition for our robotics program, maker spaces, and science fair achievements.'
    },
    {
      year: '2018',
      title: 'Sustainability Initiative',
      description: 'Achieved carbon-neutral campus through renewable energy projects.',
      image: '/api/placeholder/400/200',
      details: 'Solar panels, rainwater harvesting, and organic gardens make us an environmental leader.'
    },
    {
      year: '2024',
      title: 'Green School',
      description: 'Recognized by Indian Department of Education as a National Green School.',
      image: '/api/placeholder/400/200',
      details: 'The highest honor a school can receive, recognizing academic excellence and progress.'
    }
  ]

  const achievements = [
    {
      category: 'Academic Excellence',
      awards: [
        { title: 'National Blue Ribbon School', year: '2024', icon: Award },
        { title: 'State Academic Achievement Award', year: '2023', icon: Trophy },
        { title: 'Excellence in STEM Education', year: '2022', icon: Star }
      ]
    },
    {
      category: 'Arts & Culture',
      awards: [
        { title: 'Outstanding Arts Program', year: '2024', icon: Star },
        { title: 'Regional Theater Competition - 1st Place', year: '2023', icon: Trophy },
        { title: 'Music Education Excellence Award', year: '2022', icon: Award }
      ]
    },
    {
      category: 'Community Impact',
      awards: [
        { title: 'Community Service Recognition', year: '2024', icon: Heart },
        { title: 'Environmental Stewardship Award', year: '2023', icon: TreePine },
        { title: 'Partnership Excellence Award', year: '2022', icon: Handshake }
      ]
    }
  ]

  const statistics = [
    { label: 'Years of Excellence', value: '39', description: 'Serving families since 1985' },
    { label: 'Graduates', value: '2,400+', description: 'Alumni worldwide' },
    { label: 'College Acceptance', value: '98%', description: 'First-choice college rate' },
    { label: 'Faculty Retention', value: '94%', description: 'Experienced educators' },
    { label: 'Average Class Size', value: '14', description: 'Personalized attention' },
    { label: 'Countries Represented', value: '23', description: 'Diverse community' }
  ]

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-purple-800">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="absolute inset-0">
            <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
            {/* Placeholder for hero video */}
            <div className="absolute inset-0 flex items-center justify-center text-white/20">
              <Building className="h-64 w-64" />
            </div>
          </div>
          
          <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
            <div className="mb-8">
              <h1 className="text-6xl font-bold mb-6 opacity-0 animate-fade-in">
                Our Story of{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h1>
              <p className="text-2xl mb-8 opacity-0 animate-fade-in-delay-1">
                For nearly four decades, Stellar Haven Academy has been shaping minds, 
                building character, and inspiring the leaders of tomorrow.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                <Play className="mr-2 h-5 w-5" />
                Watch Our Story
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-blue-900 hover:bg-gray-100">
                <ChevronRight className="mr-2 h-5 w-5" />
                Explore Our Campus
              </Button>
            </div>
          </div>
        </section>

        {/* Mission, Vision & Values */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Foundation</h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do at Stellar Haven Academy
              </p>
            </div>

            <Tabs defaultValue="mission" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-12">
                <TabsTrigger value="mission" className="text-lg">Mission</TabsTrigger>
                <TabsTrigger value="vision" className="text-lg">Vision</TabsTrigger>
                <TabsTrigger value="values" className="text-lg">Values</TabsTrigger>
              </TabsList>

              <TabsContent value="mission" className="space-y-8">
                <Card className="bg-blue-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <Target className="mr-3 h-8 w-8 text-blue-600" />
                      Our Mission
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg leading-relaxed mb-6">
                      To provide an exceptional educational experience that challenges every student to achieve 
                      academic excellence while developing critical thinking, creativity, and character. We are 
                      committed to fostering a love of learning that lasts a lifetime and preparing students to 
                      be responsible global citizens.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-white rounded-lg">
                        <h4 className="font-semibold mb-2">Academic Excellence</h4>
                        <p className="text-gray-600">Rigorous curriculum that challenges and supports every learner</p>
                      </div>
                      <div className="p-4 bg-white rounded-lg">
                        <h4 className="font-semibold mb-2">Character Development</h4>
                        <p className="text-gray-600">Building integrity, empathy, and leadership skills</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="vision" className="space-y-8">
                <Card className="bg-purple-50 border-purple-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <Eye className="mr-3 h-8 w-8 text-purple-600" />
                      Our Vision
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg leading-relaxed mb-6">
                      To be the premier educational institution that inspires students to become innovative 
                      thinkers, compassionate leaders, and engaged citizens who positively impact their 
                      communities and the world.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-white rounded-lg">
                        <Lightbulb className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                        <h4 className="font-semibold mb-2">Innovation</h4>
                        <p className="text-gray-600">Fostering creativity and original thinking</p>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg">
                        <Heart className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                        <h4 className="font-semibold mb-2">Compassion</h4>
                        <p className="text-gray-600">Developing empathy and social responsibility</p>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg">
                        <Globe className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                        <h4 className="font-semibold mb-2">Global Impact</h4>
                        <p className="text-gray-600">Preparing world-ready citizens</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="values" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {coreValues.map((value) => {
                    const Icon = value.icon
                    return (
                      <Card
                        key={value.id}
                        className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                          activeValue === value.id ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                        }`}
                        onClick={() => setActiveValue(activeValue === value.id ? '' : value.id)}
                      >
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <Icon className="mr-3 h-6 w-6 text-blue-600" />
                            {value.title}
                          </CardTitle>
                          <CardDescription>{value.description}</CardDescription>
                        </CardHeader>
                        {activeValue === value.id && (
                          <CardContent>
                            <p className="text-gray-700 leading-relaxed">{value.details}</p>
                          </CardContent>
                        )}
                      </Card>
                    )
                  })}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 px-4 bg-blue-600 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Impact in Numbers</h2>
              <p className="text-xl opacity-90">Four decades of educational excellence</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm opacity-80">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Timeline */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Journey Through Time</h2>
              <p className="text-xl text-gray-600">
                Milestones that shaped Stellar Haven Academy
              </p>
            </div>

            <div className="mb-8">
              <div className="flex flex-wrap justify-center gap-2">
                {timeline.map((event) => (
                  <Button
                    key={event.year}
                    variant={selectedYear === event.year ? "default" : "outline"}
                    onClick={() => setSelectedYear(event.year)}
                    className="mb-2"
                  >
                    {event.year}
                  </Button>
                ))}
              </div>
            </div>

            <div className="relative">
              {timeline.map((event, index) => (
                <div
                  key={event.year}
                  className={`transition-all duration-500 ${
                    selectedYear === event.year ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute inset-0'
                  }`}
                >
                  {selectedYear === event.year && (
                    <Card className="overflow-hidden">
                      <div className="md:flex">
                        <div className="md:w-1/2">
                          <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                            <div className="text-center text-white">
                              <Calendar className="h-16 w-16 mx-auto mb-4" />
                              <div className="text-2xl font-bold">{event.year}</div>
                            </div>
                          </div>
                        </div>
                        <div className="md:w-1/2 p-8">
                          <Badge className="mb-4">{event.year}</Badge>
                          <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                          <p className="text-gray-600 mb-4">{event.description}</p>
                          <p className="text-sm text-gray-500">{event.details}</p>
                        </div>
                      </div>
                    </Card>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Leadership Team</h2>
              <p className="text-xl text-gray-600">
                Experienced educators dedicated to your child's success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((leader, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src={leader.avatar} alt={leader.name} />
                      <AvatarFallback>{leader.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
                    <p className="text-blue-600 font-semibold mb-4">{leader.role}</p>
                    <p className="text-gray-600 text-sm mb-4">{leader.bio}</p>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          Learn More
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="flex items-center">
                            <Avatar className="w-16 h-16 mr-4">
                              <AvatarImage src={leader.avatar} alt={leader.name} />
                              <AvatarFallback>{leader.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div>{leader.name}</div>
                              <div className="text-blue-600 font-normal">{leader.role}</div>
                            </div>
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Background</h4>
                            <p className="text-gray-600">{leader.bio}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Educational Philosophy</h4>
                            <p className="text-gray-600 italic">"{leader.philosophy}"</p>
                          </div>
                          <div className="flex space-x-4">
                            <Button variant="outline" size="sm">
                              <Mail className="mr-2 h-4 w-4" />
                              {leader.email}
                            </Button>
                            <Button variant="outline" size="sm">
                              <Phone className="mr-2 h-4 w-4" />
                              {leader.phone}
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Awards & Recognition</h2>
              <p className="text-xl text-gray-600">
                Celebrating our achievements and commitment to excellence
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-center">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.awards.map((award, awardIndex) => {
                        const Icon = award.icon
                        return (
                          <div key={awardIndex} className="flex items-start space-x-3 p-3 bg-white rounded-lg">
                            <Icon className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                            <div>
                              <h4 className="font-semibold text-sm">{award.title}</h4>
                              <p className="text-gray-500 text-xs">{award.year}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Join Our Community?</h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how Stellar Haven Academy can provide the exceptional education your child deserves.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Visit
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
                <MapPin className="mr-2 h-5 w-5" />
                Virtual Campus Tour
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}