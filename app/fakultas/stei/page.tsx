import Link from 'next/link';
import Image from "next/image";

export default function Home() {
  return (
    <div id="page-fakultas" className="page-fakultas">
      <main>
          <div className="fakultas-nama">
            Sekolah Teknik Elektro dan Informatika (STEI)
          </div>
        
          <div className="fakultas-short-desc">
          Sed eget lacus vel orci volutpat venenatis. Phasellus eget eros non nisi lacinia bibendum. Donec  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod velit vel nunc faucibus. 
          </div>

          <div className="fakultas-get-to-know">
          Get to know about STEI!
          </div>

          <div className="fakultas-article">
              <div className="fakultas-foto">
                <Image src="/Labtek.png" alt="Labtek" width={600} height={400}></Image>
              </div>
              <div className="fakultas-long-desc">
                Sed eget lacus vel orci volutpat venenatis. Phasellus eget eros non nisi lacinia bibendum. Donec  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod velit vel nunc faucibus, vel tincidunt nisi malesuada. Sed eget lacus vel orci volutpat venenatis. Phasellus eget eros non nisi lacinia bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod velit vel nunc faucibus, vel tincidunt nisi malesuada. Sed eget lacus vel orci volutpat venenatis. Phasellus eget eros non nisi lacinia bibendum. 
              </div>
          </div> 

          <div className="fakultas-graph"> 
            <Image src="/STEI_GajiLamaKerja.png" alt="Grafik gaji berdasarkan lama kerja" width={1000} height={1000} />
          </div>


          <div className="fakultas-graph"> 
            <Image src="/STEI_GajiTepatSetelahLulus.png" alt="Gaji tepat setelah lulus" width={1000} height={1000} />
          </div>

          <div className="fakultas-graph"> 
            <Image src="/STEI_JenisKerja.png" alt="Labtek" width={1000} height={1000}/>
          </div>

          <div className="footer">
            <div className="footer-logo">
            <Image className="mr-3" src="/logo-half1.png" alt="half-1" width={45} height={40}/>
            <Image src="/logo-half2.png" alt="half-2" width={185} height={37}/>
            </div>
          <div className="footer-media">
          <div className="footer-media-icon">
            <Image src="/social.png" alt="socmed-logo" width={121} height={26} />
          </div>
          </div>
        </div>
      </main>
    </div>
  );
}
