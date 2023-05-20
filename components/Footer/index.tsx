import Image from "next/image";
import React from "react";

export const Footer = () => {
    const images = [
        "facebook",
        "twitter",
        "lindedin"
    ];
    const links = ["Dashboard", "Strategies", "Analyzer", "Community", "Terms of Service"]
    return (<div className="bg-[#110f34]">
        <div className="max-w-screen-xl mx-auto py-[80px]">
            <div className="flex justify-between text-white">
                <div>
                    <Image
                        src="/stratfinder.svg"
                        alt="Stratfinder Logo"
                        width={157}
                        height={24}
                    />
                    <p className="font-[18px] mt-[28px]">Investment made simple and effortless</p>
                    <div className="flex mt-[107px]">
                        {images.map(item => <Image
                            key={item}
                            src={`/${item}.svg`}
                            alt={item}
                            width={28}
                            height={28}
                            className="mr-[16px] cursor-pointer hover:opacity-50"
                        />)}
                    </div>

                </div>
                <nav>
                    <p className="font-semibold text-2xl text-[#FFF7F5]">Company</p>
                    <ul>
                        {links.map((link) => <li key={link} className="text-base mt-4">{link}</li>)}
                    </ul>
                </nav>
                <form className="w-[420px]" >
                    <p className="text-[#FFF7F5] text-2xl">Submit Your Feedback</p>
                    <div className="mt-4 flex">
                        <input className="w-[202px] py-[10px] px-[14px] mr-[16px] rounded-lg text-base border-1 border-[#667085] text-[#667085] bg-transparent  outline-[none]" type="text" placeholder="Your Name" />
                        <input className="w-[202px]  py-[10px] px-[14px] rounded-lg text-base border-1 border-[#667085] text-[#667085] bg-transparent  outline-[none]" type="text" placeholder="Your Email" />
                    </div>
                    <textarea className="mt-4 w-[420px] py-[10px] px-[14px] rounded-lg text-base border-1 border-[#667085] text-[#667085] bg-transparent  outline-[none]" placeholder="Enter your message" />
                    <button
                        className="bg-lilac py-3 mt-4 w-full  rounded-lg font-semibold hover:bg-white hover:text-lilac duration-300 "
                        type="submit">
                        Submit
                    </button>
                </form>

            </div>
            <div className="mt-[90px] bg-[#19173d] rounded-lg p-[40px] text-white opacity-50">
                <p>Disclaimer</p>
                <p className="mt-[15px]">You understand and acknowledge that there is a very high degree of risk involved in trading securities and, in particular, in trading futures and options, and in trading penny stocks. The service is provided “as is.” We and our affiliates and licensors make no representations or warranties of any kind, whether express, implied, statutory or otherwise regarding the service or the third-party content, including any warranty that the service or third-party content will be uninterrupted, error free or free of harmful components, or that any content, including your content or the third party content, will be secure or not otherwise lost or damaged. Except to the extent prohibited by law, we and our affiliates and licensors disclaim all warranties, including any implied warranties of merchantability, satisfactory quality, fitness for a particular purpose, non- infringement, or quiet enjoyment, and any warranties arising out of any course of dealing or usage of trade.</p>
            </div>
            <p className="mt-8 text-white text-base text-center">Copyright 2023 stratfinder.com, All rights reserved.</p>
        </div>
    </div>);
};