import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import fs from 'fs';
import path from 'path';

interface NewsItem {
  id: number;
  title: string;
  titleXh: string;
  titleAf: string;
  titleTn: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  excerptXh: string;
  excerptAf: string;
  excerptTn: string;
  content: string;
  contentXh: string;
  contentAf: string;
  contentTn: string;
  featured: boolean;
}

async function getNewsData(): Promise<NewsItem[]> {
  try {
    const newsPath = path.join(process.cwd(), 'data', 'news.json');
    const data = fs.readFileSync(newsPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

export const metadata = {
  title: 'News & Events | Paballelo High School',
  description: 'Latest news and events from Paballelo High School in Upington, Northern Cape.',
};

export default async function NewsPage() {
  const newsItems = await getNewsData();

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              News & Events
            </h1>
            <p className="text-muted-foreground text-lg">
              Stay updated with the latest happenings at Paballelo High School
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {newsItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No news articles available at the moment.</p>
              </div>
            ) : (
              <div className="grid gap-8">
                {newsItems.map((item) => (
                  <article
                    key={item.id}
                    className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative aspect-video md:aspect-square bg-muted">
                        {item.image ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={item.image}
                            alt={item.title}
                            className="object-cover w-full h-full"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-muted-foreground">No image</span>
                          </div>
                        )}
                      </div>
                      <div className="p-6 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                            {item.category}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {new Date(item.date).toLocaleDateString('en-ZA', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </span>
                        </div>
                        <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
                          {item.title}
                        </h2>
                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          {item.excerpt}
                        </p>
                        <p className="text-muted-foreground text-sm line-clamp-4">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
