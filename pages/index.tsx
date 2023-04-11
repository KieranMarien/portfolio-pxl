import Image from 'next/image'
import { Inter } from 'next/font/google'
import Intro from '@/components/intro'
import Navbar from '@/components/navbar'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
<main className="bg-pattern flex min-h-screen flex-col items-center justify-between p-24">
    <div className="z-10 w-full max-w-5xl flex flex-col items-center justify-between font-mono text-sm lg:flex-row ">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            By  { 'Kieran Marien'}
        </div>
        <Navbar/>
      </div>
      <Intro ></Intro>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link
          href="https://www.linkedin.com/in/kieran-marien/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            LinkedIn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;

            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Check out my LinkedIn profile to see my work experience and skills.
          </p>
        </Link>

        <Link
          href="https://github.com/KieranMarienPXL"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            GitHub{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Check out my GitHub profile to see my projects and repositories.
          </p>
        </Link>
      </div>
    </main>
  )
}
