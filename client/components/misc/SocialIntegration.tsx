import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { 
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Camera,
  Heart,
  MessageCircle,
  Share,
  Hash,
  TrendingUp,
  Users,
  Eye,
  CheckCircle,
  X,
  AlertTriangle,
  Upload,
  Send,
  Filter,
  Calendar,
  Award
} from 'lucide-react'

const socialPlatforms = [
  { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'text-pink-600', followers: '2.3K' },
  { id: 'twitter', name: 'Twitter', icon: Twitter, color: 'text-blue-600', followers: '1.8K' },
  { id: 'facebook', name: 'Facebook', icon: Facebook, color: 'text-blue-800', followers: '3.1K' },
  { id: 'youtube', name: 'YouTube', icon: Youtube, color: 'text-red-600', followers: '856' }
]

const hashtagCampaigns = [
  {
    id: 1,
    hashtag: '#AngelsWolves',
    description: 'School spirit and pride posts',
    posts: 342,
    engagement: 1250,
    trend: 'up',
    featured: true
  },
  {
    id: 2,
    hashtag: '#StudentSpotlight',
    description: 'Highlighting amazing students',
    posts: 156,
    engagement: 890,
    trend: 'up',
    featured: true
  },
  {
    id: 3,
    hashtag: '#AngelsArts',
    description: 'Showcasing creative talents',
    posts: 89,
    engagement: 567,
    trend: 'stable',
    featured: false
  },
  {
    id: 4,
    hashtag: '#ThrowbackThursday',
    description: 'Historic school moments',
    posts: 234,
    engagement: 1120,
    trend: 'up',
    featured: true
  }
]

const socialFeed = [
  {
    id: 1,
    platform: 'instagram',
    author: 'Angelsscholars',
    authorName: 'Angels High School',
    content: 'Amazing turnout at today\'s Science Fair! Our students never cease to amaze us with their innovative projects. 🧪✨',
    image: '/api/placeholder/400/300',
    timestamp: '2025-01-18T10:30:00Z',
    likes: 127,
    comments: 23,
    shares: 15,
    hashtags: ['#AngelsWolves', '#ScienceFair', '#Innovation'],
    verified: true
  },
  {
    id: 2,
    platform: 'twitter',
    author: 'AngelsHS_Sports',
    authorName: 'Angels Athletics',
    content: 'TOUCHDOWN! The Angels Wolves are leading 21-14 in the second quarter! Come support the team! 🏈🐺',
    image: null,
    timestamp: '2025-01-17T19:45:00Z',
    likes: 89,
    comments: 31,
    shares: 42,
    hashtags: ['#AngelsWolves', '#Football', '#Homecoming'],
    verified: true
  },
  {
    id: 3,
    platform: 'instagram',
    author: 'student_council_Angels',
    authorName: 'Angels Student Council',
    content: 'Planning something special for Spirit Week! Can\'t wait to share more details soon... 👀',
    image: '/api/placeholder/400/400',
    timestamp: '2025-01-17T14:20:00Z',
    likes: 201,
    comments: 67,
    shares: 8,
    hashtags: ['#SpiritWeek', '#StudentCouncil', '#ComingSoon'],
    verified: false
  },
  {
    id: 4,
    platform: 'facebook',
    author: 'AngelsHighSchoolOfficial',
    authorName: 'Angels High School',
    content: 'Parent-Teacher Conference sign-ups are now open! Don\'t forget to schedule your appointments by Friday.',
    image: null,
    timestamp: '2025-01-16T08:15:00Z',
    likes: 45,
    comments: 12,
    shares: 28,
    hashtags: ['#ParentTeacher', '#ImportantDates'],
    verified: true
  }
]

const userSubmissions = [
  {
    id: 1,
    type: 'photo',
    author: 'Sarah M.',
    grade: '11th Grade',
    title: 'Art Class Masterpiece',
    content: 'My latest oil painting for Advanced Art!',
    image: '/api/placeholder/300/400',
    timestamp: '2025-01-18T16:30:00Z',
    status: 'approved',
    moderator: 'Ms. Rodriguez',
    likes: 34,
    comments: 8,
    category: 'arts'
  },
  {
    id: 2,
    type: 'video',
    author: 'Marcus J.',
    grade: '10th Grade',
    title: 'Basketball Highlights',
    content: 'Check out these sick moves from yesterday\'s practice!',
    image: '/api/placeholder/300/200',
    timestamp: '2025-01-18T12:15:00Z',
    status: 'pending',
    moderator: null,
    likes: 0,
    comments: 0,
    category: 'sports'
  },
  {
    id: 3,
    type: 'photo',
    author: 'Emma L.',
    grade: '12th Grade',
    title: 'Chemistry Lab Success',
    content: 'Finally got the perfect crystal formation! 💎',
    image: '/api/placeholder/300/300',
    timestamp: '2025-01-17T20:45:00Z',
    status: 'approved',
    moderator: 'Mr. Chen',
    likes: 89,
    comments: 15,
    category: 'academic'
  }
]

