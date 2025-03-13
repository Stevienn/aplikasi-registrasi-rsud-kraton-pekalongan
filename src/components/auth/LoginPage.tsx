"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import RumahSakit from "../../../public/images/RumahSakit.jpg";
import InputField from "@/components/form/InputField";
import Button from "@/components/form/Button";
import Link from "next/link";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

import dummyPatient from "@/components/assets/dummyPatient";

interface ILoginPageProps {
  isAdmin?: boolean;
}

const LoginPage = ({ isAdmin }: ILoginPageProps) => {
  const router = useRouter();

  const [dataPatient, setDataPatient] = useState(dummyPatient);
  const [input, setInput] = useState("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    console.log(input);
  }, [input]);

  const handleValidationPatient = (input) => {
    {
      dataPatient.map((data, i) => {
        if (input === data.id) {
        }
      });
    }
    router.push("/pilih-dokter");
  };

  return (
    <div className="grid grid-cols-2 font-inter-sans">
      <div>
        <div className="px-[65px] pt-[160px]">
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
          {isAdmin ? (
            <>
              <h1 className="font-light text-[32px] mt-[-10px] mb-[15px] text-blue-primary">
                PORTAL ADMIN
              </h1>
              <div>
                <InputField
                  name="Email"
                  type="email"
                  placeholder="ex: chiesamutiara@gmail.com"
                  customClass="w-[530px] mb-[30px]"
                  value={input}
                  onChange={handleInput}
                />
                <InputField
                  name="Password"
                  type="password"
                  placeholder="********"
                  customClass="w-[530px] mb-[30px]"
                />
              </div>
              <Button
                placeholder="Masuk"
                onClick={() => alert("validation need backend")}
              />
            </>
          ) : (
            <>
              <div>
                <InputField
                  name="No BPJS"
                  type="text"
                  placeholder="ex: 000125xxx"
                  customClass="w-[530px] mb-[30px]"
                  value={input}
                  onChange={handleInput}
                />
                <InputField
                  name="Nama (Sesuai KTP)"
                  type="text"
                  placeholder="ex: Kevin Safaat"
                  customClass="w-[530px] mb-[30px]"
                />
              </div>
              <Button
                placeholder="Masuk"
                onClick={() => handleValidationPatient(input)}
              />
              <div className="flex mt-[10px]">
                <p className="text-blue-primary font-semibold">
                  {"Belum pernah mendaftar? Silahkan melakukan "}
                  <Link
                    href="/registrasi"
                    className="text-blue-primary font-bold cursor-pointer hover:text-blue-secondary underline"
                  >
                    Registrasi
                  </Link>
                </p>
              </div>
            </>
          )}
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

export default LoginPage;
