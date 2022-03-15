import { getAllFilesFrontMatter } from '@/lib/mdx'
import researchData from '@/data/researchData'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSEO } from '@/components/SEO'
import ResearchCard from '@/components/ResearchCard'

export const POSTS_PER_PAGE = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('research')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

export default function Research({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSEO title={`Research - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Research
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            My research interests and posts on my published articles
          </p>
          <div class="container mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {researchData.map((d) => (
                <ResearchCard
                  title={d.title}
                  description={d.description}
                  imgSrc={d.imgSrc}
                  href={d.href}
                />
              ))}
            </div>
          </div>
          <ListLayout
            posts={posts}
            initialDisplayPosts={initialDisplayPosts}
            pagination={pagination}
            title=""
          />
        </div>
      </div>
    </>
  )
}
