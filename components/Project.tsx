import React from "react";
import Image from "next/image";
import { FaCat, FaGithubAlt } from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";
import { RiGalleryFill } from "react-icons/ri";
import ProjectPanel from "./ProjectPanel";

type Props = {
    projectList?: Project[];
};

const iconList = [BiCameraMovie, FaCat, FaGithubAlt, RiGalleryFill];

export default function Project({ projectList }: Props) {
    return (
        <section className="my-32">
            <h2 className="text-4xl font-bold tracking-wider mb-10">
                Projects
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
                {projectList?.map((project) => (
                    <ProjectPanel
                        project={project}
                        iconList={iconList}
                        key={project.id}
                    />
                ))}
            </div>
        </section>
    );
}
