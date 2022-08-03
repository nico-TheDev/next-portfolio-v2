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
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="description"
                    content="I'm Norberto Ignacio Jr. I make business grow using websites"
                />
                <meta property="og:website" content="website" />
                <meta
                    name="image"
                    property="og:image"
                    content="https://live.staticflickr.com/65535/51313307419_bb04f86678_b.jpg"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="favicons/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="favicons/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="favicons/favicon-16x16.png"
                />
                <link rel="manifest" href="favicons/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="favicons/safari-pinned-tab.svg"
                    color="#5bbad5"
                />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
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
