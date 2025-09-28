import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog'
import { BookOpen } from 'lucide-react'

export function SubjectCard({ subject }: { subject: { id: string; title: string; icon: any; description: string } }) {
  const Icon = subject.icon
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <Icon className="w-6 h-6 text-primary" />
          <h3 className="text-lg font-semibold">{subject.title}</h3>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{subject.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <Button variant="ghost">View Standards</Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">Sample Lesson</Button>
            </DialogTrigger>
            <DialogContent>
              <div className="p-4">
                <h4 className="text-lg font-bold">Sample Lesson Plan</h4>
                <p className="mt-2 text-gray-600">A short sample lesson to showcase learning objectives, activities, and assessments.</p>
                <div className="mt-4">
                  <Button>Download PDF</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  )
}

export default function CurriculumExplorer() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Curriculum Explorer</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Explore subjects, standards, and sample resources across grade levels.</p>
          <div className="mt-4">
            <Button>Open Explorer</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}