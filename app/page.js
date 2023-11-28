import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <section className="px-6 border-2 border-red-500 md:px-20 py-24">
        <div className="flex flex-col justify-center">
          <p className="small-text">
            Smart Shopping Starts Here:
            <Image
              src="/assets/icons/arrow-right.svg"
              alt="arrow -right"
              width={16}
              height={16}
            />
          </p>
          <h1 className="head-text">
            Unleash the Power of
            <span className="text-primary">PriceWise</span>
          </h1>
          <p className="mt-6">
            Powerfull,self-serve product and growth analytics to help you
            convert,engage,and retain more.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
