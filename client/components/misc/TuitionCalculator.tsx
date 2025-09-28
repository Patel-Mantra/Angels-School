import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Separator } from '@/components/ui/separator'
import { Calculator, DollarSign, Info, Download } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface TuitionStructure {
  [key: string]: {
    baseTuition: number
    description: string
  }
}

interface OptionalFees {
  [key: string]: {
    cost: number
    description: string
    category: 'required' | 'optional'
  }
}

const tuitionRates: TuitionStructure = {
  elementary: { baseTuition: 12000, description: 'Kindergarten through 5th Grade' },
  middle: { baseTuition: 14000, description: '6th through 8th Grade' },
  high: { baseTuition: 16000, description: '9th through 12th Grade' }
}

const additionalFees: OptionalFees = {
  technology: { cost: 200, description: 'Annual technology fee for all students', category: 'required' },
  activities: { cost: 150, description: 'General activities and events fee', category: 'required' },
  materials: { cost: 100, description: 'Classroom materials and supplies', category: 'required' },
  application: { cost: 75, description: 'One-time application processing fee', category: 'required' },
  lunch: { cost: 800, description: 'Full meal plan (breakfast and lunch)', category: 'optional' },
  transportation: { cost: 1200, description: 'School bus service (both ways)', category: 'optional' },
  aftercare: { cost: 2400, description: 'After-school care until 6 PM', category: 'optional' },
  tutoring: { cost: 600, description: 'Weekly one-on-one tutoring sessions', category: 'optional' },
  athletics: { cost: 300, description: 'Participation in school sports teams', category: 'optional' },
  artSupplies: { cost: 150, description: 'Art and music program supplies', category: 'optional' },
  yearbook: { cost: 45, description: 'Annual yearbook and photos', category: 'optional' },
  uniform: { cost: 350, description: 'Complete uniform package', category: 'optional' }
}

const paymentPlans = {
  annual: { discount: 0.05, name: 'Annual Payment', description: '5% discount for full year payment' },
  semester: { discount: 0.02, name: 'Semester Payment', description: '2% discount for semester payment' },
  monthly: { discount: 0, name: 'Monthly Payment', description: 'Standard monthly payment plan' }
}

const financialAidOptions = {
  none: { reduction: 0, name: 'No Financial Aid' },
  partial: { reduction: 0.25, name: '25% Financial Aid' },
  substantial: { reduction: 0.40, name: '40% Financial Aid' },
  maximum: { reduction: 0.50, name: '50% Financial Aid (Maximum)' }
}

