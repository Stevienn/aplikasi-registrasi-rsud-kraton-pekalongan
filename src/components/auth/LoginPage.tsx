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
import dummyDoctorUmum from "@/components/assets/dummyDoctorUmum";

interface ILoginPageProps {
  isAdmin?: boolean;
}

const LoginPage = ({ isAdmin }: ILoginPageProps) => {
  const router = useRouter();

  const [dataPatient, setDataPatient] = useState(dummyPatient);
  const [doctorUmum, setDoctorUmum] = useState(dummyDoctorUmum);

  const [input, setInput] = useState("");
  const [validate, setValidate] = useState("");
  const [isWarningInput, setIsWarningInput] = useState("");
  const [isWarningValidate, setIsWarningValidate] = useState("");

  const handleValidationPatient = (input, validate) => {
    setIsWarningInput("");
    setIsWarningValidate("");

    const patientData = dataPatient.find((data) => input == data.id);

    if (patientData) {
      if (input == patientData.id && validate == patientData.nama) {
        router.push("/pilih-dokter");
      } else if (input == patientData.id && validate !== patientData.nama) {
        setIsWarningValidate("Nama yang anda masukkan tidak sesuai");
      }
    } else if (!patientData) {
      setIsWarningInput("No BPJS belum terdaftar !");
    }
  };

  const handleValidationAdmin = (input, validate) => {
    setIsWarningInput("");
    setIsWarningValidate("");

    const doctorData = doctorUmum.find((data) => input == data.email);

    if (doctorData) {
      if (input == doctorData.email && validate == doctorData.password) {
        router.push("/");
      } else if (
        input == doctorData.email &&
        validate !== doctorData.password
      ) {
        setIsWarningValidate("Password yang anda masukkan salah");
      }
    } else if (!doctorData) {
      setIsWarningInput("Email yang anda masukkan salah !");
    }
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
                  onChange={(e) => setInput(e.target.value)}
                  isWarning={isWarningInput}
                />
                <InputField
                  name="Password"
                  type="password"
                  placeholder="********"
                  customClass="w-[530px] mb-[30px]"
                  value={validate}
                  onChange={(e) => setValidate(e.target.value)}
                  isWarning={isWarningValidate}
                />
              </div>
              <Button
                placeholder="Masuk"
                onClick={() => handleValidationAdmin(input, validate)}
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
                  onChange={(e) => setInput(e.target.value)}
                  isWarning={isWarningInput}
                />
                <InputField
                  name="Nama (Sesuai KTP)"
                  type="text"
                  placeholder="ex: Kevin Safaat"
                  customClass="w-[530px] mb-[30px]"
                  value={validate}
                  onChange={(e) => setValidate(e.target.value)}
                  isWarning={isWarningValidate}
                />
              </div>
              <Button
                placeholder="Masuk"
                onClick={() => handleValidationPatient(input, validate)}
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
