import Link from 'next/link';
import Image from "next/image";

const faculties = [
  { src: "/STEI.png", alt: "STEI" },
  { src: "/FMIPA.png", alt: "FMIPA" },
  { src: "/FSRD.png", alt: "FSRD" },
  { src: "/FTI.png", alt: "FTI" },
  { src: "/FTMD.png", alt: "FTMD" },
  { src: "/FTTM.png", alt: "FTTM" },
  { src: "/FTSL.png", alt: "FTSL" },
  { src: "/SAPPK.png", alt: "SAPPK" },
  { src: "/SBM.png", alt: "SBM" },
  { src: "/SF.png", alt: "SF" },
  { src: "/SITH.png", alt: "SITH" },
  { src: "/FITB.png", alt: "FITB" },
];

const FacultyButton = ({ src, alt } : { src:any, alt:any }) => (
  <div className="flex flex-col items-center mb-10">
    <Link href={`/faculties/${alt}`}>
    <button className="w-24 h-24 lg:w-28 lg:h-28 bg-gray-100 rounded-full flex justify-center items-center hover:bg-black hover:border-4 hover:border-[#055096] hover:scale-110 transition-transform duration-300 ease-in-out p-1 hover:shadow-[0_0_25px_rgba(255,255,255,0.9)]">
      <Image src={src} alt={alt} width={100} height={100} className="w-22 h-22 lg:w-26 lg:h-26 rounded-full hover:opacity-80" />
    </button>
    </Link>
  </div>
);

export default function Home() {
  return (
    <main>
      <header className='header'>
          <a className='logo'>PROSPEXPLORE</a>
          <nav className='navbar'>
            <a href="#profile">Profile</a>
            <a href="#Referral">Log In</a>
          </nav>
      </header>
      <h1 className="text-4xl mt-10 lg:text-6xl font-bold text-center text-[#055096] mb-8">
        FAKULTAS
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-4 pt-20">
        {faculties.map((faculty, index) => (
          <FacultyButton key={index} src={faculty.src} alt={faculty.alt} />
        ))}
      </div>
    </main>
  );
}