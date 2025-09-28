import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { GraduationCap, Award, BookOpen, Clock, Star, Mail, Phone } from 'lucide-react'

const teachers = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    subject: "Mathematics",
    grade: "6-12",
    experience: "12 years",
    education: ["Ph.D. Mathematics - MIT", "M.Ed. Curriculum & Instruction - Harvard"],
    specializations: ["Advanced Calculus", "Statistics", "STEM Integration"],
    philosophy: "Mathematics is the language of the universe. I believe in making abstract concepts tangible through real-world applications and collaborative problem-solving.",
    achievements: ["National Math Teacher of the Year 2023", "Published researcher in Mathematical Education", "AP Calculus exam developer"],
    avatar: "/api/placeholder/150/150"
  },
  {
    id: 2,
    name: "Mr. James Rodriguez",
    subject: "Science",
    grade: "K-8",
    experience: "8 years",
    education: ["M.S. Biology - Stanford", "B.Ed. Elementary Education - UC Berkeley"],
    specializations: ["Environmental Science", "Lab Safety", "Inquiry-Based Learning"],
    philosophy: "Science is about curiosity and discovery. I create hands-on experiences that ignite wonder and teach students to think like scientists.",
    achievements: ["Green School Initiative Leader", "Science Fair Regional Coordinator", "Published in Science Teacher Magazine"],
    avatar: "/api/placeholder/150/150"
  },
  {
    id: 3,
    name: "Ms. Emily Foster",
    subject: "English",
    grade: "9-12",
    experience: "15 years",
    education: ["M.A. English Literature - Yale", "M.Ed. Secondary Education - Columbia"],
    specializations: ["Creative Writing", "British Literature", "Public Speaking"],
    philosophy: "Literature opens windows to different worlds and perspectives. I guide students to find their authentic voice while appreciating the power of storytelling.",
    achievements: ["Regional Poetry Contest Judge", "Young Writers Workshop Director", "Fulbright Scholar"],
    avatar: "/api/placeholder/150/150"
  },
  {
    id: 4,
    name: "Mrs. Lisa Thompson",
    subject: "Arts",
    grade: "K-12",
    experience: "10 years",
    education: ["M.F.A. Visual Arts - RISD", "B.A. Art Education - NYU"],
    specializations: ["Digital Art", "Ceramics", "Art History"],
    philosophy: "Art is a universal language that transcends barriers. I believe every student has creative potential waiting to be discovered and nurtured.",
    achievements: ["Student Art Exhibition Curator", "Community Arts Program Director", "Featured in Arts Education Today"],
    avatar: "/api/placeholder/150/150"
  }
]

interface TeacherProfileProps {
  teacher: typeof teachers[0]
}

function TeacherProfileDialog({ teacher }: TeacherProfileProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View Profile</Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <Avatar className="w-16 h-16">
              <AvatarImage src={teacher.avatar} alt={teacher.name} />
              <AvatarFallback>{teacher.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-bold">{teacher.name}</h3>
              <p className="text-gray-600">{teacher.subject} • Grades {teacher.grade}</p>
            </div>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 mt-4">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-medium">{teacher.experience} Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="font-medium">4.9/5 Rating</span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              Education
            </h4>
            <ul className="space-y-1 text-sm text-gray-600">
              {teacher.education.map((edu, idx) => (
                <li key={idx} className="pl-4 border-l-2 border-gray-200">• {edu}</li>
              ))}
            </ul>
          </div>

          {/* Specializations */}
          <div>
            <h4 className="font-semibold mb-2">Specializations</h4>
            <div className="flex flex-wrap gap-2">
              {teacher.specializations.map((spec, idx) => (
                <Badge key={idx} variant="secondary">{spec}</Badge>
              ))}
            </div>
          </div>

          {/* Teaching Philosophy */}
          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Teaching Philosophy
            </h4>
            <p className="text-gray-600 italic border-l-4 border-primary pl-4">
              "{teacher.philosophy}"
            </p>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Award className="w-5 h-5" />
              Achievements & Recognition
            </h4>
            <ul className="space-y-1 text-sm text-gray-600">
              {teacher.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Get in Touch</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" />
                <span>{teacher.name.toLowerCase().replace(' ', '.')}@stellarhaven.edu</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4" />
                <span>Ext. {1000 + teacher.id}</span>
              </div>
            </div>
            <div className="mt-3">
              <Button size="sm">Schedule Meeting</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function TeacherProfiles() {
  const [selectedSubject, setSelectedSubject] = useState<string>('all')
  
  const filteredTeachers = selectedSubject === 'all' 
    ? teachers 
    : teachers.filter(t => t.subject.toLowerCase().includes(selectedSubject.toLowerCase()))

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">Meet Our Faculty</h3>
        <div className="flex gap-2">
          <Button 
            variant={selectedSubject === 'all' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setSelectedSubject('all')}
          >
            All
          </Button>
          {['Mathematics', 'Science', 'English', 'Arts'].map(subject => (
            <Button 
              key={subject}
              variant={selectedSubject === subject ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedSubject(subject)}
            >
              {subject}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeachers.map(teacher => (
          <Card key={teacher.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Avatar className="w-20 h-20 mx-auto mb-3">
                <AvatarImage src={teacher.avatar} alt={teacher.name} />
                <AvatarFallback>{teacher.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <CardTitle className="text-lg">{teacher.name}</CardTitle>
              <p className="text-sm text-gray-600">{teacher.subject} • Grades {teacher.grade}</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span>{teacher.experience} experience</span>
              </div>
              
              <div className="flex flex-wrap gap-1">
                {teacher.specializations.slice(0, 2).map((spec, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">{spec}</Badge>
                ))}
                {teacher.specializations.length > 2 && (
                  <Badge variant="outline" className="text-xs">+{teacher.specializations.length - 2} more</Badge>
                )}
              </div>
              
              <p className="text-sm text-gray-600 line-clamp-3">
                {teacher.philosophy}
              </p>
              
              <TeacherProfileDialog teacher={teacher} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}