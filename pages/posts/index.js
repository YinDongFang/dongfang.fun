import Layout from '../../components/Layout';
import { getGlobalData } from '../../utils/global-data';
import { getPosts } from '../../utils/mdx-utils';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function Index({ globalData, posts }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <main className="max-w-screen-md m-auto px-10 w-full">
        <ul className="w-full">
          {posts.map((post) => (
            <li
              key={post.filePath}
              className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
              >
                <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
                  {post.data.date && (
                    <p className="uppercase mb-3 font-bold opacity-60">
                      {post.data.date}
                    </p>
                  )}
                  <h2 className="text-2xl md:text-3xl">{post.data.title}</h2>
                  {post.data.description && (
                    <p className="mt-3 text-lg opacity-60">
                      {post.data.description}
                    </p>
                  )}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();
  const posts = getPosts();

  return { props: { globalData, posts } };
}
