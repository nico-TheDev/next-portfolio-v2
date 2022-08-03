import React from "react";

type Props = {
    project: Project;
    iconList: any;
};

export default function ProjectPanel({ project, iconList }: Props) {
    const Icon = iconList[project.id - 1];
    return (
        <div className="flex flex-col justify-between space-y-4 rounded-md  p-6 shadow-md  w-full h-full bg-gray-900 hover:bg-gray-600 duration-300">
            <Icon className="text-6xl" color={project.color} />
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-lg text-gray-200">{project.description}</p>
            <div className="inline-flex justify-around items-center space-x-4">
                <a
                    href={project.demo}
                    className="bg-[#2980b9] flex-1 text-center py-2 rounded-lg hover:scale-110 duration-300"
                    target="_blank"
                >
                    Demo
                </a>
                <a
                    href={project.github}
                    className="bg-[#2980b9] flex-1 text-center py-2 rounded-lg hover:scale-110 duration-300"
                    target="_blank"
                >
                    Repo
                </a>
            </div>
        </div>
    );
}
