import { SVGAttributes, useEffect } from 'react';
// import { Playfair } from 'next/font/google';

// const playfair = Playfair({ subsets: ["latin"] });
export default function ApplicationLogo(props: SVGAttributes<SVGElement>) {
    return (

        <p
            className='text-2xl md:text-3xl font-normal font-playfair text-text1 font-mono'
        >
            <span
                // className={playfair.className}
            >
                Ivan
            </span>
        </p>
    );
}


