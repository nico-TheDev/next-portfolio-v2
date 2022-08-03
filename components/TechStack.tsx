import React from "react";
import { FaGitAlt } from "react-icons/fa";
import {
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiStyledcomponents,
    SiSass,
    SiMongodb,
    SiNodedotjs,
} from "react-icons/si";

import TechPanel from "./TechPanel";

const iconList = [
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiStyledcomponents,
    SiSass,
    SiMongodb,
    SiNodedotjs,
    FaGitAlt,
];

type Props = {
    techList?: Tech[];
};

export default function TechStack({ techList }: Props) {
    return (
        <section className="my-16">
            <h2 className="text-4xl font-bold tracking-wider mb-10">
                Tech Stack
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
                {techList?.map((tech) => (
                    <TechPanel key={tech.id} tech={tech} iconList={iconList} />
                ))}
            </div>
        </section>
    );
}
