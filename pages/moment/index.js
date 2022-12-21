import Layout from '../../components/Layout';
import Image from 'next/image';
import { getMoments } from '../../utils/moment';

const WIDTH = 375;

export default function Index({ moments }) {

  return (
    <Layout>
      <div className="w-4/5 md:w-3/5 m-auto flex flex-wrap mt-20">
        {moments.map(({ filepath, name, update, width, height }) => {
          const scaledHeight = height / width * WIDTH;
          return <div className='w-full md:w-1/2 xl:w-1/3 px-3 py-5' key={filepath}>
            <div className='bg-white shadow-md md:shadow-xl overflow-hidden rounded-lg flex flex-col'>
              <Image layout="responsive" src={filepath} width={WIDTH} height={scaledHeight} alt={name} />
              <div className='p-5 flex flex-col gap-y-3'>
                <span>{name}</span>
                <span className='text-gray-400 text-sm'>{update}</span>
              </div>
            </div>
          </div>
        })}
      </div>
    </Layout>
  );
}

export function getStaticProps() {
  const moments = getMoments();

  return { props: { moments } };
}
