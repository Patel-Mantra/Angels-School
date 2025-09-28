import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { 
  Search, 
  Filter, 
  Calendar, 
  Eye, 
  MessageSquare, 
  Share2,
  Bookmark,
  Tag,
  User,
  Clock,
  TrendingUp,
  Star,
  ChevronRight,
  Archive
} from 'lucide-react'

const newsCategories = [
  { id: 'all', label: 'All News', count: 247, color: 'bg-gray-100' },
  { id: 'academic', label: 'Academic Achievements', count: 45, color: 'bg-blue-100 text-blue-800' },
  { id: 'sports', label: 'Sports & Athletics', count: 38, color: 'bg-orange-100 text-orange-800' },
  { id: 'arts', label: 'Arts & Culture', count: 32, color: 'bg-pink-100 text-pink-800' },
  { id: 'community', label: 'Community Events', count: 67, color: 'bg-green-100 text-green-800' },
  { id: 'emergency', label: 'Important Updates', count: 8, color: 'bg-red-100 text-red-800' },
  { id: 'parent', label: 'Parent Information', count: 57, color: 'bg-purple-100 text-purple-800' }
]

const featuredArticles = [
  {
    id: 1,
    title: 'Angels Students Sweep Regional Science Fair Awards',
    category: 'Academic Achievements',
    excerpt: 'Our students took home 12 awards including 3 first-place finishes at the Regional Science and Engineering Fair, advancing 8 projects to state competition.',
    author: 'Dr. Sarah Chen',
    date: '2025-09-18',
    readTime: '5 min read',
    views: 2547,
    comments: 23,
    shares: 45,
    tags: ['Science Fair', 'STEM', 'Awards', 'Regional Competition'],
    featured: true,
    image: 'bg-gradient-to-br from-blue-400 to-purple-500',
    urgent: false
  },
  {
    id: 2,
    title: 'New Campus Safety Protocols Effective Immediately',
    category: 'Important Updates',
    excerpt: 'Enhanced security measures including updated visitor check-in procedures and emergency communication systems are now in effect campus-wide.',
    author: 'Administration Office',
    date: '2025-09-20',
    readTime: '3 min read',
    views: 4123,
    comments: 67,
    shares: 156,
    tags: ['Safety', 'Security', 'Procedures', 'Campus'],
    featured: true,
    image: 'bg-gradient-to-br from-red-400 to-orange-500',
    urgent: true
  },
  {
    id: 3,
    title: 'Fall Musical Auditions: "Into the Woods" Production',
    category: 'Arts & Culture',
    excerpt: 'Auditions for our fall musical production begin next week. All students welcome to participate in this magical theatrical experience.',
    author: 'Ms. Rodriguez, Theater Director',
    date: '2025-09-17',
    readTime: '4 min read',
    views: 1834,
    comments: 45,
    shares: 78,
    tags: ['Theater', 'Musical', 'Auditions', 'Fall Production'],
    featured: true,
    image: 'bg-gradient-to-br from-pink-400 to-purple-500',
    urgent: false
  }
]

