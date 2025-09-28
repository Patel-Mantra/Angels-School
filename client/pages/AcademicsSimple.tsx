import { Layout } from '@/components/layout/Layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function AcademicsSimple() {
  return (
    <Layout>
      <div className="min-h-screen px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Learning Pathways
            </h1>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              Academic excellence at Stellar Haven Academy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>K-5 Elementary</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Foundation building and core skill development</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6-8 Middle School</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Exploration and pathway introduction</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9-12 High School</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Specialization and college preparation</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-green-600 font-bold">✅ Academics page is loading correctly!</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}