import Image from 'next/image';
import Link from 'next/link';

type ListItemProps = {
  imageSrc: string;
  title: string;
  description: string;
  date: string;
  backLink: string;
};

const ListItem: React.FC<ListItemProps> = ({
  imageSrc,
  title,
  description,
  date,
  backLink,
}) => {
  return (
    <li className="my-4 p-4 px-10 rounded-lg border border-gray-200 bg-gray-100 bg-opacity-25">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0">
          <Image
            src={imageSrc}
            alt=""
            width={80}
            height={80}
            className="rounded-lg"
          />
        </div>
        <div className="ml-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="">{description}</p>
          <p className="text-sm">{date}</p>
        </div>
        <div className="ml-auto">
          <Link href={backLink} className="text-white-500 hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-10 max-h-full h-full mt-6 ml-4"
              >
                <path
                  fillRule="evenodd"
                  d="M11.707 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
