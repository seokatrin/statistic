import Image from "next/image";
import React from "react";

export const Main = () => {
  return (
    <main className="bg-darkLiliac min-h-screen pt-20 flex flex-col justify-center">
      <div className="max-w-screen-xl mx-auto pt-20 flex justify-between h-auto">
        <div className="text-white max-w-[529px]">
          <h1 className="font-semibold text-5xl leading-60">
            Investment made simple and effortless
          </h1>
          <p className="mt-8">
            Invest smartly with our easy-to-use platform. Choose from various
            carefully planned strategies that match your goals and risk level.
            Investing is simple and effortless with us.
          </p>
          <button className="bg-lilac px-5 py-2.5 text-white hover:bg-white hover:text-lilac duration-300 font-semibold text-base w-[185px] mt-8">
            Sign Up For Free
          </button>
        </div>
        <div>
          <Image
            src="/main.svg"
            alt="Statisti"
            className="dark:invert"
            width={792}
            height={543}
          />
        </div>
      </div>
    </main>
  );
};
