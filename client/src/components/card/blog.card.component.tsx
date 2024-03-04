import { FormatDate } from '@/helpers/dataTime.helpers';
import Image from 'next/image';
import Link from 'next/link';

export const BlogCard = ({ title, description, image, date, author, slug }
  : { title: string, description: string, image: string, date: string, author: string, slug: string }
) => {
  return (
    <Link
      href={`/post/${slug}`}
      className="flex flex-col w-full h-full bg-bg2 rounded-lg shadow-lg
    border border-[#E5E5E5] transition-all duration-300 ease-in-out hover:shadow-2xl
    ">
      <div className="relative w-full h-[15rem] md:h-[20rem] lg:h-[25rem]">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-t-lg"
        />
      </div>
      <div className="flex flex-col w-full h-fit p-6">
        <h2 className="text-xl font-bold text-text1">{title}</h2>
        <p className="text-sm text-text2">{description}</p>
        <div className="flex flex-row justify-between items-center mt-4">
          <p className="text-xs text-text2">{FormatDate(date)}</p>
          <p className="text-xs text-text2">{author}</p>
        </div>
      </div>
    </Link>
  );
}