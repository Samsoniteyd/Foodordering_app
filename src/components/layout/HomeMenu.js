"use client";
import Image from 'next/image'
import React from 'react'
import SectionHeaders from "@/components/layout/SectionHeaders";
import MenuItem from "@/components/menu/MenuItem";


const HomeMenu = () => {
  return (
    <section className="">
    <div className="absolute left-0 right-0 w-full justify-start">
      <div className="absolute left-0 -top-[70px] text-left -z-10">
        <Image src={'/sallad1.png'} width={109} height={189}  alt={'sallad'} />
      </div>
      <div className="absolute -top-[100px] right-0 -z-10">
        <Image src={'/sallad2.png'} width={107} height={195} alt={'sallad'} />
      </div>
    </div>
    <div className="text-center mb-4">
      <SectionHeaders
        subHeader={'check out'}
        mainHeader={'Our Best Sellers'} />
    </div>
    <div className="grid sm:grid-cols-3 gap-4">
    <MenuItem/>
    </div>
  </section>
  )
}

export default HomeMenu