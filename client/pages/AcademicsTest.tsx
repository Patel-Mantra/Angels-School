import { useState } from 'react'
import { Layout } from '@/components/layout/Layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen } from 'lucide-react'

export default function AcademicsTest() {
  const [message] = useState('Academics Test Page is Working!')

  return (
    <Layout>
      <div className="min-h-screen px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-green-600">
              ✅ {message}
            </h1>
            <p className="text-xl text-gray-600 mt-4">
              This confirms the Academics route is working properly
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Basic Test
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">If you can see this card, the route is working.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Route Status</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-600 font-semibold">✅ Connected to /academics</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We can now load the full Academics page components.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}