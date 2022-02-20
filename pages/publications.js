import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import publicationsData from '@/data/publicationsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import Link from 'next/link'

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
      <PageSEO title={`Publications - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Publications
          </h1>
          <div className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            List of my publications.
          </div>
          <div className="text-lg leading-7">
            Most of the published articles will have a corresponding blog post
            where I explain my work in a simpler English and may include some comments
            that are not found on the publication website.
            Also, these posts should include fewer jargons and be more SEO friendly
            than the original articles, hopefully increasing the discoverability of these work.
            Think about them as a mini press release on my own site.
            <br />
            Simply click [read more] after each publication or find them in the {' '}
            <Link href="/research">
              <a className="underline">research</a>
            </Link> section
            <br />
            <br />
            Some publications that are not listed here can be found on my{' '}
            <a
              className="underline"
              href="https://scholar.google.com/citations?user=LPk_3l4AAAAJ&hl=en"
            >Google Scholar</a>
          </div>
        </div>
        <div className="container py-8">
          <div className="flex flex-wrap">
            {publicationsData.map((d) => (
              <div className="py-3">
              {boldAuthor(d.author)}
              {', "'}{d.title.slice(1, -1)}{'." '}
              <span className="italic">
                {d.journal}
              </span>,
              ({d.year})
              {d.volume && [
                <span>, </span>,
                <span className="font-bold">{d.volume}</span>
              ]}

              {d.pages && [
                <span>, </span>,
                <span>{d.pages.replace("--", "-")}</span>
              ]}.{' '}
              {d.doi && (
                <a
                  className="underline hover:no-underline"
                  href={getURL("doi", d.doi)}
                >{"DOI: "+d.doi}</a>
              )}
              {d.arxivid && (
                <a
                  className="underline hover:no-underline"
                  href={getURL("arxiv", d.arxivid)}
                >{"arXiv: "+d.arxivid}</a>,
              )}{' '}
              {getReadMore(postsWithDOI, d.doi)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

const getReadMore = (postsWithDOI, doi) => {
  const boldedAuthor = "Buabthong, P.";
  var retReadMore
  postsWithDOI.forEach((post) => {
    if (post.doi == doi) {
      const slug = "research/" + post.slug
      retReadMore = (
        <div className="tracking-wide font-semibold underline hover:no-underline text-primary-500">
          <Link href={slug}>
            [ Read more ]
          </Link>
        </div>
      );
    }
  })
  return retReadMore
}

const getURL = (type, dat) => {
  return type=="doi"?"https://doi.org/"+dat:"https://arxiv.org/abs/"+dat;
}

const boldAuthor = (text) => {
  const boldedAuthor = "Buabthong, P.";
  const textArray = text.split(boldedAuthor);
  return (
    <span>
      {textArray.map((item, index) => (
        <>
          {item}
          {index !== textArray.length - 1 && (
            <b>{boldedAuthor}</b>
          )}
        </>
      ))}
    </span>
  );
}
