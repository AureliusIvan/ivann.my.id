import Link from 'next/link';

export default function NavLink({ active = false, className = '', children, ...props }: any) {
  return (
    <Link
      {...props}

    >
      <span
        className={`flex flex-row items-center gap-2.5 text-[1.25rem] focus:none
                ${active ? 'font-bold' : ''}
                `}
      >
        <div
          className={`${active ? 'opacity-1' : 'opacity-0'} bg-secondary h-[0.5rem] w-[0.5rem] rounded-full`}
        />
        {children}
      </span>
    </Link>
  );
}
