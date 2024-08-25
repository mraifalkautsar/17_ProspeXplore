import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#03254c] min-h-screen flex items-center justify-center">
      <div className="relative w-full max-w-md px-8 pt-0.5 pb-8 space-y-6 bg-gray-200 shadow-lg rounded-lg">
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-12">
          <h1 className="text-2xl text-white font-bold font-sans">PROSPEXPLORE</h1>
        </div>

        <h2 className="text-2xl text-gray-950 text-center font-bold font-sans">MASUK AKUN</h2>

        <form className="mt-6 space-y-4">
          <div className="mb-4">
            <input
              name="email"
              type="email"
              placeholder="username@gmail.com"
              className="block w-full px-3 py-2 border-2 rounded-md"
            ></input>
          </div>
          <div className="mb-4">
            <input
              name="password"
              type="password"
              placeholder="password"
              className="block w-full px-3 py-2 border-2 rounded-md"
            ></input>
          </div>
          
          <button type="submit" className="w-full px-4 py-2 text-base font-bold text-white bg-[#03254c] rounded-md">
            MASUK AKUN
          </button>

          <p className="my-4 text-center text-gray-950">
            Belum punya akun? <Link href="/authentication" className="font-medium text-blue-600 hover:text-blue-500">Daftar</Link>
          </p>
        </form>

      </div>
      
    </main>
    // #d0efff
    // #03254c
  );
}