const recentNews = [
  {
    id: 4,
    title: 'Parent-Teacher Conference Schedule Released',
    category: 'Parent Information',
    excerpt: 'Conference appointments are now available for scheduling. Log in to the parent portal to book your preferred time slots.',
    author: 'Academic Office',
    date: '2025-09-19',
    readTime: '2 min read',
    views: 892,
    comments: 12,
    shares: 34,
    tags: ['Parent Conferences', 'Scheduling', 'Academic Progress'],
    featured: false,
    image: 'bg-gradient-to-br from-purple-400 to-blue-500',
    urgent: false
  },
  {
    id: 5,
    title: 'Varsity Soccer Teams Win Double-Header',
    category: 'Sports & Athletics',
    excerpt: 'Both boys and girls varsity soccer teams secured victories in yesterday\'s games, keeping playoff hopes alive.',
    author: 'Coach Martinez',
    date: '2025-09-18',
    readTime: '3 min read',
    views: 1245,
    comments: 28,
    shares: 67,
    tags: ['Soccer', 'Varsity', 'Sports Results', 'Playoffs'],
    featured: false,
    image: 'bg-gradient-to-br from-green-400 to-orange-500',
    urgent: false
  },
  {
    id: 6,
    title: 'College Fair 2025: 150+ Universities Attending',
    category: 'Academic Achievements',
    excerpt: 'Mark your calendars for our biggest college fair yet, featuring representatives from over 150 colleges and universities.',
    author: 'Guidance Department',
    date: '2025-09-16',
    readTime: '4 min read',
    views: 2156,
    comments: 89,
    shares: 123,
    tags: ['College Fair', 'Higher Education', 'Career Planning'],
    featured: false,
    image: 'bg-gradient-to-br from-indigo-400 to-purple-500',
    urgent: false
  },
  {
    id: 7,
    title: 'Environmental Club Launches Campus Recycling Initiative',
    category: 'Community Events',
    excerpt: 'Student-led environmental group introduces comprehensive recycling program with goal of reducing campus waste by 50%.',
    author: 'Environmental Club',
    date: '2025-09-15',
    readTime: '3 min read',
    views: 678,
    comments: 15,
    shares: 45,
    tags: ['Environment', 'Recycling', 'Student Initiative', 'Sustainability'],
    featured: false,
    image: 'bg-gradient-to-br from-green-400 to-teal-500',
    urgent: false
  },
  {
    id: 8,
    title: 'Art Students Display Work at City Gallery',
    category: 'Arts & Culture',
    excerpt: 'Advanced art students showcase their portfolios in a month-long exhibition at the Downtown Arts Center.',
    author: 'Ms. Williams, Art Teacher',
    date: '2025-09-14',
    readTime: '3 min read',
    views: 954,
    comments: 22,
    shares: 56,
    tags: ['Art Exhibition', 'Student Work', 'Community Partnership'],
    featured: false,
    image: 'bg-gradient-to-br from-pink-400 to-red-500',
    urgent: false
  }
]

const trendingTags = [
  'Fall Events', 'Parent Conferences', 'College Prep', 'STEM Awards', 
  'Athletics', 'Theater Arts', 'Safety Updates', 'Community Service',
  'Scholarship Info', 'Academic Excellence', 'School Spirit', 'Homecoming'
]

