import { getPostData, getAllPostSlugs } from '@/lib/posts';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { Calendar, ArrowLeft } from 'lucide-react';
import './blog.css'; // We will create this

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postData = getPostData(slug);

  return (
    <article className="MainContainer">
      <Link href="/" className="BackButton">
        <ArrowLeft size={16} /> 홈으로 돌아가기
      </Link>
      <div className="glass-panel" style={{ padding: '3rem', marginTop: '2rem' }}>
        <header className="PostHeader">
          <h1 className="Title">{postData.title}</h1>
          <div className="Date">
            <Calendar size={16} />
            <time dateTime={postData.date}>{postData.date}</time>
          </div>
        </header>

        <section className="MarkdownContent">
          <ReactMarkdown>{postData.content}</ReactMarkdown>
        </section>
      </div>
    </article>
  );
}
