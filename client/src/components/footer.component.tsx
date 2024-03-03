import React, { useEffect } from 'react'
import ApplicationLogo from '@/components/applicationLogo.component';
import SectionContainer from '@/components/sectionContainer.component';

export default async function Footer() {
  return (
    <SectionContainer>
      <footer className="w-full bg-primaryWhite
             p-boxS justify-start items-center gap-[2rem] md:gap-[4rem] flex flex-col">
        <div
          className='mt-[2rem]'
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="4" viewBox="0 0 70 4" fill="none">
            <path d="M2.5 2H67.5" stroke="#8D7E61" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>
        <div className="flex items-center justify-center">
          {/* <ApplicationLogo className="block w-[7rem] h-[3rem]" /> */}
          <div className="w-full text-[1rem] md:text-[1rem] text-center max-w-[35rem]"><span
          >
            {/* {companyData.footer_description} */}
          </span>
          </div>
        </div>
        <div className="flex-col justify-start items-center gap-5 flex">
          <div className="text-black text-[1.25rem] font-[500]">
            {/* {companyData.title_socialmedia} */}
          </div>
          <div className="justify-start items-start gap-4 inline-flex">
            <SocialCard
              icon='https://www.svgrepo.com/show/521736/mail.svg'
            // link={companyData.link_mail}
            />
            <SocialCard
              icon='https://www.svgrepo.com/show/521711/instagram.svg'
            // link={companyData.link_instagram}
            />
            <SocialCard
              icon='https://www.svgrepo.com/show/510342/whatsapp.svg'
            // link={companyData.link_whatsapp}
            />

          </div>
        </div>
        <div className="flex flex-col justify-start items-center gap-5 ">
          <div className="w-full text-center"><span
            className='text-black text-[0.95rem] md:text-[1.25rem] font-[700] '
          >
            {/* {companyData.company_copyright} */}
          </span><span
            className='text-black text-[0.95rem] md:text-[1.25rem] font-[400]'
          > All rights reserved</span></div>
          <div className="text-[#B7B7B7] text-base font-normal text-center text-[0.725rem] md:text-[1.15rem]">
            {/* {companyData.footer_information} */}
          </div>
        </div>
      </footer>
    </SectionContainer>
  )
}



const SocialCard = ({ icon, link }: { icon: string, link?: string }) => {
  return (
    <a
      href={link}
      target='_blank'
      className="w-12 h-12 relative">
      <div className="w-11 h-11 md:w-13 md:h-13 left-0 top-0 absolute rounded-full
                            bg-secondary cursor-pointer pointer-events-auto hover:bg-opacity-50 transition-all duration-300 ease-in-out p-[0.5rem]"
      >
        <img
          className='filter invert'
          src={icon} alt="" />
      </div>
    </a>
  )
}