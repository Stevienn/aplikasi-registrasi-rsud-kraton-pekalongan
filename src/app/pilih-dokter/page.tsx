"use client";

import dummyDoctorUmum from "@/components/assets/dummyDoctorUmum";
import dummyDoctorSpesialis from "@/components/assets/dummyDoctorSpesialis";

import { getUser } from "@/api/user";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IUser from "@/interface/patientInterface";
import React, { useEffect, useState } from "react";

const PilihDokter = () => {
  const [userData, setUserData] = useState<IUser | null>(null);
  const [doctorUmum, setDoctorUmum] = useState(dummyDoctorUmum);
  const [doctorSpesialis, setDoctorSpesialis] = useState(dummyDoctorSpesialis);
  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getUser();
      setUserData(data);
    };
    fetchUserData();
  }, []);

  return (
    <div className="font-inria-sans pb-[130px]">
      <Header name={userData?.user.nama} />
      <h1 className="font-bold text-[30px] ml-[45px] mt-[30px]">Dokter Umum</h1>
      <div className="grid gap-[85px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-[35px] mx-[45px]">
        {doctorUmum.map((doctor) => (
          <Card
            key={doctor.id}
            image={doctor.image}
            name={doctor.name}
            categories={doctor.specialty}
            schedule={doctor.schedule}
            customCategoryClass="w-[140px]"
          />
        ))}
      </div>
      <h1 className="font-bold text-[30px] ml-[45px] mt-[30px]">
        Dokter Spesialis
      </h1>
      <div className="grid gap-[85px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-[35px] mx-[45px]">
        {doctorSpesialis.map((doctor) => (
          <Card
            key={doctor.id}
            image={doctor.image}
            name={doctor.name}
            categories={doctor.specialty}
            schedule={doctor.schedule}
            customCategoryClass="w-[180px]"
          />
        ))}
      </div>

      <Footer isFull={true} />
    </div>
  );
};

export default PilihDokter;
