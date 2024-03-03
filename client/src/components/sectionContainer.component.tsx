import React from "react";

type Props = {
    children: React.ReactNode;
    className?: string;
} & Record<string, any>;

export default function SectionContainer({
    children,
    id = null,
    className,
}: Props) {
    return (
        <div
            id={id}
            className={`
            px-[1.5rem]
            md:px-[2.25rem]
            lg:px-[4.25rem]
            xl:px-[6.25rem]
            w-full
            h-full

            ${className}
            `}
        >
            {children}
        </div>
    );
}
