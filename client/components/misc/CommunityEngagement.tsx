import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { 
  MessageCircle, 
  Camera, 
  Star, 
  Trophy, 
  Users, 
  Heart, 
  Eye, 
  BarChart3,
  PinIcon,
  Clock,
  Vote,
  Send,
  Filter,
  Award,
  Zap,
  TrendingUp,
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  Flag,
  Pin,
  CheckCircle,
  X,
  Plus,
  Upload,
  Search,
  Calendar,
  Target
} from 'lucide-react'

const discussionTopics = [
  {
    id: 1,
    title: 'Thoughts on the New Library Hours?',
    author: 'Sarah M.',
    category: 'academic',
    replies: 23,
    likes: 45,
    lastActivity: '2025-01-18T14:30:00Z',
    pinned: true,
    status: 'active',
    preview: 'I love that the library stays open later now! Perfect for studying after sports practice.'
  },
  {
    id: 2,
    title: 'Homecoming Dance Music Suggestions',
    author: 'Marcus J.',
    category: 'events',
    replies: 67,
    likes: 89,
    lastActivity: '2025-01-18T11:20:00Z',
    pinned: false,
    status: 'active',
    preview: 'What songs do you want to hear at homecoming? Drop your suggestions below!'
  },
  {
    id: 3,
    title: 'Cafeteria Menu Ideas',
    author: 'Emma L.',
    category: 'general',
    replies: 34,
    likes: 78,
    lastActivity: '2025-01-17T16:45:00Z',
    pinned: false,
    status: 'active',
    preview: 'The food committee wants your input! What dishes would you like to see more often?'
  }
]

const photoContests = [
  {
    id: 1,
    title: 'Spirit Week Memories',
    description: 'Capture the best moments from this year\'s spirit week!',
    startDate: '2025-01-15',
    endDate: '2025-01-25',
    submissions: 147,
    votes: 892,
    prize: 'Amazon Gift Card ($100)',
    status: 'active',
    category: 'school-spirit'
  },
  {
    id: 2,
    title: 'Winter Sports Action Shots',
    description: 'Show us your best winter athletics photography',
    startDate: '2025-01-10',
    endDate: '2025-01-20',
    submissions: 89,
    votes: 567,
    prize: 'Photography Equipment Bundle',
    status: 'voting',
    category: 'sports'
  },
  {
    id: 3,
    title: 'Student Art Showcase',
    description: 'Share your creative masterpieces with the community',
    startDate: '2025-01-01',
    endDate: '2025-01-31',
    submissions: 234,
    votes: 1543,
    prize: 'Art Supplies Package',
    status: 'active',
    category: 'arts'
  }
]

const contestSubmissions = [
  {
    id: 1,
    contestId: 1,
    title: 'Crazy Hair Day Fun!',
    author: 'Alex R.',
    image: '/api/placeholder/300/300',
    votes: 156,
    timestamp: '2025-01-18T10:15:00Z',
    hasVoted: false
  },
  {
    id: 2,
    contestId: 1,
    title: 'Pajama Day Comfort',
    author: 'Maya K.',
    image: '/api/placeholder/300/400',
    votes: 203,
    timestamp: '2025-01-17T14:30:00Z',
    hasVoted: true
  },
  {
    id: 3,
    contestId: 1,
    title: 'Twin Day Success!',
    author: 'Jordan & Casey',
    image: '/api/placeholder/400/300',
    votes: 178,
    timestamp: '2025-01-16T11:45:00Z',
    hasVoted: false
  }
]

const surveyFeedback = [
  {
    id: 1,
    title: 'Fall Musical "Into the Woods" Feedback',
    type: 'event',
    responses: 234,
    averageRating: 4.7,
    endDate: '2025-01-20',
    status: 'active',
    questions: 8
  },
  {
    id: 2,
    title: 'Cafeteria Service Quality Survey',
    type: 'service',
    responses: 567,
    averageRating: 3.8,
    endDate: '2025-01-25',
    status: 'active',
    questions: 12
  },
  {
    id: 3,
    title: 'Winter Sports Season Review',
    type: 'athletics',
    responses: 189,
    averageRating: 4.2,
    endDate: '2025-01-22',
    status: 'active',
    questions: 6
  }
]

const bulletinBoard = [
  {
    id: 1,
    type: 'announcement',
    title: 'Study Group - AP Chemistry',
    author: 'Chemistry Club',
    content: 'Join us every Tuesday and Thursday at 3:30 PM in Room 204 for AP Chemistry study sessions!',
    category: 'academic',
    timestamp: '2025-01-18T09:00:00Z',
    expires: '2025-02-15',
    contact: 'chemclub@Angels.edu',
    verified: true
  },
  {
    id: 2,
    type: 'lost-found',
    title: 'Lost: Blue Backpack',
    author: 'Emma S.',
    content: 'Lost my navy blue Jansport backpack near the gym. Has key chains and my initials ES on it.',
    category: 'lost-found',
    timestamp: '2025-01-17T15:30:00Z',
    expires: '2025-02-01',
    contact: 'student contact available',
    verified: false
  },
  {
    id: 3,
    type: 'service',
    title: 'Tutoring - Math & Physics',
    author: 'Honor Society',
    content: 'Free peer tutoring available! Sign up for sessions in Algebra, Geometry, Calculus, and Physics.',
    category: 'academic',
    timestamp: '2025-01-16T12:00:00Z',
    expires: '2025-06-01',
    contact: 'tutoring@Angels.edu',
    verified: true
  }
]

