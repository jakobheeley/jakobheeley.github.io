import Image from "next/image";
import Link from "next/link";

type ProjectInfoProp = {
    projectData: {
        projectName: string;
        projectInfo: string;
        imgSource: string;
        altText: string;
    };
}

export default function ProjectInfo({projectData: projectData}: ProjectInfoProp){
    return(
        <div className="flex flex-col items-center rounded-2xl shadow-stone-700 shadow-2xl bg-white  w-60 h-65 mt-15 hover:shadow-violet-950 hover:shadow-2xl">
          <h3 className="text-xl font-extrabold text-black pt-6">{projectData.projectName}</h3>
          <p className="mt-4 pl-3 pr-3 text-center font-semibold text-stone-600">{projectData.projectInfo}</p>
          <Link href={"https://github.com/jakobheeley/jakobheeley.github.io"}>
            <Image
              src={projectData.imgSource} 
              alt={projectData.altText}
              width={100} 
              height={100}
              className="mt-4 rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </Link>
        </div>
    );
}