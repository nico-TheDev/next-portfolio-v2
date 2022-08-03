import Image from "next/image";
import React from "react";

let logoSize = 60;

export default function Nav() {
    return (
        <nav className="bg-gray-800 h-[12vh] sticky top-0 left-0 w-full grid place-items-center">
            <div className="w-[90%]  flex items-center justify-between">
                <a href="#">
                    <Image
                        width={logoSize}
                        height={logoSize}
                        src="/images/logo-light.png"
                        alt="logo"
                    />
                </a>
                <ul className="text-white flex items-center space-x-6 text-xl font-normal">
                    <li className="">
                        <a
                            className="hover:text-blue-500 hover:linear duration-300"
                            href="#"
                        >
                            Skills
                        </a>
                    </li>
                    <li className="">
                        <a
                            className="hover:text-blue-500 hover:linear duration-300"
                            href="#"
                        >
                            Works
                        </a>
                    </li>
                    <li className="">
                        <a
                            className="hover:text-blue-500 hover:linear duration-300"
                            href="#"
                        >
                            About
                        </a>
                    </li>
                    <li className="">
                        <a
                            className="hover:text-blue-500 hover:linear duration-300"
                            href="#"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
