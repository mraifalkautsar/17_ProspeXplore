import Layout from '@/app/layout';
import { notFound } from 'next/navigation';

const facultyPrograms = {
  STEI: ["Teknik Elektro", "Teknik Informatika", "Teknik Tenaga Listrik", "Teknik Telekomunikasi", "Sistem dan Teknologi Informasi"],
  FMIPA: ["Program 1", "Program 2"],
  FSRD: ["Program 1", "Program 2", "Program 3"],
  // Tambah fakultas dan program studi di sini
};

export default function FacultyPage({ params }) {
  const { faculty } = params;

  const programs = facultyPrograms[faculty];

  if (!programs) {
    notFound(); // Menampilkan error jika fakultas tidak memiliki program studi
  }

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
        Program Studi {faculty}
      </h1>
      <div className="flex justify-center">
        {programs.map((program: string, index: number) => (
          <button key={index} className="bg-black border-white border-2 shadow-lg p-4 m-4 text-center">
            <h2 className="text-lg font-bold text-white">{program}</h2>
          </button>
        ))}
      </div>
      </main>
  );
}
