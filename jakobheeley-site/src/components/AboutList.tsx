import { Briefcase, Building2, Code2, FlagTriangleRight, Lightbulb, Wrench } from "lucide-react";

const aboutItems = [
  {
    icon: Briefcase,
    text: "Software Engineer with 5+ years of experience building internal tools and web applications.",
  },
  {
    icon: Building2,
    text: "Experienced across two companies, working on practical software and business-focused solutions.",
  },
  {
    icon: Code2,
    text: "Mainly work with Node.js, TypeScript, Next.js and SQL.",
  },
  {
    icon: Wrench,
    text: "Enjoy building clean, useful tools that solve real operational problems.",
  },
  {
    icon: Lightbulb,
    text: "Open to new opportunities, please contact me below!",
  },
  {
    icon: FlagTriangleRight,
    text: "When I'm not working you'll most likely find me on the golf course.",
  },
];

export default function AboutList() {
  return (
    <ul className="mt-4 max-w-3xl space-y-6 text-[17px] text-white">
      {aboutItems.map(({ icon: Icon, text }) => (
        <li key={text} className="flex items-start gap-4">
          <Icon className="mt-1 h-5 w-5 shrink-0 text-sky-400" />
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
}