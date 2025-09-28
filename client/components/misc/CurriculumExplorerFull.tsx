import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Progress } from '@/components/ui/progress'
import { BookOpen, Download, ChevronDown, ChevronRight, Target, FileText, Users, Clock } from 'lucide-react'

const subjects = [
  {
    id: 'mathematics',
    title: 'Mathematics',
    grades: ['K-5', '6-8', '9-12'],
    courses: {
      'K-5': ['Number Sense', 'Basic Operations', 'Geometry Basics', 'Measurement', 'Data & Probability'],
      '6-8': ['Pre-Algebra', 'Algebra Foundations', 'Geometry', 'Statistics', 'Problem Solving'],
      '9-12': ['Algebra I & II', 'Geometry', 'Pre-Calculus', 'AP Calculus', 'Statistics', 'Discrete Math']
    },
    standards: ['Common Core Math Standards', 'State Mathematics Framework', 'College Readiness Standards'],
    objectives: [
      'Develop computational fluency and mathematical reasoning',
      'Apply mathematical concepts to real-world problem solving',
      'Communicate mathematical ideas clearly and precisely'
    ],
    sampleLesson: {
      title: 'Quadratic Functions in Real Life',
      grade: '9-12',
      duration: '50 minutes',
      objective: 'Students will model real-world situations using quadratic functions',
      activities: ['Launch: Projectile motion demo', 'Explore: Graphing calculator investigation', 'Summarize: Real-world applications discussion']
    }
  },
  {
    id: 'science',
    title: 'Science',
    grades: ['K-5', '6-8', '9-12'],
    courses: {
      'K-5': ['Life Science', 'Earth Science', 'Physical Science', 'Scientific Method', 'Nature Studies'],
      '6-8': ['Biology Foundations', 'Chemistry Basics', 'Physics Intro', 'Environmental Science', 'Research Methods'],
      '9-12': ['Biology', 'Chemistry', 'Physics', 'AP Sciences', 'Environmental Science', 'Anatomy & Physiology']
    },
    standards: ['Next Generation Science Standards', 'State Science Framework', 'AP Science Standards'],
    objectives: [
      'Develop scientific inquiry and critical thinking skills',
      'Understand fundamental scientific concepts and principles',
      'Apply the scientific method to investigate phenomena'
    ],
    sampleLesson: {
      title: 'Ecosystem Energy Flow',
      grade: '6-8',
      duration: '90 minutes (double period)',
      objective: 'Students will trace energy flow through ecosystems and create food webs',
      activities: ['Warm-up: Energy source brainstorm', 'Lab: Building food webs with local species', 'Reflection: Human impact discussion']
    }
  },
  {
    id: 'english',
    title: 'English Language Arts',
    grades: ['K-5', '6-8', '9-12'],
    courses: {
      'K-5': ['Phonics & Reading', 'Writing Workshop', 'Literature Circles', 'Speaking & Listening', 'Grammar'],
      '6-8': ['Reading Comprehension', 'Creative Writing', 'Research Skills', 'Public Speaking', 'Media Literacy'],
      '9-12': ['Literature & Composition', 'Creative Writing', 'AP English', 'Speech & Debate', 'Journalism']
    },
    standards: ['Common Core ELA Standards', 'State Reading Framework', 'College Writing Standards'],
    objectives: [
      'Develop strong reading comprehension and analysis skills',
      'Express ideas clearly through writing and speaking',
      'Appreciate diverse literature and cultural perspectives'
    ],
    sampleLesson: {
      title: 'Character Development Through Dialogue',
      grade: '6-8',
      duration: '45 minutes',
      objective: 'Students will analyze how authors use dialogue to reveal character traits',
      activities: ['Do Now: Quick character sketch', 'Mini-lesson: Dialogue techniques', 'Practice: Rewrite scene with dialogue']
    }
  }
]

const resources = [
  { type: 'Curriculum Guide', title: 'K-12 Mathematics Scope & Sequence', size: '2.4 MB', format: 'PDF' },
  { type: 'Standards Alignment', title: 'Science Standards Crosswalk', size: '1.8 MB', format: 'PDF' },
  { type: 'Assessment Rubric', title: 'Writing Assessment Guidelines', size: '956 KB', format: 'PDF' },
  { type: 'Parent Guide', title: 'Supporting Learning at Home', size: '3.2 MB', format: 'PDF' },
  { type: 'Syllabi Collection', title: 'High School Course Syllabi', size: '5.1 MB', format: 'ZIP' }
]

interface LessonPlanModalProps {
  lesson: typeof subjects[0]['sampleLesson']
  isOpen: boolean
  onClose: () => void
}

