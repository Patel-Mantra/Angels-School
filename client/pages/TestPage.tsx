import { Layout } from '@/components/layout/Layout'

export default function TestPage() {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-600 mb-4">✅ Test Page Working!</h1>
          <p className="text-lg text-gray-600">React is mounted and rendering correctly</p>
          <div className="mt-4 p-4 bg-blue-50 rounded border">
            <p className="text-sm">Server is running on: localhost:3000</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}