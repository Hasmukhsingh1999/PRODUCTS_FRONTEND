import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <section className="px-6 border-2 border-red-500 md:px-20 py-24">
        <div className="flex flex-col justify-center">
          <p className="small-text">
            Smart Shopping Starts Here:
            <Image src="/assets/icons/arrow-right.svg" alt="arrow -right" width={16} height={16}/> 
              
            
          </p>
        </div>
      </section>
    </>
  );
};

export default page;