function LessonPlanModal({ lesson, isOpen, onClose }: LessonPlanModalProps) {
  if (!isOpen) return null
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{lesson.title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><strong>Grade Level:</strong> {lesson.grade}</div>
            <div><strong>Duration:</strong> {lesson.duration}</div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Target className="w-4 h-4" />
              Learning Objective
            </h4>
            <p className="text-gray-600 bg-blue-50 p-3 rounded border-l-4 border-blue-400">
              {lesson.objective}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Lesson Activities</h4>
            <ol className="space-y-2">
              {lesson.activities.map((activity, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mt-0.5 flex-shrink-0">
                    {idx + 1}
                  </span>
                  {activity}
                </li>
              ))}
            </ol>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Materials Needed</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Student worksheets (provided)</li>
              <li>• Graphing calculators or tablets</li>
              <li>• Manipulatives or visual aids</li>
              <li>• Assessment rubric</li>
            </ul>
          </div>
          
          <div className="flex gap-2">
            <Button>
              <Download className="w-4 h-4 mr-2" />
              Download Full Lesson Plan
            </Button>
            <Button variant="outline">View Related Resources</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function CurriculumExplorer() {
  const [selectedGrade, setSelectedGrade] = useState<string>('K-5')
  const [expandedSubjects, setExpandedSubjects] = useState<string[]>([])
  const [selectedLesson, setSelectedLesson] = useState<typeof subjects[0]['sampleLesson'] | null>(null)

  const toggleSubject = (subjectId: string) => {
    setExpandedSubjects(prev => 
      prev.includes(subjectId) 
        ? prev.filter(id => id !== subjectId)
        : [...prev, subjectId]
    )
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Interactive Curriculum Explorer</h2>
        <p className="text-gray-600 mb-6">Dive deep into our comprehensive curriculum across all grade levels</p>
        
        {/* Grade Level Selector */}
        <div className="flex justify-center gap-2 mb-8">
          {['K-5', '6-8', '9-12'].map(grade => (
            <Button
              key={grade}
              variant={selectedGrade === grade ? 'default' : 'outline'}
              onClick={() => setSelectedGrade(grade)}
              className="min-w-20"
            >
              Grades {grade}
            </Button>
          ))}
        </div>
      </div>

      {/* Subject Deep-Dive */}
      <div className="space-y-4">
        {subjects.map(subject => {
          const isExpanded = expandedSubjects.includes(subject.id)
          const coursesForGrade = subject.courses[selectedGrade as keyof typeof subject.courses]
          
          return (
            <Collapsible key={subject.id} open={isExpanded} onOpenChange={() => toggleSubject(subject.id)}>
              <CollapsibleTrigger asChild>
                <Card className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-primary" />
                        <div>
                          <CardTitle className="text-xl">{subject.title}</CardTitle>
                          <p className="text-sm text-gray-600">
                            {coursesForGrade?.length || 0} courses for grades {selectedGrade}
                          </p>
                        </div>
                      </div>
                      {isExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                    </div>
                  </CardHeader>
                </Card>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="mt-2">
                <Card>
                  <CardContent className="pt-6 space-y-6">
                    {/* Course List */}
                    <div>
                      <h4 className="font-semibold mb-3">Courses for Grades {selectedGrade}</h4>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {coursesForGrade?.map((course, idx) => (
                          <Badge key={idx} variant="secondary" className="justify-start p-2">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Learning Objectives */}
                    <div>
                      <h4 className="font-semibold mb-3">Key Learning Objectives</h4>
                      <ul className="space-y-2">
                        {subject.objectives.map((objective, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Target className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Standards Alignment */}
                    <div>
                      <h4 className="font-semibold mb-3">Standards Alignment</h4>
                      <div className="flex flex-wrap gap-2">
                        {subject.standards.map((standard, idx) => (
                          <Badge key={idx} variant="outline">{standard}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Sample Lesson */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Sample Lesson Plan
                      </h4>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{subject.sampleLesson.title}</p>
                          <p className="text-sm text-gray-600 flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {subject.sampleLesson.duration} • Grade {subject.sampleLesson.grade}
                          </p>
                        </div>
                        <Button
                          size="sm"
                          onClick={() => setSelectedLesson(subject.sampleLesson)}
                        >
                          Preview Lesson
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CollapsibleContent>
            </Collapsible>
          )
        })}
      </div>

      {/* Resource Library */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="w-5 h-5" />
            Resource Library
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {resources.map((resource, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium text-sm">{resource.title}</p>
                    <p className="text-xs text-gray-500">{resource.type} • {resource.size}</p>
                  </div>
                </div>
                <Button size="sm" variant="ghost">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Lesson Plan Modal */}
      {selectedLesson && (
        <LessonPlanModal
          lesson={selectedLesson}
          isOpen={!!selectedLesson}
          onClose={() => setSelectedLesson(null)}
        />
      )}
    </div>
  )
}