// import Header from '@/components/layout/Header'
import Hero from '@/components/layout/Hero'
import HomeMenu from '@/components/layout/HomeMenu'
import SectionHeaders from "@/components/layout/SectionHeaders";


export default function Home() {
  return (
    <div>

   
     <Hero />
     <HomeMenu />

     <section className="text-center my-16" id="about">
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni minima odit recusandae. Illum ipsa non repudiandae? Eum ipsam iste quos suscipit tempora? Aperiam esse fugiat inventore laboriosam officiis quam rem!
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione veniam saepe beatae ducimus nesciunt totam quam nostrum corporis, voluptatem quaerat laboriosam? Soluta a sunt eius! Repellat quo rerum aliquid.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium asperiores beatae dolorum earum nesciunt, reiciendis perspiciatis quod animi facere esse..</p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+2347066990913">
            +2347066990912
          </a>
        </div>
      </section>

    

    </div>
  );
}
