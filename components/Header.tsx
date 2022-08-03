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
            <div className="">
                <Image
                    src="/images/me.jfif"
                    width={imageSize}
                    height={imageSize}
                    className="rounded-full shadow-md"
                />
                <h2 className="text-gray-300 text-2xl mt-5">
                    Front-end
                    <span className="inline-block mx-4 text-blue-400 font-bold text-3xl transform hover:scale-125 duration-300 cursor-pointer">
                        X
                    </span>
                    Back-end
                </h2>
                <h1 className="text-6xl font-bold tracking-wider mt-5">
                    Norberto Ignacio Jr.
                </h1>
                <ul className="flex items-center space-x-6 mt-16 text-gray-300">
                    <li>
                        <a
                            className="text-4xl hover:text-blue-500 duration-300"
                            href=""
                        >
                            <FaGithub />
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-4xl hover:text-blue-500 duration-300"
                            href=""
                        >
                            <FaTwitter />
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-4xl hover:text-blue-500 duration-300"
                            href=""
                        >
                            <FaEnvelope />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}
