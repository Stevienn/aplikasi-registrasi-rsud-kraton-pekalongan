"use client";

import { useRouter } from "next/navigation";

import Image from "next/image";
import RumahSakit from "../../public/images/RumahSakit.jpg";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import Link from "next/link";
import Footer from "@/components/Footer";

const Home = () => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-2 inter-sans">
      <div>
        <div className="px-[65px] pt-[185px]">
          <Image
            src="/images/logo/RSUDKraton.png"
            alt="Logo"
            width={264}
            height={143}
          />
          <h1 className="font-bold text-[45px] text-blue-primary mb-[-20px]">
            RSUD KRATON
          </h1>
          <h1 className="font-bold text-[45px] text-blue-primary">
            PEKALONGAN
          </h1>
          <div>
            <p className="font-semibold text-gray-700 mb-[8px]">No BPJS</p>
            <InputField type="text" placeholder="ex: 000125xxx" />
            <p className="font-semibold text-gray-700 mb-[8px]">
              Nama (Sesuai KTP)
            </p>
            <InputField type="text" placeholder="ex: Kevin Safaat" />
          </div>
          <Button
            placeholder="Masuk"
            onClick={() => router.push("/pilih-dokter")}
          />
          <div className="flex mt-[10px] gap-[5px]">
            <p className="text-blue-primary font-semibold">
              Belum pernah mendaftar? Silahkan melakukan
            </p>
            <Link
              href="/registrasi"
              className="text-blue-primary font-bold cursor-pointer hover:text-blue-secondary underline"
            >
              Registrasi
            </Link>
          </div>
        </div>
        <Footer />
      </div>
      <div>
        <Image
          src={RumahSakit}
          alt="Rumah Sakit"
          style={{ width: "100%", height: "100vh" }}
        />
      </div>
    </div>
  );
};

export default Home;
