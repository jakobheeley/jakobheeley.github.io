import Image from "next/image";
import Link from "next/link";

type SocialMediaLinkProp = {
    soicalData: {
        src: string;
        alt: string;
        width: number;
        height: number;
        href: string;
    };
}

export default function SocialMediaLink({soicalData: soicalData}: SocialMediaLinkProp){
    return(
        <>
            <Link href={soicalData.href}>
                <Image
                src={soicalData.src}
                alt={soicalData.alt}
                width={soicalData.width}
                height={soicalData.height}
                className="rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-120 shadow-stone-700 shadow-lg"
                />
            </Link>
        </>
    );
}