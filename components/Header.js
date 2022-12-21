/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { github, moment, project, blog } from './svg';

export default function Header({ githubUrl }) {
  const navs = [{
    path: '/posts',
    icon: blog,
    label: 'Blog',
  }, {
    path: '/projects',
    icon: project,
    label: 'Projects',
  }, {
    path: '/moment',
    icon: moment,
    label: 'Moment',
  }, {
    target: '_blank',
    path: githubUrl,
    icon: github,
  }]

  return (
    <header className="z-40 flex justify-between py-8 px-12 items-center">
      <Link href="/">
        <img src="/avatar.jpg" alt="dongfang" className='cursor-pointer rounded-full h-10 w-10 select-none' />
      </Link>
      <nav className='flex gap-5'>
        {
          navs.map(({ icon, label, path, target }) => {
            return <a
              href={path}
              key={path}
              target={target}
              className='cursor-pointer opacity-60 hover:opacity-100 transition-opacity flex items-center'
            >
              <span className='hidden md:inline'>{label || icon}</span>
              <span className='md:hidden'>{icon}</span>
            </a>
          })
        }
      </nav>
    </header>
  );
}
