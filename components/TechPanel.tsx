import React from "react";

type Props = {
    tech: Tech;
    iconList: any;
};

export default function TechPanel({ tech, iconList }: Props) {
    const Icon = iconList[tech.id - 1];
    return (
        <div
            className={`bg-gray-900 p-4 flex items-center  rounded-lg hover:bg-gray-700 cursor-pointer`}
        >
            <span className={`inline-block p-2 `}>
                <Icon className="text-4xl" color={tech.color} />
            </span>
            <p className="text-xl ml-4">{tech.title}</p>
        </div>
    );
}
