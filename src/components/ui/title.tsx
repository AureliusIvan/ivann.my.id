'use server'

import {ReactNode} from 'react'
import {cn} from "@/lib/utils";
import {createElement} from "react";

interface TitleProps {
  children?: ReactNode,
  animate?: "typing",
  size?: "small" | "medium" | "large"
}

const Title = async ({children, animate, size}: TitleProps) => {
  const animation = animate ? `overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 animate-${animate}` : '';
  const fontSize = size === 'small' ? 'text-2xl' : size === 'medium' ? 'text-3xl' : 'text-3xl md:text-[4rem] leading-[2.5rem] md:leading-[4.5rem]';
  const baseClasses = 'w-max font-bold text-black dark:text-white text-center tracking-tighter drop-shadow-2xl ';
  const headingTag = size === 'small' ? 'h3' : size === 'medium' ? 'h2' : 'h1';

  return (
      <div className="w-max">
        {createElement(
            headingTag,
            {className: cn(baseClasses, fontSize, animation)},
            children
        )}
      </div>
  );
};

export default Title;

export {Title}