export function NewsManagement() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const allArticles = [...featuredArticles, ...recentNews]
  const filteredNews = allArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || 
      article.category.toLowerCase().replace(/[^a-z]/g, '') === selectedCategory.replace('academic', 'academicachievements').replace('sports', 'sportsathletics').replace('arts', 'artsculture').replace('community', 'communityevents').replace('emergency', 'importantupdates').replace('parent', 'parentinformation')
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">News Management Center</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay informed with comprehensive news coverage, organized by category with powerful search and filtering capabilities.
        </p>
      </div>

      <Tabs defaultValue="current" className="space-y-6">
        <TabsList className="grid grid-cols-3 h-auto p-2">
          <TabsTrigger value="current" className="flex flex-col items-center gap-2 p-4">
            <TrendingUp className="w-5 h-5" />
            <span className="text-xs">Current News</span>
          </TabsTrigger>
          <TabsTrigger value="featured" className="flex flex-col items-center gap-2 p-4">
            <Star className="w-5 h-5" />
            <span className="text-xs">Featured Stories</span>
          </TabsTrigger>
          <TabsTrigger value="archive" className="flex flex-col items-center gap-2 p-4">
            <Archive className="w-5 h-5" />
            <span className="text-xs">Archive Search</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="current" className="space-y-6">
          {/* Search and Filter Controls */}
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search news articles, tags, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                Grid
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                List
              </Button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {newsCategories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? '' : category.color}
              >
                {category.label} ({category.count})
              </Button>
            ))}
          </div>

          {/* Trending Tags */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Tag className="w-4 h-4" />
              Trending Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {trendingTags.map((tag, idx) => (
                <Badge key={idx} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-white">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* News Articles */}
          <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
            {filteredNews.map((article) => (
              <Card key={article.id} className={`hover:shadow-lg transition-shadow ${article.urgent ? 'border-red-200 bg-red-50/30' : ''}`}>
                {viewMode === 'grid' ? (
                  <>
                    <div className={`h-48 ${article.featured ? article.image : 'bg-gradient-to-br from-gray-300 to-gray-400'} rounded-t-lg`} />
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge className={newsCategories.find(cat => 
                          article.category.toLowerCase().replace(/[^a-z]/g, '') === 
                          cat.id.replace('academic', 'academicachievements').replace('sports', 'sportsathletics').replace('arts', 'artsculture').replace('community', 'communityevents').replace('emergency', 'importantupdates').replace('parent', 'parentinformation')
                        )?.color}>
                          {article.category}
                        </Badge>
                        {article.urgent && <Badge className="bg-red-500 text-white animate-pulse">URGENT</Badge>}
                        {article.featured && <Star className="w-4 h-4 text-yellow-500" />}
                      </div>
                      <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                      <p className="text-sm text-primary">by {article.author}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4 text-sm">{article.excerpt}</p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {article.tags.slice(0, 3).map((tag, tagIdx) => (
                          <Badge key={tagIdx} variant="outline" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                        <span>{article.date}</span>
                        <span>{article.readTime}</span>
                      </div>
                      
                      <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {article.views.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="w-3 h-3" />
                          {article.comments}
                        </span>
                        <span className="flex items-center gap-1">
                          <Share2 className="w-3 h-3" />
                          {article.shares}
                        </span>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          Read More
                          <ChevronRight className="w-3 h-3 ml-1" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Bookmark className="w-3 h-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </>
                ) : (
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className={`w-24 h-24 ${article.featured ? article.image : 'bg-gradient-to-br from-gray-300 to-gray-400'} rounded-lg flex-shrink-0`} />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className={newsCategories.find(cat => 
                            article.category.toLowerCase().replace(/[^a-z]/g, '') === 
                            cat.id.replace('academic', 'academicachievements').replace('sports', 'sportsathletics').replace('arts', 'artsculture').replace('community', 'communityevents').replace('emergency', 'importantupdates').replace('parent', 'parentinformation')
                          )?.color}>
                            {article.category}
                          </Badge>
                          {article.urgent && <Badge className="bg-red-500 text-white animate-pulse text-xs">URGENT</Badge>}
                          {article.featured && <Star className="w-4 h-4 text-yellow-500" />}
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{article.excerpt}</p>
                        
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center gap-4">
                            <span>by {article.author}</span>
                            <span>{article.date}</span>
                            <span>{article.readTime}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              {article.views.toLocaleString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageSquare className="w-3 h-3" />
                              {article.comments}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center">
            <Button size="lg" variant="outline">
              Load More Articles
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="featured" className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Featured Stories</h3>
            <p className="text-gray-600">Our most important and impactful stories</p>
          </div>
          
          <div className="space-y-6">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row">
                  <div className={`lg:w-96 h-64 lg:h-auto ${article.image}`} />
                  <div className="flex-1">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <Star className="w-5 h-5 text-yellow-500" />
                        <Badge className={newsCategories.find(cat => 
                          article.category.toLowerCase().replace(/[^a-z]/g, '') === 
                          cat.id.replace('academic', 'academicachievements').replace('sports', 'sportsathletics').replace('arts', 'artsculture').replace('community', 'communityevents').replace('emergency', 'importantupdates').replace('parent', 'parentinformation')
                        )?.color}>
                          {article.category}
                        </Badge>
                        {article.urgent && <Badge className="bg-red-500 text-white animate-pulse">URGENT</Badge>}
                      </div>
                      <CardTitle className="text-2xl mb-2">{article.title}</CardTitle>
                      <p className="text-primary font-medium">by {article.author} • {article.date}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-6 text-lg">{article.excerpt}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {article.tags.map((tag, tagIdx) => (
                          <Badge key={tagIdx} variant="secondary">
                            #{tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {article.views.toLocaleString()} views
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageSquare className="w-4 h-4" />
                            {article.comments} comments
                          </span>
                          <span className="flex items-center gap-1">
                            <Share2 className="w-4 h-4" />
                            {article.shares} shares
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <Button>Read Full Story</Button>
                          <Button variant="outline">
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="archive" className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">News Archive</h3>
            <p className="text-gray-600">Search through our complete news history</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Year</label>
                <select className="w-full border rounded-md px-3 py-2">
                  <option>2025</option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Month</label>
                <select className="w-full border rounded-md px-3 py-2">
                  <option>All Months</option>
                  <option>September</option>
                  <option>August</option>
                  <option>July</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select className="w-full border rounded-md px-3 py-2">
                  <option>All Categories</option>
                  <option>Academic</option>
                  <option>Sports</option>
                  <option>Arts</option>
                  <option>Community</option>
                </select>
              </div>
            </div>
            <Button className="w-full">
              <Search className="w-4 h-4 mr-2" />
              Search Archive
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}