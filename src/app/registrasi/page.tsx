"use client";

import Button from "@/components/form/Button";
import FormLayout from "@/components/form/FormLayout";
import InputField from "@/components/form/InputField";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import dummyPatient from "@/components/assets/dummyPatient";

const Registrasi = () => {
  const router = useRouter();

  const [dataPatient, setDataPatient] = useState(dummyPatient);

  const [name, setName] = useState("");
  const [bpjs, setBpjs] = useState("");
  const [gender, setGender] = useState("");
  const [birth, setBirth] = React.useState(dayjs(""));
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  console.log(birth.format("DD-MM-YYYY"));

  const handleGender = (event) => {
    setGender(event.target.value);
  };

  return (
    <FormLayout title="Selamat Datang !">
      <div>
        {/* Nama */}
        <InputField
          name="Nama (Sesuai KTP)"
          type="text"
          placeholder="ex: Putri Aviarta"
          customClass="w-[900px] mb-[10px]"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* No BPJS */}
        <InputField
          name="No BPJS"
          type="text"
          placeholder="ex: 1252****"
          customClass="w-[900px] mb-[10px]"
        />
        {/* Jenis Kelamin */}
        <div className="mb-[10px]">
          <p className="font-semibold text-gray-700 mb-[8px]">Jenis Kelamin</p>
          <input
            type="radio"
            id="Pria"
            name="Jenis Kelamin"
            value="Pria"
            onChange={handleGender}
          />
          <label className="ml-[5px] mr-[15px]">Pria</label>
          <input
            type="radio"
            id="Wanita"
            name="Jenis Kelamin"
            value="Wanita"
            onChange={handleGender}
          />
          <label className="ml-[5px] mr-[15px]">Wanita</label>
        </div>
        {/* Tanggal Lahir */}
        <div className="mb-[10px]">
          <p className="font-semibold text-gray-700 mb-[8px]">Tanggal Lahir</p>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker onChange={(newValue) => setBirth(newValue)} />
          </LocalizationProvider>
        </div>

        {/* Nomor Handphone */}
        <InputField
          name="Nomor Handphone"
          type="text"
          placeholder="ex: 081212345678"
          customClass="w-[900px] mb-[10px]"
        />
        {/* Email */}
        <InputField
          name="Email"
          type="email"
          placeholder="ex: stevenharta@mail.com"
          customClass="w-[900px] mb-[10px]"
        />
        <div className="flex justify-end gap-[25px] mt-[75px]">
          <Button
            isCancel
            placeholder="Kembali"
            onClick={() => router.push("/")}
          />
          <Button
            placeholder="Daftar"
            onClick={() => alert("SABAR BANG BELUM JADI")}
          />
        </div>
      </div>
    </FormLayout>
  );
};

export default Registrasi;
