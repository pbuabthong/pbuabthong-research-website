import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import ProfileCard from '@/components/ProfileCard'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 3

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('research')

  return { props: { posts } }
}

export default function Home({ posts }) {
  const headingColorClass =
    'bg-gradient-to-r from-yellow-600 to-red-600 dark:bg-gradient-to-l'

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700 mt-8 md:mt-16">
        <div className="my-4 pt-6 pb-8 space-y-2 md:space-y-5 xl:grid xl:grid-cols-3">
          <div className="xl:col-span-2 pr-8">
            <p
              className={`mb-8 text-4xl leading-[60px] font-extrabold tracking-tight text-transparent bg-clip-text ${headingColorClass} md:text-7xl md:leading-[86px]`}
            >
              Welcome!
            </p>

            <div className="text-lg leading-8 text-gray-600 dark:text-gray-400">
              <h1 className="text-neutral-900 dark:text-neutral-200">
                I'm <span className="font-medium">Pai Pakpoom Buabthong</span>. I'm an assistant professor of Physics at{' '}
                <a
                  className="underline"
                  href="https://www.nrru.ac.th"
                  target="_blank"
                  rel="noreferrer"
                >
                  Nakhon Ratchasima Rajabhat University
                </a>{' '}
                and the Director of the{' '}
                <a
                  className="underline"
                  href="https://lifelonglearning.nrru.ac.th/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Nakhon Ratchasima Office of Lifelong Learning (NRLL)
                </a>
                .
              </h1>
              <p className="mt-4 mb-8">
                At NRLL, my work focuses on improving education and providing equitable access to
                quality education in provincial Thailand, through credit bank systems and short courses
                that help the local workforce upskill and reskill.
              </p>
              <p className="mt-4 mb-8">
                I am also an adjunct faculty member at{' '}
                <a
                  className="underline"
                  href="https://www.cmkl.ac.th"
                  target="_blank"
                  rel="noreferrer"
                >
                  CMKL University
                </a>
                , where I teach and do research in generative AI and graph-based learning. My earlier
                research spans applied machine learning, Thai NLP and knowledge graphs, and energy
                materials for solar fuels.
              </p>
              <p className="mt-4 mb-8">
                I also write about my experience as an academic in Thailand from time to time. Visit my personal website at{' '}
                <a
                  className="underline"
                  href="https://paippb.com"
                  target="_blank"
                  rel="noreferrer"
                >
                    paippb.com
                    </a>
              </p>
              <div className="flex flex-col">
                <Link href="/about" className="hover:underline">
                  👨‍🏫 More about me.
                </Link>
                <Link href="/research" className="hover:underline">
                  🔎 My research.
                </Link>
                <Link href="/publications" className="hover:underline">
                  📖 Publications.
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden xl:block">
            <ProfileCard />
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/research/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/research/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/research"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
