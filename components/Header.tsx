import Image from "next/image";
import React from "react";
import { FaEnvelope, FaGithub, FaTwitter } from "react-icons/fa";

let logoSize = 40;
let imageSize = 120;

export default function Header() {
    return (
        <header className="h-screen ">
            <div className="flex justify-center items-center mb-28">
                <Image
                    src="/images/logo.png"
                    width={logoSize}
                    height={logoSize}
                    layout="fixed"
                />
            </div>
            <div className="grid justify-items-center lg:justify-items-start">
                <div>
                    <Image
                        src="/images/me.jfif"
                        width={imageSize}
                        height={imageSize}
                        className="rounded-full shadow-md"
                    />
                </div>
                <h2 className="text-gray-300 text-lg lg:text-2xl mt-5">
                    Front-end
                    <span className="inline-block mx-4 text-blue-400 font-bold text-xl lg:text-3xl transform hover:scale-125 duration-300 cursor-pointer">
                        X
                    </span>
                    Back-end
                </h2>
                <h1 className="text-2xl lg:text-6xl font-bold tracking-wider mt-5">
                    Norberto Ignacio Jr.
                </h1>
                <ul className="flex items-center space-x-6 mt-16 text-gray-300">
                    <li>
                        <a
                            className="text-4xl hover:text-blue-500 duration-300"
                            href="https://github.com/theAspiringDev1"
                            target="_blank"
                        >
                            <FaGithub />
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-4xl hover:text-blue-500 duration-300"
                            href="https://twitter.com/theAspiringDev1"
                            target="_blank"
                        >
                            <FaTwitter />
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-4xl hover:text-blue-500 duration-300"
                            href="https://mail.google.com/mail/u/0/?fs=1&to=norbertoignaciojr@gmail.com&su=Let%27s+talk!&tf=cm"
                            target="_blank"
                        >
                            <FaEnvelope />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}
