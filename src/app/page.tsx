import { Calendar, User, BookOpen, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <main className="MainContainer">
      {/* Profile Section */}
      <section className="ProfileSection glass-panel">
        <div className="AvatarBox">
          🐱
        </div>
        <h1 className="Name">이채현 (Chae-hyun Lee)</h1>
        <p className="Bio">
          공학3계열 컴퓨터 공학과에 재학 중인 20살 대학생입니다. 
          호기심을 바탕으로 끝없이 배우며 성장하는 개발자를 꿈꿉니다.
        </p>
        <div className="Tags">
          <span className="Tag" title="학번">
            <User size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
            20263240
          </span>
          <span className="Tag">
            <GraduationCap size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
            컴퓨터 공학과
          </span>
          <span className="Tag">
            <BookOpen size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
            공학3계열
          </span>
          <span className="Tag">
            <Calendar size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
            20 Age
          </span>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section>
        <h2 className="SectionTitle">최신 포스트</h2>
        <div className="PostGrid">
          {allPostsData.length > 0 ? (
            allPostsData.map(({ slug, title, date, excerpt }) => (
              <Link href={`/blog/${slug}`} key={slug} className="PostCard glass-panel">
                <h3 className="PostTitle">{title}</h3>
                <div className="PostDate">
                  <Calendar size={14} />
                  <time dateTime={date}>{date}</time>
                </div>
                <p className="PostExcerpt">{excerpt}</p>
              </Link>
            ))
          ) : (
            <div className="EmptyState glass-panel" style={{ padding: '2rem', borderStyle: 'dashed' }}>
               아직 작성된 포스트가 없습니다. root/posts 디렉토리에 마크다운으로 새 글을 작성해보세요!
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
