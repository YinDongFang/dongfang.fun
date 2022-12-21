import Layout from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description="dongfang's blog" />
      <main className="max-w-screen-md m-auto px-10">
        <h1 className='text-4xl font-extrabold first-letter:uppercase'>{globalData.name}</h1>
      </main>
    </Layout>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();

  return { props: { globalData } };
}
