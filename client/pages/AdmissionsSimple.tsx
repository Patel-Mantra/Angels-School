import { Layout } from '@/components/layout/Layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Admissions() {
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
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Application
            </Button>
          </div>
        </section>

        {/* Simple test section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Admissions Information</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Elementary</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Kindergarten through 5th Grade</p>
                  <p className="text-2xl font-bold text-blue-600">$12,000/year</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Middle School</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>6th through 8th Grade</p>
                  <p className="text-2xl font-bold text-blue-600">$14,000/year</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>High School</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>9th through 12th Grade</p>
                  <p className="text-2xl font-bold text-blue-600">$16,000/year</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}