import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Newspaper, Images, TrendingUp, Calendar } from 'lucide-react';
import fs from 'fs';
import path from 'path';

export default function AdminDashboardPage() {
  // Load statistics from data files (server-side)
  let stats = {
    totalNews: 0,
    totalGallery: 0,
    featuredNews: 0,
  };

  try {
    const newsPath = path.join(process.cwd(), 'data', 'news.json');
    const galleryPath = path.join(process.cwd(), 'data', 'gallery.json');
    
    const newsData = JSON.parse(fs.readFileSync(newsPath, 'utf-8'));
    const galleryData = JSON.parse(fs.readFileSync(galleryPath, 'utf-8'));
    
    stats = {
      totalNews: newsData.length,
      totalGallery: galleryData.length,
      featuredNews: newsData.filter((n: any) => n.featured).length,
    };
  } catch (error) {
    console.error('Error loading stats:', error);
  }

  const statCards = [
    {
      title: 'Total News & Events',
      value: stats.totalNews,
      icon: Newspaper,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Gallery Images',
      value: stats.totalGallery,
      icon: Images,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      title: 'Featured News',
      value: stats.featuredNews,
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Welcome to the Paballelo High School admin panel
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {statCards.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common administrative tasks
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <a
              href="/admin/dashboard/news"
              className="flex items-center p-3 rounded-lg border border-border hover:bg-muted transition-colors"
            >
              <Newspaper className="h-5 w-5 mr-3 text-primary" />
              <div>
                <div className="font-medium">Add News Article</div>
                <div className="text-sm text-muted-foreground">
                  Create a new news or event post
                </div>
              </div>
            </a>
            <a
              href="/admin/dashboard/gallery"
              className="flex items-center p-3 rounded-lg border border-border hover:bg-muted transition-colors"
            >
              <Images className="h-5 w-5 mr-3 text-primary" />
              <div>
                <div className="font-medium">Upload Gallery Image</div>
                <div className="text-sm text-muted-foreground">
                  Add photos to the school gallery
                </div>
              </div>
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest updates to the website
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">
              <div className="flex items-center gap-2 py-2">
                <Calendar className="h-4 w-4" />
                <span>Admin panel initialized</span>
              </div>
              <div className="flex items-center gap-2 py-2">
                <Calendar className="h-4 w-4" />
                <span>Data storage system configured</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
