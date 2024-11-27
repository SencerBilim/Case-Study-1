import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const Map = () => {
  const { ref, inView } = useInView({
    triggerOnce: true
  })

  return (
    <section className="relative w-full h-[900px] bg-coffee px-6 sm:px-12 md:px-20 py-20">
    {/* Background */}
    <div className="absolute inset-0 overflow-hidden">
  <img
    src="/images/chart.png"
    alt=""
    className="hidden md:block w-full h-full object-contain"
  />
  <img
    src="/images/chart-mobile.png"
    alt=""
    className="md:hidden w-full h-full object-cover"
  />
</div>
  
    {/* Text */}
    <div
 ref={ref}
 className="relative flex flex-col items-center justify-center h-full text-center z-10 mt-[70px] md:mt-0"
>
 <h1 className="text-white text-5xl sm:text-8xl font-extrabold">
   {inView && <CountUp end={11658467} duration={5} />}
 </h1>
 <p className="text-white text-3xl sm:text-6xl font-extrabold mt-4">
   Shoes Collected
 </p>
</div>
  
    <div className="absolute top-[35%] left-1/2 md:top-1/3 md:left-24 2xl:left-72 z-10 transform -translate-x-1/2 md:-translate-x-0 -translate-y-1/2">
 <img
   src="/images/col.png"
   alt=""
   className="w-[300px] sm:w-[200px] md:w-[250px]"
 />
</div>
  </section>
  )
}

export default Map