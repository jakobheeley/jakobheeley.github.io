import CoreList from "@/components/CoreCompList";
import InSecHeader from "@/components/InSecHeaders";
import JobInfo from "@/components/JobInfo";
import JobBulletPoint from "@/components/JobBulletPoints";
import SecHeader from "@/components/SecHeaders";
import ProjectInfo from "@/components/ProjectContainer";
import ContactForm from "@/components/ContactForm";
import SocialMediaLink from "@/components/SocialMediaLink";
import AboutList from "@/components/AboutList";
import { Briefcase } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section id="home" className="mt-6 min-h-screen flex flex-col">
        <div className="">
          <h1 className="text-6xl antialiased font-semibold font-stretch-extra-expanded text-white">
            Hello, I'm <span className="text-indigo-400">Jakob</span> 
          </h1>
          <span className="text-slate-300 font-semibold flex flex-col">
            <p className="text-xl mt-6">
              I've been a Software Engineer at the BBC for 2 years 8 months.
            </p>
            <p className="text-xl pt-4 text-indigo-400">
              Welcome To my Portfolio Site!
            </p>
          </span>
        </div>

        <div className="mt-15">
          {/* <h2 className="pb-10 pl-10 text-3xl font-semibold">Find me here:</h2> */}
          <SecHeader title="Overview" />
          <div className=" flex pt-2 justify-center">
            <div className="flex flex-col w-70">
              <div className="flex h-60 w-60 items-center justify-center rounded-3xl border border-dashed border-white/15 bg-gradient-to-br from-white/10 to-white/5 text-sm font-medium text-slate-300">
                Headshot coming soon
              </div>
              <span className="flex flex-wrap gap-5 justify-center pt-5 pr-7">
              <SocialMediaLink soicalData={{
                src: "/images/github-6980894_960_720.webp",
                alt: "GitHub Logo",
                width: 60,
                height: 60,
                href: "https://www.github.com/jakobheeley"
              }} />

              <SocialMediaLink soicalData={{
                src: "/images/LinkedIn_logo_initials.png",
                alt: "LinkedIn Logo",
                width: 60,
                height: 60,
                href: "https://www.linkedin.com/in/jakob-heeley"
              }} />

              <SocialMediaLink soicalData={{
                src: "/images/Medium_logo_Monogram.svg.png",
                alt: "Medium Logo",
                width: 60,
                height: 60,
                href: "https://medium.com/@jakobheeley"
              }} />
              </span>
            </div>
            <div className="flex ml-22">
              <AboutList />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen p-12">
        {/* TODO: turn this into a clickable component to scroll through jobs */}
        <SecHeader title="Professional Experience" />
        <div id="BBC" className="pb-4">
          <JobInfo 
            jobdata={{
              company: "BBC", 
              startEnd: "2022 - Present", 
              jobTitle: "Software Engineer"
            }}/>
          <p className="pt-2 pb-4">
            Software & Systems Engineer for the End User Compute SaaS Team, playing a key role in a small team responsible for
            overseeing the BBC’s various SaaS products. Ensure seamless access to essential tools for 30,000+ employees while
            leveraging technological solutions to optimize value for the BBC and license payers.
          </p> 
          <JobBulletPoint items={[
            "Key contributor to the planning, design, development, integration, commissioning, and testing of systems.",
            "Ensure project documentation remains accurate and up to date.",
            "Provide support and diagnostics to resolve system outages efficiently.",
            "Technical lead for SaaS product management (Dropbox, Miro, Trint).",
            "Collaborate with stakeholders to deliver key infrastructure projects.",
            "Developed a custom tool for streamlined Dropbox management.",
            "Led the Personal Files to OneDrive project, successfully migrating 25,000 users.",
            "Key technical lead on the Files to the Cloud project, migrating 10TB+ of data across 40+ servers to Dropbox.",
            "Work closely with stakeholders to ensure smooth execution of migration projects.",
            "Partner with external stakeholders to manage and optimize SaaS products."
          ]}/>
        </div>
        <div id="BT" className="pb-4">
          <JobInfo 
            jobdata={{
              company: "BT", 
              startEnd: "2021 - 2022", 
              jobTitle: "Graduate Software Engineer"
            }}/>
          <p className="pt-2 pb-4">
            Worked for BT Global on government contracts supporting critical national infrastructure, gaining experience with legacy
            projects while also contributing to new initiatives from conception. Additionally, was involved in research projects to
            support future contract bids and drive innovation.
          </p> 
          <JobBulletPoint items={[
            "Develop MVC web applications to support various projects.",
            "Utilize OpenBTS to create cellular networks for research purposes.",
            "Gain hands-on experience with Agile methodologies and the role of a Software Engineer in a multidisciplinary team.",
          ]}/>
        </div>
          {/*TODO: Make this Uni logo with clickable div with name of course and add in new course */}
        <InSecHeader title="Education"/>
        <a 
          className="hover:underline hover:text-cyan-300 block text-center text-lg"
          href="https://www.swansea.ac.uk/undergraduate/courses/maths-comp-sci/computer-science/bsc-computer-science/#bbq=on"
          target="_blank"
          rel="noopener noreferrer"
        >
          BSc Computer Science (Hons) with Year in Industry, Swansea University, 2021
        </a>
        
        {/*TODO: Gen AI icons and have title underneath */}
        <InSecHeader title="Interests" />
        <span className="block text-center font-medium tracking-wider">
          Running • Strength Training • Board Games • Puzzles • Hiking
        </span>
      </section>

      <section id="projects" className="p-12">
        <SecHeader title="Projects" />
        <div className="flex flex-row justify-evenly">
          <ProjectInfo 
            projectData={{
              projectName: "Portfolio Site", 
              projectInfo:"Built with Next.js and tailwindcss", 
              imgSource: "/images/github-6980894_960_720.webp", 
              altText: "GitHub Logo"
            }}
          />
        </div>
      </section>

      <section id="contact" className="p-12">
        <SecHeader title="Get In Touch with Me!" />
        <div className="flex justify-center mt-10">
          <ContactForm/>
        </div>
        
      </section>
    </>
  );
}
