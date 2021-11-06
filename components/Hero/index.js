import React from "react";
import ContactMe from "./ContactMe";

const Hero = () => {
  return (
    <div className="md:grid md:grid-cols-2 leading-none">
      <div className="pt-16 ">
        <h1 className="text-4xl uppercase md:pt-32 pl-16">
          Hi, I`m Gabriel Koch Fodi
        </h1>
        <h2 className="font-bold text-4xl md:text-5xl uppercase pl-16">
          FullStack Developer
        </h2>
        <ContactMe />
      </div>
      {/* <div className='mr-8 md:mr-0'><img src='/images/gabrielsemfundo.png'/></div> */}
    </div>
  );
};

export default Hero;

// md:relative md:-ml-20
