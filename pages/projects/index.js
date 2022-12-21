import Layout from '../../components/Layout';
import { css_tech } from '../../components/svg/projects';

const list = [{
  category: 'Online Tools',
  projects: [{
    name: 'CSS Tech',
    icon: css_tech,
    desc: 'Display main projects for modern CSS solutions',
    github: 'https://github.com/YinDongFang/css-tech'
  },]
}]

export default function Index() {
  return (
    <Layout>
      <main className="max-w-screen-md m-auto px-10 w-full">
        <h1 className='text-4xl font-extrabold first-letter:uppercase mt-10 mb-20 text-black'>Projects</h1>
        {list.map(({ category, projects }) => {
          return <div key={category}>
            <h1 className='text-lg font-bold my-5'>{category}</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 -mx-3'>
              {projects.map(({ name, icon, desc, github }) => {
                return <a target='_blank' href={github} rel="noreferrer" className='px-3 py-6 bg-slate-500 bg-opacity-0 hover:bg-opacity-5 cursor-pointer opacity-70 hover:opacity-100 transition-all duration-300 flex items-center gap-4' key={name}>
                  <div className='w-14'>{icon}</div>
                  <div className='flex flex-col gap-1'>
                    <span className='font-bold text-slate-800'>{name}</span>
                    <span className='text-sm'>{desc}</span>
                  </div>
                </a>
              })}
            </div>
          </div>
        })}
      </main>
    </Layout >
  );
}
