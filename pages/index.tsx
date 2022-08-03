import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Project from "../components/Project";
import fsPromises from "fs/promises";
import path from "path";
import TechStack from "../components/TechStack";
import Footer from "../components/Footer";

export const getStaticProps: GetStaticProps = async () => {
    const filePath = path.join(process.cwd(), "data.json");
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData.toString());

    return {
        props: { projectList: objectData.projects, techList: objectData.tech },
    };
};

type Props = {
    projectList?: Project[];
    techList?: Tech[];
};

const Home: NextPage = ({ projectList, techList }: Props) => {
    return (
        <div className="bg-gray-800 p-4 text-white">
            <Head>
                <title>Norberto Ignacio Jr </title>
            </Head>
            <div className="w-[80%] mx-auto">
                <Header />
                <Project projectList={projectList} />
                <TechStack techList={techList} />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
