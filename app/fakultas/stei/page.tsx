import Link from 'next/link';
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl mt-10 lg:text-6xl font-bold text-center text-[#055096] mb-8;">
        Sekolah Teknik Elektro dan Informatika (STEI)
      </h1>
    
      <div className={
            'layout flex flex-col items-center justify-center py-10 text-justify'
          }>
        Sed eget lacus vel orci volutpat venenatis. Phasellus eget eros non nisi lacinia bibendum. Donec  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod velit vel nunc faucibus. 
      </div>

      <h2 style={{ fontSize: '2em' }}>
        Get to know about STEI!
      </h2>

      <br></br>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Image src="/Labtek.png" alt="Labtek" width={500} height={300} />
          <div style={{ marginLeft: '20px' }}>
          Sed eget lacus vel orci volutpat venenatis. Phasellus eget eros non nisi lacinia bibendum. Donec  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod velit vel nunc faucibus, vel tincidunt nisi malesuada. Sed eget lacus vel orci volutpat venenatis. Phasellus eget eros non nisi lacinia bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod velit vel nunc faucibus, vel tincidunt nisi malesuada. Sed eget lacus vel orci volutpat venenatis. Phasellus eget eros non nisi lacinia bibendum. 
          </div>
      </div> 

      <div className="graph"> 
      <Image src="/STEI_GajiLamaKerja.png" alt="Grafik gaji berdasarkan lama kerja" width={1000} height={1000} />
      </div>

      <div className="graph"> 
      <Image src="/STEI_GajiTepatSetelahLulus.png" alt="Gaji tepat setelah lulus" width={1000} height={1000} />
      </div>

      <div className="graph"> 
      <Image src="/STEI_JenisKerja.png" alt="Labtek" width={1000} height={1000}/>
      </div>

    </main>
  );
}