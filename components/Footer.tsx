import React from "react";
import Image from "next/image";
export default function Footer() {
    let logoSize = 40;
    return (
        <footer className="mt-32 pb-12 divide-y divide-gray-600 space-y-4">
            <a href="#">
                <Image
                    src="/images/logo.png"
                    width={logoSize}
                    height={logoSize}
                    layout="fixed"
                />
            </a>

            <div className="flex item-center pt-4">
                <p className="text-gray-400">2022 Norberto Ignacio</p>
            </div>
        </footer>
    );
}