const engagementMetrics = {
  totalComments: 1247,
  totalVotes: 3456,
  activeUsers: 892,
  contestParticipation: 76,
  surveyResponseRate: 68,
  bulletinPosts: 34
}

export function CommunityEngagement() {
  const [selectedTab, setSelectedTab] = useState('discussions')
  const [discussionFilter, setDiscussionFilter] = useState('all')
  const [contestFilter, setContestFilter] = useState('active')
  const [showNewPost, setShowNewPost] = useState(false)
  const [selectedContest, setSelectedContest] = useState<typeof photoContests[0] | null>(null)

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'voting': return 'bg-blue-100 text-blue-800'
      case 'ended': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
      />
    ))
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Community Engagement</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Join the conversation, share your creativity, and help shape our school community.
        </p>
      </div>

      {/* Engagement Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
        <Card>
          <CardContent className="pt-6 text-center">
            <MessageCircle className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold">{engagementMetrics.totalComments}</div>
            <div className="text-sm text-gray-600">Comments</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <Vote className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold">{engagementMetrics.totalVotes}</div>
            <div className="text-sm text-gray-600">Votes Cast</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <Users className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold">{engagementMetrics.activeUsers}</div>
            <div className="text-sm text-gray-600">Active Users</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <Camera className="w-6 h-6 text-pink-600 mx-auto mb-2" />
            <div className="text-2xl font-bold">{engagementMetrics.contestParticipation}%</div>
            <div className="text-sm text-gray-600">Contest Rate</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <BarChart3 className="w-6 h-6 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl font-bold">{engagementMetrics.surveyResponseRate}%</div>
            <div className="text-sm text-gray-600">Survey Rate</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <PinIcon className="w-6 h-6 text-red-600 mx-auto mb-2" />
            <div className="text-2xl font-bold">{engagementMetrics.bulletinPosts}</div>
            <div className="text-sm text-gray-600">Bulletin Posts</div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
          <TabsTrigger value="contests">Photo Contests</TabsTrigger>
          <TabsTrigger value="surveys">Feedback</TabsTrigger>
          <TabsTrigger value="bulletin">Bulletin Board</TabsTrigger>
        </TabsList>

        {/* Community Discussions */}
        <TabsContent value="discussions" className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant={discussionFilter === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setDiscussionFilter('all')}
              >
                All Topics
              </Button>
              {['academic', 'events', 'general'].map(category => (
                <Button
                  key={category}
                  variant={discussionFilter === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setDiscussionFilter(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Button>
              ))}
            </div>
            
            <Dialog open={showNewPost} onOpenChange={setShowNewPost}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Start Discussion
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Start a New Discussion</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <Input placeholder="Discussion title..." />
                  <Textarea placeholder="What would you like to discuss?" className="min-h-32" />
                  <div className="flex gap-3">
                    <Button className="flex-1">
                      <Send className="w-4 h-4 mr-2" />
                      Post Discussion
                    </Button>
                    <Button variant="outline" onClick={() => setShowNewPost(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="space-y-4">
            {discussionTopics.map(topic => (
              <Card key={topic.id} className={topic.pinned ? 'border-primary/50 bg-primary/5' : ''}>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <MessageCircle className="w-6 h-6 text-blue-600 mt-1" />
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <h4 className="font-semibold hover:text-primary cursor-pointer">{topic.title}</h4>
                          {topic.pinned && (
                            <Badge variant="outline" className="border-primary text-primary">
                              <Pin className="w-3 h-3 mr-1" />
                              Pinned
                            </Badge>
                          )}
                        </div>
                        <Badge variant="outline">{topic.category}</Badge>
                      </div>

                      <p className="text-sm text-gray-600 mb-3">{topic.preview}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>by {topic.author}</span>
                          <span>•</span>
                          <span>{formatTimestamp(topic.lastActivity)}</span>
                        </div>

                        <div className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1">
                            <MessageSquare className="w-4 h-4" />
                            {topic.replies}
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            {topic.likes}
                          </span>
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Photo Contests */}
        <TabsContent value="contests" className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex items-center gap-2">
              {['active', 'voting', 'ended'].map(status => (
                <Button
                  key={status}
                  variant={contestFilter === status ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setContestFilter(status)}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </Button>
              ))}
            </div>
            <Button>
              <Camera className="w-4 h-4 mr-2" />
              Submit Photo
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photoContests.map(contest => (
              <Dialog key={contest.id}>
                <DialogTrigger asChild>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedContest(contest)}>
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-semibold">{contest.title}</h4>
                        <Badge className={getStatusColor(contest.status)}>
                          {contest.status}
                        </Badge>
                      </div>

                      <p className="text-sm text-gray-600 mb-4">{contest.description}</p>

                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Prize:</span>
                          <span className="font-medium">{contest.prize}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Submissions:</span>
                          <span className="font-medium">{contest.submissions}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Total Votes:</span>
                          <span className="font-medium">{contest.votes}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Ends:</span>
                          <span className="font-medium">
                            {new Date(contest.endDate).toLocaleDateString()}
                          </span>
                        </div>
                      </div>

                      <Button className="w-full mt-4" size="sm">
                        View Contest
                      </Button>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-xl">{selectedContest?.title}</DialogTitle>
                  </DialogHeader>
                  {selectedContest && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <Badge className={getStatusColor(selectedContest.status)}>
                          {selectedContest.status}
                        </Badge>
                        <span className="text-sm text-gray-500">
                          Ends: {new Date(selectedContest.endDate).toLocaleDateString()}
                        </span>
                      </div>

                      <p className="text-gray-600">{selectedContest.description}</p>

                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-primary">{selectedContest.submissions}</div>
                          <div className="text-sm text-gray-500">Submissions</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary">{selectedContest.votes}</div>
                          <div className="text-sm text-gray-500">Total Votes</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-green-600">{selectedContest.prize}</div>
                          <div className="text-sm text-gray-500">Prize</div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {contestSubmissions
                          .filter(submission => submission.contestId === selectedContest.id)
                          .map(submission => (
                            <Card key={submission.id} className="overflow-hidden">
                              <img 
                                src={submission.image} 
                                alt={submission.title}
                                className="w-full h-48 object-cover"
                              />
                              <CardContent className="pt-4">
                                <h5 className="font-semibold mb-1">{submission.title}</h5>
                                <p className="text-sm text-gray-600 mb-3">by {submission.author}</p>
                                
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-medium">{submission.votes} votes</span>
                                  <Button
                                    size="sm"
                                    variant={submission.hasVoted ? 'default' : 'outline'}
                                  >
                                    <ThumbsUp className="w-4 h-4 mr-1" />
                                    {submission.hasVoted ? 'Voted' : 'Vote'}
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                      </div>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </TabsContent>

        {/* Survey & Feedback */}
        <TabsContent value="surveys" className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Help Us Improve</h3>
            <p className="text-gray-600">Your feedback helps us create better experiences for everyone</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {surveyFeedback.map(survey => (
              <Card key={survey.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="font-semibold">{survey.title}</h4>
                    <Badge variant="outline">{survey.type}</Badge>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">Average Rating:</span>
                      <div className="flex items-center gap-1">
                        {renderStars(survey.averageRating)}
                        <span className="text-sm font-medium ml-1">{survey.averageRating}/5</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Responses:</span>
                        <div className="font-medium">{survey.responses}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Questions:</span>
                        <div className="font-medium">{survey.questions}</div>
                      </div>
                    </div>

                    <div className="text-sm">
                      <span className="text-gray-500">Closes:</span>
                      <span className="font-medium ml-1">
                        {new Date(survey.endDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <Button className="w-full mt-4">
                    <Target className="w-4 h-4 mr-2" />
                    Take Survey
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Community Bulletin */}
        <TabsContent value="bulletin" className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold">Community Bulletin Board</h3>
              <p className="text-gray-600">Share announcements, find lost items, and offer services</p>
            </div>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Post to Bulletin
            </Button>
          </div>

          <div className="space-y-4">
            {bulletinBoard.map(post => (
              <Card key={post.id}>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className={`w-2 h-2 rounded-full mt-2 ${post.verified ? 'bg-green-500' : 'bg-gray-400'}`} />
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold">{post.title}</h4>
                          <p className="text-sm text-gray-600">by {post.author}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{post.category}</Badge>
                          {post.verified && (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          )}
                        </div>
                      </div>

                      <p className="text-sm mb-4">{post.content}</p>

                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-4">
                          <span>Posted {formatTimestamp(post.timestamp)}</span>
                          <span>•</span>
                          <span>Expires {new Date(post.expires).toLocaleDateString()}</span>
                        </div>
                        <Button size="sm" variant="outline">
                          Contact
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

      {/* Community Guidelines */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start gap-3">
          <Award className="w-6 h-6 text-blue-600 mt-1" />
          <div>
            <h3 className="font-semibold text-blue-800 mb-2">Community Guidelines</h3>
            <p className="text-blue-700 text-sm">
              Be respectful, constructive, and inclusive in all interactions. Help us maintain a positive environment where everyone feels welcome to participate and share their thoughts.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}