export function TuitionCalculator() {
  const [gradeLevel, setGradeLevel] = useState<string>('')
  const [selectedFees, setSelectedFees] = useState<string[]>(['technology', 'activities', 'materials'])
  const [paymentPlan, setPaymentPlan] = useState<string>('monthly')
  const [financialAid, setFinancialAid] = useState<string>('none')
  const [includeApplication, setIncludeApplication] = useState<boolean>(true)
  const [showBreakdown, setShowBreakdown] = useState<boolean>(false)

  // Add required fees automatically
  useEffect(() => {
    const requiredFees = Object.keys(additionalFees).filter(
      fee => additionalFees[fee].category === 'required'
    )
    setSelectedFees(prev => {
      const optional = prev.filter(fee => additionalFees[fee].category === 'optional')
      return [...requiredFees, ...optional]
    })
  }, [])

  const calculateTotal = () => {
    if (!gradeLevel) return { subtotal: 0, discount: 0, aid: 0, total: 0 }

    const baseTuition = tuitionRates[gradeLevel].baseTuition
    const feesTotal = selectedFees.reduce((sum, feeKey) => sum + additionalFees[feeKey].cost, 0)
    const applicationFee = includeApplication ? additionalFees.application.cost : 0
    
    const subtotal = baseTuition + feesTotal + applicationFee
    
    // Apply payment plan discount
    const discountRate = paymentPlans[paymentPlan as keyof typeof paymentPlans].discount
    const discount = subtotal * discountRate
    
    // Apply financial aid
    const aidRate = financialAidOptions[financialAid as keyof typeof financialAidOptions].reduction
    const aid = (subtotal - discount) * aidRate
    
    const total = subtotal - discount - aid

    return { subtotal, discount, aid, total, baseTuition, feesTotal, applicationFee }
  }

  const handleFeeToggle = (feeKey: string) => {
    // Don't allow toggling required fees
    if (additionalFees[feeKey].category === 'required') return

    setSelectedFees(prev =>
      prev.includes(feeKey)
        ? prev.filter(fee => fee !== feeKey)
        : [...prev, feeKey]
    )
  }

  const costs = calculateTotal()
  const monthlyPayment = costs.total / 12
  const semesterPayment = costs.total / 2

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Calculator className="mr-2 h-5 w-5" />
          Tuition & Fee Calculator
        </CardTitle>
        <CardDescription>
          Calculate your estimated annual investment for Stellar Haven Academy
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Grade Level Selection */}
        <div className="space-y-2">
          <Label>Grade Level</Label>
          <Select value={gradeLevel} onValueChange={setGradeLevel}>
            <SelectTrigger>
              <SelectValue placeholder="Select grade level" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(tuitionRates).map(([key, rate]) => (
                <SelectItem key={key} value={key}>
                  {rate.description} - ₹{rate.baseTuition.toLocaleString()}/year
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {gradeLevel && (
          <>
            {/* Additional Fees */}
            <div className="space-y-4">
              <Label className="text-base font-semibold">Additional Fees</Label>
              
              {/* Required Fees */}
              <div>
                <h4 className="font-medium text-sm mb-3 flex items-center">
                  Required Fees
                  <Badge variant="secondary" className="ml-2">Cannot be removed</Badge>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {Object.entries(additionalFees)
                    .filter(([_, fee]) => fee.category === 'required')
                    .map(([key, fee]) => (
                      <div key={key} className="flex items-center space-x-3 p-3 border rounded bg-gray-50">
                        <Checkbox 
                          checked={true} 
                          disabled 
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' ₹1')}</span>
                              <p className="text-sm text-gray-600">{fee.description}</p>
                            </div>
                            <span className="font-semibold">₹{fee.cost}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Optional Fees */}
              <div>
                <h4 className="font-medium text-sm mb-3">Optional Fees & Services</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {Object.entries(additionalFees)
                    .filter(([_, fee]) => fee.category === 'optional')
                    .map(([key, fee]) => (
                      <div key={key} className="flex items-center space-x-3 p-3 border rounded hover:bg-gray-50">
                        <Checkbox 
                          checked={selectedFees.includes(key)}
                          onCheckedChange={() => handleFeeToggle(key)}
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' ₹1')}</span>
                              <p className="text-sm text-gray-600">{fee.description}</p>
                            </div>
                            <span className="font-semibold">₹{fee.cost}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Payment Plan */}
            <div className="space-y-2">
              <Label>Payment Plan</Label>
              <Select value={paymentPlan} onValueChange={setPaymentPlan}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(paymentPlans).map(([key, plan]) => (
                    <SelectItem key={key} value={key}>
                      {plan.name} {plan.discount > 0 && `(₹{(plan.discount * 100)}% discount)`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Financial Aid */}
            <div className="space-y-2">
              <Label>Financial Aid Status</Label>
              <Select value={financialAid} onValueChange={setFinancialAid}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(financialAidOptions).map(([key, option]) => (
                    <SelectItem key={key} value={key}>
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Separator />

            {/* Cost Summary */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Cost Summary</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowBreakdown(!showBreakdown)}
                >
                  <Info className="mr-1 h-4 w-4" />
                  {showBreakdown ? 'Hide' : 'Show'} Breakdown
                </Button>
              </div>

              {showBreakdown && (
                <Card className="bg-gray-50">
                  <CardContent className="p-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Base Tuition ({tuitionRates[gradeLevel].description})</span>
                      <span>₹{costs.baseTuition.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Additional Fees</span>
                      <span>₹{costs.feesTotal.toLocaleString()}</span>
                    </div>
                    {costs.applicationFee > 0 && (
                      <div className="flex justify-between text-sm">
                        <span>Application Fee</span>
                        <span>₹{costs.applicationFee}</span>
                      </div>
                    )}
                    <Separator />
                    <div className="flex justify-between text-sm font-medium">
                      <span>Subtotal</span>
                      <span>₹{costs.subtotal.toLocaleString()}</span>
                    </div>
                    {costs.discount > 0 && (
                      <div className="flex justify-between text-sm text-green-600">
                        <span>Payment Plan Discount</span>
                        <span>-₹{costs.discount.toLocaleString()}</span>
                      </div>
                    )}
                    {costs.aid > 0 && (
                      <div className="flex justify-between text-sm text-green-600">
                        <span>Financial Aid</span>
                        <span>-₹{costs.aid.toLocaleString()}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold">Annual Total</span>
                  <span className="text-3xl font-bold text-blue-600">
                    ₹{costs.total.toLocaleString()}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between">
                    <span>Monthly Payment:</span>
                    <span className="font-semibold">₹{Math.round(monthlyPayment).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Semester Payment:</span>
                    <span className="font-semibold">₹{Math.round(semesterPayment).toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button className="flex-1">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Apply for Financial Aid
                </Button>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Estimate
                </Button>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="text-xs text-gray-500 p-3 bg-yellow-50 rounded">
              <p className="font-medium mb-1">Important Notes:</p>
              <ul className="space-y-1">
                <li>• This calculator provides estimates only. Actual costs may vary.</li>
                <li>• Financial aid amounts are subject to need assessment and availability.</li>
                <li>• Additional costs may apply for specialized programs or activities.</li>
                <li>• Payment plans may have processing fees not included in this calculation.</li>
              </ul>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}