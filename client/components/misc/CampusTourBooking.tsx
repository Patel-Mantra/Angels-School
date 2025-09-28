import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar } from '@/components/ui/calendar'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Separator } from '@/components/ui/separator'
import { CalendarDays, Clock, Users, MapPin, Phone, Mail, Video, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TourSlot {
  time: string
  available: number
  total: number
  type: 'in-person' | 'virtual'
}

interface TourType {
  id: string
  name: string
  description: string
  duration: string
  capacity: number
  icon: any
}

const tourTypes: TourType[] = [
  {
    id: 'campus',
    name: 'Campus Tour',
    description: 'Guided walkthrough of our facilities with current students',
    duration: '60 minutes',
    capacity: 12,
    icon: MapPin
  },
  {
    id: 'virtual',
    name: 'Virtual Tour',
    description: '360° interactive tour you can take from home',
    duration: '30 minutes',
    capacity: 50,
    icon: Video
  },
  {
    id: 'shadow',
    name: 'Student Shadow',
    description: 'Follow a current student through a typical school day',
    duration: '4-6 hours',
    capacity: 2,
    icon: Users
  },
  {
    id: 'info-session',
    name: 'Information Session',
    description: 'Presentation about academics, admissions, and Q&A',
    duration: '90 minutes',
    capacity: 30,
    icon: CalendarDays
  }
]

const timeSlots: { [key: string]: TourSlot[] } = {
  weekday: [
    { time: '9:00 AM', available: 8, total: 12, type: 'in-person' },
    { time: '11:00 AM', available: 5, total: 12, type: 'in-person' },
    { time: '2:00 PM', available: 12, total: 12, type: 'in-person' },
    { time: '4:00 PM', available: 25, total: 50, type: 'virtual' }
  ],
  saturday: [
    { time: '9:00 AM', available: 2, total: 12, type: 'in-person' },
    { time: '11:00 AM', available: 7, total: 12, type: 'in-person' },
    { time: '1:00 PM', available: 10, total: 12, type: 'in-person' }
  ]
}

export function CampusTourBooking() {
  const [selectedTourType, setSelectedTourType] = useState<string>('')
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [attendeeCount, setAttendeeCount] = useState<string>('1')
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    email: '',
    phone: '',
    gradeLevel: '',
    specialRequests: '',
    newsletter: true
  })
  const [step, setStep] = useState<number>(1)
  const [bookingComplete, setBookingComplete] = useState<boolean>(false)

  const selectedTour = tourTypes.find(tour => tour.id === selectedTourType)
  const isWeekend = selectedDate?.getDay() === 0 || selectedDate?.getDay() === 6
  const availableSlots = isWeekend ? timeSlots.saturday : timeSlots.weekday

  const handleFormChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleBooking = () => {
    // Simulate booking process
    setBookingComplete(true)
  }

  const canProceedToStep2 = selectedTourType && selectedDate && selectedTime
  const canProceedToStep3 = formData.parentName && formData.email && formData.gradeLevel

  if (bookingComplete) {
    return (
      <Card className="max-w-2xl mx-auto text-center">
        <CardContent className="p-8">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Your {selectedTour?.name.toLowerCase()} has been scheduled successfully.
          </p>
          <div className="bg-green-50 p-4 rounded-lg mb-6">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Tour Type:</span>
                <span className="font-medium">{selectedTour?.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Date:</span>
                <span className="font-medium">{selectedDate?.toDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Time:</span>
                <span className="font-medium">{selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span>Attendees:</span>
                <span className="font-medium">{attendeeCount} {parseInt(attendeeCount) === 1 ? 'person' : 'people'}</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            A confirmation email has been sent to {formData.email} with additional details and directions.
          </p>
          <div className="space-y-2">
            <Button onClick={() => {
              setBookingComplete(false)
              setStep(1)
              setSelectedTourType('')
              setSelectedTime('')
              setFormData({
                parentName: '',
                studentName: '',
                email: '',
                phone: '',
                gradeLevel: '',
                specialRequests: '',
                newsletter: true
              })
            }}>
              Book Another Tour
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Progress Indicator */}
      <div className="flex items-center justify-center space-x-4 mb-8">
        {[1, 2, 3].map((stepNumber) => (
          <div key={stepNumber} className="flex items-center">
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
              step >= stepNumber ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
            )}>
              {stepNumber}
            </div>
            {stepNumber < 3 && (
              <div className={cn(
                "w-16 h-0.5 mx-2",
                step > stepNumber ? "bg-blue-600" : "bg-gray-200"
              )} />
            )}
          </div>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            {step === 1 && 'Choose Your Visit'}
            {step === 2 && 'Select Date & Time'}
            {step === 3 && 'Your Information'}
          </CardTitle>
          <CardDescription>
            {step === 1 && 'Select the type of visit that interests you most'}
            {step === 2 && 'Pick a convenient date and time for your visit'}
            {step === 3 && 'Provide your contact details to complete the booking'}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {step === 1 && (
            <div className="grid md:grid-cols-2 gap-4">
              {tourTypes.map((tour) => {
                const Icon = tour.icon
                return (
                  <Card
                    key={tour.id}
                    className={cn(
                      "cursor-pointer transition-all hover:shadow-md",
                      selectedTourType === tour.id ? "ring-2 ring-blue-500 bg-blue-50" : ""
                    )}
                    onClick={() => setSelectedTourType(tour.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <Icon className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{tour.name}</h3>
                          <p className="text-sm text-gray-600 mb-3">{tour.description}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <div className="flex items-center">
                              <Clock className="mr-1 h-3 w-3" />
                              {tour.duration}
                            </div>
                            <div className="flex items-center">
                              <Users className="mr-1 h-3 w-3" />
                              Max {tour.capacity}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          )}

          {step === 2 && selectedTour && (
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label className="text-base font-semibold mb-4 block">Select Date</Label>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date() || date.getDay() === 0}
                  className="rounded-md border"
                />
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label className="text-base font-semibold">Available Times</Label>
                  <p className="text-sm text-gray-600 mb-4">
                    {selectedDate?.toDateString()} • {selectedTour.name}
                  </p>
                </div>
                
                <div className="space-y-2">
                  {availableSlots.map((slot) => (
                    <div
                      key={slot.time}
                      className={cn(
                        "p-3 border rounded cursor-pointer transition-all",
                        selectedTime === slot.time ? "border-blue-500 bg-blue-50" : "",
                        slot.available === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
                      )}
                      onClick={() => slot.available > 0 && setSelectedTime(slot.time)}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-medium">{slot.time}</span>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Badge variant={slot.type === 'virtual' ? 'secondary' : 'default'} className="text-xs">
                              {slot.type === 'virtual' ? 'Virtual' : 'In-Person'}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm">
                            {slot.available > 0 ? (
                              <span className="text-green-600">{slot.available} spots left</span>
                            ) : (
                              <span className="text-red-600">Full</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <Label htmlFor="attendees">Number of Attendees</Label>
                  <Select value={attendeeCount} onValueChange={setAttendeeCount}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? 'person' : 'people'}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                  <Input
                    id="parentName"
                    value={formData.parentName}
                    onChange={(e) => handleFormChange('parentName', e.target.value)}
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="studentName">Student Name</Label>
                  <Input
                    id="studentName"
                    value={formData.studentName}
                    onChange={(e) => handleFormChange('studentName', e.target.value)}
                    placeholder="Student's full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleFormChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleFormChange('phone', e.target.value)}
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="gradeLevel">Interested Grade Level *</Label>
                  <Select value={formData.gradeLevel} onValueChange={(value) => handleFormChange('gradeLevel', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select grade level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kindergarten">Kindergarten</SelectItem>
                      <SelectItem value="elementary">Elementary (1st-5th)</SelectItem>
                      <SelectItem value="middle">Middle School (6th-8th)</SelectItem>
                      <SelectItem value="high">High School (9th-12th)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="specialRequests">Special Requests or Questions</Label>
                  <Textarea
                    id="specialRequests"
                    value={formData.specialRequests}
                    onChange={(e) => handleFormChange('specialRequests', e.target.value)}
                    placeholder="Any specific areas of interest, accessibility needs, or questions?"
                    rows={4}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) => handleFormChange('newsletter', checked as boolean)}
                  />
                  <Label htmlFor="newsletter" className="text-sm">
                    Subscribe to our newsletter for admissions updates
                  </Label>
                </div>
              </div>
            </div>
          )}

          <Separator />

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            {step > 1 && (
              <Button variant="outline" onClick={() => setStep(step - 1)}>
                Previous
              </Button>
            )}
            
            <div className="ml-auto">
              {step < 3 ? (
                <Button 
                  onClick={() => setStep(step + 1)}
                  disabled={
                    (step === 1 && !selectedTourType) ||
                    (step === 2 && !canProceedToStep2)
                  }
                >
                  Next
                </Button>
              ) : (
                <Button 
                  onClick={handleBooking}
                  disabled={!canProceedToStep3}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Confirm Booking
                </Button>
              )}
            </div>
          </div>

          {/* Booking Summary */}
          {step === 3 && (
            <Card className="bg-blue-50">
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">Booking Summary</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Tour Type:</span>
                    <span>{selectedTour?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span>{selectedDate?.toDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time:</span>
                    <span>{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>{selectedTour?.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Attendees:</span>
                    <span>{attendeeCount}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  )
}