export function SocialIntegration() {
  const [selectedPlatform, setSelectedPlatform] = useState('all')
  const [submissionType, setSubmissionType] = useState<'photo' | 'video' | 'text'>('photo')
  const [moderationFilter, setModerationFilter] = useState('all')
  const [showSubmissionForm, setShowSubmissionForm] = useState(false)
  const [newSubmission, setNewSubmission] = useState({
    title: '',
    content: '',
    category: 'general'
  })

  const filteredFeed = socialFeed.filter(post => {
    return selectedPlatform === 'all' || post.platform === selectedPlatform
  })

  const filteredSubmissions = userSubmissions.filter(submission => {
    if (moderationFilter === 'all') return true
    return submission.status === moderationFilter
  })

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getPlatformIcon = (platformId: string) => {
    const platform = socialPlatforms.find(p => p.id === platformId)
    if (!platform) return Instagram
    return platform.icon
  }

  const getPlatformColor = (platformId: string) => {
    const platform = socialPlatforms.find(p => p.id === platformId)
    return platform?.color || 'text-gray-600'
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Social Media Hub</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Connect with our vibrant school community across all social platforms and share your Angels experience.
        </p>
      </div>

      {/* Platform Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {socialPlatforms.map((platform) => {
          const Icon = platform.icon
          return (
            <Card key={platform.id}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{platform.name}</p>
                    <p className="text-2xl font-bold">{platform.followers}</p>
                    <p className="text-sm text-gray-500">Followers</p>
                  </div>
                  <Icon className={`h-8 w-8 ${platform.color}`} />
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Tabs defaultValue="feed" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="feed">Live Feed</TabsTrigger>
          <TabsTrigger value="hashtags">Hashtag Campaigns</TabsTrigger>
          <TabsTrigger value="submissions">User Content</TabsTrigger>
          <TabsTrigger value="moderation">Moderation</TabsTrigger>
        </TabsList>

        {/* Live Feed */}
        <TabsContent value="feed" className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant={selectedPlatform === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedPlatform('all')}
              >
                All Platforms
              </Button>
              {socialPlatforms.map((platform) => {
                const Icon = platform.icon
                return (
                  <Button
                    key={platform.id}
                    variant={selectedPlatform === platform.id ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedPlatform(platform.id)}
                  >
                    <Icon className="w-4 h-4 mr-1" />
                    {platform.name}
                  </Button>
                )
              })}
            </div>
            <Button>
              <Share className="w-4 h-4 mr-2" />
              Share Content
            </Button>
          </div>

          <div className="grid gap-6">
            {filteredFeed.map((post) => {
              const Icon = getPlatformIcon(post.platform)
              return (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <Icon className={`w-5 h-5 ${getPlatformColor(post.platform)}`} />
                          <span className="font-medium">{post.authorName}</span>
                          {post.verified && (
                            <CheckCircle className="w-4 h-4 text-blue-500" />
                          )}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{formatTimestamp(post.timestamp)}</span>
                    </div>

                    <p className="mb-4">{post.content}</p>

                    {post.image && (
                      <div className="mb-4">
                        <img 
                          src={post.image} 
                          alt="Social media post" 
                          className="rounded-lg w-full max-w-md"
                        />
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.hashtags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-primary">
                          <Hash className="w-3 h-3 mr-1" />
                          {tag.slice(1)}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {post.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          {post.comments}
                        </span>
                        <span className="flex items-center gap-1">
                          <Share className="w-4 h-4" />
                          {post.shares}
                        </span>
                      </div>
                      <Button size="sm" variant="outline">
                        View Post
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        {/* Hashtag Campaigns */}
        <TabsContent value="hashtags" className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Active Hashtag Campaigns</h3>
            <p className="text-gray-600">Join the conversation and share your Angels moments!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {hashtagCampaigns.map((campaign) => (
              <Card key={campaign.id} className={campaign.featured ? 'ring-2 ring-primary' : ''}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-2">{campaign.hashtag}</h4>
                      <p className="text-gray-600 mb-3">{campaign.description}</p>
                    </div>
                    {campaign.featured && (
                      <Badge className="bg-primary">Featured</Badge>
                    )}
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center mb-4">
                    <div>
                      <div className="text-2xl font-bold text-primary">{campaign.posts}</div>
                      <div className="text-sm text-gray-500">Posts</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{campaign.engagement}</div>
                      <div className="text-sm text-gray-500">Engagement</div>
                    </div>
                    <div>
                      <div className={`text-2xl font-bold ${campaign.trend === 'up' ? 'text-green-600' : 'text-gray-600'}`}>
                        <TrendingUp className="w-6 h-6 mx-auto" />
                      </div>
                      <div className="text-sm text-gray-500">Trending</div>
                    </div>
                  </div>

                  <Button className="w-full">
                    <Camera className="w-4 h-4 mr-2" />
                    Use Hashtag
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* User Content Submissions */}
        <TabsContent value="submissions" className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-medium">Filter by status:</span>
              {['all', 'approved', 'pending', 'rejected'].map((status) => (
                <Button
                  key={status}
                  variant={moderationFilter === status ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setModerationFilter(status)}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </Button>
              ))}
            </div>
            
            <Dialog open={showSubmissionForm} onOpenChange={setShowSubmissionForm}>
              <DialogTrigger asChild>
                <Button>
                  <Upload className="w-4 h-4 mr-2" />
                  Submit Content
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Submit Your Content</DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="flex gap-2">
                    {['photo', 'video', 'text'].map((type) => (
                      <Button
                        key={type}
                        variant={submissionType === type ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSubmissionType(type as any)}
                      >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </Button>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Title</label>
                      <Input
                        placeholder="Give your content a title..."
                        value={newSubmission.title}
                        onChange={(e) => setNewSubmission({...newSubmission, title: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Description</label>
                      <Textarea
                        placeholder="Tell us about your submission..."
                        value={newSubmission.content}
                        onChange={(e) => setNewSubmission({...newSubmission, content: e.target.value})}
                      />
                    </div>

                    {submissionType !== 'text' && (
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-2">
                          Drop your {submissionType} here or click to browse
                        </p>
                        <p className="text-sm text-gray-500">
                          Max size: 10MB • Formats: JPG, PNG{submissionType === 'video' ? ', MP4' : ''}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1">
                      <Send className="w-4 h-4 mr-2" />
                      Submit for Review
                    </Button>
                    <Button variant="outline" onClick={() => setShowSubmissionForm(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSubmissions.map((submission) => (
              <Card key={submission.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold">{submission.title}</h4>
                      <p className="text-sm text-gray-600">{submission.author} • {submission.grade}</p>
                    </div>
                    <Badge 
                      variant={submission.status === 'approved' ? 'default' : 
                              submission.status === 'pending' ? 'secondary' : 'destructive'}
                    >
                      {submission.status}
                    </Badge>
                  </div>

                  {submission.image && (
                    <img 
                      src={submission.image} 
                      alt={submission.title}
                      className="w-full h-48 object-cover rounded-lg mb-3"
                    />
                  )}

                  <p className="text-sm mb-4">{submission.content}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{formatTimestamp(submission.timestamp)}</span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        {submission.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" />
                        {submission.comments}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Moderation Panel */}
        <TabsContent value="moderation" className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Content Moderation</h3>
            <p className="text-gray-600">Review and manage user-submitted content</p>
          </div>

          {/* Moderation Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-2xl font-bold text-yellow-600">8</div>
                <div className="text-sm text-gray-600">Pending Review</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-2xl font-bold text-green-600">156</div>
                <div className="text-sm text-gray-600">Approved Today</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-2xl font-bold text-red-600">3</div>
                <div className="text-sm text-gray-600">Rejected</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-2xl font-bold text-blue-600">1,247</div>
                <div className="text-sm text-gray-600">Total Submissions</div>
              </CardContent>
            </Card>
          </div>

          {/* Pending Content */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-500" />
              Pending Review
            </h4>
            
            {userSubmissions
              .filter(submission => submission.status === 'pending')
              .map((submission) => (
                <Card key={submission.id} className="border-yellow-200">
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      {submission.image && (
                        <img 
                          src={submission.image}
                          alt={submission.title}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                      )}
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h5 className="font-semibold">{submission.title}</h5>
                            <p className="text-sm text-gray-600">{submission.author} • {submission.grade}</p>
                          </div>
                          <span className="text-sm text-gray-500">
                            {formatTimestamp(submission.timestamp)}
                          </span>
                        </div>
                        
                        <p className="text-sm mb-4">{submission.content}</p>
                        
                        <div className="flex gap-2">
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Approve
                          </Button>
                          <Button size="sm" variant="destructive">
                            <X className="w-4 h-4 mr-1" />
                            Reject
                          </Button>
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4 mr-1" />
                            Review
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Social Media Guidelines */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start gap-3">
          <Award className="w-6 h-6 text-blue-600 mt-1" />
          <div>
            <h3 className="font-semibold text-blue-800 mb-2">Social Media Guidelines</h3>
            <p className="text-blue-700 text-sm">
              When sharing content, please follow our community guidelines: Be respectful, inclusive, and represent Angels School positively. 
              All submissions are subject to approval before going live.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}