import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function Intro() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center mb-16 lg:mb-32">
      <div className="lg:mr-8">
        <Image
          width={250}
          height={250}
          alt="Kieran foto"
          src="/MOI.jpg"
          className="rounded-full"
        />
      </div>
      <div className="text-left">
        <h1 className={`${inter.className} mb-3 text-3xl font-semibold`}>
          Hi, this is my portfolio
        </h1>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aliquam
          similique rem molestiae consequuntur voluptatum voluptate tempora
          consectetur necessitatibus iste saepe delectus, magni dolorum nihil
          blanditiis eum totam esse excepturi.
        </p>
        <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
          Why?
        </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi iure
          vero iste incidunt iusto necessitatibus doloremque atque quae est
          quam aspernatur nesciunt, vitae aperiam blanditiis mollitia pariatur
          rerum, voluptates officiis.
        </p>
        <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>Leven is pijn</h2>
        <p className="mb-4">HELP</p>
      </div>
    </div>
  );
}
