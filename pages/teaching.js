import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import publicationsData from '@/data/publicationsData'
import teachingData from '@/data/teachingData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import Link from 'next/link'
import Image from 'next/image'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('research')
  const postsWithDOI = []
  posts.forEach((post) => {
    if (post.doi) {
      postsWithDOI.push(
        {
          doi:post.doi,
          slug:post.slug
        }
      )
    }
  })
  return { props: { postsWithDOI } }
}

export default function Projects({ postsWithDOI }) {
  console.log(postsWithDOI)
  return (
    <>
      <PageSEO title={`Teaching - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Teaching
          </h1>
          <div className="text-lg leading-7">
            My classes span from physics to machine learning and somewhere in between (atomistic modeling). I'll try to have my lectures available publicly when possible. Otherwise, they typically sit in the university LMS. If you're interested in a particular topic, feel free to reach out to me.
          </div>
        </div>
        {teachingData.map((d) => (
          <div className="container py-4">
            <div className="">
              <div className="flex items-center text-2xl font-bold py-3">
              <Image
                src={d.logo}
                alt={d.institution}
                width={50}
                height={50}
                className="object-cover object-center"
              />
              <span className="px-3">{d.institution}</span></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
              {d.courses.map((c) => (
                <div className="">
                  <div className="text-lg font-semibold">{c.title}</div>
                  <div className="font-semibold">{c.code}</div>
                  <div className="text-gray-500 dark:text-gray-400">{c.semesters}</div>
                  <div>{c.description}</div>
                  {c.link !== '' && (
                    <div className="tracking-wide font-semibold underline hover:no-underline text-primary-500">
                      <a href={c.link}>
                        [ Syllabus ]
                      </a>
                    </div>
                  )}
                </div>
              ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
