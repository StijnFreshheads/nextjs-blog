import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
    const posts = await getPostsData();

    return {
        props: {
            posts: posts.data
        }
    }
}

export default function Home({ posts }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Im Stijn</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      <Link href={`/posts/first-post`}>
          <a>First post test</a>
      </Link>
      </section>

    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Posts</h2>
        <ul className={utilStyles.list}>
            {posts.map(({ id, publishDate, text }) => (
                <li className={utilStyles.listItem} key={id}>
                    <Link href={`/posts/${id}`}>
                        <a>{text}</a>
                    </Link>
                    <br />
                    <small className={utilStyles.lightText}>
                        <Date dateString={publishDate} />
                    </small>
                </li>
            ))}
        </ul>
    </section>
    </Layout>
  )
}
